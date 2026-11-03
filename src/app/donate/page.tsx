import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { donationPaths } from "@/data/site";
import Link from "next/link";
import { Heart, Shield, Phone } from "lucide-react";
import { withSeo } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = withSeo({
  title: "Donate",
  description: "Support ISKCON Nairobi's temple, Food For Life, cow protection, student sponsorship, and festival programmes.",
}, "/donate");

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Support the"
        titleAccent="Mission"
        subtitle="Give With Purpose"
        description="Your contribution directly sustains temple worship, feeds thousands, protects cows, educates students, and celebrates festivals across East Africa."
        image="/images/donate/main-altar-offering.jpg"
        className="sm:min-h-[500px]"
      />

      {/* How to give. List specific payment methods here once the temple confirms the details. */}
      <div className="bg-temple-brown py-3 section-padding">
        <div className="content-width text-center">
          <span className="font-body text-white/60 text-xs">
            Choose a cause below, then call or email the temple office to give.
          </span>
        </div>
      </div>

      {/* Donation paths */}
      <section className="pt-section-sm pb-section bg-temple-bg sm:pt-[clamp(2rem,4vw,4rem)] sm:pb-[clamp(2rem,4vw,4rem)]">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <SectionHeading eyebrow="Choose Your Cause" title="Where Your Gift Goes" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPaths.map((path) => (
              <div key={path.title} className="card-surface hover:shadow-card-hover hover:border-gold/40 transition-all overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <Image width={1600} height={1200} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={path.image} alt={path.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">{path.icon}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{path.title}</h3>
                  <p className="font-body text-ink/75 text-sm leading-relaxed mb-5">{path.description}</p>
                  <Link href={path.href} className="min-h-11 flex items-center justify-center gap-2 bg-gold text-ink font-body text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gold-light transition-colors w-full">
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
                <h3 className="font-display text-gold text-xl font-semibold mb-3">General Fund</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">Give to the general operations fund - the temple committee allocates your gift where the need is greatest.</p>
              </div>
              <Link href="/donate/general" className="min-h-11 mt-6 flex items-center justify-center gap-2 bg-gold text-ink font-body text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gold-light transition-colors">
                <Heart size={12} />
                Donate Freely
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="pt-6 pb-12 bg-temple-cream section-padding">
        <div className="content-width">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Shield size={28} className="text-gold" />
              <h4 className="font-display text-lg font-semibold text-ink">Transparent Accounting</h4>
              <p className="font-body text-ink/75 text-sm max-w-xs">Annual reports and fund allocation summaries published for all major donation campaigns.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Heart size={28} className="text-gold" />
              <h4 className="font-display text-lg font-semibold text-ink">100% Goes to the Cause</h4>
              <p className="font-body text-ink/75 text-sm max-w-xs">All designated donations reach their intended programme. Administrative costs are covered separately.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone size={28} className="text-gold" />
              <h4 className="font-display text-lg font-semibold text-ink">Donation Receipts</h4>
              <p className="font-body text-ink/75 text-sm max-w-xs">Formal receipts issued for all donations. Contact us for tax documentation in applicable jurisdictions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
