"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";
import "./TestimonialsSection.css";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);

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
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setPaused(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setDirection("next");
      setActive((a) => (a + 1) % testimonials.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="testimonials-section py-section bg-temple-bg sm:pt-[clamp(2rem,4vw,4rem)] sm:pb-[clamp(2rem,4vw,4rem)]" data-direction={direction}>
      <div className="content-width section-padding">
        {/* Header */}
        <div className="testimonials-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionHeading eyebrow="Stories From the Field" title="Voices of" accent="Our Community" />
          </div>
          <div className="testimonials-header-controls flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 border border-temple-sand hover:border-gold flex items-center justify-center transition-colors group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="text-ink/75 group-hover:text-gold-ink transition-colors" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border border-temple-sand hover:border-gold flex items-center justify-center transition-colors group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} className="text-ink/75 group-hover:text-gold-ink transition-colors" />
            </button>
          </div>
        </div>

        {/* Split Layout */}
        <div className="testimonials-grid grid grid-cols-2 gap-0 min-h-[32rem]">
          {/* Left - Image */}
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
              <Image width={1600} height={1200} sizes="320px"
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
              <div className="testimonials-watermark absolute -left-5 -top-7 font-display text-white/10 leading-none" style={{ fontSize: "6rem" }}>
                "
              </div>
            </div>
          </div>

          {/* Right - Quote */}
          <div className="testimonials-quote-col bg-temple-cream p-8 lg:p-14 flex flex-col justify-between">
            {/* Tab indicators */}
            <div className="testimonials-tabs flex items-center mb-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectTestimonial(i)}
                  className="group flex h-11 w-11 items-center justify-center"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "h-1 transition-all duration-300",
                      i === active ? "w-9 bg-gold-dark" : "w-4 bg-ink/40 group-hover:bg-gold-dark"
                    )}
                  />
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                className="flex h-11 w-11 items-center justify-center text-ink/75 transition-colors hover:text-gold-ink"
                aria-label={paused ? "Play testimonials" : "Pause testimonials"}
              >
                {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
              </button>
            </div>

            {/* Quote */}
            <div className="testimonials-quote-body flex-1">
              <blockquote
                key={active}
                className="testimonial-slide-panel font-editorial text-temple-brown italic leading-relaxed mb-8"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
              >
                "{current.quote}"
              </blockquote>
            </div>

            {/* Attribution */}
            <div key={current.name} className="testimonial-slide-panel testimonials-attribution border-t border-temple-sand pt-6">
              <p className="font-body font-semibold text-ink text-sm">{current.name}</p>
              <p className="font-body text-ink/75 text-sm mt-0.5">{current.role}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="gold-dot scale-75" />
                <p className="font-body text-gold-ink text-xs tracking-wide">{current.origin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
