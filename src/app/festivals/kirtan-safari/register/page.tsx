import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { ExternalLink } from "lucide-react";

const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform";

export const metadata: Metadata = {
  title: "Kirtan Safari 2026 Registration",
  description: "Register for Kirtan Safari 2026 hosted by ISKCON Nairobi.",
};

export default function KirtanSafariRegisterPage() {
  return (
    <>
      <PageHero
        title="Kirtan Safari"
        titleAccent="Registration"
        subtitle="28-30 August 2026"
        description="Register through the official Kirtan Safari 2026 form."
        image="/images/kirtan-safari-2026-logo-wide.jpg"
        height="sm"
      />
      <section className="py-section bg-[#fff7e4]">
        <div className="content-width section-padding max-w-3xl">
          <div className="bg-white border border-[#dec787] p-8 lg:p-10">
            <span className="eyebrow block mb-4 text-[#b86f16]">Official Form</span>
            <h2 className="section-title mb-4">Register for Kirtan Safari 2026</h2>
            <p className="font-inter text-ink/65 leading-relaxed mb-8">
              The official registration form opens in Google Forms. Use it to submit your details for the 28-30 August
              festival at Hare Krishna Temple, Nairobi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open Registration Form <ExternalLink size={14} />
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
