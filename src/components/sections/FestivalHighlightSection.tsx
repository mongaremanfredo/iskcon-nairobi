"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform";

export default function FestivalHighlightSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[500px] max-h-[750px] image-grade">
        <img
          src="/images/kirtan-safari-2026-logo-wide.jpg"
          alt="Kirtan Safari Festival sunset artwork"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#11180f]/92 via-[#172414]/70 to-[#f09a22]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11180f]/82 via-transparent to-[#11180f]/10" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle at 72% 24%, #f4b553 0%, transparent 48%)",
          }}
        />

        <div className="absolute inset-0 flex items-center section-padding content-width">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 backdrop-blur-sm px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-inter text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                Featured Festival 2026
              </span>
            </div>

            <h2 className="font-playfair text-white text-shadow mb-2" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "0" }}>
              Kirtan Safari
            </h2>
            <h2 className="font-playfair text-gold italic text-shadow mb-6" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "0" }}>
              2026
            </h2>

            <div className="flex flex-wrap gap-5 mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar size={14} className="text-gold flex-shrink-0" />
                <span className="font-inter text-sm">August 28-30, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                <span className="font-inter text-sm">Hare Krishna Temple, Nairobi</span>
              </div>
            </div>

            <p className="font-cormorant text-temple-cream/85 text-xl italic leading-relaxed mb-8 max-w-xl">
              Every word a song. Every step a dance. A kirtan journey through Jarikhand Forest with kirtan, Harinam,
              Abhishek, prasadam, and devotional association.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Register Now
              </a>
              <Link href="/festivals/kirtan-safari" className="btn-ghost group">
                Festival Details
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
          <div className="writing-vertical font-inter text-[10px] tracking-[0.2em] uppercase text-white/35 h-24">
            Kirtan Safari 2026
          </div>
          <div className="w-px h-16 bg-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/50" />
        </div>
      </div>

      <div className="bg-[#203221] py-5 section-padding content-width">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Days", value: "3" },
              { label: "Kirtan", value: "All Day" },
              { label: "Paybill", value: "250144" },
              { label: "Account", value: "KIRTAN" },
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
