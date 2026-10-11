"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, HandHeart, Heart, MapPin } from "lucide-react";

const navCards = [
  {
    icon: MapPin,
    title: "Visit Temple",
    description: "Temple timings, directions, and what to expect on your first visit.",
    href: "/visit",
    accent: "text-[#f09a6f]",
    line: "bg-primary",
    hover: "hover:bg-primary/35",
    motif: "-right-16 top-20 -rotate-[28deg]",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Bhagavad Gita, philosophy programmes, and weekly classes.",
    href: "/learn",
    accent: "text-gold-light",
    line: "bg-gold",
    hover: "hover:bg-gold-dark/35",
    motif: "-right-20 top-12 rotate-[34deg]",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description: "Volunteer with Food For Life, the farm, festivals, and more.",
    href: "/serve",
    accent: "text-[#9fc092]",
    line: "bg-acacia",
    hover: "hover:bg-acacia/35",
    motif: "-right-12 top-24 -rotate-[18deg]",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support temple worship, cow protection, students, and prasadam.",
    href: "/donate",
    accent: "text-[#f09a6f]",
    line: "bg-sunset",
    hover: "hover:bg-sunset/35",
    motif: "-right-20 top-16 rotate-[24deg]",
  },
];

export default function QuickNavSection() {
  return (
    <section className="bg-temple-cream pb-7 pt-9 sm:pb-10 sm:pt-12">
      <div className="content-width section-padding">
        <div className="mb-5 flex items-center gap-5 sm:mb-7">
          <span className="eyebrow shrink-0">Find Your Path</span>
          <span className="h-px flex-1 bg-gold/35" aria-hidden="true" />
        </div>

        <nav
          aria-label="Explore ISKCON Nairobi"
          className="grid grid-cols-2 overflow-hidden border border-dusk/20 bg-dusk lg:grid-cols-4"
        >
          {navCards.map((card, index) => {
            const Icon = card.icon;
            const mobileRightBorder = index % 2 === 0 ? "border-r" : "";
            const mobileBottomBorder = index < 2 ? "border-b" : "";

            return (
              <Link
                key={card.href}
                href={card.href}
                className={`group relative flex min-h-[224px] flex-col overflow-hidden border-white/15 p-4 text-white transition-colors duration-300 sm:min-h-[250px] sm:p-6 lg:min-h-[285px] lg:border-b-0 lg:border-r lg:p-7 lg:last:border-r-0 ${mobileRightBorder} ${mobileBottomBorder} ${card.hover}`}
              >
                <span className={`absolute inset-x-0 top-0 h-1 transition-colors duration-300 group-hover:bg-white/55 ${card.line}`} aria-hidden="true" />
                <span className={`absolute h-28 w-64 border-y border-white/[0.07] transition-all duration-500 group-hover:border-white/[0.14] ${card.motif}`} aria-hidden="true" />
                <span className="absolute -right-20 top-1/2 h-px w-72 -rotate-[42deg] bg-white/[0.06] transition-all duration-500 group-hover:bg-white/[0.13]" aria-hidden="true" />
                <span
                  className="absolute left-0 top-14 h-px w-12 bg-white/75 transition-all duration-500 group-hover:w-20 group-focus-visible:w-20 sm:top-16"
                  aria-hidden="true"
                >
                  <span className={`block h-full w-full ${card.line} transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0`} />
                </span>

                <div className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/[0.035] sm:h-12 sm:w-12">
                  <Icon size={20} className={`${card.accent} transition-colors group-hover:text-white`} aria-hidden="true" />
                </div>

                <div className="relative z-10 mt-auto pt-8 sm:pt-10">
                  <h3 className="font-playfair text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-inter text-[0.72rem] leading-relaxed text-white/58 transition-colors group-hover:text-white/80 sm:text-sm">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-inter text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/70 transition-all duration-300 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                    Explore <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
