import Link from "next/link";
import { ArrowRight, BookOpen, Globe2 } from "lucide-react";

export default function PrabhupadaSection() {
  return (
    <section className="relative overflow-hidden bg-temple-brown py-section text-sand max-sm:py-section-sm">
      <div className="absolute inset-0">
        <img
          src="/images/prabhupada/prabhupada-golden-gate-kirtan.jpg"
          alt="Srila Prabhupada leading public kirtan"
          className="h-full w-full object-cover opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dusk via-dusk/88 to-dusk/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 content-width section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow mb-4 block text-gold/80">Founder-Acarya</span>
            <h2 className="section-title-light">
              Without Srila Prabhupada,
              <br />
              <em className="not-italic text-gold">ISKCON Nairobi would not exist.</em>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="font-cormorant text-2xl leading-relaxed text-sand/86 sm:text-3xl">
              He carried Krishna consciousness across oceans, founded ISKCON in 1966, came personally to Kenya, and gave Nairobi the instruction to share Krishna's mercy with everyone.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="border border-gold/15 bg-white/5 p-4">
                <Globe2 className="mb-3 text-gold" size={20} />
                <p className="font-inter text-xs uppercase tracking-[0.14em] text-sand/55">Global mission</p>
                <p className="mt-1 font-playfair text-xl text-white">From one storefront to the world</p>
              </div>
              <div className="border border-gold/15 bg-white/5 p-4">
                <BookOpen className="mb-3 text-gold" size={20} />
                <p className="font-inter text-xs uppercase tracking-[0.14em] text-sand/55">Living legacy</p>
                <p className="mt-1 font-playfair text-xl text-white">Books, kirtan, prasadam, service</p>
              </div>
            </div>

            <Link href="/srila-prabhupada" className="mt-7 inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3">
              Discover His Nairobi Legacy <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
