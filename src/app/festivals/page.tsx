import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { homepageFestivalPreview, vaishnavaCalendar2026 } from "@/data/site";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Festivals",
  description: "ISKCON Nairobi festival calendar including Ratha Yatra, Janmashtami, Gaura Purnima, and Kirtan Safari.",
};

export default function FestivalsPage() {
  return (
    <>
      <PageHero
        title="Sacred"
        titleAccent="Festivals"
        subtitle="Temple Calendar"
        description="Celebrate Lord Krishna, Lord Jagannath, Sri Chaitanya Mahaprabhu, and the holy name with Nairobi's devotional community."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=85"
        height="sm"
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow block mb-3">Next Temple Programmes</span>
              <h2 className="section-title">
                Upcoming<br />
                <em className="text-gold not-italic font-normal">Highlights</em>
              </h2>
            </div>
            <p className="max-w-xl font-inter text-sm leading-relaxed text-ink/60">
              Key public events from the ISKCON Nairobi 2026 Vaishnava calendar. Dates may be confirmed again closer to each festival.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {homepageFestivalPreview.map((festival) => (
              <Link
                href={festival.href}
                key={festival.href}
                className="group bg-white border border-temple-sand hover:border-primary/40 hover:shadow-card-hover transition-all overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden image-grade">
                  <img src={festival.image} alt={festival.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dusk/75 to-transparent" />
                  <div className="absolute left-4 top-4 bg-gold px-2.5 py-1">
                    <span className="font-inter text-[10px] font-bold uppercase tracking-[0.14em] text-white">{festival.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="font-playfair text-white text-xl font-semibold text-shadow">{festival.title}</h2>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-ink/50 mb-2">
                    <Calendar size={12} className="text-gold" />
                    <span className="font-inter text-xs">{festival.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink/50 mb-4">
                    <MapPin size={12} className="text-gold" />
                    <span className="font-inter text-xs">{festival.location}</span>
                  </div>
                  <p className="font-inter text-ink/60 text-sm leading-relaxed line-clamp-3">{festival.description}</p>
                  <div className="mt-5 flex items-center gap-2 font-inter text-xs font-semibold tracking-widest uppercase text-primary">
                    Details <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-none border border-gold/20 bg-white/70 p-5 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="eyebrow block mb-2">2026 Vaishnava Calendar</span>
                <h2 className="font-playfair text-2xl font-semibold text-ink sm:text-3xl">
                  Gaurabda 539-540
                </h2>
              </div>
              <div className="max-w-2xl font-inter text-xs leading-relaxed text-ink/55 sm:text-sm">
                Ekadashi and Dvadashi observances depend on local sunrise calculations. Please verify fasting details with ISKCON Nairobi announcements before publishing fasting instructions.
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {vaishnavaCalendar2026.map((month) => (
              <section key={month.month} className="border border-temple-sand bg-white">
                <div className="flex items-center justify-between border-b border-temple-sand bg-temple-cream px-4 py-3">
                  <h3 className="font-playfair text-xl font-semibold text-ink">{month.month}</h3>
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {month.events.length} dates
                  </span>
                </div>
                <div className="divide-y divide-temple-sand/70">
                  {month.events.map((item) => (
                    <div key={`${month.month}-${item.date}-${item.event}`} className="grid grid-cols-[4.8rem_1fr] gap-3 px-4 py-3">
                      <div>
                        <p className="font-inter text-xs font-bold uppercase tracking-[0.08em] text-primary">{item.date}</p>
                        <p className="font-inter text-[10px] uppercase tracking-[0.14em] text-ink/40">{item.day}</p>
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-inter text-sm leading-snug text-ink/75">{item.event}</p>
                          {item.type && (
                            <span className="inline-flex items-center gap-1 bg-gold/10 px-2 py-0.5 font-inter text-[9px] font-bold uppercase tracking-[0.12em] text-gold">
                              {item.type === "Major" && <Sparkles size={10} />}
                              {item.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
