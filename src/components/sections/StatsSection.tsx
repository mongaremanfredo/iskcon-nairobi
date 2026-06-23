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
    <div className="relative flex flex-col items-center text-center p-6 lg:p-8 group">
      {/* Vertical divider (except last) */}
      <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gold/20" />

      {/* Number */}
      <div className="font-playfair font-bold text-gold mb-2" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>

      {/* Label */}
      <h3 className="font-playfair text-temple-cream text-xl font-medium mb-2">
        {label}
      </h3>

      {/* Gold rule */}
      <div className="w-8 h-px bg-gold/40 mb-3" />

      {/* Description */}
      <p className="font-inter text-white/50 text-sm leading-relaxed max-w-[180px]">
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
    <section className="relative overflow-hidden py-section" ref={ref}>
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
        <div className="text-center mb-16">
          <span className="eyebrow text-gold/70 block mb-3">Our Impact</span>
          <h2 className="section-title-light">
            Krishna Consciousness<br />
            <em className="text-gold not-italic font-normal">Across East Africa</em>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/10">
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
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="font-cormorant text-temple-cream/70 text-2xl italic leading-relaxed">
            "The welfare of all living beings is the highest act of devotion."
          </p>
          <p className="font-inter text-gold/50 text-xs tracking-[0.15em] uppercase mt-4">
            Śrīla Prabhupāda
          </p>
        </div>
      </div>
    </section>
  );
}
