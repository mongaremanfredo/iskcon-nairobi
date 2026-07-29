import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflections, festival stories, and devotional culture from ISKCON Nairobi.",
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <>
      <PageHero
        title="Temple"
        titleAccent="Journal"
        subtitle="Blog"
        description="Stories, reflections, and festival meaning from ISKCON Nairobi."
        image="/images/blog/jharikhanda-forest-path.jpg"
        height="md"
      />

      <section className="bg-temple-bg py-section">
        <div className="content-width section-padding">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-3 block">Latest Reflection</span>
            <h2 className="section-title">
              Kirtan Safari begins<br />
              <em className="text-gold not-italic font-normal">with a forest story</em>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <Link
              href={featured.href}
              className="group relative min-h-[20rem] overflow-hidden border border-temple-sand bg-dusk shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover"
            >
              <img
                src={featured.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk/88 via-dusk/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {featured.category}
                </p>
                <h3 className="mt-2 font-playfair text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {featured.title}
                </h3>
              </div>
            </Link>

            <article className="border border-temple-sand bg-white p-6 shadow-card sm:p-8 lg:p-10">
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
              <Link
                href={featured.href}
                className="mt-8 inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3"
              >
                Read the story <ArrowRight size={12} />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
