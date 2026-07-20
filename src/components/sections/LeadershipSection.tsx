import Link from "next/link";
import { ArrowRight, BookOpen, Globe2, HeartHandshake } from "lucide-react";
import { leadership } from "@/data/site";

export default function LeadershipSection() {
  return (
    <section className="py-section bg-temple-bg bg-temple-texture">
      <div className="content-width section-padding">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow block mb-4">Guidance & Vision</span>
            <h2 className="section-title">
              Srila Prabhupada<br />
              <em className="text-gold not-italic font-normal">at the centre</em>
            </h2>
            <p className="font-cormorant text-ink/76 text-2xl leading-relaxed mt-5 sm:text-3xl">
              Without Srila Prabhupada, ISKCON Nairobi would not exist. His books, his kirtan, his personal visits to Kenya, and his instruction to share Krishna consciousness with everyone remain the source of our direction.
            </p>
            <Link
              href="/srila-prabhupada"
              className="mt-7 inline-flex items-center gap-2 font-inter text-xs text-gold font-semibold tracking-widest uppercase transition-all hover:gap-3"
            >
              Discover His Nairobi Legacy <ArrowRight size={13} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-gold/20" />
            <div className="relative overflow-hidden bg-dusk shadow-card-hover">
              <img
                src="/images/prabhupada/prabhupada-golden-gate-kirtan.jpg"
                alt="Srila Prabhupada leading public kirtan"
                className="aspect-[4/3] w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk/82 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-inter text-[0.62rem] uppercase tracking-[0.16em] text-gold/80">Founder-Acarya</p>
                <p className="mt-1 font-playfair text-2xl text-white">The root of our mission</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-9 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Globe2, label: "Global mission", value: "Krishna consciousness for everyone" },
            { icon: BookOpen, label: "Living foundation", value: "Bhagavad-gita and Srimad-Bhagavatam" },
            { icon: HeartHandshake, label: "Nairobi instruction", value: "Serve the whole community" },
          ].map((item) => (
            <div key={item.label} className="border border-temple-sand bg-white p-5 shadow-card">
              <item.icon className="mb-3 text-primary" size={21} />
              <p className="font-inter text-[0.62rem] uppercase tracking-[0.14em] text-gold font-semibold">{item.label}</p>
              <p className="mt-2 font-playfair text-lg leading-tight text-ink">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-10 text-center">
          <span className="eyebrow block mb-3">Continuing the instruction</span>
          <h3 className="font-playfair text-display-sm text-ink">
            Guidance that serves<br />
            <em className="text-gold not-italic font-normal">his vision</em>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {leadership.map((leader, i) => (
            <div key={leader.name} className="group flex flex-col items-center text-center">
              {/* Portrait */}
              <div className="relative mb-6">
                <div className="w-44 h-44 overflow-hidden rounded-none relative border-4 border-sand shadow-card">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Gold frame on hover */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/70 transition-colors duration-300" />
                </div>
                {/* Decorative gold corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Name & Title */}
              <h3 className="font-playfair text-xl font-semibold text-ink mb-1">{leader.name}</h3>
              <p className="font-inter text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">{leader.title}</p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mb-4" />

              {/* Description */}
              <p className="font-inter text-ink/60 text-sm leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
