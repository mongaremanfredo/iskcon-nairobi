import { NextRequest, NextResponse } from "next/server";
import { calendarNotificationEvents } from "@/lib/calendarNotifications";
import {
  hasCalendarEventBeenDelivered,
  recordCalendarDelivery,
} from "@/lib/calendarPushDelivery";
import { eventsDueInNairobi, nairobiDateKey } from "@/lib/calendarPushSchedule";
import { sendCalendarPush } from "@/lib/calendarPush";
import { requireBearerToken } from "@/lib/apiSecurity";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const unauthorized = requireBearerToken(request, process.env.CRON_SECRET);
  if (unauthorized) return unauthorized;

  try {
    const now = new Date();
    const dueEvents = eventsDueInNairobi(calendarNotificationEvents, now);
    const deliveries = [];

    for (const event of dueEvents) {
      if (await hasCalendarEventBeenDelivered(event.id)) {
        deliveries.push({ eventId: event.id, status: "already-sent" });
        continue;
      }

      const result = await sendCalendarPush(event);
      if (result.failed === 0) {
        await recordCalendarDelivery({ eventId: event.id, ...result });
      }
      deliveries.push({
        eventId: event.id,
        status: result.failed === 0 ? "sent" : "partial-failure",
        ...result,
      });
    }

    return NextResponse.json({
      ok: true,
      nairobiDate: nairobiDateKey(now),
      deliveries,
    });
  } catch (error) {
    console.error("Calendar reminder cron failed", error);
    return NextResponse.json({ message: "Calendar reminder run failed." }, { status: 500 });
  }
}
