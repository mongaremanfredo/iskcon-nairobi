import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Leaf, Music2 } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Devotional essays, festival stories, and scriptural reflections from ISKCON Nairobi.",
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <>
      <section className="relative overflow-hidden bg-dusk pt-32 text-temple-cream sm:pt-36 lg:pt-40">
        <img
          src="/images/blog/jharikhanda-forest-path.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dusk via-dusk/82 to-dusk/58" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="relative z-10 content-width section-padding pb-[clamp(3rem,7vw,6rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_0.18fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="eyebrow block text-gold">Temple Journal</span>
              <h1 className="mt-4 font-playfair text-[clamp(2.7rem,9vw,6.2rem)] font-semibold leading-[0.96] text-white text-shadow">
                Devotional stories with roots
              </h1>
              <p className="mt-6 max-w-2xl font-inter text-sm leading-relaxed text-temple-cream/72 sm:text-base">
                A quieter space for the meaning behind festivals, scriptural themes, temple culture, and the living practice of Krishna consciousness in Nairobi.
              </p>
            </div>
            <div className="hidden border-l border-gold/30 pl-5 lg:block">
              <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                First essay
              </p>
              <p className="mt-2 font-playfair text-2xl leading-tight text-white">
                Jharikhanda and Kirtan Safari
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-temple-bg bg-temple-texture py-[clamp(2.7rem,12vw,3.8rem)] sm:py-[clamp(3.5rem,5vw,5.5rem)]">
        <div className="content-width section-padding">
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-stretch">
            <Link
              href={featured.href}
              className="group relative min-h-[24rem] overflow-hidden border border-gold/25 bg-dusk shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card-hover sm:min-h-[30rem]"
            >
              <img
                src={featured.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/22 to-transparent" />
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="bg-gold px-3 py-1 font-inter text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white">
                  Featured
                </span>
                <span className="bg-dusk/72 px-3 py-1 font-inter text-[0.62rem] font-bold uppercase tracking-[0.14em] text-temple-cream">
                  Source study
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {featured.category}
                </p>
                <h2 className="mt-3 max-w-2xl font-playfair text-3xl font-semibold leading-tight text-white text-shadow sm:text-5xl">
                  {featured.title}
                </h2>
              </div>
            </Link>

            <article className="flex flex-col justify-between border border-temple-sand bg-white p-6 shadow-card sm:p-8 lg:p-10">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3 font-inter text-xs uppercase tracking-[0.14em] text-ink/45">
                  <span>{featured.date}</span>
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} className="text-gold" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {featured.subtitle}
                </h2>
                <p className="mt-5 font-inter text-base leading-relaxed text-ink/65">
                  {featured.excerpt}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    { icon: BookOpen, label: "Text", value: "Madhya 17" },
                    { icon: Music2, label: "Theme", value: "Holy name" },
                    { icon: Leaf, label: "Mood", value: "Forest kirtan" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="border border-temple-sand bg-temple-cream/60 p-4">
                        <Icon className="text-gold" size={18} />
                        <p className="mt-3 font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/42">
                          {item.label}
                        </p>
                        <p className="mt-1 font-inter text-sm font-semibold text-ink">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Link
                href={featured.href}
                className="mt-8 inline-flex items-center gap-2 self-start font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3"
              >
                Read the full story <ArrowRight size={12} />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
