import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Music,
  Sun,
  Utensils,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kirtan Safari 2026 — A Kirtan Journey Through Jarikhand Forest",
  description:
    "Join us August 28–30, 2026 at Hare Krishna Temple Nairobi for Kirtan Safari — three days of devotional music, prasadam, and kirtan in the wild. ISKCON Nairobi 60th Anniversary.",
  openGraph: {
    title: "Kirtan Safari 2026 | ISKCON Nairobi",
    description:
      "Every word a song, every step a dance. A three-day kirtan journey through Jarikhand Forest — August 28–30, 2026.",
    images: [
      {
        url: "/images/kirtan-safari-2026-hero-bg.jpg",
        width: 612,
        height: 367,
      },
    ],
  },
};

/* ─── schedule data ─────────────────────────────────────── */
const days = [
  {
    date: "28",
    month: "August",
    day: "Friday",
    special: "Balaram Purnima",
    icon: "🌕",
    sessions: [
      { time: "10:00 am", event: "Adivas Kirtan" },
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
      { time: "10:00 am – 9:00 pm", event: "Continuous Kirtan" },
      { time: "01:00 pm", event: "Prasadam" },
      { time: "09:00 pm", event: "Prasadam" },
    ],
  },
];

/* ─── social links ──────────────────────────────────────── */
const socials = [
  {
    label: "Instagram",
    handle: "@kirtansafari",
    href: "https://www.instagram.com/kirtansafari",
    icon: ExternalLink,
  },
  {
    label: "YouTube",
    handle: "@kirtan_safari",
    href: "https://www.youtube.com/@kirtan_safari",
    icon: ExternalLink,
  },
  {
    label: "TikTok",
    handle: "@kirtan.safari",
    href: "https://www.tiktok.com/@kirtan.safari",
    icon: ExternalLink,
  },
];

