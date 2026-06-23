"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { donationPaths } from "@/data/site";

const donationAccent = (title: string) => {
  if (title.includes("Food")) return "border-sunset/30 bg-sunset/10 text-sunset";
  if (title.includes("Cow")) return "border-acacia/30 bg-acacia/10 text-acacia";
  if (title.includes("Student")) return "border-gold/40 bg-gold/15 text-dusk";
  if (title.includes("Festival")) return "border-primary/30 bg-primary/10 text-primary";
  return "border-primary/30 bg-primary/10 text-primary";
};

export default function DonationSection() {
  return (
    <section className="py-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-temple-bg/96" />
      </div>

      <div className="relative z-10 content-width section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow block mb-3">Make a Difference</span>
          <h2 className="section-title">
            Support the Mission
          </h2>
          <p className="font-inter text-ink/60 text-body-md mt-4 max-w-lg mx-auto">
            Every contribution — large or small — directly funds real programmes that serve thousands of people across East Africa.
          </p>
          {/* MPESA note */}
          <div className="inline-flex items-center gap-2 mt-5 bg-forest/10 border border-forest/20 px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
            <span className="font-inter text-forest text-xs font-medium">
              M-PESA, card, and bank transfer accepted
            </span>
          </div>
        </div>

        {/* Donation Paths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {donationPaths.map((path) => (
            <div
              key={path.title}
              className="group bg-white border border-temple-sand hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden image-grade">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-3 left-3 border px-2 py-1 text-2xl ${donationAccent(path.title)}`}>{path.icon}</div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-playfair text-base font-semibold text-ink mb-2">{path.title}</h3>
                <p className="font-inter text-ink/55 text-xs leading-relaxed flex-1">{path.description}</p>
                <Link
                  href={path.href}
                  className="mt-5 flex items-center justify-center gap-2 bg-primary text-white font-inter text-xs font-semibold tracking-widest uppercase py-3 hover:bg-sunset transition-colors"
                >
                  <Heart size={12} />
                  Donate
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* General Donation CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-3 font-inter text-sm text-primary font-semibold tracking-widest uppercase border-b border-primary/30 pb-1 hover:border-primary transition-colors"
          >
            Explore all giving options <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
