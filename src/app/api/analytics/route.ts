import { NextRequest, NextResponse } from "next/server";
import {
  publicApiErrorResponse,
  readLimitedJson,
  validatePublicJsonRequest,
} from "@/lib/apiSecurity";
import { asPlainText, asSheetText, quoteSheetName } from "@/lib/security";
import { createSheetsClient, ensureSheetWithHeader } from "@/lib/googleSheets";

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

async function getSheetsWithAnalyticsTab(spreadsheetId: string) {
  const { sheets } = createSheetsClient({
    spreadsheetId,
    missingMessage: "Analytics backend is not configured.",
  });
  await ensureSheetWithHeader({
    sheets,
    spreadsheetId,
    sheetName,
    header: ["Timestamp", "Event", "Path", "City"],
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

function requestCity(request: NextRequest) {
  const cloudflareCity = (request as NextRequest & { cf?: { city?: unknown } }).cf?.city;
  if (typeof cloudflareCity === "string") {
    return asPlainText(cloudflareCity, 120);
  }

  return decodedHeaderText(request, "x-vercel-ip-city", 120);
}

// Local development and automated test runs share the production credentials in
// .env.local, so they must never append to the visitor analytics sheet.
function isAnalyticsWriteEnabled() {
  return process.env.NODE_ENV === "production" && process.env.ANALYTICS_DISABLED !== "true";
}

export async function POST(request: NextRequest) {
  if (!isAnalyticsWriteEnabled()) {
    return NextResponse.json({ ok: true });
  }

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
            asSheetText(requestCity(request)),
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
