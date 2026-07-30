import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ExternalLink, Leaf, Music2 } from "lucide-react";

const sourceUrl = "https://vedabase.io/en/library/cc/madhya/17/";

export const metadata: Metadata = {
  title: "The Forest That Learned to Chant",
  description:
    "A close retelling of Sri Chaitanya Mahaprabhu's journey through Jharikhanda Forest in Chaitanya-caritamrita, Madhya-lila 17, and why it shapes Kirtan Safari.",
  alternates: {
    canonical: "/blog/jharikhanda-forest-kirtan-safari",
  },
  openGraph: {
    title: "The Forest That Learned to Chant | ISKCON Nairobi",
    description:
      "A close reading of Sri Chaitanya Mahaprabhu's Jharikhanda Forest pastime and the meaning behind Kirtan Safari.",
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
      "A close reading of Sri Chaitanya Mahaprabhu's Jharikhanda Forest pastime and the meaning behind Kirtan Safari.",
    images: ["/images/blog/jharikhanda-forest-path.jpg"],
  },
};

const sourceTrail = [
  {
    range: "Madhya 17.24",
    title: "Mahaprabhu leaves the public road",
    text: "The Lord gives up the well-known road, keeps Cuttack on His right, and enters the forest by a side route.",
  },
  {
    range: "Madhya 17.25-27",
    title: "The animals make way",
    text: "As He chants through the solitary forest, tigers, elephants, rhinoceroses, and boars appear. Balabhadra Bhattacharya is afraid, yet by the Lord's influence the animals stand aside.",
  },
  {
    range: "Madhya 17.28-29",
    title: "The tiger begins to chant",
    text: "A tiger lies on the path. Mahaprabhu touches it with His foot and tells it to chant Krishna's name. The tiger rises, chants, and dances.",
  },
  {
    range: "Madhya 17.30-33",
    title: "The elephants receive water",
    text: "While the Lord bathes and murmurs Gayatri, maddened elephants come to drink. He splashes water on them and asks them to chant. They sing, dance, fall, and cry out in ecstasy.",
  },
  {
    range: "Madhya 17.34-36",
    title: "The deer come near",
    text: "The Lord's loud, sweet chanting draws the does to His side. He pats them and recites the Bhagavatam remembrance of deer worshiping Krishna with loving glances.",
  },
  {
    range: "Madhya 17.37-39",
    title: "Tigers join the deer",
    text: "Five or seven tigers join the deer and follow the Lord. Seeing them together, Mahaprabhu remembers Vrindavan and recites how natural enemies live there in transcendental friendship.",
  },
  {
    range: "Madhya 17.40-43",
    title: "Enemies dance together",
    text: "At Mahaprabhu's command, the tigers and deer chant Krishna's name, dance, jump, embrace, and touch mouths. The Lord smiles and continues His journey.",
  },
  {
    range: "Madhya 17.44-46",
    title: "The whole forest responds",
    text: "Peacocks and other birds follow, chant, and dance. Trees and creepers become jubilant when He calls Haribol. Moving and nonmoving beings become overwhelmed by the sound of Krishna's name.",
  },
];

const meaningCards = [
  {
    title: "The holy name is not sentimental sound",
    text: "The passage presents kirtan as spiritual force. It reaches beings who cannot study, argue, or perform ritual.",
  },
  {
    title: "Vrindavan appears where Krishna is remembered",
    text: "Mahaprabhu sees Jharikhanda through love. The forest becomes a mirror of Vrindavan because the holy name awakens the soul beneath fear.",
  },
  {
    title: "Kirtan Safari is participation",
    text: "The theme is not simply a forest aesthetic. It is an invitation to enter the wild places of the heart and let the holy name transform them.",
  },
];

