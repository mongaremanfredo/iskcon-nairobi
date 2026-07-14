"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function useCountUp(target: number, duration: number = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, description, index, active }: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
  active: boolean;
}) {
  const count = useCountUp(value, 2000 + index * 200, active);

  return (
    <div className="stat-item relative flex flex-col items-center text-center p-6 lg:p-8 group">
      {/* Vertical divider (except last) */}
      <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gold/20" />

      {/* Number */}
      <div className="stat-number font-playfair font-bold text-gold mb-2" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>

      {/* Label */}
      <h3 className="stat-label font-playfair text-temple-cream text-xl font-medium mb-2">
        {label}
      </h3>

      {/* Gold rule */}
      <div className="stat-rule w-8 h-px bg-gold/40 mb-3" />

      {/* Description */}
      <p className="stat-description font-inter text-white/50 text-sm leading-relaxed max-w-[180px]">
        {description}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section relative overflow-hidden py-section" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
          alt="African landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-temple-brown/90" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-gold) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 content-width section-padding">
        {/* Header */}
        <div className="stats-header text-center mb-16">
          <span className="eyebrow text-gold/70 block mb-3">Our Impact</span>
          <h2 className="section-title-light">
            <span>Krishna Consciousness</span><br />
            <em className="text-gold not-italic font-normal">Across East Africa</em>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/10">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              index={i}
              active={active}
            />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="stats-quote mt-16 max-w-2xl mx-auto text-center">
          <p className="font-cormorant text-temple-cream/70 text-2xl italic leading-relaxed">
            "The welfare of all living beings is the highest act of devotion."
          </p>
          <p className="font-inter text-gold/50 text-xs tracking-[0.15em] uppercase mt-4">
            Śrīla Prabhupāda
          </p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .stats-section {
            padding-top: calc(var(--space-section, 6rem) / 2) !important;
            padding-bottom: calc(var(--space-section, 6rem) / 2) !important;
          }

          .stats-section :global(.section-padding) {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .stats-header {
            margin-bottom: 1.2rem !important;
          }

          .stats-header :global(.eyebrow) {
            margin-bottom: 0.45rem !important;
          }

          .stats-header :global(.section-title-light) {
            font-size: clamp(1.58rem, 7.35vw, 2.05rem) !important;
            line-height: 0.98 !important;
          }

          .stats-header :global(.section-title-light span),
          .stats-header :global(.section-title-light em) {
            white-space: nowrap !important;
          }

          .stats-grid {
            max-width: 100%;
          }

          .stat-item {
            padding: 0.7rem 0.35rem !important;
            min-height: 0 !important;
          }

          .stat-number {
            font-size: clamp(1.35rem, 8vw, 1.85rem) !important;
            margin-bottom: 0.2rem !important;
          }

          .stat-label {
            font-size: 0.82rem !important;
            line-height: 1.05 !important;
            margin-bottom: 0.22rem !important;
          }

          .stat-rule {
            width: 1.15rem !important;
            margin-bottom: 0.28rem !important;
          }

          .stat-description {
            font-size: 0.58rem !important;
            line-height: 1.25 !important;
            max-width: 7rem !important;
          }

          .stats-quote {
            margin-top: 1.4rem !important;
          }

          .stats-quote p:first-child {
            font-size: 1.02rem !important;
            line-height: 1.32 !important;
          }

          .stats-quote p:last-child {
            margin-top: 0.55rem !important;
            font-size: 0.55rem !important;
          }
        }
      `}</style>
    </section>
  );
}
