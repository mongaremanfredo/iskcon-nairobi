# Kirtan Safari 2026 Evaluation Guide

Use this guide before merging `codex/kirtan-safari`. It is designed so a temple
representative can review the experience without changing the real event clock.

## 1. Start the review build

```powershell
npm install
npm run test:festival
npm run build
npm run dev
```

Open `http://localhost:3000`. If that port is occupied, use the port printed by
Next.js. The `festivalTime` query below is accepted only in development.

## 2. Review each lifecycle state

### Countdown

Open `/festivals/kirtan-safari?festivalTime=2026-08-27T17:59:59%2B03:00`.

- Countdown is legible and does not resize the page.
- Registration opens in a modal and remains usable with keyboard and touch.
- The confirmed official livestream is described as live and opens the supplied
  Kirtan Safari broadcast.

### First minute live

Open `/festivals/kirtan-safari?festivalTime=2026-08-27T18:00:01%2B03:00`.

- Countdown is replaced by Live Festival Status without a blank state.
- Thursday is highlighted.
- `Now` does not invent a duration; `Coming Next` uses the next confirmed time.
- The full programme shows `After Adivas` for prasadam without inventing a time.
- Registration, directions, Instagram, and YouTube remain available.

### Programme in progress

Open `/festivals/kirtan-safari?festivalTime=2026-08-28T19:45:00%2B03:00`.

- Friday and Balarama Purnima are highlighted.
- The page does not claim a start-only programme item is currently running.
- The next programme item uses the supplied poster time.
- Guest kirtaniyas appear after the live programme.

### Between days

Open `/festivals/kirtan-safari?festivalTime=2026-08-28T23:00:00%2B03:00`.

- The page says today's programme has concluded.
- It previews Saturday without claiming something is currently live.

### Festival concluded

Open `/festivals/kirtan-safari?festivalTime=2026-08-31T00:00:01%2B03:00`.

- The green campaign page becomes a neutral archive.
- Registration is replaced by future-update interest.
- Gratitude, four-day summary, stories, guests, and annual-edition navigation remain.
- Gallery and recording buttons appear only after their URLs are configured.

## 3. Review the homepage lifecycle

Repeat the live and concluded timestamps on `/`.

- During the event, the hero names the correct day and exposes live actions.
- The homepage festival section reflects the live state.
- After conclusion, the large festival section is removed.
- The hero retains a restrained retrospective slide until another major festival
  is deliberately assigned that slot.

## 4. Device matrix

Review each state at these minimum viewport sizes:

| Device | Viewport |
| --- | --- |
| Mobile portrait | 390 x 844 |
| Mobile landscape | 844 x 390 |
| Tablet portrait | 768 x 1024 |
| Tablet landscape | 1024 x 768 |
| Desktop | 1440 x 900 |

At each size, check for horizontal scrolling, clipped names, overlapping fixed
navigation, inaccessible arrows, layout shifts, and hidden CTAs. Rotate a real
phone once because browser chrome changes the usable viewport.

## 5. Interaction and resilience

- Tab through day tabs, social links, programme actions, registration, and modal
  controls. Focus must remain visible.
- Open registration, select multiple days, submit test data, and close with Escape.
- Switch the browser offline. Existing content remains readable.
- Restore connectivity and confirm the live panel recovers without a reload.
- Background the tab across a simulated boundary, return, and confirm it refreshes.
- Enable reduced motion and confirm pulsing or sliding motion is removed.
- Confirm the embedded livestream and its direct YouTube link both open the
  official Kirtan Safari broadcast while `livestream.enabled` is `true`.
- If an official stream is later supplied, test scheduled, live, offline, and
  ended statuses on a development branch before enabling it.

## 6. Data and operations

- Submit a test 2027 interest form and confirm a row appears in the Google Sheet
  tab `Kirtan Safari 2027 Interest`.
- Confirm the directions action opens the correct Nairobi temple in Google Maps.
- Confirm the public contact telephone number and social accounts.
- Dry-run each approved notification. Do not broadcast during evaluation.
- Add final gallery and recording URLs only when publicly accessible.

## 7. Approval record

Record the reviewer, date, tested device/browser, failed checks, and fixes in the
pull request or handover note. Production approval should explicitly cover:

- Programme accuracy
- Livestream status and destination
- Registration and future-interest data delivery
- Mobile portrait and landscape presentation
- Automatic start, overnight, and conclusion transitions
- Archive copy, imagery, gratitude, and links
