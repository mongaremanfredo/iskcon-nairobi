import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { templeInfo, templeSchedule } from "@/data/site";
import { MapPin, Clock, Phone, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit the Temple",
  description: "Plan your visit to ISKCON Nairobi. Temple timings, location, what to expect, and how to reach us.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        title="Visit the"
        titleAccent="Temple"
        subtitle="Plan Your Visit"
        description="The temple is open daily to all visitors. Come as you are - no prior experience needed."
        image="/images/iskcon-nairobi-aerial.jpg"
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="eyebrow block mb-4">Daily Programmes</span>
              <h2 className="section-title mb-8">Temple Schedule</h2>
              <div className="divide-y divide-temple-sand">
                {templeSchedule.map((item) => (
                  <div key={item.time} className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-5">
                      <span className="font-inter text-gold font-semibold text-sm w-20">{item.time}</span>
                      <span className="font-playfair text-ink text-lg">{item.event}</span>
                    </div>
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold/40" />
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <span className="eyebrow block mb-4">First Time Visiting?</span>
                <h3 className="font-playfair text-2xl text-ink mb-6">What to Expect</h3>
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
                        <p className="font-inter font-semibold text-ink text-sm mb-1">{item.title}</p>
                        <p className="font-inter text-ink/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-temple-cream p-8 border border-temple-sand">
                <h3 className="font-playfair text-xl font-semibold text-ink mb-6">Find Us</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-ink text-sm">Address</p>
                      <p className="font-inter text-ink/60 text-sm mt-0.5 leading-relaxed">
                        {templeInfo.addressLines.map((line) => (
                          <span key={line}>{line}<br /></span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-ink text-sm">Opening Hours</p>
                      <p className="font-inter text-ink/60 text-sm mt-0.5">{templeInfo.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-ink text-sm">Phone</p>
                      <a href={`tel:${templeInfo.phoneHref}`} className="font-inter text-gold text-sm hover:underline">{templeInfo.phoneDisplay}</a>
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
                <p className="font-inter text-ink/70 text-xs leading-relaxed">
                  {templeInfo.note}
                </p>
              </div>

              <div className="bg-temple-brown p-6">
                <p className="font-playfair text-gold text-lg mb-2">Staying Longer?</p>
                <p className="font-inter text-white/60 text-sm leading-relaxed mb-4">
                  Contact the temple about guest accommodation, retreats, and extended spiritual visits.
                </p>
                <Link href="/guest-house" className="btn-outline border-gold/40 text-gold hover:bg-gold hover:text-white w-full justify-center text-xs">
                  View Guest House
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
