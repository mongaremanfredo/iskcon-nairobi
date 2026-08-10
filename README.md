# ISKCON Nairobi Website

Production Next.js website for ISKCON Nairobi / Sri Sri Radha Bankebihari Temple.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Google Sheets API for contact, festival registration, and notification subscriptions
- Web Push / PWA support
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
npm run build
```

The local dev server runs at `http://localhost:3000`.

## Handoff Documentation

- `PROJECT_GUIDELINES.md` is the contributor entry point.
- `docs/DESIGN_SYSTEM.md` records the visual language, spacing rhythm, page hero rules, and mobile-first layout decisions.
- `docs/CONTENT_GUIDE.md` explains where to add pages, festivals, notices, blog posts, images, and sheet-backed forms.
- `docs/ASSET_SOURCES.md` records non-temple library assets that should be reviewed or replaced when final photography is available.

## Environment Variables

Never commit real secrets to the repository. Keep local values in `.env.local` and production values in the Vercel dashboard.

Required server-side variables:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
CONTACT_SHEET_ID=
ANALYTICS_SHEET_ID=
PUSH_SUBSCRIBER_COUNT_TOKEN=
VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_SUBJECT=
```

Optional variable:

```env
PUSH_SUBSCRIPTIONS_SHEET_ID=
ANALYTICS_SHEET_ID=
```

If `PUSH_SUBSCRIPTIONS_SHEET_ID` is not set, push subscriptions are stored in a `PushSubscriptions` tab inside the contact spreadsheet. This is intentional for the current setup.

If `ANALYTICS_SHEET_ID` is not set, page-open and app-install analytics are stored in a `WebsiteAnalytics` tab inside the contact spreadsheet.

Public client variable:

```env
NEXT_PUBLIC_VAPID_PUBLIC_KEY=
```

Only values prefixed with `NEXT_PUBLIC_` are exposed to browser code. Do not place private API keys, service account keys, tokens, or passwords in any `NEXT_PUBLIC_` variable.

## Security Notes

- `.env*`, `.vercel`, PEM files, logs, and generated build output are ignored by git.
- Public API routes reject cross-origin JSON requests, enforce request size limits, apply rate limiting, and validate input server-side.
- Google Sheet writes escape formula-leading characters before using `USER_ENTERED`.
- Production responses return generic errors to users while detailed errors stay in server logs.
- The service account should only be shared with the exact spreadsheets this site needs.

## Push Notifications

Broadcasts are sent from the local script:

```bash
npm run send-push -- --dry-run --title "Preview" --body "Message"
npm run send-push -- --confirm --title "Notice" --body "Message" --url /festivals
```

The script refuses to send a live broadcast unless `--confirm` is supplied.

## Deployment

The site is deployed on Vercel from the GitHub repository. Production canonical URLs use:

```text
https://iskconnairobi.esthrema.com
```

After changing SEO routes, robots, sitemap, metadata, or API behavior, run:

```bash
npm run build
```

Then push to GitHub and deploy through Vercel.

## Operational Checklist

- Keep Vercel environment variables current.
- Rotate any key that is accidentally pasted into git, chat, logs, screenshots, or public tools.
- Keep Google Sheets private and share them only with the service account and trusted administrators.
- Review `npm audit` before major releases.
- Prefer a durable rate limiter such as Redis or Vercel KV if spam volume increases.
