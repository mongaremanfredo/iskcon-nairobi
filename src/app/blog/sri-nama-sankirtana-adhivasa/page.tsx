import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Leaf,
  Music2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const heroImage = "/images/blog/chaitanya-dances-with-followers.jpg";
const jharikhandaImage = "/images/blog/jharikhanda-mahaprabhu-animals.jpeg";

export const metadata: Metadata = {
  title: "The Invitation Before the Festival",
  description:
    "A verse-by-verse translation of Sri Nama Sankirtana Adhivasa, Vrindavana Dasa Thakura's traditional summons sung the evening before every great kirtana festival.",
  alternates: {
    canonical: "/blog/sri-nama-sankirtana-adhivasa",
  },
  openGraph: {
    title: "The Invitation Before the Festival | ISKCON Nairobi",
    description:
      "A verse-by-verse translation of Sri Nama Sankirtana Adhivasa, Vrindavana Dasa Thakura's traditional summons sung the evening before every great kirtana festival.",
    images: [
      {
        url: heroImage,
        width: 736,
        height: 981,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Invitation Before the Festival | ISKCON Nairobi",
    description:
      "A verse-by-verse translation of Sri Nama Sankirtana Adhivasa, Vrindavana Dasa Thakura's traditional summons sung the evening before every great kirtana festival.",
    images: [heroImage],
  },
};

const introParagraphs = [
  "Before a mahotsava begins, before the mridangas are lifted and the nagar-kirtan procession takes to the streets, there is a quieter evening. Devotees gather, articles for worship are arranged, and one specific song is sung - not a prayer of praise, but an invitation. This is adhivasa: the ceremony that prepares a place, and the hearts within it, for what is coming the next day.",
  "The song is the work of Vrindavana Dasa Thakura (1507-1589), best known as the author of the Chaitanya Bhagavata, the first full biography of Sri Chaitanya Mahaprabhu, written in Bengali on the order of his initiating guru, Lord Nityananda. Tradition holds him to be Vyasadeva returned: just as Vyasa gave the world Krishna's pastimes in the Srimad-Bhagavatam, Vrindavana Dasa gave it Gaura's pastimes in his own great work. This shorter song, sung rather than read, has carried a separate life of its own - it remains a standard adhivasa-kirtana at Gaudiya festivals.",
  "Its structure mirrors the ceremony itself. The poet describes preparing the offering, then turns to the assembled Vaishnavas and asks them, humbly, to complete the occasion by their presence. Only in the fourth verse does the song turn: tomorrow, it says, there will be a festival. Everything before that line is invitation; everything after it is promise.",
];

const verses = [
  {
    roman: "I",
    original: "nānā dravya āyojana, kari kare nimantraṇa,\nkṛpā kari kara āgamana |",
    translation:
      "Having collected and arranged all kinds of articles and invited everyone, I pray you mercifully come.",
  },
  {
    roman: "II",
    original: "tomāra vaiṣṇava gaṇa, mora ei nivedana,\ndṛṣṭi kari kara samāpana ||",
    translation:
      "You are all Vaishnava devotees of the Lord - I humbly pray that you complete this ceremony with your merciful glance.",
  },
  {
    roman: "III",
    original: "kari ata nivedana, ānilā mahanta-gaṇa,\nkīrtanera kare adhivāsa |",
    translation:
      "Thus humbly praying, having brought the assembled mahanta devotees, we hold the adhivasa of the congregational chanting of the holy names.",
  },
  {
    roman: "IV",
    original: "aneka bhāgyera phale, vaiṣṇava, āsiyā mile,\nkāli habe mahotsava vilāsa ||",
    translation:
      "Only by great fortune does one get the association of such an assembly of Vaishnavas - tomorrow there will be a great festival.",
  },
  {
    roman: "V",
    original: "Śrī kṛṣṇera līlā-gaṇa, karibena āsvādana,\npūribe sabāra abhilāṣa |",
    translation:
      "There you will all relish the sweet pastimes of Sri Krishna, and all your desires will be fulfilled.",
  },
  {
    roman: "VI",
    original: "Śrī Kṛṣṇa Caitanya Candra, sakala bhakata-vṛnda,\nguṇa gāya Vṛndāvana dāsa ||",
    translation:
      "Thus Vrindavana Dasa glorifies the moonlike Lord Sri Krishna Chaitanya and all His devotees.",
  },
];

const articleGuide = [
  { icon: BookOpen, label: "Ceremony", value: "Adhivasa, the evening invocation before a mahotsava" },
  { icon: Music2, label: "Form", value: "Bengali padavali kirtana" },
  { icon: CalendarDays, label: "Traditionally sung", value: "The night before an akhanda-kirtana or festival" },
  { icon: Leaf, label: "Author", value: "Vrindavana Dasa Thakura (1507-1589)" },
];

function VerseCard({
  roman,
  original,
  translation,
}: {
  roman: string;
  original: string;
  translation: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex shrink-0 items-start pt-1">
        <span className="flex h-8 w-8 items-center justify-center border border-gold/40 font-inter text-[0.68rem] font-semibold text-gold">
          {roman}
        </span>
      </div>
      <div className="grid flex-1 gap-0 overflow-hidden border border-temple-sand bg-white shadow-card sm:grid-cols-2">
        <div className="whitespace-pre-line border-b border-dashed border-temple-sand p-5 font-playfair text-[1.05rem] italic leading-relaxed text-ink sm:border-b-0 sm:border-r sm:p-6">
          {original}
        </div>
        <div className="bg-temple-cream/50 p-5 sm:p-6">
          <p className="font-inter text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink/40">
            Translation
          </p>
          <p className="mt-2 font-inter text-sm leading-relaxed text-ink/68">{translation}</p>
        </div>
      </div>
    </div>
  );
}

export default function AdhivasaBlogPage() {
  return (
    <>
      <PageHero
        title="The Invitation"
        titleAccent="Before the Festival"
        subtitle="Temple Journal"
        description="Sri Nama Sankirtana Adhivasa - Vrindavana Dasa Thakura's evening summons to the Vaishnavas, sung on the eve of every great kirtana."
        image={heroImage}
        height="md"
        className="sm:min-h-[500px]"
      />

      <section className="bg-temple-bg py-[clamp(2.7rem,12vw,3.8rem)] sm:py-[clamp(3.5rem,5vw,5.5rem)]">
        <div className="content-width section-padding">
          <div className="mb-12 flex flex-wrap items-center gap-3 font-inter text-xs uppercase tracking-[0.14em] text-ink/55">
            <span>July 2026</span>
            <span className="h-1 w-1 self-center rounded-full bg-gold" />
            <span>4 min read</span>
            <span className="h-1 w-1 self-center rounded-full bg-gold" />
            <span>Traditional adhivasa-kirtana</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)] lg:items-start">
            <article className="mx-auto max-w-3xl">
              <div className="space-y-6 font-inter text-[1.02rem] leading-[1.85] text-ink/72">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 space-y-5">
                {verses.slice(0, 3).map((verse) => (
                  <VerseCard key={verse.roman} {...verse} />
                ))}

                <div className="my-8 border border-gold/30 bg-dusk px-6 py-8 text-center sm:px-10">
                  <p className="font-playfair text-xl italic leading-snug text-white sm:text-2xl">
                    &ldquo;kāli habe mahotsava vilāsa&rdquo;
                  </p>
                  <p className="mt-3 font-inter text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Tomorrow, the festival begins
                  </p>
                </div>

                {verses.slice(3).map((verse) => (
                  <VerseCard key={verse.roman} {...verse} />
                ))}
              </div>

              <div className="mt-12 flex flex-col items-start gap-4 border border-gold/30 bg-dusk p-6 text-sand sm:p-8">
                <div>
                  <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Temple Journal
                  </p>
                  <p className="mt-2 font-playfair text-2xl font-semibold text-white">
                    Continue exploring the Temple Journal
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-sand"
                >
                  More devotional stories <ArrowRight size={12} />
                </Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28">
              <div className="border border-temple-sand bg-white p-6 shadow-card">
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  Article guide
                </p>
                <div className="mt-5 space-y-4">
                  {articleGuide.map((item) => {
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

              <Link
                href="/blog/jharikhanda-forest-kirtan-safari"
                className="group mt-5 block overflow-hidden border border-temple-sand bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={jharikhandaImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dusk/55 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <p className="font-inter text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink/42">
                    More from the Journal
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 font-playfair text-base font-semibold leading-snug text-ink">
                    The Forest That Learned to Chant
                    <ArrowUpRight size={14} className="shrink-0 text-gold" />
                  </p>
                </div>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
