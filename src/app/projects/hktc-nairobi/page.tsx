import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { CheckCircle, Users, BookOpen, Home, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "HKTC Nairobi — Hare Krishna Theological College",
  description: "Residential Vaishnava theological education in Nairobi. Bhakti-śāstrī and Bhakti-vaibhava programmes for students across East Africa.",
};

const programmes = [
  { name: "Bhakti-śāstrī", duration: "1 Year", description: "Systematic study of Bhagavad-gītā, Nectar of Devotion, Nectar of Instruction, and Īśopaniṣad.", level: "Foundation" },
  { name: "Bhakti-vaibhava", duration: "2 Years", description: "Deep study of Śrīmad-Bhāgavatam Cantos 1–6, devotional practice, and Sanskrit.", level: "Advanced" },
  { name: "Bhakti-vedanta", duration: "2 Years", description: "Śrīmad-Bhāgavatam Cantos 7–12, Caitanya-caritāmṛta, and comparative philosophy.", level: "Scholar" },
  { name: "Bhakti-sarvabhauma", duration: "2 Years", description: "The highest level of ISKCON theological education, including advanced Sanskrit and original texts.", level: "Master" },
];

export default function HKTCNairobiPage() {
  return (
    <>
      <PageHero
        title="HKTC"
        titleAccent="Nairobi"
        subtitle="Hare Krishna Theological College"
        description="East Africa's premier residential institution for Vaishnava theological education — forming scholars, teachers, and devotees."
        image="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=85"
        height="lg"
      />

      {/* Mission */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow block mb-4">Our Mission</span>
              <h2 className="section-title mb-6">
                Forming Scholars,<br />
                <em className="text-gold not-italic font-normal">Shaping Lives</em>
              </h2>
              <div className="space-y-4 font-inter text-ink/70 leading-relaxed">
                <p>The Hare Krishna Theological College in Nairobi offers a full residential educational programme rooted in the Vaishnava tradition. Students from across Kenya, Uganda, Tanzania, Ethiopia, and beyond come here to receive a complete academic and devotional formation.</p>
                <p>Our curriculum follows the ISKCON Ministry of Educational Development's graded programme, from Bhakti-śāstrī to Bhakti-sarvabhauma, combined with daily temple service, physical training, and practical devotional skills.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[{ v: "100+", l: "Students" }, { v: "15+", l: "Nations" }, { v: "20+", l: "Yrs Active" }].map(s => (
                  <div key={s.l}>
                    <p className="font-playfair text-gold text-3xl font-bold">{s.v}</p>
                    <p className="font-inter text-ink/50 text-xs uppercase tracking-wide mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=700&q=80" alt="Students at HKTC" className="w-full aspect-card object-cover" />
              <div className="absolute -bottom-4 -left-4 bg-gold p-5 hidden sm:block">
                <p className="font-playfair text-white text-sm">Accredited by ISKCON</p>
                <p className="font-inter text-white/70 text-xs">Ministry of Educational Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-section bg-temple-cream">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Curriculum</span>
            <h2 className="section-title">Academic Programmes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programmes.map((p) => (
              <div key={p.name} className="bg-white p-8 border border-temple-sand hover:shadow-card-hover hover:border-gold/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-gold bg-gold/10 px-2 py-1">{p.level}</span>
                    <h3 className="font-playfair text-xl font-semibold text-ink mt-2">{p.name}</h3>
                  </div>
                  <span className="font-inter text-ink/40 text-sm">{p.duration}</span>
                </div>
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects/hktc-nairobi/apply" className="btn-primary">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <span className="eyebrow block mb-4">Campus Life</span>
          <h2 className="section-title mb-10">
            Life as a<br />
            <em className="text-gold not-italic font-normal">Resident Student</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <BookOpen size={20} />, title: "Daily Classes", desc: "Morning Bhāgavatam class, academic sessions, and evening philosophy discussions." },
              { icon: <Users size={20} />, title: "Community Life", desc: "Live and practice alongside fellow students in a structured devotional environment." },
              { icon: <Home size={20} />, title: "Accommodation", desc: "Clean, comfortable on-campus dormitory accommodation with all meals included." },
              { icon: <CheckCircle size={20} />, title: "Certification", desc: "ISKCON-accredited certificates recognized across 100+ countries and 500+ temples." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4 p-6 bg-temple-cream border border-temple-sand hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center text-gold">{item.icon}</div>
                <h3 className="font-playfair text-lg font-semibold text-ink">{item.title}</h3>
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
