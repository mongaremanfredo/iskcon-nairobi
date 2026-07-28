"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";

type TempleStatus = {
  isOpen: boolean;
  windowLabel: string;
  primaryText: string;
  detailText: string;
  nextProgramme: string;
};

const NAIROBI_TIMEZONE = "Africa/Nairobi";

const windows = [
  {
    start: 250,
    end: 765,
    isOpen: true,
    label: "04:10 - 12:45",
    openText: "Temple Open",
    closedText: "",
  },
  {
    start: 765,
    end: 970,
    isOpen: false,
    label: "12:45 - 16:10",
    openText: "",
    closedText: "Temple Closed",
  },
  {
    start: 970,
    end: 1245,
    isOpen: true,
    label: "16:10 - 20:45",
    openText: "Temple Open",
    closedText: "",
  },
  {
    start: 1245,
    end: 1690,
    isOpen: false,
    label: "20:45 - 04:10",
    openText: "",
    closedText: "Temple Closed",
  },
];

const programmes = [
  { minute: 270, label: "Mangala Arati" },
  { minute: 300, label: "Sri Tulasi Arati" },
  { minute: 420, label: "Shringar Bhoga" },
  { minute: 435, label: "Shringar Darshan" },
  { minute: 440, label: "Sri Guru Puja" },
  { minute: 480, label: "Srimad-Bhagavatam Class" },
  { minute: 490, label: "Baal Bhoga" },
  { minute: 510, label: "Dhoop Arati" },
  { minute: 670, label: "Raj Bhoga" },
  { minute: 720, label: "Raj Bhoga Arati" },
  { minute: 765, label: "Temple Closes" },
  { minute: 970, label: "Utthapan Bhoga" },
  { minute: 990, label: "Uthapan Arati" },
  { minute: 1115, label: "Sandhya Bhoga" },
  { minute: 1140, label: "Sandhya - Gaur Arati" },
  { minute: 1210, label: "Sayana Bhoga" },
  { minute: 1230, label: "Sayana Arati" },
  { minute: 1245, label: "Temple Closes" },
];

function getNairobiMinutes(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: NAIROBI_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return hour * 60 + minute;
}

function formatTime(minuteOfDay: number) {
  const normalized = minuteOfDay % 1440;
  const hour = Math.floor(normalized / 60);
  const minute = normalized % 60;
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function getCurrentWindow(minutes: number) {
  const comparableMinutes = minutes < 250 ? minutes + 1440 : minutes;

  return windows.find((window) => comparableMinutes >= window.start && comparableMinutes < window.end) ?? windows[0];
}

function getNextProgramme(minutes: number) {
  const nextToday = programmes.find((programme) => programme.minute > minutes);
  const next = nextToday ?? programmes[0];

  return `${next.label} at ${formatTime(next.minute)}`;
}

function getTempleStatus(date: Date): TempleStatus {
  const minutes = getNairobiMinutes(date);
  const window = getCurrentWindow(minutes);
  const boundary = window.end % 1440;
  const nextProgramme = getNextProgramme(minutes);

  if (window.isOpen) {
    return {
      isOpen: true,
      windowLabel: window.label,
      primaryText: window.openText,
      detailText: `Until ${formatTime(boundary)}`,
      nextProgramme,
    };
  }

  return {
    isOpen: false,
    windowLabel: window.label,
    primaryText: window.closedText,
    detailText: `Opens ${formatTime(boundary)}`,
    nextProgramme,
  };
}

interface TempleStatusBarProps {
  visible: boolean;
}

export default function TempleStatusBar({ visible }: TempleStatusBarProps) {
  const [now, setNow] = useState(() => new Date());
  const status = useMemo(() => getTempleStatus(now), [now]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-[63px] z-[49] border-b border-gold/20 bg-dusk/92 text-sand shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-[14px] transition-all duration-300 max-[900px]:top-[61px]",
        visible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"
      )}
      aria-hidden={!visible}
    >
      <div className="content-width section-padding">
        <div className="flex min-h-11 items-center justify-between gap-3 py-2 max-[900px]:min-h-[3.45rem] max-[900px]:items-start max-[900px]:flex-col max-[900px]:gap-1.5 max-[900px]:py-1.5">
          <div className="flex min-w-0 items-center gap-3 font-inter text-xs max-[900px]:w-full max-[900px]:gap-2">
            <span
              className={cn(
                "h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_16px_currentColor]",
                status.isOpen ? "bg-emerald-400 text-emerald-400" : "bg-gold text-gold"
              )}
              aria-hidden="true"
            />
            <span className="shrink-0 font-semibold uppercase tracking-[0.16em] text-white max-[900px]:text-[0.64rem]">
              {status.primaryText}
            </span>
            <span className="h-3 w-px shrink-0 bg-gold/25 max-[900px]:hidden" />
            <span className="truncate text-sand/78 max-[900px]:text-[0.72rem]">
              {status.detailText} · {status.windowLabel}
            </span>
          </div>

          <div className="flex min-w-0 items-center justify-end gap-3 font-inter text-xs max-[900px]:w-full max-[900px]:justify-between max-[900px]:gap-2">
            <span className="hidden min-w-0 items-center gap-1.5 text-sand/68 lg:flex">
              <Clock3 size={13} className="shrink-0 text-gold" />
              <span className="truncate">Next: {status.nextProgramme}</span>
            </span>
            <Link
              href="/festivals/kirtan-safari"
              className="inline-flex shrink-0 items-center gap-1.5 border border-gold/30 bg-gold/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-gold transition-colors hover:border-gold/60 hover:bg-gold/20 max-[900px]:px-2.5 max-[900px]:py-1 max-[900px]:text-[0.58rem]"
            >
              <CalendarDays size={13} className="shrink-0" />
              <span className="max-[360px]:hidden">Kirtan Safari 2026</span>
              <span className="hidden max-[360px]:inline">Kirtan Safari</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
