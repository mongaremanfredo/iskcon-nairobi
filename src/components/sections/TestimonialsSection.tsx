"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const prev = () => {
    setDirection("prev");
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection("next");
    setActive((a) => (a + 1) % testimonials.length);
  };
  const selectTestimonial = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? "next" : "prev");
    setActive(index);
  };

  const current = testimonials[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection("next");
      setActive((a) => (a + 1) % testimonials.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section py-section bg-temple-bg sm:pt-[clamp(2rem,4vw,4rem)] sm:pb-[clamp(2rem,4vw,4rem)]" data-direction={direction}>
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
          <div className="testimonials-header-controls flex items-center gap-3">
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
        <div className="testimonials-grid grid grid-cols-2 gap-0 min-h-[32rem]">
          {/* Left — Image */}
          <div className="testimonials-image-col group flex items-center justify-center bg-dusk p-8">
            <div className="testimonials-portrait-frame relative">
              <button
                onClick={prev}
                className="testimonials-side-control testimonials-side-control-prev hidden"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="testimonials-portrait relative h-64 w-64 overflow-hidden border-4 border-sand/20 shadow-card sm:h-72 sm:w-72">
              <img
                key={current.image}
                src={current.image}
                alt={current.name}
                className="testimonial-slide-panel h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
                <div className="absolute inset-0 border-2 border-gold/0 transition-colors duration-300 group-hover:border-gold/70" />
              </div>
              <button
                onClick={next}
                className="testimonials-side-control testimonials-side-control-next hidden"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-r-2 border-b-2 border-gold opacity-40 transition-opacity group-hover:opacity-100" />
              <div className="absolute -top-2 -left-2 h-8 w-8 border-l-2 border-t-2 border-gold opacity-40 transition-opacity group-hover:opacity-100" />
              {/* Quote mark watermark */}
              <div className="testimonials-watermark absolute -left-5 -top-7 font-playfair text-white/10 leading-none" style={{ fontSize: "6rem" }}>
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
                  onClick={() => selectTestimonial(i)}
                  className={cn(
                    "h-0.5 transition-all duration-300",
                    i === active ? "w-12 bg-gold" : "w-4 bg-temple-sand hover:bg-gold/40"
                  )}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Quote */}
            <div className="testimonials-quote-body flex-1">
              <blockquote
                key={active}
                className="testimonial-slide-panel font-cormorant text-temple-brown italic leading-relaxed mb-8"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
              >
                "{current.quote}"
              </blockquote>
            </div>

            {/* Attribution */}
            <div key={current.name} className="testimonial-slide-panel testimonials-attribution border-t border-temple-sand pt-6">
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
        .testimonials-section {
          --testimonial-enter-x: 1.25rem;
        }

        .testimonials-section[data-direction="prev"] {
          --testimonial-enter-x: -1.25rem;
        }

        .testimonials-grid {
          height: 32rem;
        }

        .testimonials-image-col,
        .testimonials-quote-col {
          min-height: 100%;
        }

        .testimonials-quote-body {
          min-height: 12rem;
          display: flex;
          align-items: center;
        }

        .testimonial-slide-panel {
          animation: testimonialSlideIn 560ms cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: opacity, transform;
        }

        @keyframes testimonialSlideIn {
          from {
            opacity: 0;
            transform: translateX(var(--testimonial-enter-x)) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .testimonials-section {
            padding-top: 2.5rem !important;
            padding-bottom: 3rem !important;
          }
          .testimonials-section > .content-width {
            padding-left: 1.15rem !important;
            padding-right: 1.15rem !important;
          }
          .testimonials-section > div > .testimonials-header {
            align-items: center !important;
            gap: 1rem !important;
            margin-bottom: 1.65rem !important;
            text-align: center !important;
          }
          .testimonials-header .eyebrow {
            margin-bottom: 0.45rem !important;
            font-size: 0.66rem !important;
            letter-spacing: 0.18em !important;
          }
          .testimonials-header .section-title {
            font-size: clamp(2.1rem, 12vw, 2.75rem) !important;
            line-height: 0.95 !important;
          }
          .testimonials-header > div:first-child {
            min-width: 0 !important;
            width: 100% !important;
          }
          .testimonials-header-controls {
            flex-shrink: 0 !important;
            gap: 0.6rem !important;
            justify-content: center !important;
            display: none !important;
          }
          .testimonials-header button {
            width: 2.35rem !important;
            height: 2.35rem !important;
            background: rgba(255, 255, 255, 0.42) !important;
            border-color: rgba(214, 156, 43, 0.28) !important;
          }
          .testimonials-header button svg {
            width: 0.9rem !important;
            height: 0.9rem !important;
          }
          .testimonials-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.1rem !important;
            min-height: 0 !important;
            height: auto !important;
            border: 0 !important;
            background: transparent !important;
            padding: 0 !important;
          }
          .testimonials-image-col {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
            background: transparent !important;
            order: 1 !important;
            margin-bottom: 0 !important;
          }
          .testimonials-portrait-frame {
            width: min(58vw, 12rem) !important;
            height: min(58vw, 12rem) !important;
            aspect-ratio: 1 / 1 !important;
          }
          .testimonials-side-control {
            position: absolute !important;
            top: 50% !important;
            z-index: 5 !important;
            display: flex !important;
            width: 2.35rem !important;
            height: 2.35rem !important;
            align-items: center !important;
            justify-content: center !important;
            border: 1px solid rgba(214, 156, 43, 0.38) !important;
            background: rgba(255, 255, 255, 0.58) !important;
            color: var(--color-gold) !important;
            transform: translateY(-50%) !important;
            box-shadow: 0 12px 28px rgba(56, 37, 21, 0.12) !important;
          }
          .testimonials-side-control-prev {
            left: -3.15rem !important;
          }
          .testimonials-side-control-next {
            right: -3.15rem !important;
          }
          .testimonials-portrait {
            width: 100% !important;
            height: 100% !important;
            aspect-ratio: 1 / 1 !important;
            border-width: 4px !important;
            border-color: rgba(244, 236, 225, 0.72) !important;
            box-shadow: 0 18px 45px rgba(56, 37, 21, 0.18) !important;
          }
          .testimonials-portrait-frame > div:not(.testimonials-portrait):not(.testimonials-watermark) {
            width: 1.45rem !important;
            height: 1.45rem !important;
          }
          .testimonials-watermark {
            display: none !important;
          }
          .testimonials-quote-col {
            width: 100% !important;
            min-height: 0 !important;
            background: transparent !important;
            padding: 0 !important;
            order: 2 !important;
            text-align: center !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
          .testimonials-tabs {
            order: 0 !important;
            margin: 0 0 1rem !important;
            justify-content: center !important;
            gap: 0.34rem !important;
          }
          .testimonials-tabs button {
            height: 0.18rem !important;
          }
          .testimonials-quote-body {
            width: 100% !important;
            min-height: 7.2rem !important;
            flex: 0 1 auto !important;
            align-items: center !important;
          }
          .testimonials-quote-col blockquote {
            max-width: 21.5rem !important;
            margin: 0 auto 1rem !important;
            font-size: clamp(1.18rem, 5.8vw, 1.42rem) !important;
            line-height: 1.34 !important;
            color: var(--color-temple-brown) !important;
          }
          .testimonials-attribution {
            width: 100% !important;
            max-width: 18rem !important;
            margin: 0 auto !important;
            padding-top: 0.8rem !important;
            text-align: center !important;
            border-top-color: rgba(214, 156, 43, 0.28) !important;
          }
          .testimonials-attribution p:first-child {
            font-size: 0.88rem !important;
            line-height: 1.15 !important;
          }
          .testimonials-attribution p:nth-child(2) {
            font-size: 0.72rem !important;
            margin-top: 0.18rem !important;
            line-height: 1.2 !important;
          }
          .testimonials-attribution div {
            justify-content: center !important;
            margin-top: 0.35rem !important;
            gap: 0.35rem !important;
          }
          .testimonials-attribution .gold-dot {
            transform: scale(0.62) !important;
          }
          .testimonials-attribution p:last-child {
            font-size: 0.66rem !important;
            line-height: 1.15 !important;
          }
        }
      `}</style>
    </section>
  );
}
