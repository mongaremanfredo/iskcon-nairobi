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
    id: "welcome-to-iskcon-nairobi",
    title: "Welcome to ISKCON Nairobi",
    body: "Welcome to the ISKCON Nairobi website. Explore temple timings, festivals, classes, service opportunities, guest facilities, and ways to connect with Sri Sri Radha Bankebihari Temple.",
    dateLabel: "Welcome",
    tag: "Notice",
    href: "/",
    priority: "high",
  },
  {
    id: "jhulan-yatra-2026",
    title: "Jhulan Yatra at ISKCON Nairobi",
    body: "Join the Radha Govinda Jhulan Yatra celebrations from Sunday 23 August to Friday 28 August at Hare Krishna Temple Nairobi.",
    dateLabel: "23-28 Aug 2026",
    tag: "Festival",
    href: "/festivals",
    priority: "high",
  },
  {
    id: "beginners-bhagavad-gita-course-2026",
    title: "Beginners Bhagavad Gita course",
    body: "A weekly six-week beginners course is opening with in-person and online options. Register your interest through the Learn page.",
    dateLabel: "Sep 2026",
    tag: "Learn",
    href: "/learn#beginners-gita-course",
    priority: "high",
  },
  {
    id: "kirtan-safari-2026-registration",
    title: "Kirtan Safari 2026 registration is open",
    body: "Reserve your place for the four-day Kirtan Safari celebration at ISKCON Nairobi, beginning with Adivas on 27 August.",
    dateLabel: "27-30 Aug 2026",
    tag: "Festival",
    href: "/festivals/kirtan-safari",
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
];
