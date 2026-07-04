import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ISKCON Nairobi",
  description: "The story, mission, and vision of ISKCON Nairobi — the spiritual and devotional centre for Hare Krishna communities across East Africa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About ISKCON"
        titleAccent="Nairobi"
        subtitle="Our Story"
        description="From a small devotional circle to East Africa's largest Vaishnava community — a four-decade journey of faith and service."
        image="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1600&q=85"
        height="md"
      />

      {/* Mission & History */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <span className="eyebrow block mb-4">Our Foundation</span>
              <h2 className="section-title mb-6">
                Built on Devotion,<br />
                <em className="text-gold not-italic font-normal">Rooted in Service</em>
              </h2>
              <div className="space-y-5 font-inter text-ink/70 text-body-md leading-relaxed">
                <p>
                  ISKCON Nairobi was established in the early 1980s by disciples of His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda, the founder-ācārya of the International Society for Krishna Consciousness. What began as a small gathering of devotees has grown into one of the most active spiritual communities in sub-Saharan Africa.
                </p>
                <p>
                  Today, ISKCON Nairobi serves as the regional hub for East Africa — home to a residential temple community, two theological colleges, a working farm and goshala, a prasādam distribution programme, and a vibrant festival culture that draws thousands of Kenyans each year.
                </p>
                <p>
                  Our mission is rooted in the teachings of Śrīmad-Bhāgavatam and the Bhagavad-gītā: to offer every soul an accessible path to spiritual knowledge, community, and devotional practice — regardless of background.
                </p>
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=400&q=80" alt="Temple worship" className="w-full aspect-portrait object-cover" />
              <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80" alt="Farm" className="w-full aspect-portrait object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-section bg-temple-cream">
        <div className="content-width section-padding">
          <div className="text-center mb-14">
            <span className="eyebrow block mb-3">What We Stand For</span>
            <h2 className="section-title">The Four Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Spiritual Education", icon: "📖", desc: "Preserving and transmitting the Vaishnava philosophical tradition through rigorous Bhakti-śāstrī and Bhakti-vaibhava study programmes." },
              { title: "Community Service", icon: "🤝", desc: "Feeding thousands through Food For Life, supporting students, and engaging in disaster relief and social upliftment across Kenya." },
              { title: "Cow Protection", icon: "🐄", desc: "Maintaining a working goshala at Thika where cows are protected, revered, and cared for as sacred members of the community." },
              { title: "Devotional Culture", icon: "🎶", desc: "Celebrating the richness of Vaishnava culture through kirtan, festivals, art, dance, prasādam, and the beauty of temple worship." },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white p-8 border border-temple-sand hover:shadow-card-hover transition-shadow">
                <div className="text-4xl mb-5">{pillar.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-3">{pillar.title}</h3>
                <div className="w-6 h-px bg-gold/50 mb-4" />
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-temple-brown text-center section-padding">
        <span className="eyebrow text-gold/70 block mb-4">Join the Community</span>
        <h2 className="font-playfair text-display-md text-temple-cream mb-6">Ready to Begin?</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/visit" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">
            Plan Your Visit
          </Link>
          <Link href="/learn" className="btn-ghost">
            Explore Our Programmes
          </Link>
        </div>
      </section>
    </>
  );
}
