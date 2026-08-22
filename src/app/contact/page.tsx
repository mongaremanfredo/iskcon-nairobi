import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ISKCON Nairobi. Temple address, phone, email, and enquiry form.",
};

export default function ContactPage() {
  const contactItems = [
    { icon: <MapPin size={16} />, label: "Address", value: templeInfo.addressLines.join("\n"), href: templeInfo.mapUrl },
    { icon: <Phone size={16} />, label: "Phone", value: templeInfo.phoneDisplay, href: `tel:${templeInfo.phoneHref}` },
    { icon: <Mail size={16} />, label: "Email", value: templeInfo.email, href: `mailto:${templeInfo.email}` },
    { icon: <Clock size={16} />, label: "Temple Hours", value: templeInfo.hours },
  ];

  return (
    <>
      <PageHero
        title="Get in"
        titleAccent="Touch"
        subtitle="Contact Us"
        image="/images/sunset-route.png"
        height="md"
        className="sm:min-h-[500px]"
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <span className="eyebrow block mb-4">Temple Contact</span>
                <h2 className="section-title text-2xl mb-6">We'd Love<br />to Hear From You</h2>
              </div>
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="text-gold mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/40 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-inter text-ink/70 text-sm whitespace-pre-line leading-relaxed transition-colors hover:text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter text-ink/70 text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="border-t border-temple-sand pt-6">
                <p className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/40 mb-3">Common Enquiries</p>
                <div className="rounded-sm border border-temple-sand bg-temple-cream/70 p-4">
                  <p className="font-inter text-xs leading-relaxed text-ink/55">
                    For temple office, guest house, Food For Life, and donation enquiries, write to:
                  </p>
                  <a
                    href={`mailto:${templeInfo.email}`}
                    className="mt-2 inline-flex items-center gap-2 font-inter text-sm font-semibold text-primary transition-colors hover:text-gold hover:underline"
                  >
                    <Mail size={14} />
                    {templeInfo.email}
                  </a>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Temple Office", "Guest House", "Food For Life", "Donations"].map((dept) => (
                      <span
                        key={dept}
                        className="border border-gold/25 bg-white/60 px-2.5 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/55"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-temple-cream border border-temple-sand p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare size={20} className="text-gold" />
                <h3 className="font-playfair text-2xl font-semibold text-ink">Send a Message</h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
