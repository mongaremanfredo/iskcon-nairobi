"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-temple-brown/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      )}
    >
      <div className="content-width section-padding">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <span className="text-white font-playfair font-bold text-lg">ॐ</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-playfair text-white font-semibold text-base leading-tight tracking-wide">
                ISKCON Nairobi
              </p>
              <p className="font-inter text-gold text-[10px] tracking-[0.2em] uppercase">
                East Africa
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6">
            {navigation.slice(0, 8).map((item) => (
              <Link key={item.href} href={item.href} className="nav-link text-xs tracking-wider uppercase">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center gap-2 bg-gold text-white font-inter text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:bg-gold-dark"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-white p-2 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 z-40 transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[300px] bg-temple-brown flex flex-col transition-transform duration-500",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-playfair text-gold text-lg">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
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
                className="flex items-center justify-between px-6 py-3.5 font-inter text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-all border-b border-white/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
                <ChevronRight size={14} className="text-gold/50" />
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
