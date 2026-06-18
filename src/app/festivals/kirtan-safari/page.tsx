import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Calendar, MapPin, Music, Sun, Moon, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Kirtan Safari Festival 2025",
  description: "Four days of kirtan under the African sky — ISKCON Nairobi's flagship annual festival in the Kenyan wilderness.",
};

const schedule = [
  { day: "Day 1", theme: "Arrival & Opening Ceremony", icon: <Sun size={16} />, sessions: ["4:30 PM — Welcome Ārati & Kirtan", "6:00 PM — Opening Address", "8:00 PM — Moonrise Kirtan Session"] },
  { day: "Day 2", theme: "Śrīmad-Bhāgavatam Immersion", icon: <Music size={16} />, sessions: ["5:00 AM — Dawn Kirtan on the Savanna", "9:00 AM — Bhāgavatam Lecture Series", "4:00 PM — Instruments & Bhajan Workshop", "8:00 PM — Evening Fire Kirtan"] },
  { day: "Day 3", theme: "Guru & Vaiṣṇava Day", icon: <Moon size={16} />, sessions: ["5:00 AM — Maṅgala Ārati & Japa", "10:00 AM — Guru Appreciation Programme", "3:00 PM — Kirtan Mela (open stage)", "9:00 PM — All-Night Kirtan Begins"] },
  { day: "Day 4", theme: "Closing & Departure", icon: <Utensils size={16} />, sessions: ["5:00 AM — Final Dawn Kirtan", "9:00 AM — Closing Ceremony", "11:00 AM — Grand Prasādam Feast", "2:00 PM — Departure"] },
];

export default function KirtanSafariPage() {
  return (
    <>
      <PageHero
        title="Kirtan Safari"
        titleAccent="Festival 2025"
        subtitle="ISKCON Nairobi Flagship Event"
        description="August 14–17, 2025 · Four days under the African sky where the mahā-mantra meets the savanna."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=85"
        breadcrumbs={[{ label: "Festivals", href: "/festivals" }, { label: "Kirtan Safari" }]}
        height="lg"
      />

      {/* Event Details Strip */}
      <div className="bg-temple-brown py-6 section-padding">
        <div className="content-width">
          <div className="flex flex-wrap gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gold" />
                <span className="font-inter text-white text-sm">August 14–17, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span className="font-inter text-white text-sm">Nairobi National Park Outskirts, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Music size={16} className="text-gold" />
                <span className="font-inter text-white text-sm">16+ Kirtan Sessions · 8+ Countries</span>
              </div>
            </div>
            <Link href="/festivals/kirtan-safari/register" className="btn-primary">
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow block mb-4">About the Festival</span>
              <h2 className="section-title mb-6">Where the Mantra<br /><em className="text-gold not-italic font-normal">Meets the Wild</em></h2>
              <div className="space-y-4 font-inter text-ink/70 leading-relaxed">
                <p>The Kirtan Safari Festival is ISKCON Nairobi's most distinctive gift to the world of devotional music — a four-day immersive gathering held in the unique landscape of the East African wilderness.</p>
                <p>Devotees, seekers, musicians, and families gather under the African sky to experience the transformative power of the mahā-mantra in one of the most stunning natural settings on earth — as acacia trees silhouette against the Kenyan sunrise and the ancient sound of mṛdaṅga and kartāl fills the morning air.</p>
                <p>Each day follows a rhythm of early morning kīrtan, philosophical presentations, musical workshops, and communal prasādam, building toward a climactic all-night kirtan on Day 3.</p>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80" alt="African landscape" className="w-full aspect-video object-cover" />
              <div className="grid grid-cols-2 gap-4">
                {["500+ Attendees", "8+ Countries", "20+ Artists", "All Night Kirtan"].map(stat => (
                  <div key={stat} className="bg-temple-cream p-4 border border-temple-sand text-center">
                    <p className="font-playfair text-gold font-semibold">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-section bg-temple-cream">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Programme</span>
            <h2 className="section-title">Festival Schedule</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {schedule.map((day) => (
              <div key={day.day} className="bg-white p-7 border border-temple-sand hover:shadow-card hover:border-gold/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gold/10 text-gold flex items-center justify-center">{day.icon}</div>
                  <span className="eyebrow">{day.day}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-4">{day.theme}</h3>
                <div className="w-6 h-px bg-gold/30 mb-4" />
                <ul className="space-y-2">
                  {day.sessions.map(s => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="gold-dot mt-2 flex-shrink-0 scale-75" />
                      <span className="font-inter text-ink/60 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16 bg-temple-brown text-center section-padding">
        <h2 className="font-playfair text-display-md text-white mb-4">Secure Your Place</h2>
        <p className="font-cormorant text-gold text-2xl italic mb-6">"The mantra was made for this moment."</p>
        <p className="font-inter text-white/60 mb-8 max-w-sm mx-auto text-sm">Limited spaces available. Early registration recommended.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/festivals/kirtan-safari/register" className="btn-primary">Register Now</Link>
          <Link href="/donate/festivals" className="btn-ghost">Become a Sponsor</Link>
        </div>
      </section>
    </>
  );
}
