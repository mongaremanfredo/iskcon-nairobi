import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import {
  publicApiErrorResponse,
  readLimitedJson,
  validatePublicJsonRequest,
} from "@/lib/apiSecurity";
import { asPlainText, asSheetText, quoteSheetName } from "@/lib/security";

export const runtime = "nodejs";
const maxRequestBytes = 10 * 1024;
const sheetName = "Bhagavad Gita Course";

type GitaCoursePayload = {
  fullName?: unknown;
  phone?: unknown;
  hearAbout?: unknown;
  courseOption?: unknown;
  website?: unknown;
};

const hearAboutOptions = new Set([
  "Hare Krishna Temple",
  "Social Media",
  "Youth Festival, Sarit Centre",
  "A friend",
  "Other",
]);

const courseOptions = new Set([
  "In person, Hare Krishna Temple Nairobi - Thursday 24 September 2026, 7:00 pm",
  "Online - Thursday 10 September 2026, 7:30 pm",
]);

function sheetRange(range: string) {
  return `'${sheetName.replace(/'/g, "''")}'!${range}`;
}

function getGoogleClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.CONTACT_SHEET_ID || process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !rawPrivateKey || !spreadsheetId) {
    throw new Error("Google Sheets Bhagavad Gita course backend is not configured.");
  }

  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  return {
    spreadsheetId,
    auth: new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    }),
  };
}

async function ensureSheet(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string
) {
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties.sheetId,sheets.properties.title",
  });

  const existing = metadata.data.sheets?.find((sheet) => sheet.properties?.title === sheetName);
  if (!existing) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      },
    });
  }

  const header = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetRange("1:1"),
  });

  if (!header.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: sheetRange("1:1"),
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "Timestamp",
            "Name",
            "WhatsApp Number",
            "How They Heard About This Course",
            "Chosen Option",
          ],
        ],
      },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const blocked = validatePublicJsonRequest(request, {
      key: "gita-course-registration",
      limit: 6,
      windowMs: 10 * 60 * 1000,
      maxBytes: maxRequestBytes,
    });
    if (blocked) return blocked;

    const payload = await readLimitedJson<GitaCoursePayload>(request, maxRequestBytes);

    if (asPlainText(payload.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const fullName = asPlainText(payload.fullName, 120);
    const phone = asPlainText(payload.phone, 40);
    const hearAbout = asPlainText(payload.hearAbout, 80);
    const courseOption = asPlainText(payload.courseOption, 160);

    if (!fullName || !phone || !hearAbout || !courseOption) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[+0-9 ()-]{7,24}$/.test(phone)) {
      return NextResponse.json({ message: "Please enter a valid WhatsApp number." }, { status: 400 });
    }

    if (!hearAboutOptions.has(hearAbout)) {
      return NextResponse.json({ message: "Please choose how you found out about the course." }, { status: 400 });
    }

    if (!courseOptions.has(courseOption)) {
      return NextResponse.json({ message: "Please choose one course option." }, { status: 400 });
    }

    const { auth, spreadsheetId } = getGoogleClient();
    const sheets = google.sheets({ version: "v4", auth });

    await ensureSheet(sheets, spreadsheetId);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: quoteSheetName(sheetName),
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            asSheetText(fullName),
            asSheetText(phone),
            asSheetText(hearAbout),
            asSheetText(courseOption),
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const publicError = publicApiErrorResponse(error);
    if (publicError) return publicError;

    console.error("Bhagavad Gita course registration failed", error);
    return NextResponse.json(
      { message: "Registration could not be submitted. Please try again shortly." },
      { status: 500 }
    );
  }
}
