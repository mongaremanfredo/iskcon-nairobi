import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Music2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "The Forest That Learned to Chant",
  description:
    "The story of Sri Chaitanya Mahaprabhu in Jharikhanda Forest, and why it gives Kirtan Safari its theme.",
  alternates: {
    canonical: "/blog/jharikhanda-forest-kirtan-safari",
  },
  openGraph: {
    title: "The Forest That Learned to Chant | ISKCON Nairobi",
    description:
      "Why Kirtan Safari is called a kirtan journey through Jharikhanda Forest.",
    images: [
      {
        url: "/images/blog/jharikhanda-forest-path.jpg",
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Forest That Learned to Chant | ISKCON Nairobi",
    description:
      "Why Kirtan Safari is called a kirtan journey through Jharikhanda Forest.",
    images: ["/images/blog/jharikhanda-forest-path.jpg"],
  },
};

export default function JharikhandaBlogPage() {
  return (
    <>
      <PageHero
        title="The Forest That"
        titleAccent="Learned to Chant"
        subtitle="Kirtan Safari"
        description="Sri Chaitanya Mahaprabhu, the animals of Jharikhanda, and the meaning behind a kirtan journey through the forest."
        image="/images/blog/jharikhanda-forest-path.jpg"
        height="lg"
        contentClassName="max-sm:pb-10"
      />

      <section className="bg-temple-bg py-section">
        <div className="content-width section-padding">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-start">
            <article className="mx-auto max-w-3xl">
              <div className="mb-8 flex flex-wrap items-center gap-3 font-inter text-xs uppercase tracking-[0.14em] text-ink/45">
                <span>July 2026</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>8 min read</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>Kirtan Safari</span>
              </div>

              <p className="font-cormorant text-2xl italic leading-relaxed text-ink/76 sm:text-3xl">
                Why we call this gathering a Kirtan Safari.
              </p>

              <div className="mt-8 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                <p>
                  There is a stretch of the Chaitanya-caritamrita that reads less like scripture and more like a sacred fable, except the tradition presents it as a real journey. Somewhere in the dense, tiger-inhabited forests once spanning the region we now call Jharkhand, Odisha, and parts of Madhya Pradesh and Bengal, a golden mendicant walked with one companion, chanting the names of Krishna into the trees. And the forest answered Him.
                </p>
                <p>
                  This is the story of Jharikhanda. It is also the truest possible image for Kirtan Safari: not a walk to observe wildness from a safe distance, but a journey into it, trusting that the holy name can soften what nothing else can.
                </p>
              </div>

              <section className="mt-12">
                <span className="eyebrow mb-3 block">The road nobody would choose</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  A path through danger
                </h2>
                <div className="mt-6 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    After the Ratha-yatra festivities in Jagannatha Puri, Sri Chaitanya Mahaprabhu resolved to travel to Vrindavan. His associates knew the road ahead and were uneasy. The direct path north cut through Jharikhanda, a vast forest belt known for tigers, elephants, and danger.
                  </p>
                  <p>
                    Ramananda Raya and Svarupa Damodara Goswami arranged for Balabhadra Bhattacharya to accompany Him, carrying His waterpot and a change of cloth. No armed escort. No grand procession. Just the Lord, His companion, and the holy name.
                  </p>
                </div>
              </section>

              <figure className="my-12 overflow-hidden border border-temple-sand bg-white shadow-card">
                <img
                  src="/images/blog/chaitanya-dances-with-followers.jpg"
                  alt="Sri Chaitanya Mahaprabhu dancing with devotees"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="border-t border-temple-sand px-5 py-3 font-inter text-xs leading-relaxed text-ink/48">
                  Sri Chaitanya Mahaprabhu dancing in sankirtan. Public domain image via Wikimedia Commons.
                </figcaption>
              </figure>

              <section>
                <span className="eyebrow mb-3 block">Into the jungle, chanting</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  The forest begins to respond
                </h2>
                <div className="mt-6 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    What Balabhadra expected was danger. What he witnessed defied every instinct he had about the natural world. Mahaprabhu walked without the mood of fear. He chanted loudly and continuously, absorbed in divine love.
                  </p>
                  <p>
                    Tigers stepped out of the undergrowth. Herds of elephants, rhinoceros, and wild boar appeared on the path. Balabhadra feared the worst. Instead, the animals moved aside and let the Lord pass.
                  </p>
                  <p>
                    Then the wonder deepened. Mahaprabhu touched animals or sprinkled them with water and called on them to chant Krishna's name. Elephants bellowed, tigers leapt, deer came near without fear, and the forest itself seemed to join the kirtan.
                  </p>
                </div>
              </section>

              <section className="mt-12 border-l-2 border-gold bg-white/72 p-6 shadow-card sm:p-8">
                <h2 className="font-playfair text-2xl font-semibold leading-tight text-ink">
                  When deer approached the tiger
                </h2>
                <div className="mt-5 space-y-5 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    The image remembered for centuries is this: deer and tigers, predator and prey, moved toward each other instead of away. They are described as embracing and dancing together to the same holy name.
                  </p>
                  <p>
                    The point is not that Krishna consciousness makes wild animals ordinary or tame. The point is that the holy name reaches beneath instinct, fear, and hostility, touching the living being underneath.
                  </p>
                </div>
              </section>

              <section className="mt-12">
                <span className="eyebrow mb-3 block">Why this story matters</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  The wild heart remembers
                </h2>
                <div className="mt-6 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    Jharikhanda is not a story about domesticating wildness. It is a story about remembering. Underneath every predator and every prey animal was a soul capable of joining sankirtan.
                  </p>
                  <p>
                    Where the name is sung without pretense, even the wildest heart remembers what it forgot it wanted.
                  </p>
                </div>
              </section>

              <section className="mt-12">
                <span className="eyebrow mb-3 block">Why Kirtan Safari</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  Not observation, but participation
                </h2>
                <div className="mt-6 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    A safari normally means entering wild territory to observe from a distance. Jharikhanda gives the opposite image. Sri Chaitanya Mahaprabhu did not observe the forest from outside. He walked into it with the holy name, and the forest joined Him.
                  </p>
                  <p>
                    That is the mood Kirtan Safari carries: an invitation to enter the unresolved places within us and trust that sincere kirtan can do in the human heart what it did in that forest.
                  </p>
                  <p>
                    If the tiger and the deer could move together in Jharikhanda, the invitation is simple: come chant, and discover what in you has been waiting for the sound to reach it.
                  </p>
                </div>
              </section>

              <div className="mt-12 flex flex-col gap-3 border border-gold/30 bg-dusk p-6 text-sand sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Kirtan Safari 2026
                  </p>
                  <p className="mt-2 font-playfair text-2xl font-semibold text-white">
                    Join the kirtan journey
                  </p>
                </div>
                <Link
                  href="/festivals/kirtan-safari"
                  className="inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3"
                >
                  Festival details <ArrowRight size={12} />
                </Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28">
              <div className="border border-temple-sand bg-white p-6 shadow-card">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  In this story
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    { icon: BookOpen, label: "Source", value: "Chaitanya-caritamrita, Madhya-lila 17.17-46" },
                    { icon: Music2, label: "Theme", value: "The holy name reaches beyond fear and hostility" },
                    { icon: CalendarDays, label: "Festival", value: "Kirtan Safari, 27-30 August 2026" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 border-t border-temple-sand pt-4 first:border-t-0 first:pt-0">
                      <item.icon size={18} className="mt-1 shrink-0 text-gold" />
                      <div>
                        <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/42">
                          {item.label}
                        </p>
                        <p className="mt-1 font-inter text-sm leading-relaxed text-ink/66">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 border border-temple-sand bg-temple-cream p-5">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  Image credits
                </p>
                <ul className="mt-3 space-y-2 font-inter text-xs leading-relaxed text-ink/55">
                  <li>
                    Forest path image from{" "}
                    <a className="text-gold hover:underline" href="https://unsplash.com/photos/a-winding-forest-path-leads-uphill-toward-the-light-1aCxlDogCCM" target="_blank" rel="noopener noreferrer">
                      Unsplash
                    </a>.
                  </li>
                  <li>
                    Chaitanya artwork from{" "}
                    <a className="text-gold hover:underline" href="https://commons.wikimedia.org/wiki/File:Chaitanya_dances_with_followers.jpg" target="_blank" rel="noopener noreferrer">
                      Wikimedia Commons
                    </a>.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
