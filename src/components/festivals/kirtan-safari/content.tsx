import { Camera } from "lucide-react";

// Programme details and social links for the live version of the Kirtan Safari page.
export const days = [
  {
    date: "28",
    month: "August",
    day: "Friday",
    special: "Balaram Purnima",
    icon: "🌕",
    sessions: [
      { time: "10:00 am", event: "Balaram Purnima Kirtan" },
      { time: "01:00 pm", event: "Prasadam" },
      { time: "06:00 pm", event: "Abhishek & Talk" },
      { time: "07:30 pm", event: "Kirtan" },
      { time: "09:00 pm", event: "Prasadam" },
    ],
  },
  {
    date: "29",
    month: "August",
    day: "Saturday",
    special: null,
    icon: "🥁",
    sessions: [
      { time: "10:00 am", event: "Kirtan Starts" },
      { time: "01:00 pm", event: "Prasadam" },
      { time: "02:30 pm", event: "Special Harinam" },
      { time: "05:00 pm", event: "Kirtan" },
      { time: "09:00 pm", event: "Prasadam" },
    ],
  },
  {
    date: "30",
    month: "August",
    day: "Sunday",
    special: "Continuous Kirtan All Day!",
    icon: "☀️",
    sessions: [
      { time: "10:00 am - 9:00 pm", event: "Continuous Kirtan" },
      { time: "01:00 pm", event: "Prasadam" },
      { time: "09:00 pm", event: "Prasadam" },
    ],
  },
];

/* ─── social links ──────────────────────────────────────── */
export const adhivasEvent = {
  title: "Adivas",
  date: "Thursday, 27th August",
  time: "From 6:00 PM onwards",
  location: "Hare Krishna Temple",
  prasadam: "Followed by Prasad",
  description:
    "Get ready for an extra day of Kirtan Safari celebrations with Adivas as we begin the festival mood together.",
  image: "/images/kirtan-safari-2026-adhivas.png",
};

export function YouTubeIcon({
  size = 13,
  color = "var(--color-festival-gold)",
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size + 2}
      height={size}
      viewBox="0 0 24 18"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M23.5 3.1c-.27-1.02-1.08-1.82-2.08-2.09C19.59.5 12 .5 12 .5S4.41.5 2.58 1.01C1.58 1.28.77 2.08.5 3.1.01 4.94.01 8.76.01 8.76s0 3.82.49 5.66c.27 1.02 1.08 1.78 2.08 2.05 1.83.52 9.42.52 9.42.52s7.59 0 9.42-.52c1-.27 1.81-1.03 2.08-2.05.49-1.84.49-5.66.49-5.66s0-3.82-.49-5.66Z"
        fill={color}
      />
      <path d="M9.6 12.36V5.16l6.28 3.6-6.28 3.6Z" fill="var(--color-festival-ink)" />
    </svg>
  );
}

export function TikTokIcon({
  size = 13,
  color = "var(--color-festival-gold)",
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M15.45 2.75c.26 2.34 1.59 3.73 3.85 3.88v3.25a7.12 7.12 0 0 1-3.74-1.11v6.68c0 3.38-2.1 5.8-5.38 5.8-3.05 0-5.48-2.05-5.48-5.08 0-3.39 2.61-5.36 5.96-5.08v3.34c-1.48-.2-2.57.42-2.57 1.65 0 1.04.86 1.72 1.95 1.72 1.28 0 2.08-.76 2.08-2.42V2.75h3.33Z"
        fill={color}
      />
    </svg>
  );
}

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kirtansafari",
    icon: Camera,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kirtan_safari",
    icon: YouTubeIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kirtan.safari",
    icon: TikTokIcon,
  },
];

/* ─── page ──────────────────────────────────────────────── */
