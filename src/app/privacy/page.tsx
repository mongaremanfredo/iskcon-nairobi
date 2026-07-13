import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the ISKCON Nairobi website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" titleAccent="Notice" subtitle="Website Information" image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80" height="sm" />
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding max-w-3xl font-inter text-ink/70 leading-relaxed space-y-5">
          <p>This website shares public information about ISKCON Nairobi programmes, festivals, projects, and contact options.</p>
          <p>If you contact the temple by email, phone, or a mailto form, your details are used only to respond to your enquiry or coordinate the service you requested.</p>
          <p>For privacy questions, contact <a href={`mailto:${templeInfo.email}`} className="text-primary underline">{templeInfo.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
