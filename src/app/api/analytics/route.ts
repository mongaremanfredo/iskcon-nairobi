import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import {
  publicApiErrorResponse,
  readLimitedJson,
  validatePublicJsonRequest,
} from "@/lib/apiSecurity";
import { asPlainText, asSheetText, quoteSheetName } from "@/lib/security";

export const runtime = "nodejs";

const maxRequestBytes = 8 * 1024;
const sheetName = "WebsiteAnalytics";
const allowedEvents = new Set([
  "page_view",
  "app_installed",
  "install_prompt_accepted",
  "install_prompt_dismissed",
]);

type AnalyticsPayload = {
  event?: unknown;
  path?: unknown;
  website?: unknown;
};

function getSpreadsheetId() {
  return process.env.ANALYTICS_SHEET_ID || process.env.CONTACT_SHEET_ID || "";
}

function getGoogleClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey || !getSpreadsheetId()) {
    throw new Error("Analytics backend is not configured.");
  }

  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function getSheetsWithAnalyticsTab(spreadsheetId: string) {
  const sheets = google.sheets({ version: "v4", auth: getGoogleClient() });
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties(title)",
  });

  const exists = metadata.data.sheets?.some((sheet) => sheet.properties?.title === sheetName);
  if (exists) return sheets;

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: { title: sheetName },
          },
        },
      ],
    },
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: quoteSheetName(sheetName),
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          "Timestamp",
          "Event",
          "Path",
          "City",
        ],
      ],
    },
  });

  return sheets;
}

function decodedHeaderText(request: NextRequest, name: string, maxLength: number) {
  const value = request.headers.get(name) || "";

  try {
    return asPlainText(decodeURIComponent(value), maxLength);
  } catch {
    return asPlainText(value, maxLength);
  }
}

export async function POST(request: NextRequest) {
  try {
    const blocked = validatePublicJsonRequest(request, {
      key: "analytics",
      limit: 120,
      windowMs: 10 * 60 * 1000,
      maxBytes: maxRequestBytes,
    });
    if (blocked) return blocked;

    const payload = await readLimitedJson<AnalyticsPayload>(request, maxRequestBytes);

    if (asPlainText(payload.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const event = asPlainText(payload.event, 40);
    const path = asPlainText(payload.path, 260);

    if (!allowedEvents.has(event) || !path.startsWith("/")) {
      return NextResponse.json({ message: "Invalid analytics event." }, { status: 400 });
    }

    const spreadsheetId = getSpreadsheetId();
    const sheets = await getSheetsWithAnalyticsTab(spreadsheetId);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: quoteSheetName(sheetName),
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            asSheetText(event),
            asSheetText(path),
            asSheetText(decodedHeaderText(request, "x-vercel-ip-city", 120)),
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const publicError = publicApiErrorResponse(error);
    if (publicError) return publicError;

    console.error("Analytics event failed", error);
    return NextResponse.json({ message: "Analytics unavailable." }, { status: 500 });
  }
}
