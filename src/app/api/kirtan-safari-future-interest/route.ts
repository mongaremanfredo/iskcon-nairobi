import { NextRequest, NextResponse } from "next/server";
import { publicApiErrorResponse, readLimitedJson, validatePublicJsonRequest } from "@/lib/apiSecurity";
import { asPlainText, asSheetText, quoteSheetName } from "@/lib/security";
import { createSheetsClient, ensureSheetWithHeader } from "@/lib/googleSheets";

export const runtime = "nodejs";
const maxRequestBytes = 10 * 1024;
const sheetName = "Kirtan Safari 2027 Interest";

type Payload = { fullName?: unknown; email?: unknown; phone?: unknown; city?: unknown; consent?: unknown; website?: unknown };

export async function POST(request: NextRequest) {
  try {
    const blocked = validatePublicJsonRequest(request, { key: "kirtan-safari-future-interest", limit: 5, windowMs: 10 * 60 * 1000, maxBytes: maxRequestBytes });
    if (blocked) return blocked;
    const payload = await readLimitedJson<Payload>(request, maxRequestBytes);
    if (asPlainText(payload.website, 200)) return NextResponse.json({ ok: true });
    const fullName = asPlainText(payload.fullName, 120);
    const email = asPlainText(payload.email, 180).toLowerCase();
    const phone = asPlainText(payload.phone, 40);
    const city = asPlainText(payload.city, 100);
    const consent = payload.consent === true;
    if (!fullName || !email || !phone || !city || !consent) return NextResponse.json({ message: "Please complete all fields and confirm your consent." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    if (!/^[+0-9 ()-]{7,24}$/.test(phone)) return NextResponse.json({ message: "Please enter a valid WhatsApp number." }, { status: 400 });
    const { sheets, spreadsheetId } = createSheetsClient({ spreadsheetId: process.env.CONTACT_SHEET_ID, missingMessage: "Future festival updates backend is not configured." });
    await ensureSheetWithHeader({ sheets, spreadsheetId, sheetName, header: ["Timestamp", "Name", "Email", "WhatsApp Number", "City or Country", "Consent"] });
    await sheets.spreadsheets.values.append({ spreadsheetId, range: quoteSheetName(sheetName), valueInputOption: "USER_ENTERED", requestBody: { values: [[new Date().toISOString(), asSheetText(fullName), asSheetText(email), asSheetText(phone), asSheetText(city), "Yes"]] } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const publicError = publicApiErrorResponse(error);
    if (publicError) return publicError;
    console.error("Kirtan Safari future-interest submission failed", error);
    return NextResponse.json({ message: "Your request could not be submitted. Please try again shortly." }, { status: 500 });
  }
}
