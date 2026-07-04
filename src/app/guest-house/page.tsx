import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { guestRooms } from "@/data/site";
import Link from "next/link";
import { Wifi, Shield, Coffee, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Guest House — Spiritual Hospitality in Nairobi",
  description: "Stay at ISKCON Nairobi's on-campus guest house. Serene, affordable accommodation with access to all temple programmes.",
};

const facilities = [
  { icon: <Wifi size={18} />, label: "Free WiFi", desc: "High-speed internet across the campus" },
  { icon: <Coffee size={18} />, label: "Prasādam Meals", desc: "Fresh vegetarian meals included" },
  { icon: <Shield size={18} />, label: "24hr Security", desc: "Gated campus with round-the-clock security" },
  { icon: <MapPin size={18} />, label: "Prime Location", desc: "South C, close to Nairobi CBD" },
];

export default function GuestHousePage() {
  return (
    <>
      <PageHero
        title="Guest House"
        titleAccent="& Retreat Stay"
        subtitle="Spiritual Hospitality"
        description="Rest, retreat, and reconnect at ISKCON Nairobi's on-campus guest accommodation — serene rooms with full access to daily temple programmes."
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=85"
        height="md"
      />

      {/* Intro */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow block mb-4">Why Stay With Us</span>
              <h2 className="section-title mb-6">A Temple Stay<br /><em className="text-gold not-italic font-normal">Unlike Any Other</em></h2>
              <div className="space-y-4 font-inter text-ink/70 leading-relaxed">
                <p>Staying at ISKCON Nairobi's guest house means waking to the sound of conches and bells at 4:30 AM, attending Maṅgala Ārati as the city sleeps, and experiencing the full rhythm of a devotional community.</p>
                <p>Whether you are a visiting devotee, a spiritual seeker, or a researcher interested in Vaishnava life, the guest house offers a rare opportunity to experience authentic Krishna conscious community living.</p>
                <p>All rooms include access to the temple, daily prasādam, the library, and the temple gardens.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((f) => (
                <div key={f.label} className="bg-temple-cream p-6 border border-temple-sand hover:border-gold/30 transition-colors">
                  <div className="text-gold mb-3">{f.icon}</div>
                  <h4 className="font-playfair text-ink font-semibold mb-1">{f.label}</h4>
                  <p className="font-inter text-ink/60 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-section bg-temple-cream">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Accommodation</span>
            <h2 className="section-title">Our Rooms</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {guestRooms.map((room) => (
              <div key={room.name} className="bg-white border border-temple-sand hover:shadow-card-hover hover:border-gold/30 transition-all overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-2 text-center shadow-sm">
                    <p className="font-playfair text-gold font-bold text-lg leading-none">{room.price}</p>
                    <p className="font-inter text-ink/40 text-[10px] mt-0.5">{room.priceUSD} · per night</p>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-playfair text-xl font-semibold text-ink">{room.name}</h3>
                  </div>
                  <p className="font-inter text-ink/40 text-xs mb-3">{room.capacity}</p>
                  <p className="font-inter text-ink/60 text-sm leading-relaxed mb-5">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((a) => (
                      <span key={a} className="font-inter text-[10px] text-gold bg-gold/10 px-2 py-1">{a}</span>
                    ))}
                  </div>
                  <Link
                    href={`/contact?room=${encodeURIComponent(room.name)}`}
                    className="block text-center bg-temple-brown text-white font-inter text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gold transition-colors"
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking enquiry */}
      <section className="py-section bg-temple-brown">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-gold/70 block mb-4">Book Your Stay</span>
              <h2 className="font-playfair text-display-md text-temple-cream mb-4">
                Enquire About<br /><em className="text-gold not-italic font-normal">Availability</em>
              </h2>
              <p className="font-inter text-white/60 leading-relaxed mb-6">
                Contact us with your preferred dates and room type. We respond within 24 hours.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-gold" />
                  <a href="tel:+254700000000" className="font-inter text-white/60 text-sm hover:text-gold transition-colors">+254 700 000 000</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-gold" />
                  <a href="mailto:guesthouse@iskconnairobi.org" className="font-inter text-white/60 text-sm hover:text-gold transition-colors">guesthouse@iskconnairobi.org</a>
                </div>
              </div>
            </div>
            {/* Simple enquiry form */}
            <div className="bg-white/5 border border-white/10 p-8 space-y-4">
              {[
                { label: "Full Name", type: "text", placeholder: "Your name" },
                { label: "Email Address", type: "email", placeholder: "your@email.com" },
                { label: "Arrival Date", type: "date", placeholder: "" },
                { label: "Departure Date", type: "date", placeholder: "" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-white/10 border border-white/15 text-white placeholder-white/30 font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
              ))}
              <div>
                <label className="font-inter text-white/50 text-xs uppercase tracking-wider block mb-1.5">Message</label>
                <textarea
                  rows={3}
                  placeholder="Room preference, special requirements..."
                  className="w-full bg-white/10 border border-white/15 text-white placeholder-white/30 font-inter text-sm px-4 py-3 focus:outline-none focus:border-gold resize-none"
                />
              </div>
              <button className="btn-primary w-full justify-center text-xs mt-2">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
