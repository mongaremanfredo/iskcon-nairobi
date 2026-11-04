const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";

type ApiResponse = {
  sheets?: Array<{ properties?: { sheetId?: number; title?: string } }>;
  replies?: Array<{ addSheet?: { properties?: { sheetId?: number; title?: string } } }>;
  values?: Array<Array<string | number | boolean>>;
};

let cachedToken: { value: string; expiresAt: number } | undefined;

function base64Url(input: string | Uint8Array) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function pemBytes(pem: string) {
  const binary = atob(pem.replace(/-----[^-]+-----/g, "").replace(/\s/g, ""));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function accessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !rawKey) throw new Error("Google Sheets backend is not configured.");

  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: email, scope: SHEETS_SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600,
  }));
  const unsigned = `${header}.${claims}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemBytes(rawKey.replace(/\\n/g, "\n")),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned),
  );
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${base64Url(new Uint8Array(signature))}`,
    }),
  });
  const payload = await response.json() as {
    access_token?: string; expires_in?: number; error_description?: string;
  };
  if (!response.ok || !payload.access_token) {
    throw new Error(payload.error_description || "Google authentication failed.");
  }
  cachedToken = {
    value: payload.access_token,
    expiresAt: Date.now() + (payload.expires_in ?? 3600) * 1000,
  };
  return cachedToken.value;
}

async function sheetsRequest(path: string, init?: RequestInit): Promise<{ data: ApiResponse }> {
  const response = await fetch(`${SHEETS_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  const data = await response.json() as ApiResponse & { error?: { message?: string } };
  if (!response.ok) {
    throw new Error(data.error?.message || `Google Sheets request failed (${response.status}).`);
  }
  return { data };
}

export function createGoogleSheetsApi() {
  return {
    spreadsheets: {
      get: ({ spreadsheetId, fields }: { spreadsheetId: string; fields?: string }) =>
        sheetsRequest(`/${encodeURIComponent(spreadsheetId)}${fields ? `?fields=${encodeURIComponent(fields)}` : ""}`),
      batchUpdate: ({ spreadsheetId, requestBody }: { spreadsheetId: string; requestBody: unknown }) =>
        sheetsRequest(`/${encodeURIComponent(spreadsheetId)}:batchUpdate`, {
          method: "POST", body: JSON.stringify(requestBody),
        }),
      values: {
        get: ({ spreadsheetId, range }: { spreadsheetId: string; range: string }) =>
          sheetsRequest(`/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}`),
        update: ({ spreadsheetId, range, valueInputOption, requestBody }: {
          spreadsheetId: string; range: string; valueInputOption: string; requestBody: unknown;
        }) => sheetsRequest(
          `/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}?valueInputOption=${encodeURIComponent(valueInputOption)}`,
          { method: "PUT", body: JSON.stringify(requestBody) },
        ),
        append: ({ spreadsheetId, range, valueInputOption, requestBody }: {
          spreadsheetId: string; range: string; valueInputOption: string; requestBody: unknown;
        }) => sheetsRequest(
          `/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}:append?valueInputOption=${encodeURIComponent(valueInputOption)}`,
          { method: "POST", body: JSON.stringify(requestBody) },
        ),
      },
    },
  };
}

export type GoogleSheetsApi = ReturnType<typeof createGoogleSheetsApi>;

export function createSheetsClient({ spreadsheetId, missingMessage }: {
  spreadsheetId: string | undefined; missingMessage: string;
}) {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !spreadsheetId) {
    throw new Error(missingMessage);
  }
  return { spreadsheetId, sheets: createGoogleSheetsApi() };
}

export function sheetRange(sheetName: string, range: string) {
  return `'${sheetName.replace(/'/g, "''")}'!${range}`;
}

export async function ensureSheetWithHeader({ sheets, spreadsheetId, sheetName, header }: {
  sheets: GoogleSheetsApi; spreadsheetId: string; sheetName: string; header: string[];
}) {
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId, fields: "sheets.properties.title",
  });
  const exists = metadata.data.sheets?.some((sheet) => sheet.properties?.title === sheetName);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title: sheetName } } }] },
    });
  }
  const existingHeader = await sheets.spreadsheets.values.get({
    spreadsheetId, range: sheetRange(sheetName, "1:1"),
  });
  if (!existingHeader.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: sheetRange(sheetName, "1:1"),
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [header] },
    });
  }
}
