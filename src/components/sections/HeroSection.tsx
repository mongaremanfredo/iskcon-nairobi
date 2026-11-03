"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowDown, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import KirtanSafariRegistrationModal, {
  openKirtanSafariRegistration,
} from "./KirtanSafariRegistrationModal";
import { useKirtanSafariState } from "@/hooks/useKirtanSafariState";
import "./HeroSection.css";

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

function HeroPicture({ image, isFirst }: { image: HeroImage; isFirst: boolean }) {
  const style = {
    objectPosition: image.position,
    "--hero-mobile-position": image.mobilePosition ?? image.position,
  } as CSSProperties;
  const className = "hero-bg-image object-cover";

  if (!image.mobileSrc) {
    return <Image src={image.src} alt={image.alt} fill sizes="100vw" loading="eager" fetchPriority={isFirst ? "high" : "auto"} className={className} style={style} />;
  }

  // Art direction: phones get a separately composed crop of this illustration.
  const common = { alt: image.alt, fill: true, sizes: "100vw" };
  const { props: desktop } = getImageProps({ ...common, src: image.src });
  const { props: mobile } = getImageProps({ ...common, src: image.mobileSrc });

  return (
    <picture className="contents">
      <source media="(max-width: 900px)" srcSet={mobile.srcSet} sizes="100vw" />
      <img {...desktop} alt={image.alt} className={className} style={{ ...desktop.style, ...style }} />
    </picture>
  );
}

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  // Only the first slide downloads with the page. Each later slide is fetched
  // shortly before it appears, so a visitor who leaves early never pays for it.
  const [readySlides, setReadySlides] = useState(() => new Set([0]));
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

    return festivalState.phase === "concluded"
      ? [...baseHeroImages.slice(1), festivalSlide]
      : [festivalSlide, ...baseHeroImages.slice(1)];
  }, [festivalState.currentDayIndex, festivalState.nextDay, festivalState.phase]);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !connection?.saveData) return;
    const timer = setTimeout(() => setPaused(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (rotationRef.current) clearTimeout(rotationRef.current);
    if (paused) return;

    rotationRef.current = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, heroImages[currentImage].durationMs ?? 6000);

    return () => {
      if (rotationRef.current) clearTimeout(rotationRef.current);
    };
  }, [currentImage, heroImages, paused]);

  useEffect(() => {
    if (paused) return;
    const nextSlide = (currentImage + 1) % heroImages.length;
    const timer = setTimeout(() => {
      setReadySlides((ready) => (ready.has(nextSlide) ? ready : new Set(ready).add(nextSlide)));
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentImage, heroImages.length, paused]);

  const showSlide = (index: number) => {
    setReadySlides((ready) => (ready.has(index) ? ready : new Set(ready).add(index)));
    setCurrentImage(index);
  };

  const currentHero = heroImages[currentImage];

  return (
    <section className="home-hero relative w-full h-[88svh] min-h-[620px] max-h-[1000px] overflow-hidden sm:h-screen sm:min-h-[600px]">
      <KirtanSafariRegistrationModal />
      {/* The visible tagline rotates with each slide, so the page heading stays
          fixed for search engines and screen readers. */}
      <h1 className="sr-only">ISKCON Nairobi: Sri Sri Radha Bankebihari Temple</h1>
      {/* Background Images */}
      {heroImages.map((image, i) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-2000 ease-in-out",
            i === currentImage ? "opacity-100" : "opacity-0"
          )}
        >
          {readySlides.has(i) ? <HeroPicture image={image} isFirst={i === 0} /> : null}
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
            {/* Entrances use CSS only, so this copy shows without waiting for JavaScript. */}
            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-3 mb-4 motion-safe:animate-fade-up [animation-fill-mode:both]">
              <span className="eyebrow text-gold">{currentHero.eyebrow}</span>
            </div>

            {/* Gold rule */}
            <div
              className="hero-rule my-6 h-px w-64 bg-gradient-to-r from-gold via-gold/60 to-transparent motion-safe:animate-fade-in [animation-fill-mode:both]"
            />

            {/* Tagline - the signature element */}
            <div className="hero-tagline motion-safe:animate-fade-up [animation-delay:150ms] [animation-fill-mode:both]">
              <p className="font-editorial text-temple-cream/90 text-shadow" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.25rem)", lineHeight: 1.3, fontStyle: "italic" }}>
                {currentHero.tagline}
              </p>
              <p className="font-body text-white/70 mt-4 text-sm sm:text-base tracking-wide max-w-md leading-relaxed">
                {currentHero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-col gap-3 mt-8 motion-safe:animate-fade-up [animation-delay:300ms] [animation-fill-mode:both] sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
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
            <div className="-ml-2.5 flex items-center">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => showSlide(i)}
                  className="group flex h-11 w-11 items-center justify-center"
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === currentImage ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "h-1 transition-all duration-300",
                      i === currentImage ? "w-8 bg-gold" : "w-2 bg-white/60 group-hover:bg-white/80"
                    )}
                  />
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                className="flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-white"
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              >
                {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
              </button>
            </div>

            {/* Scroll hint */}
            <div className="flex flex-col items-center gap-2 text-white/70">
              <span className="font-body text-xs tracking-[0.15em] uppercase">Scroll</span>
              <ArrowDown size={14} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Temple schedule ticker */}
      <div className="absolute top-20 right-0 hidden lg:flex flex-col items-end gap-1 pr-8 pt-8">
        <span className="eyebrow text-gold text-shadow">Today&apos;s Programmes</span>
        <div className="text-right text-shadow">
          <p className="font-body text-white/90 text-xs">4:30 A.M. - Mangala Arati</p>
          <p className="font-body text-white/90 text-xs">7:15 A.M. - Shringar Darshan</p>
          <p className="font-body text-white/90 text-xs">7:00 P.M. - Sandhya - Gaur Arati</p>
        </div>
      </div>
    </section>
  );
}
