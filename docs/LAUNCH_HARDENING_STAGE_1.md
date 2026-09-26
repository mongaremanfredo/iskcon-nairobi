# Launch Hardening: Stage 1

Stage 1 makes dependency installation, visual assets, security policy, and the
release path reproducible. It does not promote code beyond `development`.

## Implemented controls

- Next.js and `eslint-config-next` are pinned to patched version `16.3.6`.
- Every direct dependency is pinned to an exact version and the lockfile remains
  the installation authority through `npm ci`.
- Vulnerable transitive packages have explicit patched resolutions.
- `npm audit --audit-level=moderate` is part of every release check.
- React render purity is an error, not an advisory warning.
- Fraunces, Inter, and Source Serif 4 are stored in `public/fonts`; rendering no
  longer contacts Google Fonts during a build or browser session.
- A repository-asset check rejects remote font imports, CSS assets, and remote
  `src`/`poster` attributes.
- A security check asserts the required CSP directives and HTTP headers.
- GitHub Actions are pinned to immutable commit revisions.
- Pull requests must follow `feature|fix|chore|docs|security -> development ->
  staging -> release -> main`.
- Node 22 is the repository and CI baseline.

## Necessary external services

Core pages, fonts, images, navigation, offline shell, and static content render
from the repository. The following features are external by their nature and
must fail gracefully rather than becoming hidden rendering dependencies:

- Google Sheets receives forms, analytics, and push-subscription records.
- Vercel hosts the application and supplies serverless execution.
- Browser push services deliver notifications.
- Google Maps, social networks, source articles, photo albums, and YouTube are
  explicit outbound links or optional embeds initiated by the visitor.

An outage in those services must not prevent ordinary pages from rendering.

## GitHub settings to apply

Create branch rulesets for `development`, `staging`, `release`, and `main`:

1. Require pull requests and at least one approval.
2. Require the `Lint, tests, PWA, and production build` status check.
3. Require branches to be up to date before merging.
4. Block force pushes and deletion.
5. Require conversation resolution.
6. Restrict bypass permission to named project administrators.
7. Apply the rules to administrators after the handover is complete.
8. Permit only the promotion sequence documented above.

Repository settings cannot create these server-side rules by themselves; an
administrator must apply them in GitHub after the repository is transferred.

## Vercel settings to apply

1. Set `main` as the only production branch.
2. Keep feature, `development`, `staging`, and `release` deployments as previews.
3. Require the GitHub quality check before production promotion.
4. Enable deployment protection for preview URLs that expose forms or data.
5. Store secrets only in Vercel environment variables and scope them separately
   for Preview and Production.
6. Assign `iskconnairobi.com` and `www.iskconnairobi.com` only to Production;
   redirect one host permanently to the selected canonical host.
7. Keep the previous production deployment available as the rollback target.
8. Disable unreviewed CLI production deployments for ordinary contributors.

## Release evidence required

- clean `npm ci` from the committed lockfile;
- zero-vulnerability `npm audit` result;
- passing `npm run check:release`;
- desktop and mobile browser screenshots of representative pages;
- no console errors or failed repository asset requests;
- security headers verified from the running preview;
- preview deployment URL and exact commit SHA;
- documented residual risks and rollback commit.
