import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";
import { withSeo } from "@/lib/seo";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = withSeo({
  title: "Gaura Purnima",
  description: "Celebrate Sri Chaitanya Mahaprabhu's appearance day at ISKCON Nairobi with kirtan, abhishek, class, and prasadam.",
}, "/festivals/gaura-purnima");

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
          <p className="font-body text-ink/75 leading-relaxed mb-8">{description}</p>
          <p className="font-body text-ink/75 leading-relaxed mb-8">Contact the temple for the current year's fasting, abhishek, and feast schedule.</p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink variant="primary" href="/donate/festivals">Support this Festival</ButtonLink>
            <ButtonLink variant="outline" href="/contact" className="border-gold text-gold hover:bg-gold hover:text-white">Register Interest</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
