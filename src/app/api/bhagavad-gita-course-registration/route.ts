import { NextRequest, NextResponse } from "next/server";
import {
  publicApiErrorResponse,
  readLimitedJson,
  validatePublicJsonRequest,
} from "@/lib/apiSecurity";
import { asPlainText, asSheetText, quoteSheetName } from "@/lib/security";
import { createSheetsClient, ensureSheetWithHeader } from "@/lib/googleSheets";

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

const registrationHeader = [
  "Timestamp",
  "Name",
  "WhatsApp Number",
  "How They Heard About This Course",
  "Chosen Option",
];

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

    const { sheets, spreadsheetId } = createSheetsClient({
      spreadsheetId: process.env.CONTACT_SHEET_ID,
      missingMessage: "Google Sheets contact submissions backend is not configured.",
    });

    await ensureSheetWithHeader({
      sheets,
      spreadsheetId,
      sheetName,
      header: registrationHeader,
    });

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
