"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export default function InstallPromptBanner() {
  const { canInstall, install } = useInstallPrompt();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!canInstall) {
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), 2500);
    return () => window.clearTimeout(timer);
  }, [canInstall]);

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
        onClick={() => setDismissed(true)}
        aria-label="Dismiss install prompt"
        className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-sand/50 transition-colors hover:bg-white/10 hover:text-sand"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>

      <div className="flex items-center gap-3.5">
        <img
          src="/brand/icon-192.png"
          alt=""
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
          onClick={() => {
            setDismissed(true);
            void install();
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
