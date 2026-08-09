import webpush from "web-push";
import googleapis from "googleapis";

const { google } = googleapis;

const PUSH_SHEET_NAME = "PushSubscriptions";

function arg(name) {
  const flag = `--${name}`;
  const index = process.argv.indexOf(flag);

  if (index === -1) {
    return undefined;
  }

  const value = process.argv[index + 1];
  return value && !value.startsWith("--") ? value : undefined;
}

function getSheets() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey) {
    return null;
  }

  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function main() {
  const title = arg("title");
  const body = arg("body");

  if (!title || !body) {
    console.error(
      'Usage: npm run send-push -- --title "..." --body "..." [--url /festivals] [--tag reminder] [--renotify true] [--icon ...] [--badge ...] [--ttl 86400]'
    );
    process.exit(2);
  }

  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
  const vapidSubject = process.env.VAPID_SUBJECT;
  const spreadsheetId =
    process.env.PUSH_SUBSCRIPTIONS_SHEET_ID ||
    process.env.CONTACT_SHEET_ID ||
    process.env.GOOGLE_SHEET_ID;

  if (!vapidPublicKey || !vapidPrivateKey || !vapidSubject) {
    console.error(
      "Missing VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, or VAPID_SUBJECT. Check your env file."
    );
    process.exit(2);
  }

  if (!spreadsheetId) {
    console.error(
      "Missing PUSH_SUBSCRIPTIONS_SHEET_ID (or GOOGLE_SHEET_ID). Check your env file."
    );
    process.exit(2);
  }

  const sheets = getSheets();

  if (!sheets) {
    console.error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY. Check your env file."
    );
    process.exit(2);
  }

  const payload = {
    title,
    body,
    url: arg("url") || "/",
    tag: arg("tag") || "iskcon-nairobi-reminder",
    renotify: arg("renotify") === "true",
  };

  const icon = arg("icon");
  const badge = arg("badge");

  if (icon) {
    payload.icon = icon;
  }

  if (badge) {
    payload.badge = badge;
  }

  const ttl = Number(arg("ttl") || 86400);

  webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);

  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties(sheetId,title)",
  });

  let sheetId = metadata.data.sheets?.find(
    (sheet) => sheet.properties?.title === PUSH_SHEET_NAME
  )?.properties?.sheetId;

  if (sheetId == null) {
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

    sheetId = added.data.replies?.[0]?.addSheet?.properties?.sheetId ?? 0;
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${PUSH_SHEET_NAME}!A:E`,
  });

  const rows = response.data.values ?? [];
  let sent = 0;
  let pruned = 0;
  const failed = [];

  for (let i = 0; i < rows.length; i += 1) {
    const [, endpoint, p256dh, authKey] = rows[i];

    if (
      typeof endpoint !== "string" ||
      !endpoint.startsWith("https://") ||
      !p256dh ||
      !authKey
    ) {
      continue;
    }

    const subscription = {
      endpoint,
      keys: { p256dh, auth: authKey },
    };

    try {
      await webpush.sendNotification(subscription, JSON.stringify(payload), {
        TTL: ttl,
      });
      sent += 1;
      console.log(`sent ${i + 1}/${rows.length}: ${endpoint.slice(0, 60)}...`);
    } catch (error) {
      const status = error?.statusCode || error?.status || 0;

      if (status === 404 || status === 410) {
        pruned += 1;
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                deleteDimension: {
                  range: {
                    sheetId,
                    dimension: "ROWS",
                    startIndex: i,
                    endIndex: i + 1,
                  },
                },
              },
            ],
          },
        });
        console.log(`pruned (${status}): ${endpoint.slice(0, 60)}...`);
        continue;
      }

      failed.push({ endpoint, status, message: error?.message || String(error) });
      console.error(`failed ${i + 1}/${rows.length}: ${endpoint.slice(0, 60)}... (${status})`);
    }
  }

  console.log(
    `\nSummary: ${sent} sent, ${failed.length} failed, ${pruned} pruned, ${rows.length} rows checked.`
  );

  if (failed.length > 0) {
    console.error(JSON.stringify(failed, null, 2));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("Broadcast failed:", error);
  process.exit(1);
});
