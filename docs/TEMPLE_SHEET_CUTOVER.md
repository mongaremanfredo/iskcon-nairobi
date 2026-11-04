# Temple Google Sheet cutover

Use this guide when the website moves from a developer-owned submission spreadsheet to the temple-owned copy. The website sends form data directly to Google Sheets. Google Apps Script is not required for form submissions; it is used only for the hourly submission-email alerts.

## Before changing the website

1. Confirm that the temple-owned spreadsheet is the intended permanent record.
2. Keep the existing tabs and their first-row headers. The website will create a missing supported tab when it first receives a submission, but preserving existing tabs keeps the handover tidy.
3. In **Share**, add the website's Google service-account email address as an **Editor** to this single spreadsheet. Do not share the temple's whole Google Drive or Google account.
4. Copy the spreadsheet ID: it is the text between `/d/` and `/edit` in the Sheet URL.

## Website settings

Set the production secret values to the new temple spreadsheet ID:

| Website setting | Purpose |
| --- | --- |
| `CONTACT_SHEET_ID` | Contact messages, guest-house enquiries, course registrations, future-interest entries, push subscriptions, push delivery log, and (when not separated) analytics. |
| `GOOGLE_SHEET_ID` | Kirtan Safari registrations. Set this to the same ID unless the temple wants a separate event spreadsheet. |
| `ANALYTICS_SHEET_ID` | Optional separate analytics sheet. Leave unset to keep analytics in the contact spreadsheet. |
| `PUSH_SUBSCRIPTIONS_SHEET_ID` | Optional separate subscriptions sheet. Leave unset to keep subscriptions in the contact spreadsheet. |

The service-account credentials themselves do not change unless a new service account is created. Keep `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` private.

For the Cloudflare migration, place these values in Cloudflare Worker secrets. Do not put them in a source file, GitHub secret visible to untrusted collaborators, or an `NEXT_PUBLIC_` variable.

## Restore email notifications

The Apps Script project does **not** travel with a copied Google Sheet. On the temple-owned Sheet:

1. Choose **Extensions -> Apps Script**.
2. Copy the contents of `scripts/google-sheets/submission-notifications.gs` from this repository into the new project and save it.
3. Change `NOTIFICATION_EMAIL` to the temple-approved mailbox before installing it.
4. Run `installHourlySubmissionNotificationTrigger` once and approve the Google permissions using the temple administration account.
5. Run `sendTestSubmissionNotification` and confirm delivery.

The installer records the current final row in each watched tab. That prevents previously copied entries from being emailed as new submissions. Do not install the new trigger until the approved recipient is known.

## Cutover verification

After the production secrets are updated, submit one controlled test for each live form and confirm it appears in the expected tab. Then confirm that only one hourly Apps Script trigger is active and that the old spreadsheet no longer receives new rows.

Do not delete the old spreadsheet immediately. Keep it read-only for a short rollback period, then remove the website service account's access once the temple confirms the new record is complete.
