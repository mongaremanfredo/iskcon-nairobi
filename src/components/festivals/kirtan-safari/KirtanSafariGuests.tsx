import Image from "next/image";
import { kirtanSafariGuestKirtaniyas } from "@/data/kirtanSafari";

export default function KirtanSafariGuests() {
  return (
    <section
      className="ks-guests"
      aria-labelledby="guest-kirtaniyas"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, var(--color-festival-ink) 0%, #102b18 46%, var(--color-festival-ink) 100%)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
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
                fontFamily: "var(--font-display, serif)",
                color: "#fff",
                fontSize: "clamp(2.05rem, 5vw, 3.35rem)",
                lineHeight: 1.02,
                margin: 0,
                maxWidth: "48rem",
              }}
            >
              Voices Carrying the
              <span style={{ color: "var(--color-festival-gold)" }}> Safari Mood</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
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
            fontFamily: "var(--font-body, sans-serif)",
            color: "rgba(214,156,43,0.8)",
            fontSize: "0.75rem",
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
          {kirtanSafariGuestKirtaniyas.map((guest, index) => (
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
                  className="ks-guest-image"
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1.28",
                    overflow: "hidden",
                    background: "rgba(7,28,16,0.65)",
                  }}
                >
                  <Image
                    src={guest.image}
                    alt={`${guest.name}, guest kirtaniya for Kirtan Safari 2026`}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 34vw, 22vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
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
                    fontFamily: "var(--font-body, sans-serif)",
                    color: "var(--color-festival-cream)",
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
  );
}
