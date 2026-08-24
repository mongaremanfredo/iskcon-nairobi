"use client";

import { useEffect, useRef, useState } from "react";
import { WifiOff, X } from "lucide-react";

type NetworkInformation = EventTarget & {
  effectiveType?: string;
  saveData?: boolean;
};

const UPDATE_INTERVAL_MS = 60 * 60 * 1000;

function isSlowConnection() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return Boolean(
    navigator.onLine &&
      connection &&
      (connection.saveData || ["slow-2g", "2g"].includes(connection.effectiveType || ""))
  );
}

export default function PwaRegistrar() {
  const [isOffline, setIsOffline] = useState(false);
  const [isSlow, setIsSlow] = useState(false);
  const [showSlowNotice, setShowSlowNotice] = useState(true);
  const refreshing = useRef(false);
  const refreshPending = useRef(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);
    setIsSlow(isSlowConnection());

    const updateConnectionState = () => {
      setIsOffline(!navigator.onLine);
      setIsSlow(isSlowConnection());
    };

    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    window.addEventListener("online", updateConnectionState);
    window.addEventListener("offline", updateConnectionState);
    connection?.addEventListener("change", updateConnectionState);

    return () => {
      window.removeEventListener("online", updateConnectionState);
      window.removeEventListener("offline", updateConnectionState);
      connection?.removeEventListener("change", updateConnectionState);
    };
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const canRegister =
      window.location.protocol === "https:" || window.location.hostname === "localhost";
    if (!canRegister) {
      return;
    }

    let updateTimer: number | undefined;
    let registration: ServiceWorkerRegistration | undefined;

    const activateWaitingWorker = (worker: ServiceWorker | null) => {
      worker?.postMessage({ type: "SKIP_WAITING" });
    };

    const watchRegistration = (nextRegistration: ServiceWorkerRegistration) => {
      registration = nextRegistration;
      activateWaitingWorker(nextRegistration.waiting);

      nextRegistration.addEventListener("updatefound", () => {
        const installing = nextRegistration.installing;
        if (!installing) {
          return;
        }

        installing.addEventListener("statechange", () => {
          if (installing.state === "installed") {
            activateWaitingWorker(nextRegistration.waiting || installing);
          }
        });
      });

      updateTimer = window.setInterval(() => {
        if (navigator.onLine) {
          void nextRegistration.update();
        }
      }, UPDATE_INTERVAL_MS);
    };

    const registerServiceWorker = () => {
      void navigator.serviceWorker
        .register("/sw.js", { updateViaCache: "none" })
        .then(watchRegistration)
        .catch(() => {
          // The website remains fully usable if service workers are unavailable.
        });
    };

    const isEditing = () => {
      const activeElement = document.activeElement;
      return Boolean(
        activeElement?.matches("input, textarea, select, [contenteditable='true']")
      );
    };

    const reloadWhenSafe = () => {
      if (refreshing.current) {
        return;
      }

      if (document.visibilityState !== "visible" || isEditing()) {
        refreshPending.current = true;
        return;
      }

      refreshing.current = true;
      window.location.reload();
    };

    const checkWhenVisible = () => {
      if (document.visibilityState !== "visible" || !navigator.onLine) {
        return;
      }

      if (refreshPending.current) {
        reloadWhenSafe();
        return;
      }

      void registration?.update();
    };

    document.addEventListener("visibilitychange", checkWhenVisible);
    navigator.serviceWorker.addEventListener("controllerchange", reloadWhenSafe);

    if (document.readyState === "complete") {
      registerServiceWorker();
    } else {
      window.addEventListener("load", registerServiceWorker, { once: true });
    }

    return () => {
      if (updateTimer) {
        window.clearInterval(updateTimer);
      }
      document.removeEventListener("visibilitychange", checkWhenVisible);
      navigator.serviceWorker.removeEventListener("controllerchange", reloadWhenSafe);
      window.removeEventListener("load", registerServiceWorker);
    };
  }, []);

  if (isOffline || (isSlow && showSlowNotice)) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed left-1/2 top-[calc(env(safe-area-inset-top)+5.25rem)] z-[90] flex w-[min(92vw,30rem)] -translate-x-1/2 items-center gap-3 border border-acacia/40 bg-[#24382a] px-4 py-3 text-sand shadow-card-hover"
      >
        <WifiOff className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
        <p className="min-w-0 flex-1 font-inter text-xs leading-snug">
          {isOffline
            ? "You are offline. Saved pages remain available."
            : "Connection is slow. Saved content will be used when available."}
        </p>
        {!isOffline && (
          <button
            type="button"
            onClick={() => setShowSlowNotice(false)}
            aria-label="Dismiss connection notice"
            className="flex h-8 w-8 shrink-0 items-center justify-center text-sand/55 transition-colors hover:text-sand"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }

  return null;
}
