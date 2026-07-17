import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for the ISKCON Nairobi website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Website" titleAccent="Terms" subtitle="Use of This Site" image="/images/placeholders/hare-krishna-harinam.jpg" height="sm" />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl font-inter text-ink/70 leading-relaxed space-y-5">
          <p>Information on this site is provided to help visitors learn about ISKCON Nairobi and its public programmes. Programme details may change, especially around festival days.</p>
          <p>Donation, guest house, course, and festival enquiries should be confirmed directly with the temple office before making plans.</p>
          <p>For questions, contact <a href={`mailto:${templeInfo.email}`} className="text-primary underline">{templeInfo.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
