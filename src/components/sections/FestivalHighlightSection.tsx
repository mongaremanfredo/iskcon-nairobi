"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function FestivalHighlightSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed image */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[750px]">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=85"
          alt="Kirtan Safari Festival — African Savanna"
          className="w-full h-full object-cover"
        />

        {/* Multi-layer overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Gold texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, #C79A3B 0%, transparent 50%)"
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center section-padding content-width">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 backdrop-blur-sm px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-inter text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                Featured Festival 2025
              </span>
            </div>

            {/* Title */}
            <h2 className="font-playfair text-white text-shadow mb-2" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              Kirtan Safari
            </h2>
            <h2 className="font-playfair text-gold italic text-shadow mb-6" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              Festival
            </h2>

            {/* Meta */}
            <div className="flex flex-wrap gap-5 mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar size={14} className="text-gold flex-shrink-0" />
                <span className="font-inter text-sm">August 14–17, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                <span className="font-inter text-sm">Nairobi National Park Outskirts</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-cormorant text-temple-cream/85 text-xl italic leading-relaxed mb-8 max-w-xl">
              Four days under the African sky — where the ancient sound of the mahā-mantra rises over the savanna at dawn. 
              An experience unlike any kirtan festival on earth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/festivals/kirtan-safari/register" className="btn-primary">
                Register Now
              </Link>
              <Link href="/festivals/kirtan-safari" className="btn-ghost group">
                Festival Details
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right side decorative element — visible on large screens */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
          <div className="writing-vertical font-inter text-[10px] tracking-[0.2em] uppercase text-white/30 h-24">
            Kirtan Safari 2025
          </div>
          <div className="w-px h-16 bg-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/50" />
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="bg-temple-brown py-5 section-padding content-width">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Days", value: "4" },
              { label: "Kīrtan Sessions", value: "16+" },
              { label: "Expected Attendees", value: "500+" },
              { label: "Countries", value: "8+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-gold text-2xl font-semibold">{stat.value}</p>
                <p className="font-inter text-white/50 text-xs tracking-wide uppercase mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/festivals"
            className="flex items-center gap-2 font-inter text-xs text-gold/70 hover:text-gold transition-colors tracking-widest uppercase"
          >
            All Festivals <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
