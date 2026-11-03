import { socials } from "./content";

export default function KirtanSafariSocial() {
  return (
    <section
      style={{
        background: "var(--color-festival-ink)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Follow the Journey
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display, serif)",
                color: "#fff",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                margin: 0,
              }}
            >
              Stay Connected
            </h3>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="ks-social-chip"
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "rgba(246,226,177,0.74)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid rgba(214,156,43,0.24)",
                  background: "rgba(214,156,43,0.08)",
                  padding: "0.4rem 0.55rem",
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}
              >
                <Icon size={13} color="var(--color-festival-gold)" strokeWidth={1.8} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
