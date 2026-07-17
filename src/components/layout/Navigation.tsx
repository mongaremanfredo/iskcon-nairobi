"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b px-5 shadow-none transition-all duration-300 max-[760px]:px-[18px]",
        scrolled
          ? "bg-dusk/90 border-gold/25 py-2 backdrop-blur-[14px] shadow-lg"
          : "border-transparent !bg-transparent py-[18px] !shadow-none backdrop-blur-0 max-[760px]:py-3",
        isOpen && "bg-dusk/95 border-gold/25"
      )}
    >
      <div className="content-width section-padding">
        <nav className="flex items-center justify-between gap-6 max-[760px]:gap-3">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 text-sand no-underline transition-colors hover:text-white max-[760px]:gap-2.5"
          >
            <BrandLogo
              className={cn(
                "transition-[width,height] duration-300 [filter:saturate(1.08)_contrast(1.12)]",
                scrolled
                  ? "h-14 w-[60px] max-[760px]:h-[50px] max-[760px]:w-[54px]"
                  : "h-[86px] w-[92px] max-[760px]:h-[58px] max-[760px]:w-[62px]"
              )}
            />
            <span
              className={cn(
                "flex min-w-0 flex-col gap-[4px] transition-all duration-300",
                scrolled ? "translate-y-0" : "translate-y-0"
              )}
            >
              <span className="font-inter text-base font-extrabold leading-none tracking-[-0.01em] text-sand drop-shadow-sm max-[760px]:text-[1.02rem]">
                ISKCON Nairobi
              </span>
              <span
                className={cn(
                  "font-inter text-[0.58rem] font-semibold leading-tight text-sand/85 drop-shadow-sm transition-opacity max-[760px]:text-[0.58rem]",
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
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white font-inter text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:bg-sunset"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-gold/40 p-0 text-gold transition-colors hover:border-gold/70 xl:hidden",
                scrolled || isOpen ? "bg-dusk/25 hover:bg-dusk/40" : "bg-transparent hover:bg-transparent"
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

      <div
        className={cn(
          "xl:hidden fixed inset-0 z-40 transition-all duration-500",
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
            {navigation.map((item, i) => (
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
    </header>
  );
}
