"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/site";

const whatsappLink = socialLinks.find((link) => link.name === "WhatsApp");

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!whatsappLink) {
    return null;
  }

  return (
    <a
      href={whatsappLink.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ISKCON Nairobi on WhatsApp"
      className={cn(
        "group fixed bottom-5 right-5 z-[60] flex items-center gap-3 transition-all duration-500 max-[900px]:bottom-4 max-[900px]:right-4",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded border border-temple-sand bg-white px-3 py-2 font-inter text-xs font-semibold text-ink opacity-0 shadow-card transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 max-[900px]:h-12 max-[900px]:w-12">
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50"
          style={{ animationDuration: "2.4s" }}
          aria-hidden="true"
        />
        <svg viewBox="0 0 32 32" className="h-7 w-7 max-[900px]:h-6 max-[900px]:w-6" fill="currentColor" aria-hidden="true">
          <path d="M16.004 4.5c-6.34 0-11.5 5.16-11.5 11.5 0 2.02.53 4.02 1.54 5.76L4.5 27.5l5.9-1.54a11.43 11.43 0 0 0 5.6 1.42h.01c6.34 0 11.5-5.16 11.5-11.5S22.34 4.5 16.004 4.5zm6.76 16.2c-.29.8-1.44 1.47-2.14 1.53-.56.05-1.26.08-2.03-.13-.46-.12-1.05-.24-1.81-.47-3.2-1.03-5.28-3.66-5.44-3.84-.16-.17-1.31-1.74-1.31-3.32 0-1.58.83-2.36 1.13-2.68.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.47-.08.73.56.29.68.94 2.33 1.02 2.5.08.17.14.37.03.59-.11.22-.17.36-.34.55-.16.19-.35.42-.5.56-.17.17-.34.34-.15.67.19.33.86 1.42 1.85 2.3 1.27 1.13 2.34 1.48 2.67 1.65.33.17.52.14.71-.08.19-.23.82-.95 1.04-1.28.22-.33.44-.27.74-.16.3.11 1.9.9 2.23 1.06.33.17.55.25.63.39.08.14.08.81-.21 1.61z" />
        </svg>
      </span>
    </a>
  );
}
