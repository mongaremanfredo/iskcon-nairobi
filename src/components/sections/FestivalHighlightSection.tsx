import Link from "next/link";

export default function FestivalHighlightSection() {
  return (
    <section className="relative overflow-hidden bg-[#102116] text-sand">
      <img
        src="/images/kirtan-safari-2026-forest-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,33,22,0.96),rgba(16,33,22,0.76),rgba(16,33,22,0.42))]" />

      <div className="relative z-10 content-width section-padding py-[clamp(5rem,9vw,8rem)]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-4 font-inter text-[0.66rem] font-medium uppercase tracking-[0.08em] text-gold-light/78">
              Upcoming Festival
            </p>
            <h2 className="font-playfair text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.95] text-sand">
              Kirtan
              <br />
              <span className="text-gold-light italic">Safari</span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="font-cormorant text-[clamp(1.3rem,2.2vw,2rem)] leading-[1.55] text-sand/86">
              A three-day festival of kirtan, prasadam, and devotional gathering
              at Hare Krishna Temple, Nairobi.
            </p>
            <div className="mt-8 grid gap-4 border-y border-sand/16 py-6 sm:grid-cols-2">
              <div>
                <p className="font-inter text-[0.62rem] uppercase tracking-[0.08em] text-sand/46">
                  Dates
                </p>
                <p className="mt-1 font-playfair text-2xl text-sand">28-30 August 2026</p>
              </div>
              <div>
                <p className="font-inter text-[0.62rem] uppercase tracking-[0.08em] text-sand/46">
                  Venue
                </p>
                <p className="mt-1 font-playfair text-2xl text-sand">Hare Krishna Temple, Nairobi</p>
              </div>
            </div>
            <Link
              href="/festivals/kirtan-safari"
              className="quiet-link mt-8 border-sand/28 text-sand hover:border-gold-light hover:text-gold-light"
            >
              View Festival Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
