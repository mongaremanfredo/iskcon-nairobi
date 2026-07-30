import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Flower2,
  HeartHandshake,
  Music,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Radhashtami",
  description:
    "Celebrate Radhashtami, the appearance day of Srimati Radharani, at ISKCON Nairobi with kirtan, class, worship, offerings, seva, and prasadam.",
};

const story = [
  {
    title: "The mercy of devotion",
    text: "Srimati Radharani is honoured as the supreme devotee of Krishna, the embodiment of pure love, compassion, and the highest mood of devotional service.",
  },
  {
    title: "Appearance in Vraja",
    text: "Vaishnava tradition describes Her appearance in the home of Vrishabhanu Maharaja and Kirtida Devi, bringing joy to Barsana and all of Vraja.",
  },
  {
    title: "Eyes opened for Krishna",
    text: "Devotees remember the tender pastime that Radharani first opened Her eyes when Krishna came before Her, revealing that Her life is fully centred on Him.",
  },
  {
    title: "Gateway to Krishna's grace",
    text: "Because Radharani is most dear to Krishna, devotees pray for Her mercy, knowing that by Her kindness the heart can truly approach Krishna.",
  },
];

const engagements = [
  { icon: Music, title: "Kirtan and bhajans", text: "Devotees glorify Srimati Radharani through the holy names, Vaishnava songs, and a gentle festival mood of prayer." },
  { icon: Sparkles, title: "Special darshan", text: "The altar and temple are decorated beautifully as the community honours the appearance of Krishna's dearest devotee." },
  { icon: BookOpen, title: "Class on Radha's mercy", text: "Festival talks help devotees understand Radharani's position through Srila Prabhupada's teachings and the Goswamis." },
  { icon: Flower2, title: "Flowers and offerings", text: "Garlands, lamps, flowers, and offerings create a devotional atmosphere of gratitude and surrender." },
  { icon: HeartHandshake, title: "Seva opportunities", text: "Devotees can assist with worship support, decorations, prasadam service, guest care, and festival preparation." },
  { icon: Users, title: "Community remembrance", text: "Radhashtami brings the temple family together to pray for deeper devotion and a heart softened by service." },
];

const quickNotes = [
  "Appearance of Srimati Radharani",
  "Prayer for devotional mercy",
  "Special worship and class",
  "Kirtan, offerings, and prasadam",
];

export default function RadhashtamiPage() {
  return (
    <>
      <PageHero
        title="Radhashtami"
        titleAccent="Srimati Radharani Appears"
        subtitle={templeInfo.legalName}
        description="A sacred festival honouring Srimati Radharani, the supreme devotee of Krishna and the compassionate doorway to pure devotional service."
        image="/images/calendar-radhashtami-sakhis.jpeg"
        height="lg"
        className="festival-page-hero"
      />

      <section className="festival-intro bg-temple-bg bg-temple-texture py-[clamp(2.4rem,12vw,3.25rem)] sm:py-[clamp(3rem,5vw,5rem)]">
        <div className="content-width section-padding">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="eyebrow block mb-3">Festival of Radha's mercy</span>
              <h2 className="section-title max-w-3xl">
                The day devotees pray to enter Krishna's service
              </h2>
              <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-ink/68 sm:text-base">
                Radhashtami celebrates the divine appearance of Srimati Radharani, the topmost devotee and eternal companion of Lord Krishna. In the Gaudiya Vaishnava tradition, She is honoured as the personification of pure devotion, the tender heart of Vraja, and the one whose mercy makes love for Krishna accessible.
              </p>
            </div>
            <div className="border border-gold/25 bg-white/75 p-5 shadow-sm sm:p-6">
              <p className="font-playfair text-2xl leading-tight text-ink sm:text-3xl">
                A festival of prayer, beauty, and surrender
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {quickNotes.map((note) => (
                  <div key={note} className="border border-temple-sand bg-temple-cream/70 px-3 py-3">
                    <p className="font-inter text-xs font-semibold uppercase leading-snug tracking-[0.08em] text-primary">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="festival-story bg-white py-[clamp(2.4rem,12vw,3.25rem)] sm:py-[clamp(3rem,5vw,5rem)]">
        <div className="content-width section-padding">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <span className="eyebrow block mb-3">Backstory</span>
            <h2 className="section-title">
              From Barsana's joy to the devotee's heart
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {story.map((item, index) => (
              <article key={item.title} className="border border-temple-sand bg-temple-bg p-5 sm:p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-primary font-inter text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-ink/62">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="festival-engagement bg-dusk py-[clamp(2.4rem,12vw,3.25rem)] text-temple-cream sm:py-[clamp(3rem,5vw,5rem)]">
        <div className="content-width section-padding">
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow block mb-3 text-gold">Devotional engagement</span>
              <h2 className="section-title-light max-w-3xl">
                A celebration shaped by worship and inner prayer
              </h2>
            </div>
            <p className="max-w-xl font-inter text-sm leading-relaxed text-temple-cream/64">
              Radhashtami invites devotees to celebrate with humility and attention. The festival mood is full of kirtan, decoration, hearing, offerings, and the prayer to become useful in Krishna's service.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-gold/18 bg-white/[0.04] p-5 sm:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center border border-gold/35 text-gold">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-temple-cream/62">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="festival-visit bg-temple-bg py-[clamp(2.4rem,12vw,3.25rem)] sm:py-[clamp(3rem,5vw,5rem)]">
        <div className="content-width section-padding">
          <div className="grid gap-6 border border-gold/25 bg-white p-5 sm:p-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="eyebrow block mb-3">Plan around the festival</span>
              <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Come ready to hear, chant, serve, and pray for Radha's mercy
              </h2>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 border border-temple-sand bg-temple-cream/60 p-4">
                  <CalendarDays className="mt-0.5 shrink-0 text-gold" size={18} />
                  <p className="font-inter text-sm leading-relaxed text-ink/66">
                    The detailed yearly programme is announced closer to the date through the temple noticeboard and official channels.
                  </p>
                </div>
                <div className="flex gap-3 border border-temple-sand bg-temple-cream/60 p-4">
                  <HeartHandshake className="mt-0.5 shrink-0 text-gold" size={18} />
                  <p className="font-inter text-sm leading-relaxed text-ink/66">
                    Sponsorship and volunteer service help support flowers, offerings, prasadam, and guest care.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/donate/festivals" className="btn-primary">
                  Support this Festival <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