/* ─── page ──────────────────────────────────────────────── */
export default function KirtanSafariPage() {
  return (
    <div className="kirtan-safari-page">
      {/* ═══════════════════════════════════════
          1. CINEMATIC HERO
      ═══════════════════════════════════════ */}
      <section
        className="ks-hero"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background — savanna sunset */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('/images/kirtan-safari-2026-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Layered overlays — amber burn + dark vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(246,226,177,0.08) 0%, rgba(7,28,16,0.32) 38%, rgba(7,28,16,0.94) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(7,28,16,0.72) 0%, rgba(7,28,16,0.34) 44%, rgba(7,28,16,0.16) 100%)",
          }}
        />

        {/* Anniversary badge — top right */}
        <div
          style={{
            position: "absolute",
            top: "6rem",
            right: "1.5rem",
            background: "rgba(214,156,43,0.15)",
            border: "1px solid rgba(214,156,43,0.5)",
            backdropFilter: "blur(8px)",
            padding: "0.5rem 0.875rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              color: "#d69c2b",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            ISKCON Nairobi
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair, serif)",
              color: "#f6e2b1",
              fontSize: "1.4rem",
              fontWeight: 700,
              margin: "0.1rem 0",
              lineHeight: 1,
            }}
          >
            60
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              color: "rgba(246,226,177,0.7)",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              margin: 0,
            }}
          >
            1966 · 2026
          </p>
        </div>

        {/* Hero content */}
        <div
          className="content-width section-padding"
          style={{ position: "relative", zIndex: 10, paddingBottom: "4rem" }}
        >
          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              color: "rgba(246,226,177,0.85)",
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              fontStyle: "italic",
              marginBottom: "1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            Every word a song &nbsp;·&nbsp; every step a dance
          </p>

          {/* You are invited */}
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            You are invited to
          </p>

          {/* KIRTAN SAFARI wordmark */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-playfair, serif)",
                lineHeight: 0.9,
                margin: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#fff",
                  fontSize: "clamp(4.5rem, 16vw, 10rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  textShadow: "0 4px 40px rgba(0,0,0,0.6)",
                }}
              >
                KIRTAN
              </span>
              <span
                style={{
                  display: "block",
                  color: "#d69c2b",
                  fontSize: "clamp(3.5rem, 13vw, 8rem)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textShadow: "0 4px 40px rgba(214,156,43,0.4)",
                  marginTop: "-0.1em",
                }}
              >
                SAFARI
              </span>
            </h1>
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{ height: "1px", width: "2rem", background: "#d69c2b", opacity: 0.6 }}
            />
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "rgba(246,226,177,0.9)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              A Kirtan Journey Through Jarikhand Forest
            </p>
            <div
              style={{ height: "1px", flex: 1, background: "#d69c2b", opacity: 0.3 }}
            />
          </div>

          {/* Date + Venue pill row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { icon: "📅", text: "28 – 30 August 2026" },
              { icon: "📍", text: "Hare Krishna Temple, West Ngara Rd, Nairobi" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(7,28,16,0.58)",
                  border: "1px solid rgba(214,156,43,0.3)",
                  backdropFilter: "blur(6px)",
                  padding: "0.5rem 1rem",
                }}
              >
                <span style={{ fontSize: "0.875rem" }}>{item.icon}</span>
                <span
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#d69c2b",
                color: "#fff",
                fontFamily: "var(--font-inter, sans-serif)",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
            >
              Register Now →
            </a>
            <a
              href="#schedule"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
                fontFamily: "var(--font-inter, sans-serif)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                textDecoration: "none",
              }}
            >
              View Schedule
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Scroll
          </p>
          <div
            style={{
              width: "1px",
              height: "2rem",
              background:
                "linear-gradient(to bottom, rgba(214,156,43,0.7), transparent)",
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. INTRO / ABOUT THE EVENT
      ═══════════════════════════════════════ */}
      <section
        style={{
          background: "#071c10",
          padding: "5rem 0",
        }}
      >
        <div className="content-width section-padding">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#d69c2b",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                About the Event
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Where the Mantra<br />
                <em style={{ color: "#d69c2b", fontStyle: "normal" }}>
                  Meets the Wild
                </em>
              </h2>
              <div
                style={{ width: "2.5rem", height: "2px", background: "#d69c2b", marginBottom: "1.5rem" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  marginBottom: "1.25rem",
                }}
              >
                Kirtan Safari is a three-day immersive journey into devotional sound,
                held in the sacred landscape of Jarikhand Forest. Voices rise with the
                sun. Mṛdaṅgas echo through the trees. Giraffes and deer walk alongside
                devotees lost in the mahā-mantra.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  marginBottom: "1.25rem",
                }}
              >
                This year carries special significance — ISKCON Nairobi marks its{" "}
                <span style={{ color: "#f6e2b1", fontWeight: 600 }}>60th anniversary</span>,
                making Kirtan Safari 2026 a historic celebration of six decades of
                Krishna consciousness in East Africa.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant, serif)",
                  color: "rgba(246,226,177,0.7)",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                "Every word a song, every step a dance."
              </p>
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "rgba(214,156,43,0.15)",
              }}
            >
              {[
                { value: "3", unit: "Days", label: "of continuous kirtan" },
                { value: "60", unit: "Years", label: "ISKCON Nairobi anniversary" },
                { value: "∞", unit: "Kirtan", label: "all day Sunday" },
                { value: "Free", unit: "Entry", label: "donations welcome" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#071c10",
                    padding: "2rem 1.5rem",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      color: "#d69c2b",
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      margin: "0 0 0.25rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {stat.unit}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "0.7rem",
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. FULL SCHEDULE
      ═══════════════════════════════════════ */}
      <section
        id="schedule"
        style={{
          background: "#0b1f12",
          padding: "5rem 0",
          borderTop: "1px solid rgba(214,156,43,0.15)",
        }}
      >
        <div className="content-width section-padding">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "#d69c2b",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Programme
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "#fff",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                margin: 0,
              }}
            >
              Three Days of Kirtan
            </h2>
          </div>

          {/* Day cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {days.map((day, i) => (
              <div
                key={day.date}
                style={{
                  background: i === 2 ? "rgba(214,156,43,0.08)" : "#071c10",
                  border: i === 2
                    ? "1px solid rgba(214,156,43,0.5)"
                    : "1px solid rgba(255,255,255,0.06)",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Day number */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        color: "#d69c2b",
                        fontSize: "clamp(3rem, 8vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {day.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        color: "#d69c2b",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        alignSelf: "flex-start",
                        marginTop: "0.5rem",
                      }}
                    >
                      th
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      margin: "0.25rem 0 0",
                    }}
                  >
                    {day.month} · {day.day}
                  </p>
                  {day.special && (
                    <div
                      style={{
                        display: "inline-block",
                        marginTop: "0.5rem",
                        background: "rgba(214,156,43,0.2)",
                        border: "1px solid rgba(214,156,43,0.4)",
                        padding: "0.25rem 0.625rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-inter, sans-serif)",
                          color: "#f6e2b1",
                          fontSize: "0.6rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        {day.special}
                      </span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "rgba(214,156,43,0.2)",
                    marginBottom: "1.25rem",
                  }}
                />

                {/* Sessions */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {day.sessions.map((session) => (
                    <div
                      key={session.time + session.event}
                      style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-inter, sans-serif)",
                          color: "#d69c2b",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          minWidth: "6rem",
                          flexShrink: 0,
                          paddingTop: "0.05rem",
                        }}
                      >
                        {session.time}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-inter, sans-serif)",
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {session.event}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Watermark day number */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1rem",
                    right: "-0.5rem",
                    fontFamily: "var(--font-playfair, serif)",
                    fontSize: "8rem",
                    color: "rgba(214,156,43,0.04)",
                    fontWeight: 900,
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {day.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. VENUE & DONATIONS
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          padding: "5rem 0",
          overflow: "hidden",
        }}
      >
        {/* Parallax bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('/images/kirtan-safari-2026-forest-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(7,28,16,0.9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(214,156,43,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          className="content-width section-padding"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Venue */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#d69c2b",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Venue
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Hare Krishna Temple
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    icon: <MapPin size={14} color="#d69c2b" />,
                    text: "ISKCON Nairobi, Radha Banke Bihari Mandir\nWest Ngara Road, Nairobi",
                  },
                  {
                    icon: <Phone size={14} color="#d69c2b" />,
                    text: "0753 419 194",
                  },
                  {
                    icon: <Mail size={14} color="#d69c2b" />,
                    text: "iskcon.nairobi@gmail.com",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
                  >
                    <span style={{ marginTop: "0.15rem", flexShrink: 0 }}>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donations */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#d69c2b",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Support the Festival
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Donate via M-PESA
              </h3>
              <div
                style={{
                  background: "rgba(214,156,43,0.08)",
                  border: "1px solid rgba(214,156,43,0.3)",
                  padding: "1.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.875rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Paybill No.
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      color: "#f6e2b1",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}
                  >
                    250144
                  </span>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(214,156,43,0.2)",
                    marginBottom: "0.875rem",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Account
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      color: "#f6e2b1",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    KIRTAN
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.75rem",
                  lineHeight: 1.6,
                }}
              >
                Entry is free. Donations support prasadam, kirtan logistics, and future
                editions of the festival.
              </p>
            </div>

            {/* Register */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#d69c2b",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Secure Your Place
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Register for<br />
                <em style={{ color: "#d69c2b", fontStyle: "normal" }}>Kirtan Safari 2026</em>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-cormorant, serif)",
                  color: "rgba(246,226,177,0.7)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                "The mantra was made for this moment."
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#d69c2b",
                  color: "#fff",
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "1rem 2rem",
                  textDecoration: "none",
                }}
              >
                Fill Registration Form →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. SOCIAL / FOLLOW
      ═══════════════════════════════════════ */}
      <section
        style={{
          background: "#071c10",
          borderTop: "1px solid rgba(214,156,43,0.15)",
          padding: "4rem 0",
        }}
      >
        <div className="content-width section-padding">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#d69c2b",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Follow the Journey
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  margin: 0,
                }}
              >
                Stay Connected
              </h3>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {socials.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "0.75rem 1.25rem",
                    textDecoration: "none",
                    transition: "border-color 0.3s",
                  }}
                >
                  <Icon size={14} color="#d69c2b" />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        margin: "0 0 0.1rem",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. FINAL CTA STRIP
      ═══════════════════════════════════════ */}
      <section
        style={{
          background: "#0b1f12",
          padding: "3rem 0",
        }}
      >
        <div
          className="content-width section-padding"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "#fff",
                fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Kirtan Safari 2026
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.8rem",
                margin: "0.25rem 0 0",
              }}
            >
              28 – 30 August · Hare Krishna Temple, Nairobi
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#d69c2b",
              color: "#071c10",
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 800,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "1rem 2rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Register Free →
          </a>
        </div>
      </section>
    </div>
  );
}
