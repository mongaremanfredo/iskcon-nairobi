"use client";

import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/ui/BrandLogo";

const mobileNavLabels = new Set(["Home", "About", "Visit", "Learn", "Projects", "Festivals", "Contact"]);
const mobileNavigation = navigation.filter((item) => mobileNavLabels.has(item.label));

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "site-nav fixed top-0 left-0 right-0 z-50 border-b px-5 shadow-none transition-all duration-300 max-[900px]:px-0",
          scrolled
            ? "bg-dusk/90 border-gold/25 py-2 backdrop-blur-[14px] shadow-lg"
            : "border-transparent !bg-transparent py-[18px] !shadow-none backdrop-blur-0 max-[900px]:py-3",
          isOpen && "bg-dusk/95 border-gold/25"
        )}
      >
        <div className="content-width section-padding">
          <nav className="flex items-center justify-between gap-6 max-[900px]:gap-3">
            <Link
              href="/"
              className="nav-brand flex min-w-0 items-center gap-2.5 text-sand no-underline transition-colors hover:text-white max-[900px]:gap-2"
              onClick={handleBrandClick}
            >
              <BrandLogo
                className={cn(
                  "nav-brand-logo transition-[width,height] duration-300 [filter:saturate(1.08)_contrast(1.12)]",
                  scrolled
                    ? "h-[46px] w-[50px] max-[900px]:h-[42px] max-[900px]:w-[45px]"
                    : "h-[68px] w-[73px] max-[900px]:h-[48px] max-[900px]:w-[52px]"
                )}
              />
              <span
                className={cn(
                  "nav-brand-text flex min-w-0 flex-col gap-[3px] transition-all duration-300",
                  scrolled ? "translate-y-0" : "translate-y-0"
                )}
              >
                <span className="nav-brand-name font-inter text-[0.95rem] font-extrabold leading-none tracking-[-0.01em] text-sand drop-shadow-sm max-[900px]:text-[0.9rem]">
                  ISKCON Nairobi
                </span>
                <span
                  className={cn(
                    "nav-brand-expansion font-inter text-[0.54rem] font-semibold leading-tight text-sand/85 drop-shadow-sm transition-opacity max-[900px]:text-[0.47rem]",
                    scrolled ? "opacity-80" : "opacity-95"
                  )}
                >
                  International Society for Krishna Consciousness
                </span>
              </span>
            </Link>

            <div className="hidden xl:flex items-center gap-6">
              {navigation.slice(0, 8).map((item) => (
                <Link key={item.href} href={item.href} className="nav-link text-xs tracking-wider uppercase">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/donate"
                className="hidden sm:inline-flex max-[900px]:hidden items-center gap-2 bg-primary text-white font-inter text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:bg-sunset"
              >
                Donate
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-gold/60 bg-dusk/45 p-0 text-gold shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-colors hover:border-gold/80 hover:bg-dusk/65 xl:hidden",
                  isOpen && "bg-dusk/70"
                )}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                type="button"
              >
                <span className="grid h-3.5 w-[18px] content-between" aria-hidden="true">
                  <span
                    className={cn(
                      "block h-px w-full origin-center bg-current transition-transform duration-200",
                      isOpen && "translate-y-[6.5px] rotate-45"
                    )}
                  />
                  <span
                    className={cn(
                      "block h-px w-full bg-current transition-opacity duration-150",
                      isOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "block h-px w-full origin-center bg-current transition-transform duration-200",
                      isOpen && "-translate-y-[6.5px] -rotate-45"
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "xl:hidden fixed inset-0 z-[70] transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[min(320px,100vw)] bg-dusk flex flex-col transition-transform duration-500",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <BrandLogo className="h-14 w-[150px] text-sand" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {mobileNavigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-6 py-3.5 font-inter text-sm text-white/80 hover:text-sunset hover:bg-white/5 transition-all border-b border-white/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
                <ChevronRight size={14} className="text-sunset/60" />
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-white/10">
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full justify-center text-xs"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-height: 520px) and (orientation: landscape) {
          .site-nav {
            padding-top: 0.35rem !important;
            padding-bottom: 0.35rem !important;
          }

          .site-nav .section-padding {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }

          .site-nav .nav-brand-logo {
            width: 42px !important;
            height: 39px !important;
          }

          .site-nav .nav-brand-name {
            font-size: 0.78rem !important;
          }

          .site-nav .nav-brand-expansion {
            font-size: 0.42rem !important;
            max-width: 12rem !important;
            white-space: nowrap !important;
          }

          .site-nav button[aria-label] {
            width: 2.35rem !important;
            height: 2.35rem !important;
          }
        }
      `}</style>
    </>
  );
}
