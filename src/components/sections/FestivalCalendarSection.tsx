"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { festivals } from "@/data/site";

export default function FestivalCalendarSection() {
  const upcoming = festivals.filter((f) => !f.featured);

  return (
    <section className="py-section bg-temple-cream">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow block mb-3">Sacred Calendar</span>
            <h2 className="section-title">
              Upcoming<br />
              <em className="text-gold not-italic font-normal">Festivals & Events</em>
            </h2>
          </div>
          <Link
            href="/festivals"
            className="flex items-center gap-2 font-inter text-xs text-gold font-semibold tracking-widest uppercase hover:gap-3 transition-all"
          >
            Full Calendar <ArrowRight size={12} />
          </Link>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((festival) => (
            <Link
              key={festival.href}
              href={festival.href}
              className="group block bg-white border border-temple-sand hover:border-gold/40 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Date badge */}
                <div className="absolute bottom-4 left-4 bg-temple-brown/90 backdrop-blur-sm px-3 py-1.5">
                  <div className="flex items-center gap-2">
                    <Calendar size={11} className="text-gold" />
                    <span className="font-inter text-white text-xs">{festival.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-ink mb-1 group-hover:text-gold transition-colors">
                  {festival.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin size={11} className="text-gold flex-shrink-0" />
                  <span className="font-inter text-ink/50 text-xs">{festival.location}</span>
                </div>
                <p className="font-inter text-ink/60 text-sm leading-relaxed line-clamp-2">
                  {festival.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 font-inter text-xs font-semibold text-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-temple-brown p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-playfair text-white text-xl mb-1">Never Miss a Festival</p>
            <p className="font-inter text-white/60 text-sm">Get updates on ISKCON Nairobi events directly to your inbox.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 sm:w-64 bg-white/10 border border-white/20 text-white placeholder-white/40 font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-white font-inter text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-gold-dark transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
