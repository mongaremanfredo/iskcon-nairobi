"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="py-section bg-temple-bg">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow block mb-3">Stories From the Field</span>
            <h2 className="section-title">
              Voices of<br />
              <em className="text-gold not-italic font-normal">Our Community</em>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 border border-temple-sand hover:border-gold flex items-center justify-center transition-colors group"
              aria-label="Previous"
            >
              <ChevronLeft size={16} className="text-ink/40 group-hover:text-gold transition-colors" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-temple-sand hover:border-gold flex items-center justify-center transition-colors group"
              aria-label="Next"
            >
              <ChevronRight size={16} className="text-ink/40 group-hover:text-gold transition-colors" />
            </button>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
          {/* Left — Image */}
          <div className="relative overflow-hidden order-2 lg:order-1">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:absolute lg:inset-0">
              <img
                key={current.image}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
              {/* Quote mark watermark */}
              <div className="absolute top-6 left-6 font-playfair text-white/10 leading-none" style={{ fontSize: "10rem" }}>
                "
              </div>
            </div>
          </div>

          {/* Right — Quote */}
          <div className="bg-temple-cream p-8 lg:p-14 flex flex-col justify-between order-1 lg:order-2">
            {/* Tab indicators */}
            <div className="flex gap-2 mb-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-0.5 transition-all duration-300",
                    i === active ? "w-12 bg-gold" : "w-4 bg-temple-sand hover:bg-gold/40"
                  )}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Quote */}
            <div className="flex-1">
              <blockquote
                key={active}
                className="font-cormorant text-temple-brown italic leading-relaxed mb-8"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
              >
                "{current.quote}"
              </blockquote>
            </div>

            {/* Attribution */}
            <div className="border-t border-temple-sand pt-6">
              <p className="font-inter font-semibold text-ink text-sm">{current.name}</p>
              <p className="font-inter text-ink/50 text-sm mt-0.5">{current.role}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="gold-dot scale-75" />
                <p className="font-inter text-gold text-xs tracking-wide">{current.origin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
