"use client";

import { leadership } from "@/data/site";

export default function LeadershipSection() {
  return (
    <section className="py-section bg-temple-bg">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow block mb-3">Guidance & Vision</span>
          <h2 className="section-title">
            Our<br />
            <em className="text-gold not-italic font-normal">Leadership</em>
          </h2>
          <p className="font-inter text-ink/60 text-body-md mt-4 max-w-prose mx-auto">
            ISKCON Nairobi is guided by experienced devotee-leaders whose collective decades of service have shaped one of East Africa's most vibrant spiritual communities.
          </p>
        </div>

        {/* Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {leadership.map((leader, i) => (
            <div key={leader.name} className="group flex flex-col items-center text-center">
              {/* Portrait */}
              <div className="relative mb-6">
                <div className="w-44 h-44 overflow-hidden rounded-none relative border-4 border-sand shadow-card">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Gold frame on hover */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/70 transition-colors duration-300" />
                </div>
                {/* Decorative gold corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Name & Title */}
              <h3 className="font-playfair text-xl font-semibold text-ink mb-1">{leader.name}</h3>
              <p className="font-inter text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">{leader.title}</p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mb-4" />

              {/* Description */}
              <p className="font-inter text-ink/60 text-sm leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