export default function JharikhandaBlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-dusk pt-32 text-temple-cream sm:pt-36 lg:pt-40">
        <img
          src="/images/blog/jharikhanda-forest-path.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-46"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dusk via-dusk/86 to-dusk/54" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="relative z-10 content-width section-padding pb-[clamp(3rem,7vw,6rem)]">
          <div className="max-w-4xl">
            <span className="eyebrow block text-gold">Kirtan Safari Source Story</span>
            <h1 className="mt-4 font-playfair text-[clamp(2.55rem,9vw,6rem)] font-semibold leading-[0.98] text-white text-shadow">
              The Forest That Learned to Chant
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-sm leading-relaxed text-temple-cream/72 sm:text-base">
              Sri Chaitanya Mahaprabhu, the animals of Jharikhanda, and the Chaitanya-caritamrita story behind a kirtan journey through the forest.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 font-inter text-xs uppercase tracking-[0.14em] text-temple-cream/62">
              <span>July 2026</span>
              <span className="h-1 w-1 self-center rounded-full bg-gold" />
              <span>12 min read</span>
              <span className="h-1 w-1 self-center rounded-full bg-gold" />
              <span>Chaitanya-caritamrita, Madhya-lila 17</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-temple-bg py-[clamp(2.7rem,12vw,3.8rem)] sm:py-[clamp(3.5rem,5vw,5.5rem)]">
        <div className="content-width section-padding">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)] lg:items-start">
            <article className="mx-auto max-w-3xl">
              <div className="border border-gold/25 bg-white p-5 shadow-card sm:p-7">
                <p className="font-cormorant text-2xl italic leading-relaxed text-ink/78 sm:text-3xl">
                  This is the scriptural heart of Kirtan Safari: Sri Chaitanya Mahaprabhu walks into a dangerous forest chanting Krishna's names, and the forest answers.
                </p>
              </div>

              <section className="mt-10 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                <p>
                  The Jharikhanda episode appears in Sri Chaitanya-caritamrita, Madhya-lila, Chapter 17, as the Lord travels toward Vrindavan. The story is not told as a vague symbol. It unfolds step by step: a route is chosen, a forest is entered, animals appear, Balabhadra Bhattacharya becomes afraid, and then the holy name overturns the normal laws of fear and hostility.
                </p>
                <p>
                  For ISKCON Nairobi's Kirtan Safari, this matters because the festival is not only a musical gathering. It carries a scriptural image: the holy name entering the forest, touching living beings beyond calculation, and revealing that even the most unlikely heart can be moved toward Krishna.
                </p>
              </section>

              <section className="mt-12">
                <span className="eyebrow mb-3 block">The source sequence</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  What happens in Madhya-lila 17
                </h2>
                <div className="mt-7 space-y-4">
                  {sourceTrail.map((item, index) => (
                    <article key={item.range} className="grid gap-4 border border-temple-sand bg-white p-5 shadow-sm sm:grid-cols-[5.5rem_1fr] sm:p-6">
                      <div>
                        <div className="flex h-11 w-11 items-center justify-center bg-primary font-inter text-sm font-bold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="mt-3 font-inter text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.12em] text-gold">
                          {item.range}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 font-inter text-sm leading-relaxed text-ink/65">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <figure className="my-12 overflow-hidden border border-temple-sand bg-white shadow-card">
                <img
                  src="/images/blog/chaitanya-dances-with-followers.jpg"
                  alt="Sri Chaitanya Mahaprabhu dancing in sankirtan"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="border-t border-temple-sand px-5 py-3 font-inter text-xs leading-relaxed text-ink/48">
                  Sri Chaitanya Mahaprabhu dancing in sankirtan. Public domain image via Wikimedia Commons.
                </figcaption>
              </figure>

              <section>
                <span className="eyebrow mb-3 block">The turning point</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  Predator and prey under the same holy name
                </h2>
                <div className="mt-6 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    The most startling moment is not merely that animals become peaceful. It is that creatures normally divided by instinct begin to move together. The text names tigers and deer, animals who should fear or hunt one another. Yet in Mahaprabhu's presence they chant, dance, jump, embrace, and show affection.
                  </p>
                  <p>
                    This is why the Jharikhanda story is so powerful for a kirtan festival. The holy name does not simply decorate an already peaceful scene. It enters a world of danger, nervousness, appetite, and instinct. Then, by the Lord's mercy, the same beings who would ordinarily oppose each other become joined in remembrance of Krishna.
                  </p>
                </div>
              </section>

              <section className="mt-12 border-l-2 border-gold bg-white/78 p-6 shadow-card sm:p-8">
                <h2 className="font-playfair text-2xl font-semibold leading-tight text-ink">
                  Why Mahaprabhu remembers Vrindavan
                </h2>
                <div className="mt-5 space-y-5 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    When the tigers and deer follow Him together, Mahaprabhu remembers Vrindavan. He recites the mood that in Vrindavan there is no ordinary hunger, anger, or thirst, and even natural enemies live in transcendental friendship. Jharikhanda briefly reflects that atmosphere because the holy name reveals the soul beneath the body.
                  </p>
                  <p>
                    The forest does not cease to be a forest. Rather, the Lord's remembrance transforms how it is seen. The path, animals, rivers, trees, and creepers all become connected to Krishna.
                  </p>
                </div>
              </section>

              <section className="mt-12">
                <span className="eyebrow mb-3 block">Meaning for Kirtan Safari</span>
                <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  Not observation, but participation
                </h2>
                <div className="mt-6 space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                  <p>
                    A safari usually means entering wild territory to observe from a distance. Jharikhanda gives the opposite image. Sri Chaitanya Mahaprabhu does not stand outside the forest. He walks through it with the holy name, and the forest joins Him.
                  </p>
                  <p>
                    That is the mood of Kirtan Safari: come into the sound, not as a spectator but as a participant. Bring the restless, fearful, distracted, and divided parts of the heart. Let the holy name do what argument, pressure, and performance cannot do.
                  </p>
                </div>
              </section>

              <section className="mt-12 grid gap-4 md:grid-cols-3">
                {meaningCards.map((card) => (
                  <article key={card.title} className="border border-temple-sand bg-white p-5">
                    <h3 className="font-playfair text-xl font-semibold leading-tight text-ink">{card.title}</h3>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-ink/62">{card.text}</p>
                  </article>
                ))}
              </section>

              <div className="mt-12 flex flex-col gap-4 border border-gold/30 bg-dusk p-6 text-sand sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Kirtan Safari 2026
                  </p>
                  <p className="mt-2 font-playfair text-2xl font-semibold text-white">
                    Join the kirtan journey through Jharikhanda Forest
                  </p>
                </div>
                <Link
                  href="/festivals/kirtan-safari"
                  className="inline-flex items-center gap-2 self-start font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3"
                >
                  Festival details <ArrowRight size={12} />
                </Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28">
              <div className="border border-temple-sand bg-white p-6 shadow-card">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  Article guide
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    { icon: BookOpen, label: "Primary source", value: "Chaitanya-caritamrita, Madhya-lila 17.24-46" },
                    { icon: Music2, label: "Theme", value: "The holy name awakens devotion beyond fear" },
                    { icon: Leaf, label: "Image", value: "Jharikhanda as forest transformed by kirtan" },
                    { icon: CalendarDays, label: "Festival", value: "Kirtan Safari, 27-30 August 2026" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-3 border-t border-temple-sand pt-4 first:border-t-0 first:pt-0">
                        <Icon size={18} className="mt-1 shrink-0 text-gold" />
                        <div>
                          <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/42">
                            {item.label}
                          </p>
                          <p className="mt-1 font-inter text-sm leading-relaxed text-ink/66">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 border border-gold/25 bg-temple-cream p-5">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  Read the source
                </p>
                <p className="mt-3 font-inter text-sm leading-relaxed text-ink/62">
                  This article closely follows the sequence in Madhya-lila 17 and links readers to the full chapter for direct study.
                </p>
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3"
                >
                  Open Vedabase <ExternalLink size={12} />
                </a>
              </div>

              <div className="mt-5 border border-temple-sand bg-white p-5">
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
