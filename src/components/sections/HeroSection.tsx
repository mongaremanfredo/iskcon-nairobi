"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import KirtanSafariRegistrationModal, {
  openKirtanSafariRegistration,
} from "./KirtanSafariRegistrationModal";
import { useKirtanSafariState } from "@/hooks/useKirtanSafariState";

type HeroCta =
  | {
      label: string;
      variant: "primary" | "ghost";
      href: string;
      action?: never;
    }
  | {
      label: string;
      variant: "primary" | "ghost";
      action: "kirtanRegistration";
      href?: never;
    };

type HeroImage = {
  src: string;
  mobileSrc?: string;
  alt: string;
  position: string;
  mobilePosition?: string;
  eyebrow: string;
  tagline: string;
  description: string;
  ctas: HeroCta[];
  durationMs?: number;
};

const baseHeroImages: HeroImage[] = [
  {
    src: "/images/home-kirtan-safari-illustration-hero.png",
    mobileSrc: "/images/home-kirtan-safari-illustration-hero-mobile.png",
    alt: "Illustration of devotees performing kirtan outdoors in Nairobi at sunset",
    position: "center center",
    mobilePosition: "center center",
    eyebrow: "Kirtan Safari 2026",
    tagline: "Every word a song, every step a dance.",
    description:
      "Join the four-day Kirtan Safari celebration at Hare Krishna Temple Nairobi, beginning with Adivas on 27 August.",
    ctas: [
      { label: "Register Free", variant: "primary", action: "kirtanRegistration" },
      { href: "/blog/sri-nama-sankirtana-adhivasa", label: "Begin the Mood", variant: "ghost" },
    ],
    durationMs: 10000,
  },
  {
    src: "/images/hero-ratha-yatra-kenya.jpg",
    alt: "Ratha Yatra devotees in Nairobi carrying a Hare Krishna sign",
    position: "center 48%",
    mobilePosition: "62% center",
    eyebrow: "Sri Sri Radha Bankebihari Temple",
    tagline: "Faith.\u2002Community.\u2002Service.",
    description:
      "Discover Krishna Consciousness in Nairobi through worship, kirtan, prasadam, education, and service.",
    ctas: [
      { href: "/visit", label: "Visit Temple", variant: "ghost" },
      { href: "/donate", label: "Support Our Mission", variant: "primary" },
    ],
  },
  {
    src: "/images/kirtan-safari-daily-darshan-2026.jpg",
    alt: "Daily darshan of Sri Sri Radha Bankebihari in red festival attire",
    position: "center top",
    mobilePosition: "center top",
    eyebrow: "Sri Sri Radha Bankebihari Temple",
    tagline: "Faith.\u2002Community.\u2002Service.",
    description:
      "Discover Krishna Consciousness in Nairobi through worship, kirtan, prasadam, education, and service.",
    ctas: [
      { href: "/visit", label: "Visit Temple", variant: "ghost" },
      { href: "/donate", label: "Support Our Mission", variant: "primary" },
    ],
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const rotationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const festivalState = useKirtanSafariState();

  const heroImages = useMemo(() => {
    const original = baseHeroImages[0];
    let festivalSlide: HeroImage = original;

    if (festivalState.phase === "live") {
      const dayNumber = festivalState.currentDayIndex + 1;
      const dayCopy = [
        {
          tagline: "The festival mood begins with Adivas.",
          description: "Join the opening kirtan and welcome four days centered on the holy name at Hare Krishna Temple Nairobi.",
        },
        {
          tagline: "Balarama Purnima resounds in Nairobi.",
          description: "Day two brings kirtan, worship, association, and prasadam. The festival is open, and you are welcome.",
        },
        {
          tagline: "The holy name moves through the city.",
          description: "Join day three for kirtan, special Harinam, devotee association, and prasadam.",
        },
        {
          tagline: "One final day, one continuous kirtan.",
          description: "Gather for the closing day of Kirtan Safari and carry the festival mood through the holy name.",
        },
      ][Math.max(0, Math.min(dayNumber - 1, 3))];
      festivalSlide = {
        ...original,
        eyebrow: `Kirtan Safari Live · Day ${dayNumber} of 4`,
        tagline: dayCopy.tagline,
        description: dayCopy.description,
        ctas: [
          { label: "Join Us Today", variant: "primary", action: "kirtanRegistration" },
          { label: "Live Programme", variant: "ghost", href: "/festivals/kirtan-safari#live" },
        ],
      };
    } else if (festivalState.phase === "between-days") {
      festivalSlide = {
        ...original,
        eyebrow: "Kirtan Safari Continues",
        tagline: "The kirtan continues tomorrow.",
        description: festivalState.nextDay
          ? `Return for ${festivalState.nextDay.theme} at Hare Krishna Temple Nairobi.`
          : "Return for the next Kirtan Safari programme at Hare Krishna Temple Nairobi.",
        ctas: [
          { label: "Join Us Tomorrow", variant: "primary", action: "kirtanRegistration" },
          { label: "View Programme", variant: "ghost", href: "/festivals/kirtan-safari#live" },
        ],
      };
    } else if (festivalState.phase === "concluded") {
      festivalSlide = {
        ...original,
        eyebrow: "Kirtan Safari at ISKCON Nairobi",
        tagline: "Four Days, One Holy Name",
        description: "Relive the 2026 gathering and discover Kirtan Safari as a recurring celebration of kirtan, association, prasadam, and service.",
        ctas: [
          { label: "Relive Kirtan Safari 2026", variant: "primary", href: "/festivals/kirtan-safari" },
          { label: "Explore Festivals", variant: "ghost", href: "/festivals" },
        ],
      };
    }

    return [festivalSlide, ...baseHeroImages.slice(1)];
  }, [festivalState.currentDayIndex, festivalState.nextDay, festivalState.phase]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (rotationRef.current) clearTimeout(rotationRef.current);

    rotationRef.current = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, heroImages[currentImage].durationMs ?? 6000);

    return () => {
      if (rotationRef.current) clearTimeout(rotationRef.current);
    };
  }, [currentImage, heroImages]);

  const currentHero = heroImages[currentImage];

  return (
    <section className="home-hero relative w-full h-[100svh] min-h-[620px] max-h-[1000px] overflow-hidden sm:h-screen sm:min-h-[600px]">
      <KirtanSafariRegistrationModal />
      {/* Background Images */}
      {heroImages.map((image, i) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-2000 ease-in-out",
            i === currentImage ? "opacity-100" : "opacity-0"
          )}
        >
          <picture className="contents">
            {image.mobileSrc ? <source media="(max-width: 900px)" srcSet={image.mobileSrc} /> : null}
            <img
              src={image.src}
              alt={image.alt}
              className="hero-bg-image w-full h-full object-cover"
              style={{
                objectPosition: image.position,
                "--hero-mobile-position": image.mobilePosition ?? image.position,
              } as CSSProperties}
            />
          </picture>
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
        <div className="hero-main flex-1 flex items-end pb-4 section-padding content-width sm:pb-10 lg:pb-14">
          <div className="hero-copy max-w-3xl">
            {/* Eyebrow */}
            <div
              className={cn(
                "hero-eyebrow flex items-center gap-3 mb-4 transition-all duration-1000 delay-300",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <span className="eyebrow text-gold">{currentHero.eyebrow}</span>
            </div>

            {/* Animated gold rule */}
            <div
              className={cn(
                "hero-rule my-6 h-px bg-gradient-to-r from-gold via-gold/60 to-transparent origin-left transition-all duration-1000 delay-700",
                loaded ? "opacity-100 scale-x-100 w-64" : "opacity-0 scale-x-0 w-64"
              )}
              style={{ transformOrigin: "left" }}
            />

            {/* Tagline - the signature element */}
            <div
              className={cn(
                "hero-tagline transition-all duration-1000 delay-700",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="font-cormorant text-temple-cream/90 text-shadow" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.25rem)", lineHeight: 1.3, fontStyle: "italic" }}>
                {currentHero.tagline}
              </p>
              <p className="font-inter text-white/70 mt-4 text-sm sm:text-base tracking-wide max-w-md leading-relaxed">
                {currentHero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={cn(
                "hero-ctas flex flex-col gap-3 mt-8 transition-all duration-1000 delay-[900ms] sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              {currentHero.ctas.map((cta) =>
                cta.action === "kirtanRegistration" ? (
                  <button
                    key={cta.label}
                    type="button"
                    className={cta.variant === "primary" ? "btn-primary" : "btn-ghost"}
                    onClick={openKirtanSafariRegistration}
                  >
                    {cta.label}
                  </button>
                ) : (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className={cta.variant === "primary" ? "btn-primary" : "btn-ghost"}
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hero-bottom section-padding content-width pb-5 sm:pb-8">
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
        <span className="eyebrow text-gold/70 text-[9px]">Today&apos;s Programmes</span>
        <div className="text-right">
          <p className="font-inter text-white/60 text-xs">4:30 A.M. - Mangala Arati</p>
          <p className="font-inter text-white/60 text-xs">7:15 A.M. - Shringar Darshan</p>
          <p className="font-inter text-white/60 text-xs">7:00 P.M. - Sandhya - Gaur Arati</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .home-hero .hero-bg-image {
            object-position: var(--hero-mobile-position) !important;
          }
        }

        @media (max-height: 520px) and (orientation: landscape) {
          .home-hero {
            min-height: 100svh !important;
            max-height: none !important;
          }

          .home-hero .hero-main {
            padding-bottom: 0.8rem !important;
            padding-top: 4.6rem !important;
            align-items: flex-end !important;
          }

          .home-hero .hero-copy {
            max-width: min(34rem, 72vw) !important;
          }

          .home-hero .hero-eyebrow {
            margin-bottom: 0.5rem !important;
            gap: 0.45rem !important;
          }

          .home-hero .hero-eyebrow .eyebrow {
            font-size: 0.52rem !important;
            line-height: 1.2 !important;
          }

          .home-hero .hero-title h1 {
            font-size: clamp(2rem, 9vh, 3.2rem) !important;
          }

          .home-hero .hero-rule {
            margin-top: 0.65rem !important;
            margin-bottom: 0.65rem !important;
            width: 9rem !important;
          }

          .home-hero .hero-tagline p:first-child {
            font-size: clamp(1rem, 4vh, 1.25rem) !important;
            line-height: 1.15 !important;
          }

          .home-hero .hero-tagline p:last-child {
            margin-top: 0.45rem !important;
            max-width: 28rem !important;
            font-size: 0.68rem !important;
            line-height: 1.35 !important;
          }

          .home-hero .hero-ctas {
            flex-direction: row !important;
            gap: 0.55rem !important;
            margin-top: 0.75rem !important;
          }

          .home-hero .hero-ctas a {
            width: auto !important;
            min-height: 36px !important;
            padding: 0.55rem 0.85rem !important;
            font-size: 0.58rem !important;
            letter-spacing: 0.07em !important;
            white-space: nowrap !important;
          }

          .home-hero .hero-bottom {
            padding-bottom: 0.55rem !important;
          }
        }
      `}</style>
    </section>
  );
}
