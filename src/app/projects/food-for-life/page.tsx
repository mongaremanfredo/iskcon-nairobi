import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food For Life — ISKCON Nairobi",
  description: "Distributing thousands of free prasādam meals monthly to students, street children, and vulnerable families across Nairobi.",
};

export default function FoodForLifePage() {
  return (
    <>
      <PageHero
        title="Food For"
        titleAccent="Life"
        subtitle="Prasādam Distribution"
        description="Thousands of free sanctified meals distributed every month across Nairobi — driven by compassion, sustained by community."
        image="/images/placeholders/iskcon-food-for-life.jpg"
        height="lg"
      />

      {/* Impact numbers */}
      <section className="bg-temple-brown py-12 section-padding">
        <div className="content-width">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { v: "10,000+", l: "Meals per Month" },
              { v: "12+", l: "Distribution Points" },
              { v: "10+", l: "Years Running" },
              { v: "500+", l: "Volunteers" },
            ].map(s => (
              <div key={s.l}>
                <p className="font-playfair text-gold text-4xl font-bold">{s.v}</p>
                <p className="font-inter text-white/50 text-xs uppercase tracking-widest mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow block mb-4">The Mission</span>
              <h2 className="section-title mb-6">No One Should<br /><em className="text-gold not-italic font-normal">Go Hungry</em></h2>
              <div className="space-y-4 font-inter text-ink/70 leading-relaxed">
                <p>Food For Life began with a simple principle from Śrīla Prabhupāda: "No one within ten miles of a temple should go hungry." In Nairobi, we take that mandate seriously.</p>
                <p>Every day, our volunteers prepare fresh vegetarian prasādam in the temple kitchen and distribute it to street children, school students, and families in Kibera, Mathare, and beyond.</p>
                <p>The food is more than nutrition — it is sanctified, prepared with devotion, and offered to the Lord before distribution. Recipients receive not just sustenance but the mercy of prasādam.</p>
              </div>
              <Link href="/donate/food" className="btn-primary mt-8 inline-flex">
                Fund a Meal Programme
              </Link>
            </div>
            <div>
              <img src="/images/placeholders/iskcon-food-for-life.jpg" alt="Food distribution" className="w-full aspect-card object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Distribution areas */}
      <section className="py-section bg-temple-cream">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Where We Serve</span>
            <h2 className="section-title">Distribution Areas</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Kibera", "Mathare", "Korogocho", "Mukuru", "City Centre", "Juja", "Thika", "Westlands", "South B", "South C", "Karen", "Eastleigh"].map((area) => (
              <div key={area} className="flex items-center gap-3 bg-white p-4 border border-temple-sand">
                <span className="gold-dot flex-shrink-0" />
                <span className="font-inter text-ink/70 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 bg-saffron text-center section-padding">
        <h2 className="font-playfair text-display-md text-white mb-4">Volunteer With Us</h2>
        <p className="font-inter text-white/80 mb-8 max-w-md mx-auto">Join our Food For Life team — cooking, distributing, fundraising, or driving. Every hour of service makes a direct impact.</p>
        <Link href="/contact" className="btn-ghost">Become a Volunteer</Link>
      </section>
    </>
  );
}
