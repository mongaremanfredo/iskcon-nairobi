import { describe, expect, it } from "vitest";
import type { CalendarNotificationEvent } from "@/lib/calendarNotifications";
import { eventsDueInNairobi, nairobiDateKey } from "@/lib/calendarPushSchedule";

const event: CalendarNotificationEvent = {
  id: "2026-10-22-ekadashi",
  title: "Ekadashi reminder",
  body: "Today is Ekadashi.",
  event: "Ekadashi",
  dateLabel: "Thu 22",
  startsAt: "2026-10-22T07:00:00+03:00",
  href: "/festivals",
  type: "Ekadashi",
};

describe("calendar push scheduling", () => {
  it("uses the Nairobi calendar date around UTC midnight", () => {
    expect(nairobiDateKey(new Date("2026-10-21T21:30:00.000Z"))).toBe("2026-10-22");
  });

  it("returns only events occurring today in Nairobi", () => {
    expect(eventsDueInNairobi([event], new Date("2026-10-22T04:00:00.000Z"))).toEqual([
      event,
    ]);
    expect(eventsDueInNairobi([event], new Date("2026-10-23T04:00:00.000Z"))).toEqual([]);
  });
});
