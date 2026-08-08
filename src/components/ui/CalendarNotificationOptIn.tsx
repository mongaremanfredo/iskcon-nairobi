"use client";

import { useEffect, useMemo, useState } from "react";
import { BellRing, CalendarDays, ShieldCheck } from "lucide-react";
import { calendarNotificationEvents } from "@/lib/calendarNotifications";
import {
  disablePushOnDevice,
  enablePushOnDevice,
  keepDevicePushSubscribed,
} from "@/lib/pushClient";

const OPT_IN_KEY = "iskcon-calendar-notifications";

type PermissionState = NotificationPermission | "unsupported";

export default function CalendarNotificationOptIn() {
  const [permission, setPermission] = useState<PermissionState>("default");
  const [enabled, setEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const upcomingEvents = useMemo(() => {
    const now = Date.now();

    return calendarNotificationEvents
      .filter((event) => Date.parse(event.startsAt) >= now)
      .slice(0, 3);
  }, []);

  useEffect(() => {
    if (!("Notification" in window) || !("serviceWorker" in navigator)) {
      setPermission("unsupported");
      return;
    }

    setPermission(Notification.permission);
    setEnabled(window.localStorage.getItem(OPT_IN_KEY) === "enabled");
  }, []);

  useEffect(() => {
    if (!enabled || permission !== "granted") {
      return undefined;
    }

    let cancelled = false;

    void navigator.serviceWorker.ready.then((registration) => {
      if (!cancelled) {
        void enablePushOnDevice(registration);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [enabled, permission]);

  const enableReminders = async () => {
    if (!("Notification" in window) || !("serviceWorker" in navigator)) {
      setPermission("unsupported");
      return;
    }

    setIsSaving(true);

    try {
      await navigator.serviceWorker.register("/sw.js");
      const result =
        Notification.permission === "granted"
          ? "granted"
          : await Notification.requestPermission();

      setPermission(result);

      if (result === "granted") {
        window.localStorage.setItem(OPT_IN_KEY, "enabled");
        setEnabled(true);
        window.dispatchEvent(new Event("iskcon-calendar-notifications-changed"));

        const registration = await navigator.serviceWorker.ready;
        await enablePushOnDevice(registration);
        await registration.showNotification("Calendar reminders enabled", {
          body: "You will receive reminders for Ekadashi and major ISKCON Nairobi festivals on this device.",
          tag: "iskcon-calendar-reminders-enabled",
          icon: "/brand/icon-192.png",
          badge: "/brand/icon-192.png",
          data: {
            url: "/festivals",
          },
        });
      }
    } finally {
      setIsSaving(false);
    }
  };

  const disableReminders = async () => {
    window.localStorage.removeItem(OPT_IN_KEY);
    setEnabled(false);
    window.dispatchEvent(new Event("iskcon-calendar-notifications-changed"));

    if (!keepDevicePushSubscribed(OPT_IN_KEY)) {
      const registration = await navigator.serviceWorker.getRegistration();
      await disablePushOnDevice(registration ?? null);
    }
  };

  const buttonLabel = (() => {
    if (permission === "unsupported") {
      return "Not supported here";
    }

    if (permission === "denied") {
      return "Notifications blocked";
    }

    if (enabled) {
      return "Reminders enabled";
    }

    return isSaving ? "Enabling..." : "Enable reminders";
  })();

  return (
    <section className="mb-12 border border-gold/25 bg-white shadow-card">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-5 sm:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-primary text-gold">
              <BellRing size={20} />
            </span>
            <div>
              <span className="eyebrow block">Calendar reminders</span>
              <h2 className="font-playfair text-2xl font-semibold text-ink sm:text-3xl">
                Ekadashi and festival notifications
              </h2>
            </div>
          </div>

          <p className="max-w-2xl font-inter text-sm leading-relaxed text-ink/65">
            Enable reminders to receive push notifications for Ekadashi and major ISKCON Nairobi festivals — delivered to this device even when the app is closed.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={enableReminders}
              disabled={enabled || isSaving || permission === "unsupported" || permission === "denied"}
              className="inline-flex min-h-11 items-center gap-2 bg-primary px-5 py-3 font-inter text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-ink/30"
            >
              <BellRing size={15} />
              {buttonLabel}
            </button>

            {enabled && (
              <button
                type="button"
                onClick={disableReminders}
                className="inline-flex min-h-11 items-center gap-2 border border-temple-sand px-5 py-3 font-inter text-xs font-bold uppercase tracking-[0.16em] text-ink transition hover:border-primary/40"
              >
                Turn off
              </button>
            )}
          </div>

          {permission === "denied" && (
            <p className="mt-3 font-inter text-xs leading-relaxed text-primary">
              Notifications are blocked in this browser. Open the browser site settings for ISKCON Nairobi to allow notifications.
            </p>
          )}
        </div>

        <div className="border-t border-temple-sand bg-temple-cream/70 p-5 sm:p-7 lg:border-l lg:border-t-0">
          <div className="mb-4 flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <CalendarDays size={14} />
            Next reminders
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex gap-3 border border-temple-sand bg-white p-3">
                <div className="min-w-14 text-center">
                  <p className="font-inter text-xs font-bold uppercase tracking-[0.08em] text-primary">{event.dateLabel}</p>
                  <p className="font-inter text-[9px] font-bold uppercase tracking-[0.12em] text-gold">{event.type}</p>
                </div>
                <p className="font-inter text-xs leading-relaxed text-ink/70">{event.event}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2 font-inter text-[11px] leading-relaxed text-ink/50">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-gold" />
            <span>No account is created. You can turn reminders off here any time.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
