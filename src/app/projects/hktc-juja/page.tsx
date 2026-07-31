import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HKTC Juja",
  description: "A growing Hare Krishna Training Centre satellite campus serving students around Juja and the Greater Nairobi region.",
};

export default function HKTCJujaPage() {
  return (
    <>
      <PageHero title="HKTC" titleAccent="Juja" subtitle="Satellite Campus" description="A growing devotional community and theological college outside Nairobi, accessible to students across the Greater Nairobi region." image="/images/hktc/hktc-juja-class.jpg" height="md" className="sm:min-h-[500px]" />
      <section className="py-section bg-temple-bg sm:pt-[clamp(2rem,4vw,4rem)] sm:pb-[clamp(2rem,4vw,4rem)]"><div className="content-width section-padding"><span className="eyebrow block mb-4">Juja Campus</span><h2 className="section-title mb-6">Expanding Access to<br /><em className="text-gold not-italic font-normal">Devotional Education</em></h2><p className="font-inter text-ink/70 max-w-2xl leading-relaxed mb-8">HKTC Juja was established to extend ISKCON Nairobi's educational reach beyond the city. Situated in the university town of Juja, it serves students from JKUAT and surrounding areas with the same rigorous Vaishnava curriculum offered at the Nairobi campus, in a quieter, more nature-connected environment.</p><Link href="/projects/hktc-nairobi" className="btn-primary">View Full HKTC Programme</Link></div></section>
    </>
  );
}
