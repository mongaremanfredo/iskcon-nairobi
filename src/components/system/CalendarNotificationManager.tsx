"use client";

import { useEffect, useRef } from "react";
import { calendarNotificationEvents, type CalendarNotificationEvent } from "@/lib/calendarNotifications";

const OPT_IN_KEY = "iskcon-calendar-notifications";
const SENT_KEY = "iskcon-calendar-notifications-sent";
const MAX_TIMEOUT_MS = 2_147_000_000;
const RESCAN_INTERVAL_MS = 1000 * 60 * 60 * 12;
const DAY_MS = 1000 * 60 * 60 * 24;

function readSentEvents() {
  try {
    const raw = window.localStorage.getItem(SENT_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function markSent(eventId: string) {
  const sent = readSentEvents();
  sent[eventId] = new Date().toISOString();
  window.localStorage.setItem(SENT_KEY, JSON.stringify(sent));
}

function isReminderDue(event: CalendarNotificationEvent, now: number, sent: Record<string, string>) {
  if (sent[event.id]) {
    return false;
  }

  const eventTime = Date.parse(event.startsAt);
  const endOfDay = eventTime + DAY_MS;

  return now >= eventTime && now < endOfDay;
}

async function showReminder(event: CalendarNotificationEvent) {
  const registration = await navigator.serviceWorker.ready;

  await registration.showNotification(event.title, {
    body: event.body,
    tag: event.id,
    icon: "/brand/icon-192.png",
    badge: "/brand/icon-192.png",
    data: {
      url: event.href,
    },
  });

  markSent(event.id);
}

export default function CalendarNotificationManager() {
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("Notification" in window)) {
      return;
    }

    const clearTimers = () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };

    const schedule = () => {
      clearTimers();

      if (
        window.localStorage.getItem(OPT_IN_KEY) !== "enabled" ||
        Notification.permission !== "granted"
      ) {
        return;
      }

      const now = Date.now();
      const sent = readSentEvents();
      const dueEvents = calendarNotificationEvents.filter((event) =>
        isReminderDue(event, now, sent)
      );

      dueEvents.forEach((event) => {
        void showReminder(event).catch(() => {});
      });

      const nextEvent = calendarNotificationEvents.find((event) => {
        const eventTime = Date.parse(event.startsAt);
        return eventTime > now && !sent[event.id];
      });

      if (!nextEvent) {
        return;
      }

      const delay = Math.min(
        Math.max(Date.parse(nextEvent.startsAt) - now, 1000),
        MAX_TIMEOUT_MS
      );

      timers.current.push(
        window.setTimeout(schedule, delay),
        window.setTimeout(schedule, RESCAN_INTERVAL_MS)
      );
    };

    const handleVisibility = () => {
      if (!document.hidden) {
        schedule();
      }
    };

    schedule();
    window.addEventListener("focus", schedule);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("iskcon-calendar-notifications-changed", schedule);

    return () => {
      clearTimers();
      window.removeEventListener("focus", schedule);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("iskcon-calendar-notifications-changed", schedule);
    };
  }, []);

  return null;
}
