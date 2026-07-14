import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thika Farm & Goshala",
  description: "Forty acres of sacred land where cow protection, organic farming, and devotional community life come together in the Kenyan highlands.",
};

export default function ThikaFarmPage() {
  return (
    <>
      <PageHero
        title="Thika Farm"
        titleAccent="& Goshala"
        subtitle="Organic Farming & Cow Protection"
        description="Forty acres of sacred land in the Kenyan highlands — where cow protection, organic farming, and devotional community life thrive together."
        image="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=85"
        height="lg"
      />

      {/* Overview */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow block mb-4">The Vision</span>
              <h2 className="section-title mb-6">A Self-Sufficient<br /><em className="text-gold not-italic font-normal">Devotional Community</em></h2>
              <div className="space-y-4 font-inter text-ink/70 leading-relaxed">
                <p>The Thika Farm represents ISKCON Nairobi's long-term vision of varnāśrama — a spiritually integrated community where devotees live close to the land, protect cows, grow their own food, and sustain a life centred on devotional practice.</p>
                <p>The farm supplies fresh organic produce, milk, and ghee to the Nairobi temple kitchen and Food For Life programme. Visitors and volunteers are welcome throughout the year.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
              ].map((src, i) => (
                <img key={i} src={src} alt="Farm" className={`w-full object-cover ${i === 1 ? "mt-8" : ""}`} style={{ aspectRatio: "3/4" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-section bg-temple-cream">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">What We Do</span>
            <h2 className="section-title">Farm Activities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🐄", title: "Goshala", desc: "Over 200 cows and bulls receive lifelong protection, veterinary care, and the highest quality feed. Milk is used exclusively for temple worship and prasādam." },
              { icon: "🌿", title: "Organic Farming", desc: "Vegetables, fruits, and grains grown using traditional and sustainable methods. No synthetic pesticides or fertilisers. All produce offered as prasādam." },
              { icon: "🧈", title: "Dairy Production", desc: "Fresh milk, yoghurt, ghee, and paneer produced daily from our protected cows — offered in the temple and distributed through Food For Life." },
              { icon: "🏕️", title: "Retreat Visits", desc: "Day visits and weekend spiritual retreats available for groups and individuals. Experience a day of farm life, cow care, and devotional community." },
              { icon: "🤝", title: "Volunteering", desc: "Join us for a week or a season. Volunteers participate in cow care, farming, construction, and daily temple programmes." },
              { icon: "🌱", title: "Training", desc: "Practical training in sustainable agriculture and traditional Indian farming for aspiring homesteaders and devotional farmers." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-7 border border-temple-sand hover:shadow-card hover:border-gold/20 transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-3">{item.title}</h3>
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest text-center section-padding">
        <h2 className="font-playfair text-display-md text-white mb-4">Visit the Farm</h2>
        <p className="font-inter text-white/70 mb-8 max-w-md mx-auto">Day visits, volunteering, and retreat stays available. Contact us to plan your trip to Thika.</p>
        <Link href="/contact" className="btn-outline border-white/40 text-white hover:bg-white hover:text-forest">
          Enquire Now
        </Link>
      </section>
    </>
  );
}
