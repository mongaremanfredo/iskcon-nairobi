import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo({
  title: "Ratha Yatra",
  description: "Join ISKCON Nairobi's Festival of Chariots with Lord Jagannath, kirtan, procession, dance, and prasadam distribution.",
}, "/festivals/rath-yatra");

export default function RathYatraPage() {
  const description = "Ratha Yatra is the Festival of Chariots, a public celebration of Lord Jagannath with kirtan, procession, dance, and prasadam distribution in Nairobi.";
  return (
    <>
      <PageHero
        title="Ratha Yatra"
        titleAccent="Festival of Chariots"
        subtitle="Annual Nairobi Procession"
        description={description}
        image="/images/festivals/ratha-yatra-procession.jpg"
        height="lg"
      />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl">
          <p className="font-inter text-ink/75 leading-relaxed mb-8">{description}</p>
          <p className="font-inter text-ink/75 leading-relaxed mb-8">Current procession dates and routes are announced by the temple as permits and logistics are confirmed.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/donate/festivals" className="btn-primary">Support this Festival</Link>
            <Link href="/contact" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">Register Interest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
