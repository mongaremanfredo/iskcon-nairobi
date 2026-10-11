import type { CalendarNotificationEvent } from "@/lib/calendarNotifications";

const NAIROBI_TIME_ZONE = "Africa/Nairobi";

export function nairobiDateKey(now: Date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: NAIROBI_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${value.year}-${value.month}-${value.day}`;
}

export function eventsDueInNairobi(
  events: CalendarNotificationEvent[],
  now: Date = new Date()
) {
  const today = nairobiDateKey(now);
  return events.filter((event) => event.startsAt.slice(0, 10) === today);
}
