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
    <section className="testimonials-section py-section bg-temple-bg">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="testimonials-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
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
        <div className="testimonials-grid grid grid-cols-2 gap-0 min-h-0">
          {/* Left — Image */}
          <div className="testimonials-image-col relative overflow-hidden border-4 border-sand image-grade">
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
              <div className="testimonials-watermark absolute top-6 left-6 font-playfair text-white/10 leading-none" style={{ fontSize: "10rem" }}>
                "
              </div>
            </div>
          </div>

          {/* Right — Quote */}
          <div className="testimonials-quote-col bg-temple-cream p-8 lg:p-14 flex flex-col justify-between">
            {/* Tab indicators */}
            <div className="testimonials-tabs flex gap-2 mb-10">
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
            <div className="testimonials-attribution border-t border-temple-sand pt-6">
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
      <style>{`
        @media (max-width: 640px) {
          .testimonials-section {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          .testimonials-section > div > .testimonials-header {
            gap: 0.55rem !important;
            margin-bottom: 0.75rem !important;
          }
          .testimonials-header .eyebrow {
            margin-bottom: 0.25rem !important;
            font-size: 0.55rem !important;
          }
          .testimonials-header .section-title {
            font-size: clamp(1.05rem, 5vw, 1.3rem) !important;
            line-height: 1.05 !important;
          }
          .testimonials-header button {
            width: 1.75rem !important;
            height: 1.75rem !important;
          }
          .testimonials-header button svg {
            width: 0.75rem !important;
            height: 0.75rem !important;
          }
          .testimonials-image-col {
            border-width: 2px !important;
          }
          .testimonials-watermark {
            font-size: 3.5rem !important;
            top: 0.2rem !important;
            left: 0.2rem !important;
          }
          .testimonials-quote-col {
            padding: 0.5rem 0.55rem !important;
          }
          .testimonials-tabs {
            margin-bottom: 0.35rem !important;
            gap: 0.3rem !important;
          }
          .testimonials-tabs button {
            height: 0.2rem !important;
          }
          .testimonials-tabs button:first-child {
            width: 1.5rem !important;
          }
          .testimonials-tabs button:last-child {
            width: 0.6rem !important;
          }
          .testimonials-quote-col blockquote {
            font-size: 0.58rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.35rem !important;
          }
          .testimonials-attribution {
            padding-top: 0.25rem !important;
          }
          .testimonials-attribution p:first-child {
            font-size: 0.6rem !important;
          }
          .testimonials-attribution p:nth-child(2) {
            font-size: 0.52rem !important;
            margin-top: 0.1rem !important;
          }
          .testimonials-attribution div {
            margin-top: 0.1rem !important;
            gap: 0.25rem !important;
          }
          .testimonials-attribution .gold-dot {
            transform: scale(0.4) !important;
          }
          .testimonials-attribution p:last-child {
            font-size: 0.52rem !important;
          }
        }
      `}</style>
    </section>
  );
}
