"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

const STORAGE_KEY = "iskcon-install-invitation";
const SESSION_KEY = "iskcon-install-visit-counted";
const RETURN_VISIT_DELAY_MS = 20_000;
const DISMISSAL_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000;

type InstallInvitationState = {
  visits: number;
  dismissedUntil: number;
};

function readInvitationState(): InstallInvitationState {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return { visits: 0, dismissedUntil: 0 };

    const parsed = JSON.parse(saved) as Partial<InstallInvitationState>;
    return {
      visits: Number.isFinite(parsed.visits) ? Math.max(0, Number(parsed.visits)) : 0,
      dismissedUntil: Number.isFinite(parsed.dismissedUntil) ? Number(parsed.dismissedUntil) : 0,
    };
  } catch {
    return { visits: 0, dismissedUntil: 0 };
  }
}

function writeInvitationState(state: InstallInvitationState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable in strict privacy modes; installation remains optional.
  }
}

export default function InstallPromptBanner() {
  const { canInstall, install } = useInstallPrompt();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!canInstall) {
      return;
    }

    const state = readInvitationState();
    let visits = state.visits;

    try {
      if (!window.sessionStorage.getItem(SESSION_KEY)) {
        visits += 1;
        window.sessionStorage.setItem(SESSION_KEY, "true");
        writeInvitationState({ ...state, visits });
      }
    } catch {
      visits += 1;
    }

    if (visits < 2 || state.dismissedUntil > Date.now()) {
      return;
    }

    const revealWhenVisible = () => {
      if (document.visibilityState === "visible") {
        setVisible(true);
        document.removeEventListener("visibilitychange", revealWhenVisible);
      }
    };

    const timer = window.setTimeout(() => {
      revealWhenVisible();
      if (document.visibilityState !== "visible") {
        document.addEventListener("visibilitychange", revealWhenVisible);
      }
    }, RETURN_VISIT_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", revealWhenVisible);
    };
  }, [canInstall]);

  const dismissForCooldown = () => {
    const state = readInvitationState();
    writeInvitationState({
      ...state,
      dismissedUntil: Date.now() + DISMISSAL_COOLDOWN_MS,
    });
    setDismissed(true);
  };

  if (!canInstall || dismissed) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Install ISKCON Nairobi app"
      className={cn(
        "fixed bottom-4 left-1/2 z-[70] w-[min(92vw,26rem)] -translate-x-1/2 rounded-2xl border border-gold/30 bg-dusk p-3.5 text-sand shadow-card-hover transition-all duration-500 max-[900px]:bottom-3 max-[900px]:w-[min(94vw,24rem)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <button
        type="button"
        onClick={dismissForCooldown}
        aria-label="Dismiss install prompt"
        className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-sand/50 transition-colors hover:bg-white/10 hover:text-sand"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>

      <div className="flex items-center gap-3.5">
        <Image
          src="/brand/icon-192.png"
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-xl border border-gold/30 object-cover"
        />
        <div className="min-w-0">
          <p className="font-playfair text-sm font-semibold leading-tight">Install ISKCON Nairobi</p>
          <p className="mt-0.5 text-xs leading-snug text-sand/70">
            Darshan times, kirtan &amp; news - right on your home screen.
          </p>
        </div>
        <button
          type="button"
          onClick={async () => {
            setDismissed(true);
            const outcome = await install();
            if (outcome === "dismissed") {
              const state = readInvitationState();
              writeInvitationState({
                ...state,
                dismissedUntil: Date.now() + DISMISSAL_COOLDOWN_MS,
              });
            }
          }}
          className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 font-inter text-xs font-bold uppercase tracking-widest text-dusk transition-colors hover:bg-gold-light"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Install
        </button>
      </div>
    </div>
  );
}
