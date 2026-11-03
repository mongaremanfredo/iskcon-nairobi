import { templeHours } from "@/data/site";

export type TempleStatus = {
  isOpen: boolean;
  windowLabel: string;
  primaryText: string;
  detailText: string;
  nextProgramme: string;
};

const NAIROBI_TIMEZONE = "Africa/Nairobi";

function toMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

const morningOpens = toMinutes(templeHours.morning.opens);
const morningCloses = toMinutes(templeHours.morning.closes);
const eveningOpens = toMinutes(templeHours.evening.opens);
const eveningCloses = toMinutes(templeHours.evening.closes);

// The overnight window runs past midnight, so its end is expressed as minutes
// into the following day.
const windows = [
  { start: morningOpens, end: morningCloses, isOpen: true, label: `${templeHours.morning.opens} - ${templeHours.morning.closes}` },
  { start: morningCloses, end: eveningOpens, isOpen: false, label: `${templeHours.morning.closes} - ${templeHours.evening.opens}` },
  { start: eveningOpens, end: eveningCloses, isOpen: true, label: `${templeHours.evening.opens} - ${templeHours.evening.closes}` },
  { start: eveningCloses, end: morningOpens + 1440, isOpen: false, label: `${templeHours.evening.closes} - ${templeHours.morning.opens}` },
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
  { minute: 1125, label: "Sri Tulasi Arati" },
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
  const comparableMinutes = minutes < morningOpens ? minutes + 1440 : minutes;

  return windows.find((window) => comparableMinutes >= window.start && comparableMinutes < window.end) ?? windows[0];
}

function getNextProgramme(minutes: number) {
  const nextToday = programmes.find((programme) => programme.minute > minutes);
  const next = nextToday ?? programmes[0];

  return `${next.label} at ${formatTime(next.minute)}`;
}

export function getTempleStatus(date: Date): TempleStatus {
  const minutes = getNairobiMinutes(date);
  const window = getCurrentWindow(minutes);
  const boundary = window.end % 1440;
  const nextProgramme = getNextProgramme(minutes);

  if (window.isOpen) {
    return {
      isOpen: true,
      windowLabel: window.label,
      primaryText: "Temple Open",
      detailText: `Until ${formatTime(boundary)}`,
      nextProgramme,
    };
  }

  return {
    isOpen: false,
    windowLabel: window.label,
    primaryText: "Temple Closed",
    detailText: `Opens ${formatTime(boundary)}`,
    nextProgramme,
  };
}
