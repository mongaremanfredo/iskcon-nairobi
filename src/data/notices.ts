import type { FestivalState } from "@/lib/kirtanSafariState";

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
    id: "radhastami-2026",
    title: "Radhastami at ISKCON Nairobi",
    body: "Join us in celebrating the appearance of Srimati Radharani with kirtan, class, special worship, offerings, service, and prasadam.",
    dateLabel: "19 Sep 2026",
    tag: "Festival",
    href: "/festivals/radhastami",
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

export function getSiteNotices(festivalState: FestivalState): SiteNotice[] {
  const currentNotices = festivalState.phase === "concluded"
    ? siteNotices.filter((notice) => notice.id !== "kirtan-safari-2026-registration")
    : siteNotices;

  return currentNotices.map((notice) => {
    if (notice.id !== "kirtan-safari-2026-registration") return notice;

    if (festivalState.phase === "live") {
      return {
        ...notice,
        title: `Kirtan Safari is live: ${festivalState.currentDay?.theme ?? "Join the kirtan"}`,
        body: "Join today's programme at Hare Krishna Temple Nairobi. Registration, directions, the live programme, and broadcast links are available on the festival page.",
        dateLabel: festivalState.currentDay?.shortLabel ?? "Live now",
        tag: "Live Festival",
      };
    }

    if (festivalState.phase === "between-days") {
      return {
        ...notice,
        title: "Kirtan Safari continues tomorrow",
        body: festivalState.nextDay
          ? `Today's programme has concluded. Join us tomorrow for ${festivalState.nextDay.theme} at Hare Krishna Temple Nairobi.`
          : "Today's programme has concluded. Open the festival page for the next confirmed programme.",
        dateLabel: festivalState.nextDay?.shortLabel ?? "Continues",
        tag: "Festival Update",
      };
    }

    return notice;
  });
}
