"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* ── Countdown hook ─────────────────────────────────── */
function useCountdown(target: Date) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const update = () => setDiff(Math.max(0, target.getTime() - Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, "0")}</>;
}

/* ── Component ──────────────────────────────────────── */
export default function KirtanSafariSection() {
  const target = new Date("2026-08-28T10:00:00+03:00");
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0D0800",
      }}
    >
      {/* ── Background image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* ── Overlays ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,5,0,0.95) 0%, rgba(10,5,0,0.70) 55%, rgba(10,5,0,0.40) 100%)",
        }}
      />
      {/* amber glow from bottom-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 85% 110%, rgba(232,130,10,0.25) 0%, transparent 55%)",
        }}
      />
      {/* Top gold rule */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(to right, #E8820A, rgba(232,130,10,0.3), transparent)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="content-width section-padding"
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "5rem",
          paddingBottom: "5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left — main info */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,130,10,0.15)",
              border: "1px solid rgba(232,130,10,0.4)",
              padding: "0.375rem 0.875rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#E8820A",
                display: "inline-block",
                animation: "ks-pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "#E8820A",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Featured Festival · ISKCON Nairobi 60th Anniversary
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-playfair, serif)",
              margin: "0 0 0.5rem",
              lineHeight: 0.95,
            }}
          >
            <span
              style={{
                display: "block",
                color: "#fff",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 30px rgba(0,0,0,0.5)",
              }}
            >
              KIRTAN
            </span>
            <span
              style={{
                display: "block",
                color: "#E8820A",
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textShadow: "0 2px 30px rgba(232,130,10,0.3)",
              }}
            >
              SAFARI
            </span>
          </h2>

          {/* Gold rule */}
          <div
            style={{
              width: "4rem",
              height: "2px",
              background: "linear-gradient(to right, #E8820A, transparent)",
              margin: "1.25rem 0",
            }}
          />

          {/* Sub-tagline */}
          <p
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              color: "rgba(245,201,122,0.85)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontStyle: "italic",
              marginBottom: "0.75rem",
            }}
          >
            A Kirtan Journey Through Jarikhand Forest
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              fontStyle: "italic",
              marginBottom: "1.75rem",
            }}
          >
            "Every word a song, every step a dance."
          </p>

          {/* Meta pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            {[
              "📅 28 – 30 August 2026",
              "📍 Hare Krishna Temple, Nairobi",
              "🎟 Free Entry",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.75rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "0.375rem 0.75rem",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#E8820A",
                color: "#fff",
                fontFamily: "var(--font-inter, sans-serif)",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.875rem 1.75rem",
                textDecoration: "none",
              }}
            >
              Register Now →
            </a>
            <Link
              href="/festivals/kirtan-safari"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "var(--font-inter, sans-serif)",
                fontWeight: 600,
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.875rem 1.75rem",
                textDecoration: "none",
              }}
            >
              Full Details
            </Link>
          </div>
        </div>

        {/* Right — countdown + quick schedule */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Countdown */}
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(232,130,10,0.25)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "rgba(232,130,10,0.8)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                textAlign: "center",
              }}
            >
              Begins in
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.5rem",
                textAlign: "center",
              }}
            >
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hrs" },
                { value: minutes, label: "Min" },
                { value: seconds, label: "Sec" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      color: "#E8820A",
                      fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    <Pad n={value} />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick schedule */}
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(8px)",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              At a Glance
            </p>
            {[
              { date: "Aug 28 — Fri", highlight: "Adivas Kirtan · Balaram Purnima" },
              { date: "Aug 29 — Sat", highlight: "Special Harinam · Kirtan Sessions" },
              { date: "Aug 30 — Sun", highlight: "Continuous Kirtan All Day!" },
            ].map((item) => (
              <div
                key={item.date}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "0.625rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    color: "#E8820A",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    minWidth: "6.5rem",
                    flexShrink: 0,
                  }}
                >
                  {item.date}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.75rem",
                  }}
                >
                  {item.highlight}
                </span>
              </div>
            ))}
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.65rem",
                marginTop: "0.875rem",
                textAlign: "center",
              }}
            >
              Venue: Hare Krishna Temple, West Ngara Rd
            </p>
          </div>

          {/* Social strip */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { label: "Instagram", href: "https://www.instagram.com/kirtansafari" },
              { label: "YouTube", href: "https://www.youtube.com/@kirtan_safari" },
              { label: "TikTok", href: "https://www.tiktok.com/@kirtan.safari" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(232,130,10,0.3)",
                  paddingBottom: "1px",
                  transition: "color 0.2s",
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes ks-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
