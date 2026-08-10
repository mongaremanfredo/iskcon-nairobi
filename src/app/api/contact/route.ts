import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import {
  publicApiErrorResponse,
  readLimitedJson,
  validatePublicJsonRequest,
} from "@/lib/apiSecurity";
import { asPlainText, asSheetText, quoteSheetName } from "@/lib/security";

export const runtime = "nodejs";
const maxRequestBytes = 16 * 1024;

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function getGoogleClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey || !process.env.CONTACT_SHEET_ID) {
    throw new Error("Google Sheets contact backend is not configured.");
  }

  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(request: NextRequest) {
  try {
    const blocked = validatePublicJsonRequest(request, {
      key: "contact",
      limit: 8,
      windowMs: 10 * 60 * 1000,
      maxBytes: maxRequestBytes,
    });
    if (blocked) return blocked;

    const payload = await readLimitedJson<ContactPayload>(request, maxRequestBytes);

    if (asPlainText(payload.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const firstName = asPlainText(payload.firstName, 60);
    const lastName = asPlainText(payload.lastName, 60);
    const email = asPlainText(payload.email, 120);
    const phone = asPlainText(payload.phone, 40);
    const subject = asPlainText(payload.subject, 80);
    const message = asPlainText(payload.message, 1200);

    if (!firstName || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Please add your name, email address, subject, and message." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (phone && !/^[+0-9 ()-]{7,24}$/.test(phone)) {
      return NextResponse.json({ message: "Please enter a valid phone number." }, { status: 400 });
    }

    const auth = getGoogleClient();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.CONTACT_SHEET_ID!;

    const metadata = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "sheets.properties.title",
    });
    const firstSheetTitle = metadata.data.sheets?.[0]?.properties?.title || "Sheet1";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: quoteSheetName(firstSheetTitle),
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            asSheetText(firstName),
            asSheetText(lastName),
            asSheetText(email),
            asSheetText(phone),
            asSheetText(subject),
            asSheetText(message),
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const publicError = publicApiErrorResponse(error);
    if (publicError) return publicError;

    console.error("Contact form submission failed", error);
    return NextResponse.json(
      { message: "Your message could not be sent. Please try again shortly." },
      { status: 500 }
    );
  }
}
