# Progressive Web App Guide

This is the maintenance contract for ISKCON Nairobi's installable web app. Preserve these rules when adding pages, assets, forms, notices, or notifications.

## User Experience

- The installed app uses the same responsive site and routes.
- Portrait, landscape, and tablet rotation are supported. Do not restore an `orientation` lock in `src/app/manifest.ts`.
- Essential shell assets are saved on the first successful visit. Public pages are saved selectively as visitors open them.
- A saved page is used offline when available; otherwise `/offline` explains the connection state.
- A compact notice appears for offline, data-saver, 2G, or slow-2G conditions. Keep it small and non-blocking.
- A new worker activates silently. The app reloads once when it is safe, deferring while a visitor is typing so form input is not lost.
- Online navigations remain network-first. Saved pages are fallbacks for failed or timed-out requests, not the default online response.

## Cache Policy

`public/sw.js` owns caching. Bump `CACHE_VERSION` whenever its policy or precache list changes.

| Request | Strategy | Reason |
| --- | --- | --- |
| Page navigation | Network first, 5-second timeout, saved page, offline fallback | Prefer current temple information while surviving weak connections |
| Next.js JavaScript, CSS, and fonts | Cache first | These files are content-hashed |
| Same-origin images | Stale while revalidate | Fast repeat visits with background refresh |
| `/api/*`, POST, ranged media, cross-origin requests | Network only | Prevent stale data, duplicate form writes, and personal-data storage |

Never cache forms, analytics, subscriptions, payment flows, or admin responses. Offline form submission is intentionally not queued because silent retries can duplicate registrations or retain personal information on a shared device.

## Android Icons And Splash

- `icon-192.png` and `icon-512.png` are ordinary full-logo icons.
- `maskable-icon-192.png` and `maskable-icon-512.png` keep the full mark inside Android's central safe zone on opaque cream.
- Android generates its splash from the manifest's `background_color`, `theme_color`, name, and 512px icon. Keep these aligned with the brand palette.
- Inspect replacements in circular, squircle, rounded-square, and square crops. The lotus and ISKCON wordmark must remain clear.
- Keep icon URLs versioned in the manifest and root layout so installed devices refresh changed artwork.

## Navigation And Deep Links

- Use Next.js `Link` internally so Android Back preserves route history.
- External links intended to leave the app use `target="_blank"` and `rel="noopener noreferrer"`.
- Push URLs must be same-origin paths such as `/festivals`; the worker rejects external notification URLs.
- Notification clicks focus an exact open route, then reuse an app window, then open a new window. Preserve that order.

## Release Checklist

1. Run `npm run verify:pwa` and `npm run build`.
2. Install production on Android and inspect circular and rounded launcher modes.
3. Launch from the icon and confirm the cream splash does not crop the logo.
4. Open public pages online, enable airplane mode, and test saved and unsaved routes.
5. Emulate slow 2G and confirm the compact notice does not move page content.
6. Navigate Home -> internal page -> Android Back and confirm history works.
7. Open an external social link and confirm it leaves safely in a new browser context.
8. Test a nested notification link while the app is closed, backgrounded, and foregrounded.
9. Deploy a worker version bump and confirm an older installed app offers Refresh.
10. Rotate phone and tablet; check navigation, modals, carousels, and forms for overlap.

## Future Editor Notes

- Keep `/offline` lightweight and based on local assets.
- Do not precache galleries, videos, hero collections, or every route. Cache limits prevent unbounded storage.
- Preserve `must-revalidate` headers for `/sw.js` and the manifest in `next.config.ts`.
- The worker is hand-maintained so privacy boundaries remain reviewable. Do not add a generated PWA plugin without re-auditing API exclusions, updates, and push handlers.
