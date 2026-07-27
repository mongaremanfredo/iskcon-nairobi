import Link from "next/link";
import { ArrowRight, BookOpen, Globe2, HeartHandshake } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section id="guidance-vision" className="relative scroll-mt-24 overflow-hidden bg-temple-brown py-section text-sand">
      <div className="absolute inset-0">
        <img
          src="/images/prabhupada/prabhupada-golden-gate-kirtan.jpg"
          alt=""
          className="h-full w-full object-cover opacity-[0.26]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dusk via-dusk/92 to-dusk/64" />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk via-transparent to-black/30" />
      </div>

      <div className="relative z-10 content-width section-padding">
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <span className="eyebrow block mb-4 text-gold/80">Guidance & Vision</span>
            <h2 className="section-title-light">
              Srila Prabhupada<br />
              <em className="text-gold not-italic font-normal">and Africa's doorway</em>
            </h2>
            <p className="font-cormorant text-sand/86 text-2xl leading-relaxed mt-5 sm:text-3xl">
              Srila Prabhupada is not a historical footnote for ISKCON Nairobi. He is the source of its existence, its books, its kirtan, its Deities, and its Africa-facing mission.
            </p>
            <p className="mt-5 font-inter text-sm leading-relaxed text-sand/62 max-w-xl">
              Public histories of the African mission record that after recovering in Mombasa, Prabhupada returned to Nairobi and launched the African preaching campaign from here. His instruction was clear: Kenya is an African country, and Krishna consciousness must be shared with African people, not only with the Indian community.
            </p>
            <Link
              href="/srila-prabhupada"
              className="mt-7 inline-flex items-center gap-2 font-inter text-xs text-gold font-semibold tracking-widest uppercase transition-all hover:gap-3"
            >
              Discover His Nairobi Legacy <ArrowRight size={13} />
            </Link>
            <Link
              href="/leadership"
              className="ml-0 mt-4 inline-flex items-center gap-2 font-inter text-xs text-sand/70 font-semibold tracking-widest uppercase transition-all hover:gap-3 hover:text-gold sm:ml-6"
            >
              Meet the Service Leaders <ArrowRight size={13} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-gold/20 max-sm:hidden" />
            <div className="relative overflow-hidden border border-gold/20 bg-dusk shadow-card-hover">
              <img
                src="/images/prabhupada/swami-prabhupada-classic.jpg"
                alt="Srila Prabhupada"
                className="aspect-[4/3] w-full object-cover object-[center_28%] opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk/88 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-inter text-[0.62rem] uppercase tracking-[0.16em] text-gold/80">Founder-Acarya</p>
                <p className="mt-1 font-playfair text-2xl text-white">The person behind the movement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-9 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Globe2, label: "African mission", value: "Nairobi as the launch point for preaching across Africa" },
            { icon: BookOpen, label: "Living foundation", value: "His books as the standard for study and training" },
            { icon: HeartHandshake, label: "Nairobi instruction", value: "Open the doors to Kenya's people" },
          ].map((item) => (
            <div key={item.label} className="border border-gold/15 bg-white/5 p-5 shadow-card backdrop-blur-sm">
              <item.icon className="mb-3 text-gold" size={21} />
              <p className="font-inter text-[0.62rem] uppercase tracking-[0.14em] text-gold/75 font-semibold">{item.label}</p>
              <p className="mt-2 font-playfair text-lg leading-tight text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-7 border-t border-gold/15 pt-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <h3 className="font-playfair text-3xl leading-tight text-temple-cream">
            Continuing the instruction today
          </h3>
          <div>
            <p className="font-cormorant text-xl leading-relaxed text-sand/70">
              Nairobi&apos;s service structure now works through spiritual guidance
              and departmental responsibility: education, worship, kirtan,
              outreach, hospitality, festivals, administration, and community
              care. The detailed leadership structure belongs on its own page;
              here the centre remains Srila Prabhupada&apos;s vision.
            </p>
            <Link
              href="/leadership"
              className="quiet-link mt-7 border-sand/28 text-sand hover:border-gold-light hover:text-gold-light"
            >
              Meet the Service Leaders <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
