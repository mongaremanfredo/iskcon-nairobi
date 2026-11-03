import { KirtanSafariRegistrationButton } from "@/components/sections/KirtanSafariRegistrationModal";

export default function KirtanSafariFinalCtaStrip() {
  return (
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
              fontFamily: "var(--font-display, serif)",
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
              fontFamily: "var(--font-body, sans-serif)",
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
            background: "var(--color-festival-gold)",
            color: "var(--color-festival-ink)",
            fontFamily: "var(--font-body, sans-serif)",
            fontWeight: 800,
            fontSize: "0.75rem",
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
  );
}
