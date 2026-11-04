import { google } from "googleapis";

const DELIVERY_SHEET_NAME = "PushDeliveryLog";

function getSpreadsheetId() {
  return process.env.PUSH_SUBSCRIPTIONS_SHEET_ID || process.env.CONTACT_SHEET_ID || "";
}

function getSheets() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawPrivateKey) {
    throw new Error("Push delivery backend is not configured.");
  }

  const auth = new google.auth.JWT({
    email,
    key: rawPrivateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function ensureDeliverySheet() {
  const spreadsheetId = getSpreadsheetId();
  if (!spreadsheetId) throw new Error("Push delivery backend is not configured.");

  const sheets = getSheets();
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties(title)",
  });
  const exists = metadata.data.sheets?.some(
    (sheet) => sheet.properties?.title === DELIVERY_SHEET_NAME
  );

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: DELIVERY_SHEET_NAME } } }],
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${DELIVERY_SHEET_NAME}!A1:F1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [["Event ID", "Sent At", "Attempted", "Delivered", "Failed", "Pruned"]],
      },
    });
  }

  return { spreadsheetId, sheets };
}

export async function hasCalendarEventBeenDelivered(eventId: string) {
  const { spreadsheetId, sheets } = await ensureDeliverySheet();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${DELIVERY_SHEET_NAME}!A:A`,
  });

  return (response.data.values ?? []).some((row) => row[0] === eventId);
}

export async function recordCalendarDelivery(input: {
  eventId: string;
  attempted: number;
  delivered: number;
  failed: number;
  pruned: number;
}) {
  const { spreadsheetId, sheets } = await ensureDeliverySheet();
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${DELIVERY_SHEET_NAME}!A:F`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        input.eventId,
        new Date().toISOString(),
        input.attempted,
        input.delivered,
        input.failed,
        input.pruned,
      ]],
    },
  });
}
