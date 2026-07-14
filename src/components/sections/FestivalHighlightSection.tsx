"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Camera, Music2, Star } from "lucide-react";

/* Countdown hook */
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

function CountdownPanel({
  days,
  hours,
  minutes,
  seconds,
  className,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(7,28,16,0.72)",
        border: "1px solid rgba(214,156,43,0.3)",
        backdropFilter: "blur(10px)",
        padding: "1.75rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          color: "rgba(246,226,177,0.82)",
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
                color: "#d69c2b",
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
  );
}

/* Component */
export default function KirtanSafariSection() {
  const target = new Date("2026-08-28T10:00:00+03:00");
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section
      className="ks-home-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0b1f12",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('/images/kirtan-safari-2026-forest-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(7,28,16,0.96) 0%, rgba(7,28,16,0.78) 48%, rgba(7,28,16,0.42) 100%)",
        }}
      />
      {/* amber glow from bottom-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 85% 110%, rgba(214,156,43,0.26) 0%, transparent 55%)",
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
            "linear-gradient(to right, #d69c2b, rgba(214,156,43,0.35), transparent)",
        }}
      />

      {/* Content */}
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
        {/* Left - main info */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(214,156,43,0.16)",
              border: "1px solid rgba(214,156,43,0.45)",
              padding: "0.375rem 0.875rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#d69c2b",
                display: "inline-block",
                animation: "ks-pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "#f3c86a",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Featured Festival · 60th Anniversary
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
                color: "#d69c2b",
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textShadow: "0 2px 30px rgba(214,156,43,0.32)",
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
              background: "linear-gradient(to right, #d69c2b, transparent)",
              margin: "1.25rem 0",
            }}
          />

          {/* Sub-tagline */}
          <p
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              color: "rgba(246,226,177,0.9)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontStyle: "italic",
              marginBottom: "0.75rem",
            }}
          >
            A Kirtan Journey Through Jarikhand Forest
          </p>
          <CountdownPanel
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            className="ks-countdown-mobile"
          />
          <p
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              fontStyle: "italic",
              marginBottom: "1.75rem",
            }}
          >
            &ldquo;Every word a song, every step a dance.&rdquo;
          </p>

          {/* Meta pills */}
          <div
            className="ks-meta-pills"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            {[
              "📅 28–30 August 2026",
              "📍 Hare Krishna Temple",
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
                background: "#d69c2b",
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

        {/* Right - countdown + quick schedule */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Countdown */}
          <CountdownPanel
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            className="ks-countdown-desktop"
          />

          {/* Quick schedule */}
          <div
            style={{
              background: "rgba(7,28,16,0.66)",
              border: "1px solid rgba(246,226,177,0.12)",
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
                    color: "#d69c2b",
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
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: "#f6e2b1",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                marginTop: "0.6rem",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Free Entry
            </p>
          </div>

          {/* Social strip */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { label: "Instagram", href: "https://www.instagram.com/kirtansafari", Icon: Camera },
              { label: "YouTube", href: "https://www.youtube.com/@kirtan_safari", Icon: Music2 },
              { label: "TikTok", href: "https://www.tiktok.com/@kirtan.safari", Icon: Star },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "rgba(246,226,177,0.74)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid rgba(214,156,43,0.24)",
                  background: "rgba(214,156,43,0.08)",
                  padding: "0.4rem 0.55rem",
                  transition: "color 0.2s",
                }}
              >
                <Icon size={13} color="#d69c2b" strokeWidth={1.8} />
                {label}
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

        .ks-countdown-mobile {
          display: none;
        }

        @media (max-width: 640px) {
          .ks-home-section {
            max-width: 100vw;
            overflow-x: hidden;
          }

          .ks-home-section > .content-width {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
            grid-template-columns: 1fr !important;
            gap: 0.95rem !important;
          }

          .ks-countdown-mobile {
            display: block;
            margin: 0.25rem 0 0.8rem !important;
          }

          .ks-countdown-desktop {
            display: none !important;
          }

          .ks-home-section h2 span:first-child {
            font-size: clamp(2.55rem, 15vw, 3.6rem) !important;
            letter-spacing: -0.035em !important;
          }

          .ks-home-section h2 span:last-child {
            font-size: clamp(2rem, 12vw, 2.85rem) !important;
            letter-spacing: 0.04em !important;
          }

          .ks-home-section div[style*="display: inline-flex"] {
            max-width: 100% !important;
            margin-bottom: 1rem !important;
            padding: 0.35rem 0.65rem !important;
          }

          .ks-home-section div[style*="display: inline-flex"] span:last-child {
            white-space: nowrap !important;
            letter-spacing: 0.12em !important;
          }

          .ks-home-section .ks-meta-pills {
            flex-wrap: nowrap !important;
            gap: 0.35rem !important;
          }

          .ks-home-section .ks-meta-pills span {
            flex: 1 1 0 !important;
            min-width: 0 !important;
            padding: 0.34rem 0.42rem !important;
            font-size: 0.58rem !important;
            line-height: 1.25 !important;
            text-align: center !important;
          }

          .ks-home-section a[style*="padding: 0.875rem 1.75rem"] {
            width: 100% !important;
            justify-content: center !important;
            padding: 0.78rem 0.85rem !important;
            text-align: center !important;
          }

          .ks-home-section p {
            margin-bottom: 0.65rem !important;
          }

          .ks-home-section h2 + div {
            margin: 0.75rem 0 !important;
          }

          .ks-home-section div[style*="marginBottom: 2rem"],
          .ks-home-section div[style*="margin-bottom: 2rem"] {
            margin-bottom: 1.15rem !important;
          }

          .ks-home-section div[style*="gap: 0.875rem"] {
            gap: 0.55rem !important;
          }

          .ks-home-section div[style*="padding: 1.75rem"] {
            padding: 1rem !important;
          }

          .ks-home-section div[style*="padding: 1.5rem"] {
            padding: 1rem !important;
          }

          .ks-home-section div[style*="flex-direction: column"][style*="gap: 1.5rem"] {
            gap: 0.85rem !important;
          }

          .ks-home-section div[style*="grid-template-columns: repeat(4, 1fr)"] {
            gap: 0.25rem !important;
          }

          .ks-home-section span[style*="min-width: 6.5rem"] {
            min-width: 4.65rem !important;
          }

          .ks-home-section div[style*="padding: 0.625rem 0"] {
            padding: 0.45rem 0 !important;
            gap: 0.6rem !important;
          }

          .ks-home-section div[style*="display: flex"][style*="gap: 0.75rem"][style*="flex-wrap: wrap"] {
            gap: 0.55rem !important;
          }
        }
      `}</style>
    </section>
  );
}
