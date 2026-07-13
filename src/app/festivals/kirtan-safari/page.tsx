import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Calendar, MapPin, Music, Sun, Utensils } from "lucide-react";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Kirtan Safari Festival",
  description: "ISKCON Nairobi's devotional music festival, bringing kirtan, classes, prasadam, and community together in Kenya.",
};

const programme = [
  { title: "Dawn Kirtan", icon: <Sun size={16} />, desc: "Start the day with mantra meditation, japa, and morning kirtan." },
  { title: "Classes & Workshops", icon: <Music size={16} />, desc: "Hear from devotees, musicians, and teachers on bhakti, sound, and service." },
  { title: "Prasadam", icon: <Utensils size={16} />, desc: "Share sanctified vegetarian meals with guests, families, and visiting devotees." },
];

export default function KirtanSafariPage() {
  return (
    <>
      <PageHero
        title="Kirtan Safari"
        titleAccent="Festival"
        subtitle="ISKCON Nairobi Flagship Event"
        description="An annual celebration of the holy name hosted by ISKCON Nairobi. Contact the temple for current dates and registration details."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=85"
        height="lg"
      />

      <div className="bg-temple-brown py-6 section-padding">
        <div className="content-width">
          <div className="flex flex-wrap gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gold" />
                <span className="font-inter text-white text-sm">Annual festival</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span className="font-inter text-white text-sm">Hosted by ISKCON Nairobi</span>
              </div>
              <div className="flex items-center gap-3">
                <Music size={16} className="text-gold" />
                <span className="font-inter text-white text-sm">Kirtan, classes, prasadam, and community</span>
              </div>
            </div>
            <Link href="/festivals/kirtan-safari/register" className="btn-primary">
              Register Interest
            </Link>
          </div>
        </div>
      </div>

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow block mb-4">About the Festival</span>
              <h2 className="section-title mb-6">Where the Mantra<br /><em className="text-gold not-italic font-normal">Meets the Wild</em></h2>
              <div className="space-y-4 font-inter text-ink/70 leading-relaxed">
                <p>Kirtan Safari is ISKCON Nairobi's distinctive devotional music gathering, centered on the congregational chanting of the Hare Krishna maha-mantra.</p>
                <p>Devotees, seekers, musicians, and families gather for kirtan, philosophical discussion, service, and prasadam in a setting that reflects Kenya's beauty and spiritual hospitality.</p>
                <p>Dates, venue, and registration details are announced through the temple office and official social channels.</p>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80" alt="African landscape" className="w-full aspect-video object-cover" />
              <div className="grid sm:grid-cols-3 gap-4">
                {programme.map((item) => (
                  <div key={item.title} className="bg-temple-cream p-5 border border-temple-sand">
                    <div className="text-gold mb-3">{item.icon}</div>
                    <h3 className="font-playfair font-semibold text-ink mb-2">{item.title}</h3>
                    <p className="font-inter text-ink/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-temple-brown text-center section-padding">
        <h2 className="font-playfair text-display-md text-white mb-4">Join the Next Safari</h2>
        <p className="font-inter text-white/60 mb-8 max-w-md mx-auto text-sm">
          Email {templeInfo.email} or register interest so the team can send the latest details.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/festivals/kirtan-safari/register" className="btn-primary">Register Interest</Link>
          <Link href="/donate/festivals" className="btn-ghost">Sponsor Festivals</Link>
        </div>
      </section>
    </>
  );
}
