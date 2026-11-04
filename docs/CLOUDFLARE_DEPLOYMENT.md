# Cloudflare deployment

This project runs on Cloudflare Workers through the OpenNext adapter. The website and static assets are one Worker deployment; calendar reminder scheduling is a separate, small Worker so scheduled jobs do not enlarge or complicate the website runtime.

Keep the existing Vercel project online until the Cloudflare preview has passed the checks below and the custom domain has been verified. Do not run the Vercel and Cloudflare reminder schedules at the same time, or subscribers may receive duplicate notifications.

## Local checks

Use Node.js 24 and install from the lockfile:

```bash
npm ci
npm run lint
npm test
npm run verify:pwa
npm run build
npm run build:cloudflare
npx wrangler deploy --dry-run
npx wrangler deploy --config wrangler-cron.jsonc --dry-run
```

OpenNext is best built in Cloudflare's Linux build environment or GitHub Actions. Windows development is supported for normal Next.js work, but the CI result is the release authority.

## Cloudflare configuration

Create a Workers project linked to this repository. Use:

- Build command: `npm run build:cloudflare`
- Deploy command: `npx wrangler deploy`
- Node.js version: `24`
- Production branch: the repository's approved release branch

Set `NEXT_PUBLIC_VAPID_PUBLIC_KEY` as a build variable and runtime variable. Store the following as encrypted Worker secrets, never in git:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`
- `CONTACT_SHEET_ID`
- `ANALYTICS_SHEET_ID`
- `PUSH_SUBSCRIPTIONS_SHEET_ID`
- `PUSH_SUBSCRIBER_COUNT_TOKEN`
- `CRON_SECRET`
- `VAPID_PUBLIC_KEY`
- `VAPID_PRIVATE_KEY`
- `VAPID_SUBJECT`

Set `ANALYTICS_DISABLED=false` in production. Retain any additional variables present in the current production environment.

Secrets may be entered with Wrangler, for example:

```bash
npx wrangler secret put GOOGLE_PRIVATE_KEY
npx wrangler secret put CRON_SECRET
```

Deploy the calendar Worker separately:

```bash
npx wrangler deploy --config wrangler-cron.jsonc
```

Set the same `CRON_SECRET` on both Workers. Its schedule is `04:00 UTC`, which is `07:00` in Nairobi throughout the year.

## Verification before DNS cutover

1. Deploy to the generated `workers.dev` address.
2. Check the homepage, navigation, all forms, calendar, blog, festival pages, 404 and error states on desktop, tablet and mobile.
3. Install the PWA and test offline fallback, update behavior and push subscription controls.
4. Submit controlled test entries to every form and confirm the correct Google Sheet tabs receive them.
5. Confirm `/api/subscribe` and cron routes reject unauthenticated requests.
6. Check security headers, redirects, social previews, sitemap and robots.txt.
7. Confirm the calendar Worker health endpoint and one authorized reminder dry run.

## Domain cutover

Add `iskconnairobi.com` and `www.iskconnairobi.com` as custom domains only after preview approval. Redirect `www` permanently to the apex domain. Lower DNS TTL before cutover if the current DNS provider permits it, then retain Vercel until Cloudflare logs and forms have remained healthy through the stabilization period.

If a critical issue appears, point DNS back to Vercel and disable the Cloudflare calendar trigger. The old platform configuration remains in `vercel.json` during migration solely to make that rollback possible; remove it after Cloudflare is accepted as the permanent host.
