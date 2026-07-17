import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = { title: "Serve — Volunteer at ISKCON Nairobi" };

const opportunities = [
  { emoji: "🍛", title: "Food For Life", desc: "Cook, pack, and distribute prasādam meals. Daily and weekend shifts available.", commitment: "Flexible" },
  { emoji: "🌾", title: "Thika Farm", desc: "Cow care, organic farming, construction, and maintenance at the Thika campus.", commitment: "Weekend / Residential" },
  { emoji: "🎺", title: "Festival Crew", desc: "Event management, logistics, and hospitality for festivals and programmes.", commitment: "Seasonal" },
  { emoji: "📚", title: "HKTC Support", desc: "Library management, class assistance, and administrative support at the college.", commitment: "Weekly" },
  { emoji: "📸", title: "Media & Content", desc: "Photography, videography, social media, and digital content creation.", commitment: "Flexible" },
  { emoji: "🏗️", title: "Temple Services", desc: "Deity worship, flower arrangement, temple cleaning, and general seva.", commitment: "Daily / Weekly" },
];

export default function ServePage() {
  return (
    <>
      <PageHero title="Serve the" titleAccent="Community" subtitle="Volunteer Opportunities" description="Join hundreds of dedicated volunteers whose selfless service sustains ISKCON Nairobi's programmes across Kenya." image="/images/placeholders/iskcon-temple-bangalore.jpg" />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Volunteer Opportunities</span>
            <h2 className="section-title">Find Your<br /><em className="text-gold not-italic font-normal">Area of Service</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((op) => (
              <div key={op.title} className="bg-white border border-temple-sand p-7 hover:shadow-card-hover hover:border-gold/30 transition-all">
                <div className="text-3xl mb-4">{op.emoji}</div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-1">{op.title}</h3>
                <p className="font-inter text-gold text-xs tracking-wider mb-3">{op.commitment}</p>
                <div className="w-5 h-px bg-gold/30 mb-3" />
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{op.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Register as a Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
