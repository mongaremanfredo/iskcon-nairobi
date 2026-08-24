# ISKCON Nairobi App Versions

This ledger records public app releases. Update it whenever a release version changes. The machine-readable companion is `public/app-version.json`.

## Versioning Rules

- Version `1.x.x` remains the active family until the owner explicitly approves
  migration to the official domain. Version `2.0.0` is reserved for that launch,
  regardless of how many substantial version 1 features are delivered first.
- Patch (`1.0.1`): copy corrections, small visual fixes, and routine security patches. Use `updateMode: "silent"`.
- Minor (`1.1.0`): meaningful features that do not fundamentally change the app. Usually silent, but may be prompted when the owner wants to announce the release.
- Major (`2.0.0`): the official-domain release. Use `updateMode: "prompt"` so installed users choose when to activate it.
- Every release must update `package.json`, `package-lock.json`, `public/app-version.json`, this ledger, and the service-worker `CACHE_VERSION` when its cached shell changes.
- A prompted PWA update is downloaded by the browser in the background but is not activated until the visitor selects **Update now**. This is the closest standards-based equivalent to an app-store update choice.

## Editor Discretion

The implementing editor chooses patch or minor numbering according to visitor
impact and records the reason here. Documentation, comments, internal cleanup,
and failed deployments do not create releases. Silent updates are the default.
Reserve the prompted experience for a grouped, noticeable improvement that is
worth presenting to visitors, or for a release the owner explicitly requests to
announce. Full decision rules are maintained in `PROJECT_GUIDELINES.md`.

## Publishing A Prompted Release

1. Set the new semantic version in `package.json` and `package-lock.json`.
2. Add the release below with its date and user-facing highlights.
3. Update `public/app-version.json`, set `updateMode` to `"prompt"`, and keep the summary concise.
4. In `public/sw.js`, increment `CACHE_VERSION` and set `UPDATE_MODE` to `"prompt"`.
5. Run `npm run verify:pwa` and `npm run build`.
6. Deploy and verify that an installation on the previous version shows the release panel.
7. Test **Later** and **Update now**. Later must leave the waiting worker inactive; Update now must activate and reload once.

## 1.0.0 - First Complete Release

**Released:** 25 August 2026

**Update mode:** Silent baseline activation

The first complete production version of the ISKCON Nairobi website app.

### Highlights

- Installable Progressive Web App for Android, Apple devices, and desktop browsers.
- Live-first navigation with selective offline access and a dedicated offline fallback.
- Responsive temple website covering visits, festivals, calendar, projects, learning, leadership, donations, hospitality, media, and devotional articles.
- Noticeboard, push-notification foundations, forms, Google Sheets integrations, and security controls.
- Versioned service worker, maskable icons, splash configuration, network-status handling, and controlled updates.
