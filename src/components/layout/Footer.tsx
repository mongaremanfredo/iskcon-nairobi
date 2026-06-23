import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { templeSchedule, navigation } from "@/data/site";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-dusk">
      <div className="content-width section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 block w-fit pr-6 text-sand transition-colors hover:text-white">
              <BrandLogo className="h-16 w-[172px]" />
            </Link>
            <p className="font-inter text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              The digital headquarters for ISKCON East Africa - where devotion, education, community service, and the beauty of the African landscape come together.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "#", label: "FB" },
                { href: "#", label: "IG" },
                { href: "#", label: "YT" },
                { href: "#", label: "X" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/50 transition-colors font-inter text-[10px] font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-inter text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-inter text-white/40 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">
              Daily Programme
            </h4>
            <ul className="space-y-2.5">
              {templeSchedule.map((item) => (
                <li key={item.time} className="flex items-start gap-3">
                  <span className="font-inter text-gold text-xs w-16 flex-shrink-0 pt-0.5">{item.time}</span>
                  <span className="font-inter text-white/40 text-sm">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-white/40 text-sm leading-relaxed">
                  Muhoho Avenue, South C<br />Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+254700000000" className="font-inter text-white/40 text-sm hover:text-primary transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:info@iskconnairobi.org" className="font-inter text-white/40 text-sm hover:text-primary transition-colors">
                  info@iskconnairobi.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-white/40 text-sm leading-relaxed">
                  Temple open daily<br />4:30 AM - 9:00 PM
                </span>
              </li>
            </ul>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-inter text-xs text-primary font-semibold tracking-widest uppercase border-b border-primary/30 pb-0.5 hover:border-primary transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="content-width section-padding py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/20 text-xs">
            © {new Date().getFullYear()} ISKCON Nairobi. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-inter text-white/20 text-xs">
            <span className="text-gold">Hare Krishna</span>
            <span>·</span>
            <span>Hare Krishna</span>
            <span>·</span>
            <span>Krishna Krishna</span>
            <span>·</span>
            <span>Hare Hare</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="font-inter text-white/20 text-xs hover:text-white/40 transition-colors">Privacy</Link>
            <Link href="/terms" className="font-inter text-white/20 text-xs hover:text-white/40 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
