"use client";

import { useEffect, useMemo } from "react";
import { getSiteNotices, type SiteNotice } from "@/data/notices";
import { useKirtanSafariState } from "@/hooks/useKirtanSafariState";

const OPT_IN_KEY = "iskcon-noticeboard-notifications";
const SENT_KEY = "iskcon-noticeboard-notifications-sent";

function readSentNotices() {
  try {
    const raw = window.localStorage.getItem(SENT_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function writeSentNotices(sent: Record<string, string>) {
  window.localStorage.setItem(SENT_KEY, JSON.stringify(sent));
}

export function markCurrentNoticesAsSent(notices: SiteNotice[]) {
  if (typeof window === "undefined") {
    return;
  }

  const sent = readSentNotices();
  const now = new Date().toISOString();

  notices.forEach((notice) => {
    sent[notice.id] = sent[notice.id] ?? now;
  });

  writeSentNotices(sent);
}

async function showNoticeNotification(notice: SiteNotice) {
  const registration = await navigator.serviceWorker.ready;

  await registration.showNotification(notice.title, {
    body: notice.body,
    tag: `notice-${notice.id}`,
    icon: "/brand/icon-192.png",
    badge: "/brand/icon-192.png",
    data: {
      url: notice.href,
    },
  });
}

export default function NoticeNotificationManager() {
  const festivalState = useKirtanSafariState();
  const notices = useMemo(
    () => getSiteNotices(festivalState),
    [festivalState]
  );

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("Notification" in window)) {
      return;
    }

    const notifyNewNotices = () => {
      if (
        window.localStorage.getItem(OPT_IN_KEY) !== "enabled" ||
        Notification.permission !== "granted"
      ) {
        return;
      }

      const sent = readSentNotices();
      const unsent = notices.filter((notice) => !sent[notice.id]);

      if (unsent.length === 0) {
        return;
      }

      const now = new Date().toISOString();
      unsent.forEach((notice) => {
        sent[notice.id] = now;
        void showNoticeNotification(notice).catch(() => {});
      });
      writeSentNotices(sent);
    };

    notifyNewNotices();
    window.addEventListener("focus", notifyNewNotices);
    document.addEventListener("visibilitychange", notifyNewNotices);
    window.addEventListener("iskcon-noticeboard-notifications-changed", notifyNewNotices);

    return () => {
      window.removeEventListener("focus", notifyNewNotices);
      document.removeEventListener("visibilitychange", notifyNewNotices);
      window.removeEventListener("iskcon-noticeboard-notifications-changed", notifyNewNotices);
    };
  }, [notices]);

  return null;
}
