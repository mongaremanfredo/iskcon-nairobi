import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { festivals } from "@/data/site";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivals.map((festival) => (
              <Link
                href={festival.href}
                key={festival.href}
                className="group bg-white border border-temple-sand hover:border-primary/40 hover:shadow-card-hover transition-all overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden image-grade">
                  <img src={festival.image} alt={festival.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dusk/75 to-transparent" />
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
        </div>
      </section>
    </>
  );
}
