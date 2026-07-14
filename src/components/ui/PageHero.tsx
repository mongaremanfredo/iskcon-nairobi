interface PageHeroProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  description?: string;
  image: string;
  height?: "sm" | "md" | "lg";
  align?: "left" | "center";
}

export default function PageHero({
  title,
  titleAccent,
  subtitle,
  description,
  image,
  height = "md",
  align = "left",
}: PageHeroProps) {
  const heights = {
    sm: "h-[42vh] min-h-[220px] sm:h-64 sm:min-h-[240px]",
    md: "h-[48vh] min-h-[320px] max-h-[520px] sm:h-[50vh] sm:min-h-[360px] sm:max-h-[560px]",
    lg: "h-[58vh] min-h-[420px] max-h-[640px] sm:h-[65vh] sm:min-h-[460px] sm:max-h-[700px]",
  };

  return (
    <section className={`relative overflow-hidden ${heights[height]}`}>
      {/* Background */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      {align === "left" && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      )}

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 section-padding content-width ${align === "center" ? "items-center text-center" : ""}`}>
        {subtitle && (
          <span className="eyebrow text-gold/80 block mb-3">{subtitle}</span>
        )}

        <h1 className="font-playfair text-white text-shadow leading-tight" style={{ fontSize: "clamp(2.25rem, 12vw, 4.5rem)" }}>
          {title}
          {titleAccent && (
            <>
              <br />
              <em className="text-gold not-italic font-normal">{titleAccent}</em>
            </>
          )}
        </h1>

        {description && (
          <p className="font-inter text-white/70 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
