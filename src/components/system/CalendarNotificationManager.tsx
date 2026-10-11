"use client";

import { useEffect } from "react";
import { enablePushOnDevice } from "@/lib/pushClient";

const OPT_IN_KEY = "iskcon-calendar-notifications";

/**
 * Keeps an opted-in device registered with the push backend.
 * Reminder timing is server-side so delivery does not depend on the website,
 * installed PWA, or browser remaining open.
 */
export default function CalendarNotificationManager() {
  useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      !("Notification" in window) ||
      Notification.permission !== "granted" ||
      window.localStorage.getItem(OPT_IN_KEY) !== "enabled"
    ) {
      return;
    }

    void navigator.serviceWorker.ready.then((registration) => {
      void enablePushOnDevice(registration);
    });
  }, []);

  return null;
}
