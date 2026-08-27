export type KirtanSafariNotification = {
  id: string;
  sendAt: string;
  title: string;
  body: string;
  url: string;
  tag: string;
};

// These are the only approved festival broadcasts. The operator must preview
// and explicitly confirm each one; development never sends them automatically.
export const kirtanSafariNotifications: KirtanSafariNotification[] = [
  {
    id: "kirtan-safari-day-1",
    sendAt: "2026-08-27T17:30:00+03:00",
    title: "Kirtan Safari Begins Today",
    body: "Join us for Adivas from 6:00 PM at Hare Krishna Temple Nairobi.",
    url: "/festivals/kirtan-safari#live",
    tag: "kirtan-safari-day-1",
  },
  {
    id: "kirtan-safari-day-2",
    sendAt: "2026-08-28T09:30:00+03:00",
    title: "Kirtan Safari Day Two",
    body: "Join us today for Balarama Purnima kirtan, abhishek, talks, and prasadam.",
    url: "/festivals/kirtan-safari#live",
    tag: "kirtan-safari-day-2",
  },
  {
    id: "kirtan-safari-day-3",
    sendAt: "2026-08-29T09:30:00+03:00",
    title: "Kirtan Safari Day Three",
    body: "Join us today for kirtan, special Harinam, and prasadam in Nairobi.",
    url: "/festivals/kirtan-safari#live",
    tag: "kirtan-safari-day-3",
  },
  {
    id: "kirtan-safari-day-4",
    sendAt: "2026-08-30T09:30:00+03:00",
    title: "Kirtan Safari Final Day",
    body: "Join us today for continuous kirtan from 10:00 AM at Hare Krishna Temple Nairobi.",
    url: "/festivals/kirtan-safari#live",
    tag: "kirtan-safari-day-4",
  },
];
