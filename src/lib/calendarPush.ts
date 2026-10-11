import webpush from "web-push";
import type { CalendarNotificationEvent } from "@/lib/calendarNotifications";
import { listPushSubscriptions, removePushSubscription } from "@/lib/pushSubscriptions";

export type CalendarPushResult = {
  attempted: number;
  delivered: number;
  failed: number;
  pruned: number;
};

function configureWebPush() {
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;

  if (!publicKey || !privateKey || !subject) {
    throw new Error("VAPID push credentials are not configured.");
  }

  webpush.setVapidDetails(subject, publicKey, privateKey);
}

export async function sendCalendarPush(event: CalendarNotificationEvent) {
  configureWebPush();

  const subscriptions = (await listPushSubscriptions()).filter(
    ({ record }) => record.calendarEnabled
  );
  const result: CalendarPushResult = {
    attempted: subscriptions.length,
    delivered: 0,
    failed: 0,
    pruned: 0,
  };
  const payload = JSON.stringify({
    title: event.title,
    body: event.body,
    url: event.href,
    tag: event.id,
    icon: "/brand/icon-192.png",
    badge: "/brand/icon-192.png",
  });

  for (const { record } of subscriptions) {
    try {
      await webpush.sendNotification(
        { endpoint: record.endpoint, keys: record.keys },
        payload,
        { TTL: 60 * 60 * 24 }
      );
      result.delivered += 1;
    } catch (error) {
      const status =
        typeof error === "object" && error && "statusCode" in error
          ? Number(error.statusCode)
          : 0;

      if (status === 404 || status === 410) {
        await removePushSubscription(record.endpoint);
        result.pruned += 1;
      } else {
        result.failed += 1;
      }
    }
  }

  return result;
}
