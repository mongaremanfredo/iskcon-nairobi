import { google } from "googleapis";

export const PUSH_SHEET_NAME = "PushSubscriptions";

export type PushSubscriptionRecord = {
  createdAt: string;
  endpoint: string;
  keys: { p256dh: string; auth: string };
  userAgent: string;
};

type PushSheetRef = {
  spreadsheetId: string;
  sheetId: number;
};

function getAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey) {
    throw new Error("Push subscription backend is not configured.");
  }

  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSpreadsheetId() {
  return (
    process.env.PUSH_SUBSCRIPTIONS_SHEET_ID ||
    process.env.CONTACT_SHEET_ID ||
    process.env.GOOGLE_SHEET_ID ||
    ""
  );
}

function getSheets() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

export async function ensurePushSheet(): Promise<PushSheetRef> {
  const spreadsheetId = getSpreadsheetId();

  if (!spreadsheetId) {
    throw new Error("Push subscription backend is not configured.");
  }

  const sheets = getSheets();

  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties(sheetId,title)",
  });

  const existing = metadata.data.sheets?.find(
    (sheet) => sheet.properties?.title === PUSH_SHEET_NAME
  );

  if (existing?.properties?.sheetId != null) {
    return { spreadsheetId, sheetId: existing.properties.sheetId };
  }

  const added = await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: { title: PUSH_SHEET_NAME },
          },
        },
      ],
    },
  });

  return {
    spreadsheetId,
    sheetId: added.data.replies?.[0]?.addSheet?.properties?.sheetId ?? 0,
  };
}

export async function listPushSubscriptions(): Promise<
  { record: PushSubscriptionRecord; rowNumber: number }[]
> {
  const { spreadsheetId } = await ensurePushSheet();
  const sheets = getSheets();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${PUSH_SHEET_NAME}!A:E`,
  });

  const rows = response.data.values ?? [];
  const records: { record: PushSubscriptionRecord; rowNumber: number }[] = [];

  rows.forEach((row, index) => {
    const [createdAt, endpoint, p256dh, auth, userAgent] = row;

    if (
      typeof endpoint === "string" &&
      endpoint.startsWith("https://") &&
      typeof p256dh === "string" &&
      p256dh.length > 0 &&
      typeof auth === "string" &&
      auth.length > 0
    ) {
      records.push({
        record: {
          createdAt: typeof createdAt === "string" ? createdAt : "",
          endpoint,
          keys: { p256dh, auth },
          userAgent: typeof userAgent === "string" ? userAgent : "",
        },
        rowNumber: index + 1,
      });
    }
  });

  return records;
}

export async function countPushSubscriptions(): Promise<number> {
  const records = await listPushSubscriptions();
  return records.length;
}

export async function upsertPushSubscription(input: {
  endpoint: string;
  p256dh: string;
  auth: string;
  userAgent: string;
}): Promise<boolean> {
  const records = await listPushSubscriptions();

  if (records.some(({ record }) => record.endpoint === input.endpoint)) {
    return false;
  }

  const { spreadsheetId } = await ensurePushSheet();
  const sheets = getSheets();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${PUSH_SHEET_NAME}!A:E`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          input.endpoint,
          input.p256dh,
          input.auth,
          input.userAgent,
        ],
      ],
    },
  });

  return true;
}

export async function removePushSubscription(endpoint: string): Promise<boolean> {
  const records = await listPushSubscriptions();
  const match = records.find(({ record }) => record.endpoint === endpoint);

  if (!match) {
    return false;
  }

  const { spreadsheetId, sheetId } = await ensurePushSheet();
  const sheets = getSheets();

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId,
              dimension: "ROWS",
              startIndex: match.rowNumber - 1,
              endIndex: match.rowNumber,
            },
          },
        },
      ],
    },
  });

  return true;
}
