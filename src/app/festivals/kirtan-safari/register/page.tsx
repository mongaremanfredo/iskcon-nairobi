import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Kirtan Safari Registration Interest",
  description: "Register interest for Kirtan Safari hosted by ISKCON Nairobi.",
};

export default function KirtanSafariRegisterPage() {
  return (
    <>
      <PageHero
        title="Kirtan Safari"
        titleAccent="Registration"
        subtitle="Register Interest"
        description="Formal registration opens through temple announcements. Send your details now and the team will follow up."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
        height="sm"
      />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl">
          <div className="bg-white border border-temple-sand p-8 lg:p-10">
            <h2 className="section-title mb-4">Join the Interest List</h2>
            <p className="font-inter text-ink/65 leading-relaxed mb-8">
              Email the temple office with your name, number of attendees, city/country, and whether you need accommodation guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${templeInfo.email}?subject=Kirtan%20Safari%20Registration%20Interest`} className="btn-primary">
                Email Registration Interest
              </a>
              <Link href="/festivals/kirtan-safari" className="btn-outline">
                Back to Festival
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
