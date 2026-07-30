export type SiteNotice = {
  id: string;
  title: string;
  body: string;
  dateLabel: string;
  tag: string;
  href: string;
  priority?: "high" | "normal";
};

export const siteNotices: SiteNotice[] = [
  {
    id: "kirtan-safari-2026-registration",
    title: "Kirtan Safari 2026 registration is open",
    body: "Reserve your place for the four-day Kirtan Safari celebration at ISKCON Nairobi, beginning with Adivas on 27 August.",
    dateLabel: "27-30 Aug 2026",
    tag: "Festival",
    href: "/festivals/kirtan-safari/register",
    priority: "high",
  },
  {
    id: "ekadashi-festival-reminders",
    title: "Ekadashi and festival reminders",
    body: "You can now enable reminders for Ekadashi and major festivals directly from the temple calendar page.",
    dateLabel: "New feature",
    tag: "Calendar",
    href: "/festivals",
  },
  {
    id: "temple-daily-timings-updated",
    title: "Daily temple timings updated",
    body: "Morning darshan, evening arati, Tulasi arati, classes, bhoga and temple closing times are now reflected across the website.",
    dateLabel: "Temple notice",
    tag: "Timings",
    href: "/visit",
  },
];
