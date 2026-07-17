import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { donationPaths, templeInfo } from "@/data/site";
import { Heart, Mail, Phone } from "lucide-react";

type Props = {
  params: Promise<{ fund: string }>;
};

const generalFund = {
  title: "General Fund",
  description: "Support temple operations, urgent needs, worship, outreach, maintenance, and community service where help is most needed.",
  image: "/images/placeholders/iskcon-temple-bangalore.jpg",
  icon: "🙏",
  href: "/donate/general",
};

function getFund(slug: string) {
  return donationPaths.find((path) => path.href.endsWith(`/${slug}`)) ?? generalFund;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fund = getFund((await params).fund);
  return {
    title: `Donate - ${fund.title}`,
    description: fund.description,
  };
}

export default async function DonateFundPage({ params }: Props) {
  const fund = getFund((await params).fund);

  return (
    <>
      <PageHero
        title="Donate to"
        titleAccent={fund.title}
        subtitle="Support ISKCON Nairobi"
        description={fund.description}
        image={fund.image}
        height="sm"
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-start">
            <div className="bg-white border border-temple-sand p-8 lg:p-10">
              <div className="text-4xl mb-5">{fund.icon}</div>
              <h2 className="font-playfair text-3xl font-semibold text-ink mb-4">How to Give</h2>
              <p className="font-inter text-ink/65 leading-relaxed mb-8">
                Online payment integration is being finalized. For now, contact the temple office and mention "{fund.title}" so your donation can be directed correctly.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href={`tel:${templeInfo.phoneHref}`} className="btn-primary justify-center">
                  <Phone size={14} />
                  Call Temple
                </a>
                <a href={`mailto:${templeInfo.email}?subject=Donation%20-%20${encodeURIComponent(fund.title)}`} className="btn-outline justify-center">
                  <Mail size={14} />
                  Email Office
                </a>
              </div>
            </div>

            <aside className="bg-temple-brown p-8 border border-gold/20">
              <Heart className="text-gold mb-5" size={30} />
              <h3 className="font-playfair text-2xl text-white font-semibold mb-3">Donation Note</h3>
              <p className="font-inter text-white/60 text-sm leading-relaxed">
                ISKCON Nairobi welcomes designated giving for worship, prasadam, cow protection, student outreach, and festivals. Please request a receipt when you contact the temple office.
              </p>
              <Link href="/donate" className="mt-7 inline-flex font-inter text-xs font-semibold tracking-widest uppercase text-gold border-b border-gold/40 pb-1">
                View all funds
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
