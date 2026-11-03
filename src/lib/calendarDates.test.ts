import { describe, expect, it } from "vitest";
import { getUpcomingCalendarDates } from "./calendarDates";

describe("getUpcomingCalendarDates", () => {
  it("returns only future dates, soonest first", () => {
    const now = new Date("2026-11-04T09:00:00+03:00");
    const dates = getUpcomingCalendarDates(now);

    expect(dates.length).toBeGreaterThan(0);
    expect(dates.every((item) => item.endsAt >= now.getTime())).toBe(true);
    expect([...dates].sort((a, b) => a.endsAt - b.endsAt)).toEqual(dates);
  });

  it("keeps a date listed until that day ends in Nairobi", () => {
    const first = getUpcomingCalendarDates(new Date("2026-01-01T00:00:00+03:00"), 1)[0];

    const lateThatDay = new Date(`${first.isoDate}T23:00:00+03:00`);
    expect(getUpcomingCalendarDates(lateThatDay, 1)[0].isoDate).toBe(first.isoDate);

    const nextMorning = new Date(first.endsAt + 60_000);
    expect(getUpcomingCalendarDates(nextMorning, 1)[0].isoDate).not.toBe(first.isoDate);
  });

  it("applies the limit", () => {
    expect(getUpcomingCalendarDates(new Date("2026-01-01T00:00:00+03:00"), 4)).toHaveLength(4);
  });

  it("is empty once the calendar year has finished", () => {
    expect(getUpcomingCalendarDates(new Date("2027-01-02T00:00:00+03:00"))).toEqual([]);
  });
});
