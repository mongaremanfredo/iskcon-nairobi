"use client";

import { useEffect, useRef, useState } from "react";
import { RefreshCw, WifiOff, X } from "lucide-react";

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
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const refreshing = useRef(false);

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

    const surfaceWaitingWorker = (worker: ServiceWorker | null) => {
      if (worker && navigator.serviceWorker.controller) {
        setWaitingWorker(worker);
      }
    };

    const watchRegistration = (nextRegistration: ServiceWorkerRegistration) => {
      registration = nextRegistration;
      surfaceWaitingWorker(nextRegistration.waiting);

      nextRegistration.addEventListener("updatefound", () => {
        const installing = nextRegistration.installing;
        if (!installing) {
          return;
        }

        installing.addEventListener("statechange", () => {
          if (installing.state === "installed") {
            surfaceWaitingWorker(nextRegistration.waiting || installing);
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

    const checkWhenVisible = () => {
      if (document.visibilityState === "visible" && navigator.onLine) {
        void registration?.update();
      }
    };

    const reloadForNewController = () => {
      if (refreshing.current) {
        return;
      }
      refreshing.current = true;
      window.location.reload();
    };

    document.addEventListener("visibilitychange", checkWhenVisible);
    navigator.serviceWorker.addEventListener("controllerchange", reloadForNewController);

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
      navigator.serviceWorker.removeEventListener("controllerchange", reloadForNewController);
      window.removeEventListener("load", registerServiceWorker);
    };
  }, []);

  const activateUpdate = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
  };

  if (waitingWorker) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed left-1/2 top-[calc(env(safe-area-inset-top)+5.25rem)] z-[90] flex w-[min(92vw,28rem)] -translate-x-1/2 items-center gap-3 border border-gold/35 bg-dusk px-4 py-3 text-sand shadow-card-hover"
      >
        <RefreshCw className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
        <p className="min-w-0 flex-1 font-inter text-xs leading-snug">
          A new version is ready.
        </p>
        <button
          type="button"
          onClick={activateUpdate}
          className="shrink-0 font-inter text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold transition-colors hover:text-gold-light"
        >
          Refresh
        </button>
        <button
          type="button"
          onClick={() => setWaitingWorker(null)}
          aria-label="Dismiss update notice"
          className="flex h-8 w-8 shrink-0 items-center justify-center text-sand/55 transition-colors hover:text-sand"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    );
  }

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
