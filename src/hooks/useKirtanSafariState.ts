"use client";

import { useCallback, useEffect, useState } from "react";
import { getKirtanSafariState } from "@/lib/kirtanSafariState";

function getNow() {
  if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    const simulated = new URLSearchParams(window.location.search).get("festivalTime");
    if (simulated) {
      const parsed = new Date(simulated);
      if (!Number.isNaN(parsed.getTime())) return parsed;
    }
  }
  return new Date();
}

export function useKirtanSafariState() {
  // Keep the first client render identical to SSR, then apply any development
  // clock simulation after hydration.
  const [state, setState] = useState(() => getKirtanSafariState(new Date()));

  const refresh = useCallback(() => {
    setState(getKirtanSafariState(getNow()));
  }, []);

  useEffect(() => {
    const hydrationRefresh = window.setTimeout(refresh, 0);
    const nextDelay = state.nextTransitionAt
      ? Math.max(250, Math.min(state.nextTransitionAt.getTime() - getNow().getTime() + 80, 60_000))
      : 60_000;
    const timer = window.setTimeout(refresh, nextDelay);
    return () => {
      window.clearTimeout(hydrationRefresh);
      window.clearTimeout(timer);
    };
  }, [refresh, state.nextTransitionAt]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "visible") refresh();
    };
    window.addEventListener("focus", refresh);
    window.addEventListener("online", refresh);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("online", refresh);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [refresh]);

  return state;
}
