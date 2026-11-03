export default function KirtanSafariAbout() {
  return (
    <section
      style={{
        background: "var(--color-festival-ink)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              About the Event
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display, serif)",
                color: "#fff",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Where the Mantra<br />
              <em style={{ color: "var(--color-festival-gold)", fontStyle: "normal" }}>
                Meets the Wild
              </em>
            </h2>
            <div
              style={{ width: "2.5rem", height: "2px", background: "var(--color-festival-gold)", marginBottom: "1.5rem" }}
            />
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: "1.25rem",
              }}
            >
              This year carries special significance - ISKCON marks its{" "}
              <span style={{ color: "var(--color-festival-cream)", fontWeight: 600 }}>60th anniversary</span>,
              making Kirtan Safari 2026 a historic celebration of six decades of
              Krishna consciousness.
            </p>
            <p
              style={{
                fontFamily: "var(--font-editorial, serif)",
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
                  background: "var(--color-festival-ink)",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display, serif)",
                    color: "var(--color-festival-gold)",
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
                    fontFamily: "var(--font-body, sans-serif)",
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
                    fontFamily: "var(--font-body, sans-serif)",
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.75rem",
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
  );
}
