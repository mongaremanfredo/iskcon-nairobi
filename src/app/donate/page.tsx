import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { donationPaths } from "@/data/site";
import Link from "next/link";
import { Heart, Shield, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate — Support the Mission",
  description: "Support ISKCON Nairobi's temple, Food For Life, cow protection, student sponsorship, and festival programmes. M-PESA and card accepted.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Support the"
        titleAccent="Mission"
        subtitle="Give With Purpose"
        description="Your contribution directly sustains temple worship, feeds thousands, protects cows, educates students, and celebrates festivals across East Africa."
        image="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&q=85"
        breadcrumbs={[{ label: "Donate" }]}
      />

      {/* Payment methods */}
      <div className="bg-temple-brown py-5 section-padding">
        <div className="content-width">
          <div className="flex flex-wrap items-center gap-6 justify-center">
            {["M-PESA", "Visa / Mastercard", "Bank Transfer", "PayPal", "Crypto (BTC/ETH)"].map(method => (
              <div key={method} className="flex items-center gap-2">
                <span className="gold-dot scale-75" />
                <span className="font-inter text-white/60 text-xs">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation paths */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Choose Your Cause</span>
            <h2 className="section-title">Where Your Gift Goes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPaths.map((path) => (
              <div key={path.title} className="bg-white border border-temple-sand hover:shadow-card-hover hover:border-gold/40 transition-all overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img src={path.image} alt={path.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">{path.icon}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-playfair text-xl font-semibold text-ink mb-3">{path.title}</h3>
                  <p className="font-inter text-ink/60 text-sm leading-relaxed mb-5">{path.description}</p>
                  <Link href={path.href} className="flex items-center justify-center gap-2 bg-gold text-white font-inter text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gold-dark transition-colors w-full">
                    <Heart size={12} />
                    Donate to {path.title}
                  </Link>
                </div>
              </div>
            ))}
            {/* General fund card */}
            <div className="bg-temple-brown border border-gold/20 p-8 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🙏</div>
                <h3 className="font-playfair text-gold text-xl font-semibold mb-3">General Fund</h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">Give to the general operations fund — the temple committee allocates your gift where the need is greatest.</p>
              </div>
              <Link href="/donate/general" className="mt-6 flex items-center justify-center gap-2 bg-gold text-white font-inter text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gold-dark transition-colors">
                <Heart size={12} />
                Donate Freely
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-temple-cream section-padding">
        <div className="content-width">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Shield size={28} className="text-gold" />
              <h4 className="font-playfair text-lg font-semibold text-ink">Transparent Accounting</h4>
              <p className="font-inter text-ink/60 text-sm max-w-xs">Annual reports and fund allocation summaries published for all major donation campaigns.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Heart size={28} className="text-gold" />
              <h4 className="font-playfair text-lg font-semibold text-ink">100% Goes to the Cause</h4>
              <p className="font-inter text-ink/60 text-sm max-w-xs">All designated donations reach their intended programme. Administrative costs are covered separately.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone size={28} className="text-gold" />
              <h4 className="font-playfair text-lg font-semibold text-ink">Donation Receipts</h4>
              <p className="font-inter text-ink/60 text-sm max-w-xs">Formal receipts issued for all donations. Contact us for tax documentation in applicable jurisdictions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
