import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | ISKCON Nairobi" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[72vh] overflow-hidden bg-dusk px-6 pb-20 pt-40 text-temple-cream sm:pt-48">
      <div className="absolute inset-0 -z-20 bg-[url('/images/sunset-route.png')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dusk/70 via-dusk/90 to-dusk" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-5 text-gold">404 · Path Not Found</p>
        <h1 className="font-playfair text-5xl leading-tight sm:text-7xl">This path ends here.</h1>
        <p className="mx-auto mt-6 max-w-xl font-inter text-base leading-relaxed text-white/70 sm:text-lg">
          The page may have moved, but the temple doors remain open. Continue from one of the paths below.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/" className="btn-primary gap-2"><ArrowLeft size={17} />Return Home</Link>
          <Link href="/visit" className="btn-outline gap-2 border-white/35 text-white hover:bg-white hover:text-dusk"><MapPin size={17} />Plan a Visit</Link>
          <Link href="/festivals" className="btn-outline gap-2 border-white/35 text-white hover:bg-white hover:text-dusk"><CalendarDays size={17} />View Calendar</Link>
        </div>
      </div>
    </section>
  );
}
