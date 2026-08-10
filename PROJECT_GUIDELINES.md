# Project Guidelines

This repository is the production website for ISKCON Nairobi / Sri Sri Radha
Bankebihari Temple. Treat it as a client handoff codebase: keep copy respectful,
assets traceable, spacing intentional, and public integrations secure.

## Start Here

- `README.md` explains local setup, environment variables, deployment, and
  operational checks.
- `docs/DESIGN_SYSTEM.md` records the visual language, spacing presets,
  navigation behavior, page hero rules, and mobile priorities.
- `docs/CONTENT_GUIDE.md` explains where shared content lives and how to add
  new pages, festivals, blog posts, notices, and images.
- `docs/ASSET_SOURCES.md` records externally sourced library assets that still
  need periodic review or replacement with final temple photography.

## Development Principles

- Keep shared content in `src/data/site.ts` when it appears in multiple places.
- Keep page-specific story, layout, and metadata inside the relevant route under
  `src/app`.
- Use existing section components and spacing presets before creating new layout
  primitives.
- Preserve mobile quality first. Most audience traffic is expected to come from
  phones, so mobile spacing, tap targets, image crops, and navigation density are
  not secondary polish.
- Never commit secrets. Local values belong in `.env.local`; production values
  belong in Vercel environment variables.
- After changing routes, metadata, API handlers, PWA files, or shared layout,
  run `npm run build` before deploying.
