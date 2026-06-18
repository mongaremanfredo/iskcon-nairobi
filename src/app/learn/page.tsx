import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn — Spiritual Education at ISKCON Nairobi",
  description: "Philosophy courses, Bhakti-śāstrī programmes, weekly classes, and online resources from ISKCON Nairobi.",
};

const courses = [
  { title: "Bhagavad-gītā Introduction", format: "Weekly · In-Person", duration: "8 Weeks", level: "Beginner", desc: "A structured introduction to the Bhagavad-gītā As It Is for newcomers. No prior knowledge required." },
  { title: "Śrīmad-Bhāgavatam Study Circle", format: "Weekly · In-Person & Online", duration: "Ongoing", level: "All Levels", desc: "Deep study of the Śrīmad-Bhāgavatam through guided verse-by-verse reading and discussion." },
  { title: "Bhakti-śāstrī Programme", format: "Residential · HKTC Nairobi", duration: "1 Year", level: "Committed", desc: "Full residential theological education in Nairobi. Applications open annually." },
  { title: "Sunday Feast Class", format: "Weekly · Sunday", duration: "1.5 Hours", level: "All Levels", desc: "Weekly philosophy lecture followed by communal prasādam. Open to everyone — the ideal starting point." },
  { title: "Sanskrit Fundamentals", format: "Monthly Intensive", duration: "3 Days", level: "Intermediate", desc: "Introduction to Devanāgarī script and Vedic Sanskrit grammar for devotional purposes." },
  { title: "Kirtan & Mṛdaṅga Training", format: "Weekly · Small Groups", duration: "Ongoing", level: "Beginner", desc: "Learn the basics of kīrtan leading, mṛdaṅga, and kartāl for community worship." },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        title="Learn"
        titleAccent="& Study"
        subtitle="Spiritual Education"
        description="From introductory Gītā courses to full residential theology programmes — there is a learning path for every stage of your journey."
        image="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=85"
        breadcrumbs={[{ label: "Learn" }]}
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Programmes & Classes</span>
            <h2 className="section-title">Find Your Path<br /><em className="text-gold not-italic font-normal">of Study</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="bg-white border border-temple-sand hover:shadow-card-hover hover:border-gold/30 transition-all p-7 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase bg-gold/10 text-gold px-2 py-1">{c.level}</span>
                  <span className="font-inter text-ink/40 text-xs">{c.duration}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-2 group-hover:text-gold transition-colors">{c.title}</h3>
                <p className="font-inter text-gold text-xs mb-3">{c.format}</p>
                <div className="w-6 h-px bg-gold/30 mb-3" />
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Enquire About a Course</Link>
          </div>
        </div>
      </section>

      {/* HKTC CTA */}
      <section className="py-16 bg-temple-brown section-padding">
        <div className="content-width">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow text-gold/70 block mb-3">Full Residential Study</span>
              <h2 className="font-playfair text-display-md text-white">Ready for a Deeper<br /><em className="text-gold not-italic font-normal">Commitment?</em></h2>
            </div>
            <div>
              <p className="font-inter text-white/60 leading-relaxed mb-6">
                The Hare Krishna Theological College offers a full residential programme for those who want to go deep. Join 100+ students from across East Africa and beyond.
              </p>
              <Link href="/projects/hktc-nairobi" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">
                Explore HKTC Nairobi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
