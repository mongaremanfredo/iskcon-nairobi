"use client";

import Link from "next/link";
import { BookOpen, Heart, MapPin, HandHeart } from "lucide-react";

const navCards = [
  {
    icon: MapPin,
    title: "Visit Temple",
    description: "Temple timings, location, and what to expect on your first visit.",
    href: "/visit",
    color: "bg-primary",
    accent: "text-primary",
    bg: "hover:bg-primary/5",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Philosophy courses, Bhakti-sastri programmes, and weekly classes.",
    href: "/learn",
    color: "bg-gold",
    accent: "text-gold",
    bg: "hover:bg-gold/5",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description: "Volunteer with Food For Life, the farm, festivals, and more.",
    href: "/serve",
    color: "bg-sunset",
    accent: "text-sunset",
    bg: "hover:bg-sunset/5",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support temple worship, cow protection, students, and prasadam.",
    href: "/donate",
    color: "bg-primary",
    accent: "text-primary",
    bg: "hover:bg-primary/5",
  },
];

export default function QuickNavSection() {
  return (
    <section className="py-10 bg-temple-cream sm:py-section-sm">
      <div className="content-width px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <span className="eyebrow">Find Your Path</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {navCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className={`group relative flex min-h-[164px] flex-col items-start bg-white border border-temple-sand p-3.5 transition-all duration-300 sm:min-h-0 sm:p-6 lg:p-8 ${card.bg} hover:shadow-card-hover hover:-translate-y-1`}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${card.color} flex items-center justify-center mb-3 sm:mb-5 flex-shrink-0`}>
                  <Icon size={16} className="text-white sm:size-[18px]" />
                </div>

                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-ink mb-1.5 sm:mb-2 leading-tight transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="font-inter text-[0.72rem] sm:text-body-sm text-ink/60 leading-relaxed">
                  {card.description}
                </p>

                <div className={`mt-auto pt-4 flex items-center gap-1 font-inter text-[0.62rem] sm:text-xs font-semibold tracking-widest uppercase ${card.accent} opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span>Explore</span>
                  <span>→</span>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${card.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
