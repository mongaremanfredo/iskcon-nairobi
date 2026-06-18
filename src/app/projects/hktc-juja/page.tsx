import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
export default function HKTCJujaPage() {
  return (
    <>
      <PageHero title="HKTC" titleAccent="Juja" subtitle="Satellite Campus" description="A growing devotional community and theological college outside Nairobi, accessible to students across the Greater Nairobi region." image="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1600&q=85" breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "HKTC Juja" }]} />
      <section className="py-section bg-temple-bg"><div className="content-width section-padding"><span className="eyebrow block mb-4">Juja Campus</span><h2 className="section-title mb-6">Expanding Access to<br /><em className="text-gold not-italic font-normal">Devotional Education</em></h2><p className="font-inter text-ink/70 max-w-2xl leading-relaxed mb-8">HKTC Juja was established to extend ISKCON Nairobi's educational reach beyond the city. Situated in the university town of Juja, it serves students from JKUAT and surrounding areas with the same rigorous Vaishnava curriculum offered at the Nairobi campus, in a quieter, more nature-connected environment.</p><Link href="/projects/hktc-nairobi" className="btn-primary">View Full HKTC Programme</Link></div></section>
    </>
  );
}
