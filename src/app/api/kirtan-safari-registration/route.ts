import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type RegistrationPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  days?: unknown;
  peopleCount?: unknown;
  hearAbout?: unknown;
  wantsUpdates?: unknown;
  website?: unknown;
};

const attendanceDays = new Set([
  "Thursday 27 August - Adivas",
  "Friday 28 August",
  "Saturday 29 August",
  "Sunday 30 August",
]);

function asText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function asSheetText(value: string) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function quoteSheetName(title: string) {
  return `'${title.replace(/'/g, "''")}'!A:Z`;
}

function getGoogleClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey || !process.env.GOOGLE_SHEET_ID) {
    throw new Error("Google Sheets registration backend is not configured.");
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
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ message: "Unsupported request type." }, { status: 415 });
    }

    const payload = (await request.json()) as RegistrationPayload;

    if (asText(payload.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const fullName = asText(payload.fullName, 120);
    const email = asText(payload.email, 160);
    const phone = asText(payload.phone, 40);
    const peopleCountText = asText(payload.peopleCount, 3);
    const hearAbout = asText(payload.hearAbout, 80);
    const wantsUpdates = payload.wantsUpdates === "Yes" || payload.wantsUpdates === true ? "Yes" : "No";
    const selectedDays = Array.isArray(payload.days)
      ? payload.days
          .filter((day): day is string => typeof day === "string" && attendanceDays.has(day))
          .slice(0, attendanceDays.size)
      : [];

    const peopleCount = Number.parseInt(peopleCountText, 10);
    const validPeopleCount = Number.isFinite(peopleCount)
      ? Math.min(Math.max(peopleCount, 1), 999)
      : 1;

    if (!fullName || !phone || selectedDays.length === 0) {
      return NextResponse.json(
        { message: "Please add your name, phone number, and at least one day you plan to attend." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const auth = getGoogleClient();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

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
            asSheetText(fullName),
            asSheetText(email),
            asSheetText(phone),
            selectedDays.map(asSheetText).join(", "),
            validPeopleCount,
            asSheetText(hearAbout),
            wantsUpdates,
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Kirtan Safari registration failed", error);
    return NextResponse.json(
      { message: "Registration could not be submitted. Please try again shortly." },
      { status: 500 }
    );
  }
}
