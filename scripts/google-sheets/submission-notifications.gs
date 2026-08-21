/**
 * ISKCON Nairobi website submission notifications
 * ------------------------------------------------
 * Paste this file into the Google Sheet that receives website submissions:
 * Extensions -> Apps Script -> paste -> Save.
 *
 * Then run `installHourlySubmissionNotificationTrigger` once and approve the
 * permissions. The script checks every hour and emails only rows that were
 * added since the previous check.
 */

const NOTIFICATION_EMAIL = "manahsiksadas@gmail.com";

const TABS_TO_WATCH = [
  "Contact Us",
  "Guest House Enquiries",
  "Kirtan Safari Registrations",
  "Bhagavad Gita Course",
];

function installHourlySubmissionNotificationTrigger() {
  removeSubmissionNotificationTriggers();

  ScriptApp.newTrigger("checkNewWebsiteSubmissions")
    .timeBased()
    .everyHours(1)
    .create();

  initializeSubmissionNotificationState();

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "ISKCON Nairobi website submission alerts enabled",
    body:
      "Hourly website submission alerts are now active.\n\n" +
      "Tabs watched:\n" +
      TABS_TO_WATCH.map((tabName) => `- ${tabName}`).join("\n"),
  });
}

function checkNewWebsiteSubmissions() {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const props = PropertiesService.getScriptProperties();

    TABS_TO_WATCH.forEach((tabName) => {
      const sheet = ss.getSheetByName(tabName);
      if (!sheet) return;

      const lastRow = sheet.getLastRow();
      const lastColumn = sheet.getLastColumn();
      if (lastRow <= 1 || lastColumn < 1) {
        props.setProperty(lastRowKey(tabName), String(Math.max(lastRow, 1)));
        return;
      }

      const previousLastRow = Number(props.getProperty(lastRowKey(tabName)) || 1);
      if (lastRow <= previousLastRow) return;

      const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
      const rows = sheet
        .getRange(previousLastRow + 1, 1, lastRow - previousLastRow, lastColumn)
        .getValues();

      rows.forEach((row, index) => {
        const rowNumber = previousLastRow + index + 1;
        sendSubmissionEmail(tabName, headers, row, rowNumber);
      });

      props.setProperty(lastRowKey(tabName), String(lastRow));
    });
  } finally {
    lock.releaseLock();
  }
}

function initializeSubmissionNotificationState() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const props = PropertiesService.getScriptProperties();

  TABS_TO_WATCH.forEach((tabName) => {
    const sheet = ss.getSheetByName(tabName);
    props.setProperty(lastRowKey(tabName), String(sheet ? Math.max(sheet.getLastRow(), 1) : 1));
  });
}

function resetSubmissionNotificationState() {
  initializeSubmissionNotificationState();
}

function removeSubmissionNotificationTriggers() {
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    if (trigger.getHandlerFunction() === "checkNewWebsiteSubmissions") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function sendTestSubmissionNotification() {
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "Test: ISKCON Nairobi website submission alert",
    body:
      "This is a test email from the ISKCON Nairobi Google Sheet notification script.\n\n" +
      "If you received this, MailApp permissions and the recipient email are working.",
  });
}

function sendSubmissionEmail(tabName, headers, row, rowNumber) {
  const lines = row.map((value, index) => {
    const label = headers[index] || `Column ${index + 1}`;
    return `${label}: ${formatCellValue(value)}`;
  });

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: `New ISKCON Nairobi website submission: ${tabName}`,
    body:
      `A new website submission was received in "${tabName}".\n\n` +
      `Sheet row: ${rowNumber}\n\n` +
      lines.join("\n") +
      "\n\nOpen the Google Sheet to view or respond to the submission.",
  });
}

function formatCellValue(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  }

  if (value === null || value === undefined || value === "") {
    return "-";
  }

  return String(value);
}

function lastRowKey(tabName) {
  return `lastRow:${tabName}`;
}
