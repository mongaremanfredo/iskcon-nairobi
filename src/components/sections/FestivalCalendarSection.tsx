import Link from "next/link";
import { homepageFestivalPreview } from "@/data/site";

export default function FestivalCalendarSection() {
  return (
    <section className="sacred-section bg-temple-cream">
      <div className="content-width section-padding">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Sacred Calendar</p>
            <h2 className="section-title">Upcoming festivals</h2>
          </div>
          <p className="editorial-copy max-w-2xl">
            Festivals gather the community around worship, kirtan, prasadam,
            and remembrance. These are the next major observances at ISKCON
            Nairobi.
          </p>
        </div>

        <div className="border-y border-dusk/12">
          {homepageFestivalPreview.map((festival) => (
            <Link
              key={festival.href}
              href={festival.href}
              className="grid gap-4 border-b border-dusk/12 py-6 last:border-b-0 sm:grid-cols-[8rem_1fr_auto] sm:items-center"
            >
              <div>
                <p className="font-playfair text-3xl leading-none text-gold-dark">
                  {festival.day}
                </p>
                <p className="mt-1 font-inter text-[0.62rem] uppercase tracking-[0.08em] text-dusk/46">
                  {festival.month}
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-2xl leading-tight text-ink">
                  {festival.title}
                </h3>
                <p className="mt-2 editorial-copy text-[1rem] leading-relaxed">
                  {festival.description}
                </p>
              </div>
              <p className="font-inter text-[0.68rem] uppercase tracking-[0.08em] text-gold-dark">
                {festival.date}
              </p>
            </Link>
          ))}
        </div>

        <Link href="/festivals" className="quiet-link mt-10">
          Open Full Calendar
        </Link>
      </div>
    </section>
  );
}
