# Go-Live Content and Placeholder Audit

Audit date: 27 September 2026

This checklist treats every operational detail as provisional until the temple
confirms it. Items are grouped by launch risk. A source file reference is
included so an editor can update the exact content without searching the site.

## Blockers: remove, hide, or confirm before launch

### Shop (`/shop`)

- The route contains six unverified products, prices, quantities, descriptions,
  delivery promises, and preparation claims (`src/app/shop/page.tsx`).
- Every product uses the same unrelated khichdi stock photograph.
- `Order Now` is a button with no action. It is a dead conversion path.
- The page says pickup is at the temple in South C, which conflicts with the
  Parklands / West Ngara address used everywhere else.
- The route is not in the main navigation or sitemap, but it remains publicly
  accessible and crawlable. Hide or remove it until the catalogue and ordering
  process are approved.

### Guest house (`/guest-house` and homepage guest-house section)

- The three room photographs are Pexels hotel-room stock images, not verified
  photographs of the ISKCON Nairobi guest house.
- Room names, capacities, amenities, laundry access, Wi-Fi, meals, security,
  tours, retreat arrangements, and the 24-hour response promise require
  operational confirmation.
- All prices say `Enquire`; actual rates, taxes, booking conditions, check-in,
  cancellation terms, availability process, and booking owner are absent.
- The hero image is a Thika farm image rather than accommodation imagery.
- Confirm that the guest house is currently operational before retaining the
  page or homepage promotion.
- Sources: `src/data/site.ts`, `src/app/guest-house/page.tsx`, and
  `src/components/sections/GuestHouseSection.tsx`.

### Donations (`/donate` and `/donate/[fund]`)

- Payment integration is explicitly unfinished. Each fund currently instructs
  the visitor to telephone or email the office.
- Confirm every fund, its purpose, and who is authorized to receive and account
  for designated donations.
- Obtain written approval for the claims that all designated donations reach
  their intended programme, administrative costs are covered separately,
  formal receipts are issued for every donation, and tax documentation is
  available. These are financial and legal promises.
- Confirm that receipt handling and future M-Pesa/card integrations use
  temple-owned accounts.
- Sources: `src/app/donate/page.tsx`, `src/app/donate/[fund]/page.tsx`, and
  `src/data/site.ts`.

### Leadership (`/leadership`)

- Remove the public build note: `This section is intentionally built to expand
  when the full list is supplied...`.
- Confirm names, honorifics, titles, reporting structure, biographies,
  photographs, and consent for every listed leader.
- Confirm broad institutional descriptions such as `GBC Member`, `Initiating
  Guru`, `Regional Secretary`, both vice-president roles, departmental
  responsibilities, and the `East Africa mission` language.
- The department list currently describes functions, not named department
  heads. Supply the final organizational structure or clearly present it as a
  service-directory overview.
- Sources: `src/app/leadership/page.tsx` and `src/data/site.ts`.

## High-priority factual confirmation

### Primary identity and contact details

- Confirm the legal/public temple name, spelling of `Bankebihari`, full address,
  opening hours, phone `+254 722 815 039`, email `iskconnairobi@gmail.com`, and
  WhatsApp `+254 721 667181`.
- The YouTube link is a search-results page, not an official channel URL.
  Replace it with the verified temple channel.
- Verify the Facebook and Instagram accounts and Google Maps destination.
- Source: `src/data/site.ts`.

### Daily and weekly schedules

- Verify every temple opening, arati, darshan, bhoga, class, and closing time.
- Verify the daily 8:00 A.M. Bhagavatam class; Sunday programme; HKTC evening
  classes; community student classes; Bhakti Vriksha; and seminar claims.
- The six-week Bhagavad-gita course began in September 2026. Confirm whether
  registration should now close, remain open for a future intake, or become an
  archive. `New 6-week course` will become stale.
- Sources: `src/data/site.ts`, `src/app/visit/page.tsx`, and
  `src/app/learn/page.tsx`.

### Statistics and impact claims

- Confirm `1,000+ Students & Youth`, `10,000+ Meals Monthly`, `200+ Protected
  Cows`, and `1,000+ Festival Guests`.
- Food For Life separately claims 10,000+ meals monthly, 12+ distribution
  points, 10+ years of service, and 500+ volunteers. Confirm all figures,
  service locations, beneficiary groups, and whether distribution is daily.
- HKTC Nairobi claims 10,000+ students, 10+ years, 15+ nations, two residences,
  daily meals, annual examinations, graduation, and specific programme support
  needs. Confirm which are current rather than historical article details.
- Thika Farm claims 200+ cows and bulls, all-year visits, produce supplied to
  the temple and Food For Life, milk/yoghurt/ghee/paneer production, retreats,
  and residential or seasonal volunteering. Confirm each operation.
- Sources: `src/data/site.ts` and project pages under `src/app/projects/`.

### Project descriptions

- HKTC Juja is described as a growing outreach, satellite campus, and
  theological college with a rigorous curriculum. Confirm its official status,
  location, leadership, current programme, schedule, and enquiry contact.
