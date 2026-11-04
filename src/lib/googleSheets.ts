import { google } from "googleapis";

export function createSheetsClient({
  spreadsheetId,
  missingMessage,
}: {
  spreadsheetId: string | undefined;
  missingMessage: string;
}) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey || !spreadsheetId) {
    throw new Error(missingMessage);
  }

  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");

  return {
    spreadsheetId,
    sheets: google.sheets({
      version: "v4",
      auth: new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      }),
    }),
  };
}

export function sheetRange(sheetName: string, range: string) {
  return `'${sheetName.replace(/'/g, "''")}'!${range}`;
}

export async function ensureSheetWithHeader({
  sheets,
  spreadsheetId,
  sheetName,
  header,
}: {
  sheets: ReturnType<typeof google.sheets>;
  spreadsheetId: string;
  sheetName: string;
  header: string[];
}) {
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties.title",
  });

  const exists = metadata.data.sheets?.some((sheet) => sheet.properties?.title === sheetName);
  if (!exists) {
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
  }

  const existingHeader = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetRange(sheetName, "1:1"),
  });

  if (!existingHeader.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: sheetRange(sheetName, "1:1"),
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [header],
      },
    });
  }
}
