"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const heroImages = [
  {
    src: "/images/iskcon-nairobi-main-altar.jpg",
    alt: "Main altar of ISKCON Nairobi arranged in three sections with flowers and offerings",
    position: "center",
  },
  {
    src: "/images/iskcon-nairobi-aerial.jpg",
    alt: "Aerial view of ISKCON Nairobi temple with the Nairobi skyline",
    position: "center 58%",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=90",
    alt: "Kenyan savanna landscape",
    position: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=90",
    alt: "African golden hour landscape",
    position: "center",
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, i) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-2000 ease-in-out",
            i === currentImage ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: image.position }}
          />
        </div>
      ))}

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-sunset/20 via-primary/10 to-dusk/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-dusk/30 via-dusk/20 to-dusk/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-dusk/70 via-dusk/20 to-transparent" />

      {/* Subtle gold accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center section-padding content-width">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className={cn(
                "flex items-center gap-3 mb-8 transition-all duration-1000 delay-300",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <span className="gold-dot" />
              <span className="eyebrow text-gold">Sri Sri Radha Bankebihari Temple</span>
            </div>

            {/* Main Title */}
            <div
              className={cn(
                "transition-all duration-1000 delay-500",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <h1 className="font-playfair text-white text-shadow leading-[0.95]" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
                ISKCON
                <br />
                <span className="text-gold italic">Nairobi</span>
              </h1>
            </div>

            {/* Animated gold rule */}
            <div
              className={cn(
                "my-8 h-px bg-gradient-to-r from-gold via-gold/60 to-transparent origin-left transition-all duration-1000 delay-700",
                loaded ? "opacity-100 scale-x-100 w-64" : "opacity-0 scale-x-0 w-64"
              )}
              style={{ transformOrigin: "left" }}
            />

            {/* Tagline — the signature element */}
            <div
              className={cn(
                "transition-all duration-1000 delay-700",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="font-cormorant text-temple-cream/90 text-shadow" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.25rem)", lineHeight: 1.3, fontStyle: "italic" }}>
                Faith.&ensp;Community.&ensp;Service.
              </p>
              <p className="font-inter text-white/70 mt-4 text-sm sm:text-base tracking-wide max-w-md leading-relaxed">
                Discover Krishna Consciousness in Nairobi through worship, kirtan, prasadam, education, and service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-wrap gap-4 mt-10 transition-all duration-1000 delay-[900ms]",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Link href="/visit" className="btn-ghost">
                Visit Temple
              </Link>
              <Link href="/donate" className="btn-primary">
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-padding content-width pb-8">
          <div className="flex items-end justify-between">
            {/* Image Dots */}
            <div className="flex items-center gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={cn(
                    "transition-all duration-300",
                    i === currentImage
                      ? "w-8 h-1 bg-gold"
                      : "w-2 h-1 bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>

            {/* Scroll hint */}
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="font-inter text-[10px] tracking-[0.15em] uppercase">Scroll</span>
              <ArrowDown size={14} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Temple schedule ticker */}
      <div className="absolute top-20 right-0 hidden lg:flex flex-col items-end gap-1 pr-8 pt-8">
        <span className="eyebrow text-gold/70 text-[9px]">Today's Programmes</span>
        <div className="text-right">
          <p className="font-inter text-white/60 text-xs">4:30 AM — Maṅgala Ārati</p>
          <p className="font-inter text-white/60 text-xs">7:15 AM — Bhāgavatam Class</p>
          <p className="font-inter text-white/60 text-xs">6:30 PM — Sandhyā Ārati</p>
        </div>
      </div>
    </section>
  );
}
