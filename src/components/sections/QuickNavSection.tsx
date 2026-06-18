"use client";

import Link from "next/link";
import { BookOpen, Heart, MapPin, HandHeart } from "lucide-react";

const navCards = [
  {
    icon: MapPin,
    title: "Visit Temple",
    description: "Temple timings, location, and what to expect on your first visit.",
    href: "/visit",
    color: "bg-saffron",
    accent: "text-saffron",
    bg: "hover:bg-saffron/5",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Philosophy courses, Bhakti-śāstrī programmes, and weekly classes.",
    href: "/learn",
    color: "bg-forest",
    accent: "text-forest",
    bg: "hover:bg-forest/5",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description: "Volunteer with Food For Life, the farm, festivals, and more.",
    href: "/serve",
    color: "bg-gold",
    accent: "text-gold",
    bg: "hover:bg-gold/5",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support temple worship, cow protection, students, and prasādam.",
    href: "/donate",
    color: "bg-temple-brown",
    accent: "text-temple-brown",
    bg: "hover:bg-temple-brown/5",
  },
];

export default function QuickNavSection() {
  return (
    <section className="py-section-sm bg-temple-cream">
      <div className="content-width section-padding">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="eyebrow">Find Your Path</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {navCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className={`group relative flex flex-col items-start p-6 lg:p-8 bg-white border border-temple-sand transition-all duration-300 ${card.bg} hover:shadow-card-hover hover:-translate-y-1`}
              >
                {/* Icon container */}
                <div className={`w-10 h-10 rounded-full ${card.color} flex items-center justify-center mb-5 flex-shrink-0`}>
                  <Icon size={18} className="text-white" />
                </div>

                <h3 className={`font-playfair text-xl font-semibold text-ink mb-2 group-hover:${card.accent} transition-colors`}>
                  {card.title}
                </h3>
                <p className="font-inter text-body-sm text-ink/60 leading-relaxed">
                  {card.description}
                </p>

                {/* Arrow */}
                <div className={`mt-6 flex items-center gap-1 font-inter text-xs font-semibold tracking-widest uppercase ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span>Explore</span>
                  <span>→</span>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${card.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
