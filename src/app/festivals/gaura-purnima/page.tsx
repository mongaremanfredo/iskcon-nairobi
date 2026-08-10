import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Gaura Purnima",
  description: "Celebrate Sri Chaitanya Mahaprabhu's appearance day at ISKCON Nairobi with kirtan, abhishek, class, and prasadam.",
};

export default function GauraPurnimaPage() {
  const description = "Gaura Purnima is the appearance day of Sri Chaitanya Mahaprabhu, celebrated with fasting, kirtan, abhishek, class, and an evening feast.";
  return (
    <>
      <PageHero
        title="Gaura Purnima"
        titleAccent="Appearance of Sri Chaitanya"
        subtitle={templeInfo.legalName}
        description={description}
        image="/images/community/iskcon-temple-architecture.jpg"
        height="lg"
      />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl">
          <p className="font-inter text-ink/70 leading-relaxed mb-8">{description}</p>
          <p className="font-inter text-ink/60 leading-relaxed mb-8">Contact the temple for the current year's fasting, abhishek, and feast schedule.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/donate/festivals" className="btn-primary">Support this Festival</Link>
            <Link href="/contact" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">Register Interest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
