import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { templeInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us - ISKCON Nairobi",
  description: "Get in touch with ISKCON Nairobi. Temple address, phone, email, and enquiry form.",
};

export default function ContactPage() {
  const contactItems = [
    { icon: <MapPin size={16} />, label: "Address", value: templeInfo.addressLines.join("\n") },
    { icon: <Phone size={16} />, label: "Phone", value: templeInfo.phoneDisplay },
    { icon: <Mail size={16} />, label: "Email", value: templeInfo.email },
    { icon: <Clock size={16} />, label: "Temple Hours", value: templeInfo.hours },
  ];

  return (
    <>
      <PageHero
        title="Get in"
        titleAccent="Touch"
        subtitle="Contact Us"
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80"
        height="sm"
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
                    <p className="font-inter text-ink/70 text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="border-t border-temple-sand pt-6">
                <p className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/40 mb-3">Common Enquiries</p>
                <div className="space-y-2">
                  {["Temple Office", "Guest House", "Food For Life", "Donations"].map((dept) => (
                    <div key={dept} className="flex items-center justify-between gap-4">
                      <span className="font-inter text-ink/60 text-xs">{dept}</span>
                      <a href={`mailto:${templeInfo.email}`} className="font-inter text-gold text-xs hover:underline">{templeInfo.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-temple-cream border border-temple-sand p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare size={20} className="text-gold" />
                <h3 className="font-playfair text-2xl font-semibold text-ink">Send a Message</h3>
              </div>
              <form action={`mailto:${templeInfo.email}`} method="post" encType="text/plain" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "First Name", type: "text", placeholder: "First name" },
                    { label: "Last Name", type: "text", placeholder: "Last name" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">{f.label}</label>
                      <input name={f.label} type={f.type} placeholder={f.placeholder} className="w-full bg-white border border-temple-sand font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold text-ink placeholder-ink/30" />
                    </div>
                  ))}
                </div>
                {[
                  { label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { label: "Phone Number (optional)", type: "tel", placeholder: "+254 ..." },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">{f.label}</label>
                    <input name={f.label} type={f.type} placeholder={f.placeholder} className="w-full bg-white border border-temple-sand font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold text-ink placeholder-ink/30" />
                  </div>
                ))}
                <div>
                  <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">Subject</label>
                  <select name="Subject" className="w-full bg-white border border-temple-sand font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold text-ink/70">
                    <option>General Enquiry</option>
                    <option>Guest House Booking</option>
                    <option>HKTC Admissions</option>
                    <option>Food For Life Volunteering</option>
                    <option>Donation Query</option>
                    <option>Kirtan Safari Festival</option>
                    <option>Media / Press</option>
                  </select>
                </div>
                <div>
                  <label className="font-inter text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-1.5">Message</label>
                  <textarea name="Message" rows={5} placeholder="Tell us how we can help..." className="w-full bg-white border border-temple-sand font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold text-ink placeholder-ink/30 resize-none" />
                </div>
                <button className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
