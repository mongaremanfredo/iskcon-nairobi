# Design System Notes

## Visual Direction

The site combines three visual cues:

- Temple warmth: rust red, saffron, gold, carved wood, flower garlands, prasadam
  imagery, and calm devotional typography.
- Nairobi and East Africa: acacia greens, savanna dividers, African landscape
  references, local community photography, and HKTC student life.
- ISKCON identity: the original lotus logo, Prabhupada-centered copy, kirtan,
  prasadam, deity worship, cow protection, and book study.

The interface should feel sacred and welcoming, not corporate. Avoid oversized
marketing cards, generic SaaS styling, and decorative effects that compete with
the temple photography.

## Core Tokens

Global colors and fonts are defined in `src/app/globals.css` and
`tailwind.config.ts`.

- `primary` / `#B74233`: ISKCON logo red and key accents.
- `sunset` / `#E08A3C`: saffron energy, CTAs, festival highlights.
- `gold` / `#D9A441`: devotional ornament, dividers, small metadata.
- `acacia` / `#5C7A52`: Nairobi, nature, Kirtan Safari, farm, and calmer bands.
- `dusk` / `#3A2A24`: text, dark navigation, grounded contrast.
- `sand` / `#F4ECE1`: main page background for long reading comfort.

Use Fraunces for display headings, Inter for interface text, and Source Serif 4
for long-form sacred/editorial writing.

## Spacing Rhythm

Homepage spacing is intentionally tighter than the first drafts. The current
order is:

1. Hero
2. Find Your Path
3. Kirtan Safari
4. Our Work
5. Our Impact
6. Guidance and Vision
7. Voices of the Community
8. Calendar
9. Make a Difference
10. Our World
11. Spiritual Hospitality

Desktop section tops were reduced to keep the homepage from feeling padded out.
Mobile sections are compressed more heavily, especially card grids, impact
statistics, Kirtan Safari details, and decorative cloud dividers.

When adding a section, match the nearest existing section rather than starting
with a generic `py-24`. For secondary pages, hero content must clear the fixed
navigation and the first post-hero section should start close enough that the
page does not feel like a landing-page template.

## Navigation

The main navigation is transparent at the top of visual pages and switches to a
solid compact header on scroll. Legal pages use a static solid header because
their background does not support transparent navigation.

The secondary status bar below the main header carries temple status and current
notice context. Keep it one line on mobile whenever possible.

The noticeboard icon is intentionally light: it should feel important but not
like a second menu button.

## Image Rules

- Prefer real ISKCON Nairobi photography whenever available.
- Keep the original full ISKCON logo for app icons and browser identity.
- Avoid crops that cut faces, deity heads, Prabhupada, or main devotional
  subjects.
- For deity or altar images, protect the top of the frame first. The base may
  extend downward if the section needs more height.
- Mobile crops are allowed to differ from desktop crops when it preserves the
  subject.

## Page Hero Rules

- Homepage hero: text stays low, CTAs close to the scroll hint, and no visible
  logo repetition inside the hero.
- Festival pages: keep the hero immersive, with strong event identity and
  readable CTA hierarchy.
- HKTC, Learn, Serve, Donate, Visit: desktop hero text has extra clearance from
  the fixed navigation; mobile already uses a tighter header rhythm.
- Legal pages: no image hero.

## Blog Format

Blog pages should read like devotional essays, not news cards. Use one strong
hero, restrained metadata, a clean article guide, and a readable single-column
body. Scriptural source links should be visible but not visually louder than the
story.

For Kirtan Safari source articles, the preferred style is continuous narration:
tell the Jharikhanda story directly, place the main image inside the story flow,
and keep the Kirtan Safari CTA below the text on desktop and mobile.
