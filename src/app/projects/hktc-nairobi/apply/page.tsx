import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Apply - HKTC Nairobi",
  description: "Express interest in Hare Krishna Theological College programmes connected with ISKCON Nairobi.",
};

export default function HktcApplyPage() {
  return (
    <>
      <PageHero
        title="HKTC"
        titleAccent="Application"
        subtitle="Study Interest"
        description="Tell the education team which course or study pathway you are interested in."
        image="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=85"
        height="sm"
      />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl">
          <div className="bg-white border border-temple-sand p-8 lg:p-10">
            <h2 className="section-title mb-4">Request Admissions Guidance</h2>
            <p className="font-inter text-ink/65 leading-relaxed mb-8">
              Email the temple office with your name, contact number, location, and the study area you are interested in. The education team can confirm the next available intake and requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${templeInfo.email}?subject=HKTC%20Nairobi%20Application%20Interest`} className="btn-primary">
                Email Application Interest
              </a>
              <Link href="/projects/hktc-nairobi" className="btn-outline">
                Back to HKTC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
