import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { templeInfo } from "@/data/site";

export default function JanmashtamiPage() {
  const description = "Janmashtami celebrates the divine appearance of Lord Krishna with kirtan, abhishek, classes, offerings, drama, and prasadam.";
  return (
    <>
      <PageHero
        title="Janmashtami"
        titleAccent="Appearance of Lord Krishna"
        subtitle={templeInfo.legalName}
        description={description}
        image="/images/placeholders/iskcon-temple-bangalore.jpg"
        height="lg"
      />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl">
          <p className="font-inter text-ink/70 leading-relaxed mb-8">{description}</p>
          <p className="font-inter text-ink/60 leading-relaxed mb-8">Festival schedules can vary each year. Contact the temple office for the current programme, sponsorships, and volunteer service.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/donate/festivals" className="btn-primary">Support this Festival</Link>
            <Link href="/contact" className="btn-outline border-gold text-gold hover:bg-gold hover:text-white">Register Interest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
