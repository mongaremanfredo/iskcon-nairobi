import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, BookOpen, CalendarDays, Clock, Home, MessageCircle, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Daily Srimad-Bhagavatam classes, Bhagavad-gita study, HKTC philosophy classes, Sunday festival classes, Bhakti Vriksha, seminars, and personal guidance at ISKCON Nairobi.",
};

const learningPaths = [
  {
    icon: BookOpen,
    eyebrow: "Daily Scripture",
    title: "Srimad-Bhagavatam Class",
    timing: "Daily at 8:00 A.M.",
    description:
      "The morning class studies one verse of Srimad-Bhagavatam with Srila Prabhupada's purport, discussion, and practical application for devotional life.",
  },
  {
    icon: BookOpen,
    eyebrow: "Verse by Verse",
    title: "Bhagavad-gita Study",
    timing: "Covered in regular temple and HKTC classes",
    description:
      "Each Bhagavad-gita class focuses on one verse at a time, following Bhagavad-gita As It Is and the conclusions taught by Srila Prabhupada and the Goswamis.",
  },
  {
    icon: CalendarDays,
    eyebrow: "Every Sunday",
    title: "Sunday Festival Class",
    timing: "After the 12:00 P.M. arati",
    description:
      "The Sunday festival includes a temple class for the whole community, followed by kirtan, association, and prasadam.",
  },
];

const hktcSchedule = [
  { days: "Monday, Tuesday, Thursday", time: "7:00 P.M.", note: "HKTC philosophy class" },
  { days: "Wednesday, Saturday", time: "8:00 P.M.", note: "Community student class" },
];

const communityLearning = [
  {
    icon: Users,
    title: "Bhakti Vriksha Sessions",
    description:
      "Small-group devotional gatherings are held regularly for study, kirtan, discussion, and practical guidance in Krishna consciousness.",
  },
  {
    icon: Bell,
    title: "Weekend Seminars",
    description:
      "The temple regularly invites visiting devotees and speakers for seminars. Watch the temple notice board for dates, topics, and speaker announcements.",
  },
  {
    icon: Home,
    title: "Home Programmes",
    description:
      "You can invite devotees to your home for kirtan, class, prasadam, or guidance for family and personal spiritual practice.",
  },
  {
    icon: MessageCircle,
    title: "Personal Guidance",
    description:
      "Reach out to the temple if you need help understanding a subject, making spiritual decisions, or applying Krishna consciousness in daily life.",
  },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        title="Learn"
        titleAccent="& Study"
        subtitle="Spiritual Education"
        description="All our philosophy is Prabhupada-centered: rooted in Srila Prabhupada's books, the teachings of the Goswamis, and practical devotional life."
        image="/images/placeholders/hare-krishna-harinam.jpg"
        contentClassName="sm:!pb-5"
      />

      <section className="bg-temple-bg py-section">
        <div className="content-width section-padding">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow mb-3 block">Programmes & Classes</span>
            <h2 className="section-title">
              Study Through
              <br />
              <em className="text-gold not-italic font-normal">Hearing and Discussion</em>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-inter text-sm leading-relaxed text-ink/60 sm:text-base">
              ISKCON Nairobi offers learning through daily temple classes, weekly HKTC philosophy sessions,
              Sunday festival classes, Bhakti Vriksha groups, and seminars with invited speakers.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {learningPaths.map((path) => (
              <article
                key={path.title}
                className="group border border-temple-sand bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <path.icon size={19} />
                </div>
                <p className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  {path.eyebrow}
                </p>
                <h3 className="mt-2 font-playfair text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-gold">
                  {path.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 border-y border-temple-sand py-3 font-inter text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  <Clock size={13} className="text-gold" />
                  {path.timing}
                </div>
                <p className="mt-4 font-inter text-sm leading-relaxed text-ink/60">{path.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-temple-cream py-16">
        <div className="content-width section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1fr] lg:items-start">
            <div>
              <span className="eyebrow mb-3 block">HKTC Philosophy Classes</span>
              <h2 className="font-playfair text-display-sm font-semibold leading-tight text-ink">
                Regular Evening
                <br />
                <em className="text-gold not-italic font-normal">Study at HKTC</em>
              </h2>
              <p className="mt-5 font-inter text-sm leading-relaxed text-ink/60 sm:text-base">
                The Hare Krishna Training Centre hosts philosophy classes through the week. Each class is one
                hour, includes students from the wider community, and prasadam is served afterward.
              </p>
            </div>

            <div className="grid gap-4">
              {hktcSchedule.map((item) => (
                <div key={item.days} className="border border-temple-sand bg-white p-5 shadow-card">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-inter text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold">
                        {item.note}
                      </p>
                      <h3 className="mt-1 font-playfair text-xl font-semibold text-ink">{item.days}</h3>
                    </div>
                    <div className="flex w-fit items-center gap-2 bg-temple-brown px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.12em] text-sand">
                      <Clock size={13} className="text-gold" />
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
              <div className="border border-gold/30 bg-gold/10 p-5">
                <p className="font-inter text-sm leading-relaxed text-ink/68">
                  Class topics may include Bhagavad-gita, Srimad-Bhagavatam, devotional practice, Vaishnava
                  philosophy, character formation, and practical service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-temple-brown py-16 text-sand">
        <div className="content-width section-padding">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-3 block text-gold/75">Community Learning</span>
            <h2 className="font-playfair text-display-sm font-semibold leading-tight text-white">
              Seminars, Sangas
              <br />
              <em className="text-gold not-italic font-normal">and Personal Guidance</em>
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-sand/62 sm:text-base">
              Learning also happens through association: small groups, visiting speakers, home programmes,
              and direct guidance from devotees.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {communityLearning.map((item) => (
              <article key={item.title} className="border border-gold/15 bg-white/[0.06] p-5">
                <item.icon className="mb-4 text-gold" size={21} />
                <h3 className="font-playfair text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-sand/58">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary justify-center">
              Ask About Classes
            </Link>
            <Link
              href="/projects/hktc-nairobi"
              className="inline-flex items-center justify-center gap-2 border border-gold/40 px-5 py-3 font-inter text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-white"
            >
              Explore HKTC Nairobi
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
