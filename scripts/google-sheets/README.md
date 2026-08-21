# Google Sheet Submission Notifications

This folder contains the Apps Script used by the ISKCON Nairobi Google Sheet that receives website form submissions.

## What It Does

`submission-notifications.gs` watches these tabs:

- `Contact Us`
- `Guest House Enquiries`
- `Kirtan Safari Registrations`
- `Bhagavad Gita Course`

Every hour, it checks whether any new rows were added. If yes, it emails `manahsiksadas@gmail.com` with the tab name and submitted row details.

## Install

1. Open the Google Sheet that receives website submissions.
2. Go to `Extensions -> Apps Script`.
3. Paste the contents of `submission-notifications.gs`.
4. Save the project.
5. Run `installHourlySubmissionNotificationTrigger` once.
6. Approve the Google permissions.

The installer creates the hourly trigger and records the current last row in every watched tab, so old submissions are not emailed in bulk.

## Test

Run `sendTestSubmissionNotification` from Apps Script. You should receive a test email.

## Reset

Run `resetSubmissionNotificationState` if you want the script to treat the current row counts as the new baseline.

## Remove

Run `removeSubmissionNotificationTriggers` to stop hourly checks.

## Notes

Google Sheets API writes do not reliably trigger normal `onEdit` notifications, which is why this uses an hourly time-based trigger. There is no extra website hosting cost for this setup. It uses Google Apps Script and MailApp quotas on the Google account that installs the trigger.
