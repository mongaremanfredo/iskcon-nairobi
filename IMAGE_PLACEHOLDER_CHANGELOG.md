# Image Placeholder Changelog

Temporary visual asset refresh for ISKCON Nairobi. The purpose is to replace clearly generic/irrelevant remote graphics with more contextually appropriate placeholders while keeping user-added Nairobi, altar, Kirtan Safari, and brand assets untouched.

## Asset Inventory

| Current image/graphic | Used in | Depicts | Status |
|---|---|---|---|
| `/brand/iskcon-logo.svg`, `/brand/iskcon-mark.svg`, `/brand/iskcon-icon.svg`, `/brand/iskcon-logo-original.svg` | Navigation, metadata, brand UI | ISKCON identity | User/brand asset, untouched |
| `/icon.png`, `/apple-icon.png`, `/images/iskcon-nairobi-aerial-og.jpg` | Site metadata | Site icon and social preview | User/site asset, untouched |
| `/images/iskcon-nairobi-aerial.jpg` | Home, About, Visit, project data | Aerial ISKCON Nairobi view | User-added local photo, untouched |
| `/images/iskcon-nairobi-main-altar*.jpg` | Media gallery | ISKCON Nairobi altar | User-added local photos, untouched |
| `/images/kirtan-safari-2026-*` | Kirtan Safari section and pages | Event poster/logo/theme backgrounds | User-added event assets, untouched |
| `/images/placeholders/iskcon-temple-bangalore.jpg` | Generic temple/festival/page hero replacements | ISKCON temple architecture | New placeholder |
| `/images/placeholders/hare-krishna-harinam.jpg` | Kirtan, HKTC, learning, media replacements | Hare Krishna devotees on Harinam | New placeholder |
| `/images/placeholders/iskcon-food-for-life.jpg` | Food For Life/prasadam replacements | ISKCON Food for Life service | New placeholder |
| `/images/placeholders/iskcon-khichdi-prasadam.jpg` | Shop/prasadam sweet placeholders | Prasadam serving | New placeholder |
| `/images/placeholders/cows-pasture-pixabay.jpg` | Farm, goshala, cow protection replacements | Cows in pasture | New placeholder |
| `/images/placeholders/iskcon-ratha-yatra.jpg` | Ratha Yatra replacements | Ratha Yatra procession | New placeholder |
| `/images/placeholders/iskcon-ratha-yatra-moscow.jpg` | Festival support / public kirtan ambience replacements | Ratha Yatra procession | New placeholder |
| `https://source.unsplash.com/400x400/...testimonial...` | `src/data/site.ts` testimonials | Portrait placeholders | Retained because these were intentionally requested earlier for testimonial portraits; flagged for later final replacement |
| `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` | Public folder | Next/Vercel seed SVGs | Not referenced by current scan; untouched |

## Flagged Generic Or Unrelated Assets

The replaced assets were mostly remote Unsplash photos used for generic landscapes, student rooms, food, sweets, farm, media gallery, leadership cards, festival moods, and page heroes. They were serviceable stock imagery, but many did not clearly communicate ISKCON, Krishna consciousness, Vaishnava practice, prasadam, temple life, kirtan, Ratha Yatra, or cow protection.

The four testimonial portrait URLs remain flagged as temporary placeholders, but were left in place because they were added by request during the earlier mobile redesign.

## Replacements

| Original image path/URL | New image path | Source URL | Reason chosen |
|---|---|---|---|
| Unsplash savanna/kirtan/student/study images (`photo-1516026672322...`, `photo-1580674684081...`, `photo-1590012314607...`) | `/images/placeholders/hare-krishna-harinam.jpg` | https://commons.wikimedia.org/wiki/File:Russian_Hare_Krishna_devotees_on_Harinam.jpg | A Hare Krishna Harinam scene is more relevant to kirtan, learning, outreach, and devotional community than generic study or landscape photos. |
| Unsplash temple/landscape/guest-house/serve/donate/project hero images (`photo-1547471080...`, `photo-1504893524553...`, `photo-1631049307264...`, `photo-1618773928121...`, `photo-1566665797739...`) | `/images/placeholders/iskcon-temple-bangalore.jpg` | https://commons.wikimedia.org/wiki/File:ISKCON_Temple_Bangalore.jpg | High-resolution ISKCON temple architecture gives generic page heroes a clearer Krishna-conscious temple identity. |
| Unsplash Janmashtami/Gaura/Radhashtami/festival mood images (`photo-1609709295948...`, `photo-1609609830354...`, `photo-1551836022...`) | `/images/placeholders/iskcon-temple-bangalore.jpg` | https://commons.wikimedia.org/wiki/File:ISKCON_Temple_Bangalore.jpg | Replaces unrelated festival-mood stock with high-resolution ISKCON temple imagery; a smaller Janmashtami Commons file was downloaded but not used for layout-critical slots. |
| Unsplash Ratha Yatra/procession image (`photo-1561361058...`) | `/images/placeholders/iskcon-ratha-yatra.jpg` | https://commons.wikimedia.org/wiki/File:LondonRathaYatra07.jpg | Directly depicts a Ratha Yatra procession rather than a generic crowd or festival image. |
| Unsplash festival-support/sunset ambience image (`photo-1506905925346...`) | `/images/placeholders/iskcon-ratha-yatra-moscow.jpg` | https://commons.wikimedia.org/wiki/File:Ratha_Yatra_Moscow_2008.jpg | Keeps festival support imagery tied to public kirtan/procession culture. |
| Unsplash food/soup/prasadam images (`photo-1547592166...`) | `/images/placeholders/iskcon-food-for-life.jpg` | https://commons.wikimedia.org/wiki/File:ISKCON_Food_for_life.jpg | Directly represents ISKCON Food for Life service. |
| Unsplash sweets/shop food images (`photo-1567620905732...`, `photo-1565557623262...`, `photo-1551024506...`, `photo-1488477181946...`, `photo-1607920592519...`, `photo-1559181567...`) | `/images/placeholders/iskcon-khichdi-prasadam.jpg` | https://commons.wikimedia.org/wiki/File:Khichdi_Prasadam_in_Donna_(Iskcon_Bangalore).jpg | Uses prasadam imagery instead of unrelated dessert stock while the shop remains hidden. |
| Unsplash cow/farm/goshala images (`photo-1500595046743...`, `photo-1416879595882...`) | `/images/placeholders/cows-pasture-pixabay.jpg` | https://pixabay.com/images/search/cow%2Bpasture/ and https://cdn.pixabay.com/photo/2025/07/10/07/21/beef-9706049_1280.jpg | Cows in pasture are a better temporary fit for cow protection and goshala content than generic farm/field imagery. |
| Unsplash leadership portraits (`photo-1560250097...`, `photo-1559839734...`, `photo-1534030347209...`) | `/images/placeholders/iskcon-temple-bangalore.jpg`, `/images/placeholders/hare-krishna-harinam.jpg`, `/images/placeholders/iskcon-food-for-life.jpg` | See source URLs above | Avoids generic business/medical/portrait stock in leadership and service cards. |

## Downloaded But Not Currently Used

| Image path | Source URL | Note |
|---|---|---|
| `/images/placeholders/iskcon-temple-night-janmashtami.jpg` | https://commons.wikimedia.org/wiki/File:ISKCON_temple,_Delhi_at_Janamashtami.jpg | Downloaded successfully, but only 604px wide, so it was not used for high-impact layout slots. |

