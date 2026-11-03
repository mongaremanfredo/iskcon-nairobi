import PageHero from "@/components/ui/PageHero";
import { templeInfo, templeScheduleGroups } from "@/data/site";
import { MapPin, Clock, Phone, AlertCircle } from "lucide-react";
import { withSeo } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = withSeo({
  title: "Visit the Temple",
  description: "Plan your visit to ISKCON Nairobi. Temple timings, location, what to expect, and how to reach us.",
}, "/visit");

export default function VisitPage() {
  return (
    <>
      <PageHero
        title="Visit the"
        titleAccent="Temple"
        subtitle="Plan Your Visit"
        description="The temple is open daily to all visitors. Come as you are - no prior experience needed."
        image="/images/iskcon-nairobi-aerial.jpg"
        className="sm:min-h-[500px]"
      />

      <section className="pt-section-sm pb-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <span className="eyebrow block mb-4">First Time Visiting?</span>
                <h2 className="font-display text-2xl text-ink mb-6">What to Expect</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Dress modestly", desc: "Visitors are welcome in modest attire. Shawls and simple coverings are often available at the entrance." },
                    { title: "Remove footwear", desc: "Shoes are removed before entering the temple hall. Follow the temple signs or ask a volunteer." },
                    { title: "Prasadam is free", desc: "Sanctified vegetarian food is distributed after many temple programmes." },
                    { title: "Photography", desc: "Photography is permitted in most areas. Please ask before photographing during arati or classes." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="gold-dot mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-body font-semibold text-ink text-sm mb-1">{item.title}</p>
                        <p className="font-body text-ink/75 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <SectionHeading eyebrow="Daily Programmes" title="Temple Schedule" eyebrowClassName="eyebrow block mb-4" titleClassName="section-title mb-8" />
              <div className="space-y-8">
                {templeScheduleGroups.map((group) => (
                  <div key={group.title} className="border border-temple-sand bg-white/50">
                    <div className="border-b border-temple-sand p-4">
                      <p className="font-display text-ink text-xl">{group.title}</p>
                      <p className="font-body text-gold-ink text-xs font-semibold tracking-widest uppercase mt-1">{group.timeRange}</p>
                    </div>
                    <div className="divide-y divide-temple-sand">
                      {group.items.map((item) => (
                        <div key={`${group.title}-${item.time}-${item.event}`} className="flex items-center justify-between px-4 py-3">
                          <div className="flex items-center gap-5">
                            <span className="font-body text-gold-ink font-semibold text-sm w-24 flex-shrink-0">{item.time}</span>
                            <span className="font-display text-ink text-lg">{item.event}</span>
                          </div>
                          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold/40" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="space-y-6 max-lg:order-first">
              <div className="bg-temple-cream p-8 border border-temple-sand">
                <h2 className="font-display text-xl font-semibold text-ink mb-6">Find Us</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-ink text-sm">Address</p>
                      <p className="font-body text-ink/75 text-sm mt-0.5 leading-relaxed">
                        {templeInfo.addressLines.map((line) => (
                          <span key={line}>{line}<br /></span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-ink text-sm">Opening Hours</p>
                      <p className="font-body text-ink/75 text-sm mt-0.5">{templeInfo.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-ink text-sm">Phone</p>
                      <a href={`tel:${templeInfo.phoneHref}`} className="font-body text-gold-ink text-sm hover:underline">{templeInfo.phoneDisplay}</a>
                    </div>
                  </div>
                </div>
                <a
                  href={templeInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center mt-6 text-xs"
                >
                  Get Directions
                </a>
              </div>

              <div className="flex gap-3 bg-gold/10 border border-gold/20 p-4">
                <AlertCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-body text-ink/75 text-xs leading-relaxed">
                  {templeInfo.note}
                </p>
              </div>

              <div className="bg-temple-brown p-6">
                <p className="font-display text-gold text-lg mb-2">Staying Longer?</p>
                <p className="font-body text-white/60 text-sm leading-relaxed mb-4">
                  Contact the temple about guest accommodation, retreats, and extended spiritual visits.
                </p>
                <ButtonLink variant="ghost" href="/guest-house" className="w-full justify-center text-xs">
                  View Guest House
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
