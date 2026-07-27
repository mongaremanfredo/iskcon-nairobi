"use client";

import Link from "next/link";
import { ArrowRight, Wifi, Wind, Coffee, Star } from "lucide-react";
import { guestRooms } from "@/data/site";

const amenityIcons: Record<string, React.ReactNode> = {
  "AC": <Wind size={12} />,
  "En-suite": <Star size={12} />,
  "Desk": <Coffee size={12} />,
  "Temple View": <Star size={12} />,
  "Sitting Area": <Coffee size={12} />,
  "Kitchenette": <Coffee size={12} />,
  "2 Bathrooms": <Star size={12} />,
  "Living Room": <Coffee size={12} />,
  "Balcony": <Wind size={12} />,
};

export default function GuestHouseSection() {
  return (
    <section className="py-section bg-temple-brown">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow text-gold/70 block mb-3">Spiritual Hospitality</span>
            <h2 className="font-playfair text-display-md text-temple-cream leading-tight">
              Stay With<br />
              <em className="text-gold not-italic font-normal">Us in Nairobi</em>
            </h2>
            <p className="font-inter text-white/50 text-sm mt-4 max-w-sm leading-relaxed">
              Rest, retreat, and reconnect. Our guest house offers serene accommodation within the temple campus, with access to all morning and evening programmes.
            </p>
          </div>
          <Link
            href="/guest-house"
            className="flex items-center gap-2 font-inter text-xs text-gold font-semibold tracking-widest uppercase hover:gap-3 transition-all flex-shrink-0"
          >
            All Rooms & Facilities <ArrowRight size={12} />
          </Link>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
          {guestRooms.map((room) => (
            <div
              key={room.name}
              className="group bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-temple-brown/90 backdrop-blur-sm px-3 py-1.5 border border-gold/30">
                  <p className="font-playfair text-gold text-base font-semibold">{room.price}</p>
                  <p className="font-inter text-white/50 text-[10px] text-right">per night</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-playfair text-temple-cream text-lg font-semibold mb-1">{room.name}</h3>
                <p className="font-inter text-white/40 text-xs mb-3">{room.capacity}</p>
                <p className="font-inter text-white/60 text-sm leading-relaxed mb-4">{room.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.amenities.map((a) => (
                    <span key={a} className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 font-inter text-white/50 text-[10px]">
                      {amenityIcons[a]}
                      {a}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/guest-house#${room.name.toLowerCase().replace(/ /g, "-")}`}
                  className="block text-center bg-transparent border border-gold/40 text-gold font-inter text-xs font-semibold tracking-widest uppercase py-2.5 hover:bg-gold hover:text-white transition-all"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities strip */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-6 justify-center">
            {["Free WiFi", "Vegetarian Prasādam", "Morning Programme Access", "Temple Tours", "24hr Security", "Laundry Service"].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <span className="gold-dot scale-75" />
                <span className="font-inter text-white/50 text-xs">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
