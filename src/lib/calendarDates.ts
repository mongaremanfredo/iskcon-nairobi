import { vaishnavaCalendar2026 } from "@/data/site";

const CALENDAR_YEAR = 2026;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export type CalendarDate = {
  label: string;
  day: string;
  event: string;
  type?: string;
  isoDate: string;
  endsAt: number;
};

function toCalendarDate(item: { date: string; day: string; event: string; type?: string }): CalendarDate | null {
  const match = item.date.match(/^([A-Za-z]{3})\s+(\d{1,2})/);
  if (!match) return null;
  const month = MONTHS.indexOf(match[1]);
  if (month < 0) return null;

  const isoDate = `${CALENDAR_YEAR}-${String(month + 1).padStart(2, "0")}-${match[2].padStart(2, "0")}`;
  return {
    label: item.date,
    day: item.day,
    event: item.event,
    type: item.type,
    isoDate,
    endsAt: new Date(`${isoDate}T23:59:59+03:00`).getTime(),
  };
}

/** Calendar dates that have not finished yet in Nairobi, soonest first. */
export function getUpcomingCalendarDates(now: Date, limit?: number): CalendarDate[] {
  const upcoming = vaishnavaCalendar2026
    .flatMap((month) => month.events.map(toCalendarDate))
    .filter((item): item is CalendarDate => item !== null && item.endsAt >= now.getTime())
    .sort((a, b) => a.endsAt - b.endsAt);

  return limit ? upcoming.slice(0, limit) : upcoming;
}
