"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, HandHeart, Heart, MapPin } from "lucide-react";

const navCards = [
  {
    icon: MapPin,
    title: "Visit Temple",
    description: "Temple timings, directions, and what to expect on your first visit.",
    href: "/visit",
    accent: "text-primary",
    line: "bg-primary",
    hover: "hover:border-primary/35 hover:bg-primary/[0.055]",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Bhagavad Gita, philosophy programmes, and weekly classes.",
    href: "/learn",
    accent: "text-gold-dark",
    line: "bg-gold",
    hover: "hover:border-gold/50 hover:bg-gold/[0.07]",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description: "Volunteer with Food For Life, the farm, festivals, and more.",
    href: "/serve",
    accent: "text-acacia",
    line: "bg-acacia",
    hover: "hover:border-acacia/45 hover:bg-acacia/[0.065]",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support temple worship, cow protection, students, and prasadam.",
    href: "/donate",
    accent: "text-sunset",
    line: "bg-sunset",
    hover: "hover:border-sunset/45 hover:bg-sunset/[0.06]",
  },
];

export default function QuickNavSection() {
  return (
    <section className="bg-temple-cream pb-7 pt-9 sm:pb-10 sm:pt-12">
      <div className="content-width section-padding">
        <div className="mb-5 text-center sm:mb-7 sm:flex sm:items-center sm:gap-5 sm:text-left">
          <span className="eyebrow sm:shrink-0">Find Your Path</span>
          <span className="hidden h-px flex-1 bg-gold/35 sm:block" aria-hidden="true" />
        </div>

        <nav
          aria-label="Explore ISKCON Nairobi"
          className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-5"
          style={{ gridAutoRows: "1fr" }}
        >
          {navCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.href}
                href={card.href}
                className={`group relative flex min-h-[168px] flex-col border border-temple-sand bg-white p-3.5 text-ink shadow-sm transition-all duration-300 sm:min-h-[210px] sm:p-6 lg:min-h-[238px] lg:p-7 ${card.hover} hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:-translate-y-0.5 focus-visible:shadow-card-hover`}
              >
                <span className={`absolute inset-x-0 top-0 h-0.5 ${card.line}`} aria-hidden="true" />

                <div className="relative flex h-12 w-full items-center">
                  <span
                    className={`absolute -left-3.5 z-20 h-px w-8 ${card.line} transition-all duration-300 group-hover:w-16 group-focus-visible:w-16 sm:-left-6 sm:w-[2.875rem] sm:group-hover:w-20 sm:group-focus-visible:w-20 lg:-left-7 lg:w-[3.125rem] lg:group-hover:w-20 lg:group-focus-visible:w-20`}
                    style={{ top: "75%" }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-temple-sand bg-white/35">
                    <span className="relative z-30 flex h-7 w-7 items-center justify-center bg-white">
                      <Icon size={20} className={card.accent} aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-4 sm:pt-6">
                  <h3 className="font-playfair text-lg font-semibold leading-tight text-ink sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 font-inter text-[0.7rem] leading-relaxed text-ink/60 sm:mt-2 sm:text-sm">
                    {card.description}
                  </p>
                  <span className="mt-5 hidden items-center gap-2 font-inter text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary transition-all duration-300 lg:inline-flex lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
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
