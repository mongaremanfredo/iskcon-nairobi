import { BookOpen, ExternalLink } from "lucide-react";
import { days, adhivasEvent } from "./content";

export default function KirtanSafariSchedule() {
  return (
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
              fontFamily: "var(--font-body, sans-serif)",
              color: "var(--color-festival-gold)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Programme
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "var(--color-festival-gold)",
                fontSize: "0.75rem",
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
                fontFamily: "var(--font-display, serif)",
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
                fontFamily: "var(--font-body, sans-serif)",
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
                fontFamily: "var(--font-body, sans-serif)",
                color: "rgba(255,255,255,0.82)",
                fontSize: "0.86rem",
              }}
            >
              <span><strong style={{ color: "var(--color-festival-cream)" }}>Date:</strong> {adhivasEvent.date}</span>
              <span><strong style={{ color: "var(--color-festival-cream)" }}>Time:</strong> {adhivasEvent.time}</span>
              <span><strong style={{ color: "var(--color-festival-cream)" }}>Venue:</strong> {adhivasEvent.location}</span>
              <span><strong style={{ color: "var(--color-festival-cream)" }}>Prasad:</strong> {adhivasEvent.prasadam}</span>
            </div>
            <a
              className="ks-adhivas-story-link"
              href="/blog/sri-nama-sankirtana-adhivasa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0, 1fr) auto",
                gap: "0.85rem",
                alignItems: "center",
                marginTop: "1.35rem",
                padding: "1rem",
                textDecoration: "none",
                background:
                  "linear-gradient(135deg, rgba(7,28,16,0.72), rgba(7,28,16,0.36))",
                border: "1px solid rgba(214,156,43,0.32)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
              }}
            >
              <span
                style={{
                  width: "2.35rem",
                  height: "2.35rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-festival-ink)",
                  background: "var(--color-festival-gold)",
                  borderRadius: "42% 58% 47% 53% / 55% 40% 60% 45%",
                }}
              >
                <BookOpen size={16} strokeWidth={2} />
              </span>
              <span style={{ display: "grid", gap: "0.25rem", minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    color: "rgba(214,156,43,0.9)",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Join the Adhivas Bhajan
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display, serif)",
                    color: "#fff",
                    fontSize: "1.05rem",
                    lineHeight: 1.15,
                  }}
                >
                  Sing along with the lyrics that welcome the festival mood.
                </span>
              </span>
              <ExternalLink size={16} color="var(--color-festival-gold)" strokeWidth={1.8} />
            </a>
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
                background: i === 2 ? "rgba(214,156,43,0.08)" : "var(--color-festival-ink)",
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
                      fontFamily: "var(--font-display, serif)",
                      color: "var(--color-festival-gold)",
                      fontSize: "clamp(3rem, 8vw, 4.5rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {day.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      color: "var(--color-festival-gold)",
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
                    fontFamily: "var(--font-body, sans-serif)",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
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
                        fontFamily: "var(--font-body, sans-serif)",
                        color: "var(--color-festival-cream)",
                        fontSize: "0.75rem",
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
                        fontFamily: "var(--font-body, sans-serif)",
                        color: "var(--color-festival-gold)",
                        fontSize: "0.75rem",
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
                        fontFamily: "var(--font-body, sans-serif)",
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
                  fontFamily: "var(--font-display, serif)",
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
  );
}
