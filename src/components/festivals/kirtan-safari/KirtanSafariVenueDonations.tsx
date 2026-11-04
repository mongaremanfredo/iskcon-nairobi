import { MapPin, Phone, Mail } from "lucide-react";
import { KirtanSafariRegistrationButton } from "@/components/sections/KirtanSafariRegistrationModal";

export default function KirtanSafariVenueDonations() {
  return (
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Venue
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display, serif)",
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
                  icon: <MapPin size={14} color="var(--color-festival-gold)" />,
                  text: "ISKCON Nairobi, Radha Banke Bihari Mandir\nWest Ngara Road, Nairobi",
                },
                {
                  icon: <Phone size={14} color="var(--color-festival-gold)" />,
                  text: "0753 419 194",
                },
                {
                  icon: <Mail size={14} color="var(--color-festival-gold)" />,
                  text: "iskconnairobi@gmail.com",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
                >
                  <span style={{ marginTop: "0.15rem", flexShrink: 0 }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Support the Festival
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display, serif)",
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
                    fontFamily: "var(--font-body, sans-serif)",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Paybill No.
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display, serif)",
                    color: "var(--color-festival-cream)",
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
                    fontFamily: "var(--font-body, sans-serif)",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Account
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display, serif)",
                    color: "var(--color-festival-cream)",
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
                fontFamily: "var(--font-body, sans-serif)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Secure Your Place
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display, serif)",
                color: "#fff",
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Register for<br />
              <em style={{ color: "var(--color-festival-gold)", fontStyle: "normal" }}>Kirtan Safari 2026</em>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-editorial, serif)",
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
                background: "var(--color-festival-gold)",
                color: "#fff",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 700,
                fontSize: "0.75rem",
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
  );
}
