import Link from "next/link";

const pathways = [
  {
    title: "Visit the Temple",
    description: "Timings, location, Sunday Feast, and what to expect when you come.",
    href: "/visit",
  },
  {
    title: "Study and Practice",
    description: "Classes, courses, kirtan training, and the daily practice of bhakti.",
    href: "/learn",
  },
  {
    title: "Serve",
    description: "Volunteer with prasadam distribution, festivals, education, and temple care.",
    href: "/serve",
  },
  {
    title: "Support",
    description: "Sustain worship, Food For Life, students, festivals, and cow protection.",
    href: "/donate",
  },
];

export default function QuickNavSection() {
  return (
    <section className="sacred-section bg-temple-cream">
      <div className="content-width section-padding">
        <div className="mb-10 max-w-xl">
          <p className="eyebrow mb-3">Find Your Path</p>
          <h2 className="section-title">Begin gently</h2>
        </div>

        <div className="border-y border-dusk/12">
          {pathways.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid gap-3 border-b border-dusk/12 py-6 last:border-b-0 sm:grid-cols-[0.7fr_1.3fr_auto] sm:items-center sm:py-7"
            >
              <h3 className="font-playfair text-[1.45rem] leading-tight text-ink sm:text-[1.7rem]">
                {item.title}
              </h3>
              <p className="editorial-copy max-w-2xl text-[1.02rem] leading-relaxed">
                {item.description}
              </p>
              <span className="font-inter text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-gold-dark transition-colors group-hover:text-dusk">
                Continue
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
