import { vaishnavaCalendar2026 } from "@/data/site";

export type CalendarNotificationEvent = {
  id: string;
  title: string;
  body: string;
  event: string;
  dateLabel: string;
  startsAt: string;
  href: string;
  type: "Ekadashi" | "Major";
};

const monthNumbers: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

function eventSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hrefForEvent(event: string) {
  const lower = event.toLowerCase();

  if (lower.includes("janmashtami")) {
    return "/festivals/janmashtami";
  }

  if (lower.includes("radhashtami")) {
    return "/festivals/radhashtami";
  }

  if (lower.includes("kirtan safari")) {
    return "/festivals/kirtan-safari";
  }

  if (lower.includes("ratha yatra")) {
    return "/festivals/rath-yatra";
  }

  if (lower.includes("gaura purnima")) {
    return "/festivals/gaura-purnima";
  }

  return "/festivals";
}

function titleForEvent(event: string, type: "Ekadashi" | "Major") {
  if (type === "Ekadashi") {
    return "Ekadashi reminder";
  }

  return event.split(" - ")[0].split(" / ")[0];
}

function bodyForEvent(event: string, type: "Ekadashi" | "Major") {
  if (type === "Ekadashi") {
    return `Today is ${event}. Please check temple announcements for local fasting details.`;
  }

  return `Today at ISKCON Nairobi: ${event}. Open the calendar for programme details.`;
}

export const calendarNotificationEvents: CalendarNotificationEvent[] =
  vaishnavaCalendar2026
    .flatMap((month) => {
      const monthNumber = monthNumbers[month.month];

      return month.events
        .filter((item) => item.type === "Ekadashi" || item.type === "Major")
        .map((item) => {
          const day = item.date.replace(/^\D+/, "").padStart(2, "0");
          const type = item.type as "Ekadashi" | "Major";
          const startsAt = `2026-${monthNumber}-${day}T07:00:00+03:00`;
          const id = `2026-${monthNumber}-${day}-${eventSlug(item.event)}`;

          return {
            id,
            title: titleForEvent(item.event, type),
            body: bodyForEvent(item.event, type),
            event: item.event,
            dateLabel: item.date,
            startsAt,
            href: hrefForEvent(item.event),
            type,
          };
        });
    })
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt));
