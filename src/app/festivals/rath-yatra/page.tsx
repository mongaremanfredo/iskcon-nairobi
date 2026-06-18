import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
export default function FestivalPage() {
  const data: Record<string, {title: string; accent: string; sub: string; desc: string; img: string; date: string}> = {
    "rath-yatra": { title: "Rath Yatra", accent: "Festival of Chariots", sub: "July 7, 2025 · Nairobi City Centre", desc: "A spectacular public procession through the heart of Nairobi — Lord Jagannātha carried through the streets in a magnificent chariot, with kirtan, prasādam distribution, and cultural performances.", img: "https://images.unsplash.com/photo-1561361058-c24e5b4e5a9d?w=1600&q=85", date: "July 7, 2025" },
    "janmashtami": { title: "Janmashtami", accent: "Appearance of Lord Krishna", sub: "August 22, 2025 · ISKCON Nairobi Temple", desc: "The most jubilant night of the devotional year — celebrating the divine appearance of Lord Śrī Krishna with dramatic abhinaya, all-night kirtan, and a spectacular midnight abhishek.", img: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=1600&q=85", date: "August 22, 2025" },
    "gaura-purnima": { title: "Gaura Purnima", accent: "Appearance of Śrī Caitanya", sub: "March 14, 2026 · ISKCON Nairobi Temple", desc: "The golden full-moon celebration of Śrī Caitanya Mahāprabhu's appearance — observed with ekādaśī fasting, abhishek of the golden deity, and the most ecstatic kirtan of the annual calendar.", img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=85", date: "March 14, 2026" },
  };
  const slug = "rath-yatra";
  const d = data[slug] || data["rath-yatra"];
  return (
    <>
      <PageHero title={d.title} titleAccent={d.accent} subtitle={d.sub} description={d.desc} image={d.img} breadcrumbs={[{ label: "Festivals", href: "/festivals" }, { label: d.title }]} height="lg" />
      <section className="py-section bg-temple-bg"><div className="content-width section-padding max-w-3xl"><p className="font-inter text-ink/70 leading-relaxed mb-8">{d.desc}</p><div className="flex flex-wrap gap-4"><Link href="/donate/festivals" className="btn-primary">Support this Festival</Link><Link href="/contact" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">Register Interest</Link></div></div></section>
    </>
  );
}
