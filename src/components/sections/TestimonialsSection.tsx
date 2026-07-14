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
            padding-top: 1.5rem !important;
            padding-bottom: 1.2rem !important;
          }
          .testimonials-section > .content-width {
            padding-left: 0.85rem !important;
            padding-right: 0.85rem !important;
          }
          .testimonials-section > div > .testimonials-header {
            flex-direction: row !important;
            align-items: flex-end !important;
            gap: 0.5rem !important;
            margin-bottom: 0.55rem !important;
          }
          .testimonials-header .eyebrow {
            margin-bottom: 0.18rem !important;
            font-size: 0.5rem !important;
            letter-spacing: 0.14em !important;
          }
          .testimonials-header .section-title {
            font-size: clamp(1rem, 4.65vw, 1.18rem) !important;
            line-height: 1 !important;
          }
          .testimonials-header > div:first-child {
            min-width: 0 !important;
          }
          .testimonials-header > div:last-child {
            flex-shrink: 0 !important;
            gap: 0.35rem !important;
          }
          .testimonials-header button {
            width: 1.55rem !important;
            height: 1.55rem !important;
          }
          .testimonials-header button svg {
            width: 0.68rem !important;
            height: 0.68rem !important;
          }
          .testimonials-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            min-height: 0 !important;
            border: 1px solid rgba(199, 163, 93, 0.28) !important;
            background: #f7efdf !important;
            padding: 0.7rem 0.75rem 0.8rem !important;
          }
          .testimonials-image-col {
            width: 5.4rem !important;
            height: 5.4rem !important;
            border-width: 2px !important;
            border-color: var(--color-gold) !important;
            border-radius: 999px !important;
            overflow: hidden !important;
            order: 1 !important;
            margin-bottom: 0.5rem !important;
            box-shadow: 0 10px 24px rgba(56, 37, 21, 0.16) !important;
          }
          .testimonials-image-col > div {
            width: 100% !important;
            height: 100% !important;
            aspect-ratio: 1 / 1 !important;
          }
          .testimonials-watermark {
            display: none !important;
          }
          .testimonials-quote-col {
            width: 100% !important;
            background: transparent !important;
            padding: 0 !important;
            order: 2 !important;
            text-align: center !important;
            align-items: center !important;
          }
          .testimonials-tabs {
            order: 3 !important;
            margin: 0.45rem 0 0 !important;
            justify-content: center !important;
            gap: 0.28rem !important;
          }
          .testimonials-tabs button {
            height: 0.16rem !important;
          }
          .testimonials-tabs button:first-child {
            width: 1.2rem !important;
          }
          .testimonials-tabs button:last-child {
            width: 0.5rem !important;
          }
          .testimonials-quote-col .flex-1 {
            width: 100% !important;
            flex: 0 1 auto !important;
          }
          .testimonials-quote-col blockquote {
            max-width: 18.5rem !important;
            margin: 0 auto 0.48rem !important;
            font-size: clamp(0.92rem, 4.35vw, 1.08rem) !important;
            line-height: 1.26 !important;
            color: var(--color-temple-brown) !important;
          }
          .testimonials-attribution {
            width: 100% !important;
            max-width: 15rem !important;
            margin: 0 auto !important;
            padding-top: 0.45rem !important;
            text-align: center !important;
          }
          .testimonials-attribution p:first-child {
            font-size: 0.72rem !important;
            line-height: 1.1 !important;
          }
          .testimonials-attribution p:nth-child(2) {
            font-size: 0.6rem !important;
            margin-top: 0.12rem !important;
            line-height: 1.1 !important;
          }
          .testimonials-attribution div {
            justify-content: center !important;
            margin-top: 0.16rem !important;
            gap: 0.24rem !important;
          }
          .testimonials-attribution .gold-dot {
            transform: scale(0.48) !important;
          }
          .testimonials-attribution p:last-child {
            font-size: 0.56rem !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>
    </section>
  );
}
