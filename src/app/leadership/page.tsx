import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Drum, Globe2, GraduationCap, HeartHandshake, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { leadershipDepartments, leadershipProfiles } from "@/data/site";

export const metadata: Metadata = {
  title: "Leadership & Service Structure | ISKCON Nairobi",
  description:
    "Meet key leaders and service coordinators guiding ISKCON Nairobi through a departmental service structure rooted in Srila Prabhupada's vision for Africa.",
};

const categoryIntro = [
  {
    icon: Globe2,
    title: "Spiritual Guidance",
    text: "Senior Vaishnava guidance keeps Nairobi connected to Srila Prabhupada's standards, preaching mood, and East Africa mission.",
  },
  {
    icon: GraduationCap,
    title: "Regional & Educational Leadership",
    text: "Training, study, and student formation are central to Nairobi's service through the Hare Krishna Training Centre.",
  },
  {
    icon: Drum,
    title: "Temple Coordination",
    text: "Kirtan, festivals, worship, and practical temple operations are coordinated through shared departmental responsibility.",
  },
  {
    icon: BookOpen,
    title: "Resident Teaching",
    text: "Resident teachers and brahmacharis hold the daily culture of classes, mentorship, sadhana, and devotional practice.",
  },
];

export default function LeadershipPage() {
  const featured = leadershipProfiles.find((profile) => profile.emphasis);
  const others = leadershipProfiles.filter((profile) => !profile.emphasis);

  return (
    <>
      <PageHero
        title="Leadership"
        titleAccent="& Service"
        subtitle="Guidance Structure"
        description="ISKCON Nairobi carries Srila Prabhupada's vision through senior spiritual guidance and a practical departmental service model."
        image="/images/leadership/umapati-prabhu.jpg"
        height="md"
      />

      <section className="bg-temple-bg py-section bg-temple-texture">
        <div className="content-width section-padding">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="eyebrow mb-4 block">How Nairobi Is Guided</span>
              <h2 className="section-title">
                A departmental model,
                <br />
                <em className="not-italic text-gold">rooted in Vaishnava guidance</em>
              </h2>
            </div>
            <div className="space-y-5 font-inter text-body-md leading-relaxed text-ink/70">
              <p>
                ISKCON Nairobi is not presented here as a single-person temple-president structure. The temple now functions through a departmental service setup, with responsibilities distributed across education, worship, kirtan, outreach, hospitality, festivals, administration, and community care.
              </p>
              <p>
                This structure allows senior devotees, teachers, coordinators, resident brahmacharis, and volunteers to serve together while keeping Srila Prabhupada's vision at the centre: serious spiritual education, strong kirtan, prasadam distribution, and outreach across East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-temple-brown py-section text-sand">
          <div className="content-width section-padding">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative">
                <div className="absolute -inset-4 border border-gold/20 max-sm:hidden" />
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="relative aspect-[4/5] w-full object-cover object-[center_30%] shadow-card-hover"
                />
              </div>
              <div>
                <span className="eyebrow mb-4 block text-gold/75">{featured.category}</span>
                <h2 className="font-playfair text-display-lg leading-tight text-white">
                  {featured.name}
                </h2>
                <p className="mt-3 font-inter text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {featured.role}
                </p>
                <p className="mt-6 font-cormorant text-2xl leading-relaxed text-sand/86 sm:text-3xl">
                  {featured.summary}
                </p>
                <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-sand/62">
                  {featured.details}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-sand py-section">
        <div className="content-width section-padding">
          <div className="mb-12 text-center">
            <span className="eyebrow mb-3 block">Key Service Leaders</span>
            <h2 className="section-title">
              Departments carried by
              <br />
              <em className="not-italic text-gold">devotee leadership</em>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {others.map((profile) => (
              <article key={profile.name} className="group border border-temple-sand bg-white shadow-card transition-shadow hover:shadow-card-hover">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-inter text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      {profile.category}
                    </p>
                    <h3 className="mt-1 font-playfair text-2xl text-white">{profile.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {profile.role}
                  </p>
                  <p className="mt-4 font-inter text-sm leading-relaxed text-ink/64">{profile.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-temple-bg py-section-sm">
        <div className="content-width section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <HeartHandshake className="mb-5 text-primary" size={28} />
              <span className="eyebrow mb-4 block">Departmental Service</span>
              <h2 className="section-title">
                A structure ready
                <br />
                <em className="not-italic text-gold">for the full team</em>
              </h2>
              <p className="mt-5 font-inter text-sm leading-relaxed text-ink/62">
                This section is intentionally built to expand when the full list is supplied. Additional photos and roles can be added without changing the page design.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {leadershipDepartments.map((department) => (
                <div key={department} className="border border-temple-sand bg-white px-4 py-4 shadow-card">
                  <Users className="mb-3 text-gold" size={17} />
                  <p className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-ink/70">
                    {department}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-center text-white">
        <div className="content-width section-padding">
          <span className="eyebrow mb-4 block text-white/70">More names coming</span>
          <h2 className="font-playfair text-display-md">The full service structure can grow from here.</h2>
          <div className="mt-7 flex justify-center">
            <Link href="/srila-prabhupada" className="btn-ghost">
              Read About Srila Prabhupada <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