- Confirm whether HKTC admissions should be email-only; its application page is
  an interest prompt, not an application form.
- Confirm every Food For Life distribution area, including Kibera, Mathare,
  Korogocho, Mukuru, Juja, Thika, Westlands, South B, South C, Karen, and
  Eastleigh.
- Sources: `src/app/projects/` and `src/data/site.ts`.

## Events and time-sensitive content

- The calendar is hard-coded for 2026. Establish who will approve and replace
  it for 2027, including local Ekadashi calculations and festival times.
- Festival cards still retain historical 2026 dates in source data. Runtime
  filters hide expired homepage highlights, but editors must not mistake those
  entries for the next edition.
- Kirtan Safari contains concluded-event configuration and dormant livestream
  UI. It is currently an archive; verify that registration and live controls
  cannot become public accidentally when future dates are edited.
- Gaura Purnima and Ratha Yatra lack confirmed current dates, times, routes, or
  programmes and send visitors to a generic contact page to `Register Interest`.
- Janmashtami and Radhashtami say the yearly programme will be announced later;
  replace this wording when approved programme details exist.
- The Bhagavad-gita course notice and registrations require a current status.
- Sources: `src/data/site.ts`, `src/data/notices.ts`, festival pages, and
  `src/data/kirtanSafari.ts`.

## Images, identity, and consent

- Replace or explicitly approve the remaining non-Nairobi library images:
  Russian Harinam devotees, ISKCON Bangalore architecture, ISKCON Bangalore
  khichdi, a Pixabay cow pasture, London Ratha Yatra, and three Pexels rooms.
- Verify licences and attribution obligations before retaining any library
  media. The current inventory is in `docs/ASSET_SOURCES.md`.
- Confirm that gallery captions accurately describe the photographed event and
  location. Some labels assign specific contexts such as Kibera, HKTC classes,
  or festival celebrations.
- Obtain consent or an appropriate lawful basis for identifiable devotee,
  student, child, leader, testimonial, and guest photographs.
- Confirm the four testimonials, quotations, names, roles, images, and consent.
  They currently read as direct personal endorsements.
- Generated or illustrative festival artwork should not be presented as
  documentary photography of ISKCON Nairobi.

## Claims requiring temple or legal approval

- Verify the About-page history, including `over 50 years`, `one of the oldest
  ISKCON centres in Africa`, all timeline dates, and institutional milestones.
- Review `Privacy Policy` and `Terms and Conditions` with the organization that
  will legally operate the site. They make claims about data-controller status,
  retention, security, safeguarding, receipts, payments, dispute resolution,
  and legal obligations.
- Supply the registered entity name, registration details, privacy contact, and
  authorized legal address if these differ from the public temple identity.
- Confirm the footer description `digital headquarters for ISKCON East Africa`;
  it may imply a broader mandate than the Nairobi temple has authorized.
- Confirm visitor statements about free prasadam, photography permissions,
  coverings at the entrance, guest accommodation, and retreat availability.
- Confirm volunteer opportunities, `hundreds of dedicated volunteers`, daily or
  weekend shifts, child/youth involvement, and safeguarding procedures.

## Functional and editorial expectations

- `Register as Volunteer` opens the general contact page rather than a dedicated
  volunteer form. Rename the action or create the promised workflow.
- `Register Interest` on several festival/course pages also opens generic
  contact or registration flows. Ensure each label accurately describes what
  happens and that submissions reach the intended Sheet tab and owner.
- Confirm each public form, its Google Sheet destination, notification recipient,
  retention period, and fallback when Google APIs are unavailable.
- Test every phone, mail, WhatsApp, social, map, registration, donation, gallery,
  noticeboard, notification, install, privacy, and footer link on production.

## Production domain migration

The canonical application domain is now `https://iskconnairobi.com` in:

- root metadata and Open Graph canonical base (`src/app/layout.tsx`)
- robots and sitemap URLs (`src/app/robots.ts`, `src/app/sitemap.ts`)
- push-notification URL normalization (`scripts/send-push.mjs`)
- repository deployment notes (`README.md`)
- privacy and terms already referenced the official domain

No old Esthrema or Vercel production-domain references remain in tracked source.
Localhost URLs in development/testing documentation remain intentionally local.
The `esthrema.com` footer link is the designer credit, not the site domain.

External launch work still required outside this repository:

- attach `iskconnairobi.com` and `www.iskconnairobi.com` to the production host;
- configure DNS at the domain provider;
- choose and enforce one canonical host with a permanent redirect;
- redirect the old Esthrema domain to the matching path on the new domain;
- add and verify the new property in Google Search Console and submit
  `https://iskconnairobi.com/sitemap.xml`;
- confirm production environment variables, OAuth/API allowlists, analytics,
  notification keys, email sender domains, and any Google service configuration
  that restricts requests by origin or domain;
- refresh social-media link previews after DNS and deployment are live.
