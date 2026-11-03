"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { donationPaths } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

const donationAccent = (title: string) => {
  if (title.includes("Food")) return "border-sunset/30 bg-sunset/10 text-sunset";
  if (title.includes("Cow")) return "border-acacia/30 bg-acacia/10 text-acacia";
  if (title.includes("Student")) return "border-gold/40 bg-gold/15 text-dusk";
  if (title.includes("Festival")) return "border-primary/30 bg-primary/10 text-primary";
  return "border-primary/30 bg-primary/10 text-primary";
};

export default function DonationSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-[clamp(2rem,4vw,4rem)] sm:pb-[clamp(2rem,4vw,4rem)]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image width={1600} height={1200} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
          src="/images/donate/main-altar-offering.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-temple-bg/96" />
      </div>

      <div className="relative z-10 content-width section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionHeading eyebrow="Make a Difference" title="Support the Mission" />
          <p className="font-body text-ink/75 text-body-md mt-4 max-w-lg mx-auto">
            Every contribution - large or small - directly funds real programmes that serve thousands of people across East Africa.
          </p>
          {/* List specific payment methods here once the temple confirms the details. */}
          <div className="inline-flex items-center gap-2 mt-5 bg-forest/10 border border-forest/20 px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
            <span className="font-body text-forest text-xs font-medium">
              Give by contacting the temple office
            </span>
          </div>
        </div>

        {/* Donation Paths */}
        <div tabIndex={0}
          role="group"
          aria-label="Causes you can support"
          className="donation-paths-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {donationPaths.map((path) => (
            <div
              key={path.title}
              className="donation-path-card group card-surface hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden image-grade">
                <Image width={1600} height={1200} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-3 left-3 border px-2 py-1 text-2xl ${donationAccent(path.title)}`}>{path.icon}</div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-base font-semibold text-ink mb-2">{path.title}</h3>
                <p className="font-body text-ink/75 text-xs leading-relaxed flex-1">{path.description}</p>
                <Link
                  href={path.href}
                  className="min-h-11 mt-5 flex items-center justify-center gap-2 bg-primary text-white font-body text-xs font-semibold tracking-widest uppercase py-3 hover:bg-primary-dark transition-colors"
                >
                  <Heart size={12} />
                  Give to {path.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* General Donation CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/donate"
            className="tap-target inline-flex items-center gap-3 font-body text-sm text-primary font-semibold tracking-widest uppercase border-b border-primary/30 pb-1 hover:border-primary transition-colors"
          >
            Explore all giving options <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .donation-paths-grid {
            display: flex !important;
            gap: 0.85rem !important;
            margin-left: calc(clamp(1rem, 5vw, 1.25rem) * -1) !important;
            margin-right: calc(clamp(1rem, 5vw, 1.25rem) * -1) !important;
            overflow-x: auto !important;
            padding: 0 1rem 0.6rem !important;
            scroll-padding-left: 1rem !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
          }

          .donation-path-card {
            width: min(78vw, 18rem) !important;
            min-width: min(78vw, 18rem) !important;
            scroll-snap-align: start !important;
          }
        }
      `}</style>
    </section>
  );
}
