import type { Metadata } from "next";
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import KirtanSafariRegistrationModal, {
  KirtanSafariRegistrationButton,
} from "@/components/sections/KirtanSafariRegistrationModal";

export const metadata: Metadata = {
  title: "Kirtan Safari 2026",
  description:
    "Join us August 27 - 30, 2026 at Hare Krishna Temple Nairobi for Kirtan Safari - Adivas followed by three days of devotional music, prasadam, and kirtan in the wild. ISKCON Nairobi 60th Anniversary.",
  openGraph: {
    title: "Kirtan Safari 2026 | ISKCON Nairobi",
    description:
      "Every word a song, every step a dance. Adivas on August 27 followed by a three-day kirtan journey through Jarikhand Forest.",
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
const adhivasEvent = {
  title: "Adivas",
  date: "Thursday, 27th August",
  time: "From 6:00 PM onwards",
  location: "Hare Krishna Temple",
  prasadam: "Followed by Prasad",
  description:
    "Get ready for an extra day of Kirtan Safari celebrations with Adivas as we begin the festival mood together.",
  image: "/images/kirtan-safari-2026-adhivas.png",
};

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
const guestKirtaniyas = [
  {
    name: "Sandip Pattni",
    image: "/images/festivals/guest-kirtaniyas/sandip-pattni.jpg",
  },
  {
    name: "H.G. Gourangi Gandharvika Devi Dasi",
    image:
      "/images/festivals/guest-kirtaniyas/hg-gourangi-gandharvika-devi-dasi.jpg",
  },
  {
    name: "H.G. Madhurika Dasi",
    image: "/images/festivals/guest-kirtaniyas/hg-madhurika-dasi.jpg",
  },
  {
    name: "H.G. Sharad Bihari Das",
    image: "/images/festivals/guest-kirtaniyas/hg-sharad-bihari-das.jpg",
  },
  {
    name: "H.G. Smita Krishna Das",
    image: "/images/festivals/guest-kirtaniyas/hg-smita-krishna-das.jpg",
  },
  {
    name: "H.G. Gaura Kirtan Das",
    image: "/images/festivals/guest-kirtaniyas/hg-gaura-kirtan-das.jpg",
  },
  {
    name: "H.G. Giriraj Das",
    image: "/images/festivals/guest-kirtaniyas/hg-giriraj-das.jpg",
  },
  {
    name: "H.G. Kamika Ekadashi Das",
    image: "/images/festivals/guest-kirtaniyas/hg-kamika-ekadashi-das.jpg",
  },
];

export default function KirtanSafariPage() {
  return (
    <div className="kirtan-safari-page">
      <KirtanSafariRegistrationModal />
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
        {/* Background - savanna sunset */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('/images/calendar-kirtan-safari-bg.png')",
            backgroundColor: "#f6e2b1",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />

        {/* Layered overlays - amber burn + dark vignette */}
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

        {/* Anniversary badge - top right */}
        <div
          className="ks-badge"
          style={{
            position: "absolute",
            top: "7rem",
            right: "max(52px, calc((100vw - 1320px) / 2 + 52px))",
            background: "#D9A441",
            border: "1px solid rgba(183,134,38,0.55)",
            padding: "0.5rem 0.875rem",
            textAlign: "center",
            minWidth: "8.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              color: "#3A2A24",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            ISKCON
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair, serif)",
              color: "#3A2A24",
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
              color: "rgba(58,42,36,0.72)",
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
              { icon: "📅", text: "27 - 30 August 2026" },
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
            <KirtanSafariRegistrationButton
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
                border: 0,
                cursor: "pointer",
              }}
            >
              Register Now
            </KirtanSafariRegistrationButton>
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
            <a
              href="/blog/jharikhanda-forest-kirtan-safari"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid rgba(246,226,177,0.26)",
                background: "rgba(246,226,177,0.08)",
                color: "rgba(246,226,177,0.92)",
                fontFamily: "var(--font-inter, sans-serif)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                textDecoration: "none",
              }}
            >
              <BookOpen size={14} strokeWidth={1.8} />
              Story Behind the Theme
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
                This year carries special significance - ISKCON marks its{" "}
                <span style={{ color: "#f6e2b1", fontWeight: 600 }}>60th anniversary</span>,
                making Kirtan Safari 2026 a historic celebration of six decades of
                Krishna consciousness.
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
                &ldquo;Every word a song, every step a dance.&rdquo;
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
        className="ks-guests"
        aria-labelledby="guest-kirtaniyas"
        style={{
          position: "relative",
          background:
            "linear-gradient(180deg, #071c10 0%, #102b18 46%, #071c10 100%)",
          padding: "5rem 0",
          overflow: "hidden",
          borderTop: "1px solid rgba(214,156,43,0.14)",
          borderBottom: "1px solid rgba(214,156,43,0.14)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 14% 24%, rgba(214,156,43,0.16), transparent 28%), radial-gradient(circle at 86% 20%, rgba(246,226,177,0.08), transparent 24%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            insetInline: 0,
            top: "42%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(214,156,43,0.42), transparent)",
          }}
        />

        <div
          className="content-width section-padding"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            className="ks-guests-header"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.95fr) minmax(220px, 0.55fr)",
              gap: "2rem",
              alignItems: "end",
              marginBottom: "2.75rem",
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
                  marginBottom: "0.85rem",
                }}
              >
                Guest Kirtaniyas
              </p>
              <h2
                id="guest-kirtaniyas"
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(2.05rem, 5vw, 3.35rem)",
                  lineHeight: 1.02,
                  margin: 0,
                  maxWidth: "48rem",
                }}
              >
                Voices Carrying the
                <span style={{ color: "#d69c2b" }}> Safari Mood</span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "rgba(246,226,177,0.68)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A special gathering of kirtan leaders joining ISKCON Nairobi for
              a four-day celebration of holy name, prasadam, and festival seva.
            </p>
          </div>

          <p
            className="ks-guests-mobile-cue"
            style={{
              display: "none",
              fontFamily: "var(--font-inter, sans-serif)",
              color: "rgba(214,156,43,0.8)",
              fontSize: "0.62rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            Swipe the lineup
          </p>

          <div
            className="ks-guests-track"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, minmax(132px, 1fr))",
              gap: "1rem",
            }}
          >
            <div className="ks-guests-center" aria-hidden="true">
              <strong>
                <span>One forest,</span>
                <span>one song,</span>
                <span>one holy name.</span>
              </strong>
            </div>
            {guestKirtaniyas.map((guest, index) => (
              <article
                className="ks-guest-card"
                key={guest.name}
                style={{
                  position: "relative",
                  minHeight: index % 2 === 0 ? "18.5rem" : "20rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
              >
                <div
                  className="ks-guest-frame"
                  style={{
                    position: "relative",
                    background:
                      "linear-gradient(180deg, rgba(246,226,177,0.13), rgba(214,156,43,0.06))",
                    border: "1px solid rgba(214,156,43,0.34)",
                    padding: "0.55rem",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "-0.32rem",
                      border: "1px solid rgba(246,226,177,0.08)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      aspectRatio: "1 / 1.28",
                      overflow: "hidden",
                      background: "rgba(7,28,16,0.65)",
                    }}
                  >
                    <img
                      src={guest.image}
                      alt={`${guest.name}, guest kirtaniya for Kirtan Safari 2026`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        display: "block",
                        filter: "saturate(1.06) contrast(1.04)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="ks-guest-nameplate"
                  style={{ marginTop: "0.85rem", minHeight: "3.2rem" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "#f6e2b1",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      lineHeight: 1.35,
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {guest.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

          {/* Adivas extra day */}
          <div
            className="ks-adhivas-card"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
              gap: "1.5rem",
              alignItems: "stretch",
              background: "linear-gradient(135deg, rgba(246,226,177,0.08), rgba(214,156,43,0.12))",
              border: "1px solid rgba(214,156,43,0.42)",
              marginBottom: "2rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                minHeight: "220px",
                backgroundImage: `url('${adhivasEvent.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="Adivas extra day poster"
            />
            <div style={{ padding: "clamp(1.35rem, 3vw, 2rem)" }}>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#d69c2b",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 0.65rem",
                }}
              >
                Extra Day of Celebrations
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {adhivasEvent.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: "1rem 0 1.25rem",
                  maxWidth: "38rem",
                }}
              >
                {adhivasEvent.description}
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "0.65rem",
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "0.86rem",
                }}
              >
                <span><strong style={{ color: "#f6e2b1" }}>Date:</strong> {adhivasEvent.date}</span>
                <span><strong style={{ color: "#f6e2b1" }}>Time:</strong> {adhivasEvent.time}</span>
                <span><strong style={{ color: "#f6e2b1" }}>Venue:</strong> {adhivasEvent.location}</span>
                <span><strong style={{ color: "#f6e2b1" }}>Prasad:</strong> {adhivasEvent.prasadam}</span>
              </div>
            </div>
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
                &ldquo;The mantra was made for this moment.&rdquo;
              </p>
              <KirtanSafariRegistrationButton
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
                  border: 0,
                  cursor: "pointer",
                }}
              >
                Fill Registration Form
              </KirtanSafariRegistrationButton>
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
              27 - 30 August · Hare Krishna Temple, Nairobi
            </p>
          </div>
          <KirtanSafariRegistrationButton
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
              border: 0,
              cursor: "pointer",
            }}
          >
            Register Free
          </KirtanSafariRegistrationButton>
        </div>
      </section>

      <style>{`
        .kirtan-safari-page .ks-guests-track {
          position: relative;
          display: grid !important;
          grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
          grid-template-rows: repeat(2, minmax(13rem, auto));
          align-items: center;
          gap: clamp(0.8rem, 1.6vw, 1.45rem) !important;
          min-height: 34rem;
          isolation: isolate;
        }

        .kirtan-safari-page .ks-guests-track::before,
        .kirtan-safari-page .ks-guests-track::after {
          content: "";
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }

        .kirtan-safari-page .ks-guests-track::before {
          inset: 4rem 1.5rem 3rem;
          background:
            radial-gradient(circle at 12% 70%, rgba(214,156,43,0.15), transparent 11rem),
            radial-gradient(circle at 92% 24%, rgba(246,226,177,0.08), transparent 12rem),
            linear-gradient(115deg, transparent 0 16%, rgba(214,156,43,0.14) 16.2% 16.5%, transparent 16.7% 38%, rgba(246,226,177,0.11) 38.2% 38.45%, transparent 38.7% 68%, rgba(214,156,43,0.12) 68.2% 68.45%, transparent 68.7%);
          opacity: 0.95;
        }

        .kirtan-safari-page .ks-guests-track::after {
          left: 4%;
          right: 4%;
          bottom: 5.2rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(214,156,43,0.45), transparent);
        }

        .kirtan-safari-page .ks-guests-center {
          position: relative;
          z-index: 2;
          grid-column: 5 / span 4;
          grid-row: 1 / span 2;
          align-self: center;
          justify-self: center;
          width: min(28vw, 19rem);
          min-height: 12rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 2.1rem 2.45rem 2.05rem 2.85rem;
          text-align: center;
          border-radius: 38% 62% 46% 54% / 26% 38% 62% 74%;
          border-left: 2px solid rgba(214,156,43,0.62);
          background:
            linear-gradient(135deg, rgba(7,28,16,0.92), rgba(16,43,24,0.76)),
            rgba(7,28,16,0.82);
          box-shadow: 0 24px 90px rgba(0,0,0,0.28);
          color: #f6e2b1;
          font-family: var(--font-inter, sans-serif);
        }

        .kirtan-safari-page .ks-guests-center strong {
          display: grid;
          gap: 0.08em;
          max-width: 10.5rem;
          font-family: var(--font-playfair, serif);
          font-size: clamp(1.06rem, 1.56vw, 1.48rem);
          line-height: 1.02;
          color: #fff;
          text-wrap: balance;
        }

        .kirtan-safari-page .ks-guests-center strong span {
          display: block;
        }

        .kirtan-safari-page .ks-guest-card {
          width: 100%;
          min-height: auto !important;
          justify-content: flex-start !important;
          text-align: left;
          z-index: 2;
        }

        .kirtan-safari-page .ks-guest-card:nth-child(2) {
          grid-column: 1 / span 2;
          grid-row: 1;
          transform: translateY(1.6rem) rotate(-2deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(3) {
          grid-column: 3 / span 2;
          grid-row: 1;
          transform: translateY(-1rem) rotate(1.5deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(4) {
          grid-column: 9 / span 2;
          grid-row: 1;
          transform: translateY(-1.35rem) rotate(-1deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(5) {
          grid-column: 11 / span 2;
          grid-row: 1;
          transform: translateY(1.3rem) rotate(2deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(6) {
          grid-column: 2 / span 2;
          grid-row: 2;
          transform: translateY(-0.2rem) rotate(1deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(7) {
          grid-column: 4 / span 2;
          grid-row: 2;
          transform: translateY(1.65rem) rotate(-1.5deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(8) {
          grid-column: 8 / span 2;
          grid-row: 2;
          transform: translateY(1.45rem) rotate(1.5deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(9) {
          grid-column: 10 / span 2;
          grid-row: 2;
          transform: translateY(-0.25rem) rotate(-1deg);
        }

        .kirtan-safari-page .ks-guest-card:nth-child(3),
        .kirtan-safari-page .ks-guest-card:nth-child(8) {
          width: 112%;
        }

        .kirtan-safari-page .ks-guest-card:nth-child(6),
        .kirtan-safari-page .ks-guest-card:nth-child(9) {
          width: 92%;
        }

        .kirtan-safari-page .ks-guest-frame {
          border-radius: 42% 58% 46% 54% / 55% 42% 58% 45%;
          padding: 0.5rem !important;
          background:
            linear-gradient(135deg, rgba(246,226,177,0.18), rgba(214,156,43,0.08)) !important;
        }

        .kirtan-safari-page .ks-guest-frame > div:first-child {
          border-radius: 48% 52% 40% 60% / 52% 44% 56% 48%;
        }

        .kirtan-safari-page .ks-guest-frame > div:last-child {
          aspect-ratio: 1 !important;
          border-radius: 42% 58% 46% 54% / 55% 42% 58% 45%;
        }

        .kirtan-safari-page .ks-guest-nameplate {
          margin-top: 0.85rem !important;
          min-height: 3.4rem !important;
        }

        @media (max-width: 640px) {
          .kirtan-safari-page {
            max-width: 100vw;
            overflow-x: hidden;
          }

          .kirtan-safari-page .ks-hero {
            min-height: 860px !important;
          }

          .kirtan-safari-page .ks-hero > div:first-of-type {
            background-position: center bottom !important;
            background-size: cover !important;
          }

          .kirtan-safari-page .ks-hero .content-width {
            padding-bottom: 2.5rem !important;
          }

          .kirtan-safari-page .ks-hero h1 span:first-child {
            font-size: clamp(3.05rem, 18vw, 4.35rem) !important;
            letter-spacing: -0.035em !important;
          }

          .kirtan-safari-page .ks-hero h1 span:last-child {
            font-size: clamp(2.35rem, 15vw, 3.35rem) !important;
            letter-spacing: 0.04em !important;
          }

          .kirtan-safari-page .ks-hero p {
            max-width: 100% !important;
          }

          .kirtan-safari-page .ks-hero .ks-badge {
            top: 4.5rem !important;
            right: 1rem !important;
            transform: scale(0.86);
            transform-origin: top right;
          }

          .kirtan-safari-page .ks-hero > div[style*="bottom: 1.5rem"] {
            display: none !important;
          }

          .kirtan-safari-page section {
            scroll-margin-top: 4.5rem;
          }

          .kirtan-safari-page section[style*="padding: 5rem 0"],
          .kirtan-safari-page section[style*="padding: 4rem 0"],
          .kirtan-safari-page section[style*="padding: 3rem 0"] {
            padding: 3.25rem 0 !important;
          }

          .kirtan-safari-page div[style*="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))"],
          .kirtan-safari-page div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .kirtan-safari-page .ks-adhivas-card {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          .kirtan-safari-page div[style*="background-attachment: fixed"] {
            background-attachment: scroll !important;
          }

          .kirtan-safari-page a[style*="padding: 1rem 2rem"],
          .kirtan-safari-page button[style*="padding: 1rem 2rem"] {
            width: 100% !important;
            justify-content: center !important;
            padding: 0.9rem 1rem !important;
            text-align: center !important;
          }

          .kirtan-safari-page div[style*="display: flex"][style*="justify-content: space-between"] {
            align-items: flex-start !important;
          }

          .kirtan-safari-page span[style*="min-width: 6rem"],
          .kirtan-safari-page span[style*="min-width: 6.5rem"] {
            min-width: 5rem !important;
          }

          .kirtan-safari-page div[style*="font-size: 8rem"] {
            font-size: 5.5rem !important;
          }

          .kirtan-safari-page .ks-guests {
            padding: 3.05rem 0 3.35rem !important;
            background:
              radial-gradient(circle at 50% 0%, rgba(214,156,43,0.16), transparent 32%),
              linear-gradient(180deg, #071c10 0%, #12301b 52%, #071c10 100%) !important;
          }

          .kirtan-safari-page .ks-guests-header {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            margin-bottom: 1rem !important;
          }

          .kirtan-safari-page .ks-guests-header h2 {
            font-size: clamp(1.85rem, 9vw, 2.45rem) !important;
            max-width: 20rem !important;
          }

          .kirtan-safari-page .ks-guests-header p:last-child {
            font-size: 0.78rem !important;
            line-height: 1.55 !important;
          }

          .kirtan-safari-page .ks-guests-mobile-cue {
            display: block !important;
          }

          .kirtan-safari-page .ks-guests-center {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: 12rem !important;
            min-width: 12rem !important;
            min-height: 10rem !important;
            padding: 1.45rem 1.55rem 1.35rem 1.85rem !important;
            transform: translateY(0.45rem) rotate(-1.5deg) !important;
            scroll-snap-align: start;
            flex: 0 0 12rem;
            margin-top: 0.35rem;
            border-radius: 36% 64% 44% 56% / 28% 36% 64% 72%;
            box-shadow: 0 18px 60px rgba(0,0,0,0.32);
          }

          .kirtan-safari-page .ks-guests-center strong {
            max-width: 8.25rem !important;
            font-size: 0.98rem !important;
            line-height: 1.05 !important;
          }

          .kirtan-safari-page .ks-guests-track {
            display: flex !important;
            gap: 0.95rem !important;
            overflow-x: auto !important;
            margin-inline: -1.125rem !important;
            padding: 0.45rem 1.125rem 1.2rem !important;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            min-height: 18.9rem !important;
            border-radius: 0 !important;
            align-items: flex-start !important;
          }

          .kirtan-safari-page .ks-guests-track::-webkit-scrollbar {
            display: none;
          }

          .kirtan-safari-page .ks-guests-track::before,
          .kirtan-safari-page .ks-guests-track::after {
            display: none;
          }

          .kirtan-safari-page .ks-guest-card {
            min-width: 9.8rem !important;
            max-width: 9.8rem !important;
            width: 9.8rem !important;
            min-height: 15.5rem !important;
            justify-content: flex-start !important;
            scroll-snap-align: start;
            padding-top: 0.65rem;
            text-align: center !important;
            transform: none !important;
          }

          .kirtan-safari-page .ks-guest-card:nth-child(3n) {
            transform: translateY(0.55rem) rotate(1deg) !important;
          }

          .kirtan-safari-page .ks-guest-card:nth-child(4n) {
            transform: translateY(1.15rem) rotate(-1.4deg) !important;
          }

          .kirtan-safari-page .ks-guest-card:nth-child(5n) {
            transform: translateY(0.25rem) rotate(1.6deg) !important;
          }

          .kirtan-safari-page .ks-guest-frame {
            padding: 0.48rem !important;
            border-color: rgba(214,156,43,0.5) !important;
            box-shadow: 0 26px 70px rgba(0,0,0,0.35) !important;
          }

          .kirtan-safari-page .ks-guest-frame > div:first-child {
            border-radius: 46% 54% 39% 61% / 58% 38% 62% 42% !important;
          }

          .kirtan-safari-page .ks-guest-frame > div:last-child {
            aspect-ratio: 1 !important;
            border-radius: 46% 54% 39% 61% / 58% 38% 62% 42% !important;
          }

          .kirtan-safari-page .ks-guest-nameplate {
            position: relative;
            z-index: 4;
            margin: 0.75rem 0 0 !important;
            min-height: 3.8rem !important;
            padding: 0 !important;
            background: transparent !important;
            border: 0 !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
          }

          .kirtan-safari-page .ks-guest-card p {
            font-size: 0.68rem !important;
            letter-spacing: 0.05em !important;
            line-height: 1.25 !important;
          }
        }
      `}</style>
    </div>
  );
}
