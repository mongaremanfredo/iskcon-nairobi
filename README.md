# ISKCON Nairobi — World Class Digital Platform

> Production Next.js website for ISKCON Nairobi / East Africa HQ  
> 19 routes · TypeScript · Tailwind v4 · Sanity CMS schemas · Vercel-ready

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (installed) |
| CMS | Sanity (13 schemas ready) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/                  # 19 routes (all static)
│   ├── page.tsx          # Homepage (11 sections)
│   ├── about/
│   ├── visit/
│   ├── learn/
│   ├── serve/
│   ├── contact/
│   ├── donate/
│   ├── media/
│   ├── shop/
│   ├── guest-house/
│   ├── projects/
│   │   ├── hktc-nairobi/
│   │   ├── hktc-juja/
│   │   ├── thika-farm/
│   │   └── food-for-life/
│   └── festivals/
│       ├── kirtan-safari/
│       ├── rath-yatra/
│       ├── janmashtami/
│       └── gaura-purnima/
├── components/
│   ├── layout/           Navigation.tsx · Footer.tsx
│   ├── sections/         11 homepage section components
│   └── ui/               PageHero.tsx (reusable inner-page hero)
├── data/
│   └── site.ts           All dummy content (replace with Sanity)
└── lib/
    └── utils.ts

sanity/schemas/           13 CMS content type schemas
```

---

## Design System

### Colors (in `globals.css @theme`)
- `--color-gold: #C79A3B` — Primary brand, CTAs
- `--color-temple-brown: #5E3B1F` — Dark sections
- `--color-temple-cream: #F8F2E8` — Light backgrounds
- `--color-forest: #3E5F46` — Nature/farm accent
- `--color-saffron: #D86C24` — Tertiary accent

### Typography
- **Headings**: Playfair Display
- **Body**: Inter
- **Quotes**: Cormorant Garamond italic

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build (19 static routes)
```

---

## Deployment — Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "feat: ISKCON Nairobi v1"
git remote add origin https://github.com/YOUR_ORG/iskcon-nairobi.git
git push -u origin main

# 2. vercel.com → New Project → Import repo → Deploy
# Framework auto-detected as Next.js
```

### Environment Variables (add in Vercel dashboard)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Connecting Sanity CMS

```bash
npm install next-sanity @sanity/image-url
npx sanity@latest init --env .env.local
```

Register schemas in `sanity.config.ts`:
```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import * as schemas from './sanity/schemas'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: Object.values(schemas) },
})
```

Replace static data: each export in `src/data/site.ts` maps 1:1 to a schema.
Use GROQ queries via `sanity.fetch()` in server components.

---

## M-PESA Integration

Schemas include `mpesaPaybill` + `mpesaAccount` fields on `donationCampaign`.

For live payments use **IntaSend** or **Pesapal** (both support M-PESA + card).
Handle callbacks at `src/app/api/mpesa/callback/route.ts`.

---

## Next Development Priorities

1. Sanity CMS live data connection
2. Donation flow — IntaSend/Pesapal integration
3. Festival registration forms (API routes + email)
4. Blog section (CMS-driven, category filtered)
5. Google Maps embeds (temple, farm, distribution points)
6. Guest house booking calendar
7. Kirtan Safari multi-step registration
8. Livestream YouTube embed on festival pages
9. WhatsApp floating CTA widget
10. PWA for low-connectivity visitors

---

*Built by Esthrema — esthrema.com*
