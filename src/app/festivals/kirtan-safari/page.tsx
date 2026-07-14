import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, ExternalLink, HeartHandshake, MapPin, Music2, Share2, Utensils } from "lucide-react";

const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSchu7XdbUX1PkLjgMEgB8WhKXdYOGMqVvMLgIRTcXG9bwTKRw/viewform";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/kirtansafari" },
  { label: "YouTube", href: "https://www.youtube.com/@kirtan_safari" },
  { label: "TikTok", href: "https://www.tiktok.com/@kirtan.safari" },
];

const eventDays = [
  {
    day: "28",
    suffix: "th",
    month: "August",
    weekday: "Friday",
    note: "Balaram Purnima",
    programme: [
      ["10:00am", "Adivas Kirtan"],
      ["01:00pm", "Prasadam"],
      ["06:00pm", "Abhishek & talk"],
      ["07:30pm", "Kirtan"],
      ["09:00pm", "Prasadam"],
    ],
  },
  {
    day: "29",
    suffix: "th",
    month: "August",
    weekday: "Saturday",
    note: "Special Harinam",
    programme: [
      ["10:00am", "Kirtan starts"],
      ["01:00pm", "Prasadam"],
      ["02:30pm", "Special Harinam"],
      ["05:00pm", "Kirtan"],
      ["09:00pm", "Prasadam"],
    ],
  },
  {
    day: "30",
    suffix: "th",
    month: "August",
    weekday: "Sunday",
    note: "Continuous Kirtan",
    programme: [
      ["10:00am - 9:00pm", "Continuous kirtan all day"],
      ["01:00pm", "Prasadam"],
      ["09:00pm", "Prasadam"],
    ],
  },
];

const highlights = [
  { icon: <Music2 size={18} />, title: "Every Word a Song", text: "A full weekend of maha-mantra kirtan, devotional music, and shared chanting." },
  { icon: <Share2 size={18} />, title: "Every Step a Dance", text: "A safari-inspired devotional gathering shaped by Nairobi's forest and savanna mood." },
  { icon: <Utensils size={18} />, title: "Prasadam Daily", text: "Sanctified vegetarian meals are part of each festival day." },
];

export const metadata: Metadata = {
  title: "Kirtan Safari 2026",
  description: "Kirtan Safari 2026 at ISKCON Nairobi, 28-30 August: a kirtan journey through Jarikhand Forest with kirtan, prasadam, Harinam, Abhishek, and classes.",
};

export default function KirtanSafariPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#152018] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/kirtan-safari-2026-logo-wide.jpg"
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12180f] via-[#182315]/88 to-[#f09a22]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12180f] via-transparent to-[#12180f]/35" />
        </div>

        <div className="relative content-width section-padding min-h-[calc(100vh-5rem)] py-28 lg:py-36 flex items-center">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-[#f4b553]/50 bg-[#f4b553]/15 px-4 py-2 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4b553]" />
                <span className="font-inter text-[11px] tracking-[0.18em] uppercase text-[#f7d18a]">28-30 August 2026</span>
              </div>

              <p className="font-cormorant text-[#f7d18a] italic text-2xl mb-3">Every word a song. Every step a dance.</p>
              <h1 className="font-playfair text-white text-shadow leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
                Kirtan
                <br />
                <span className="text-[#f4b553]">Safari</span>
              </h1>
              <p className="font-inter text-white/75 max-w-2xl mt-7 leading-relaxed">
                You are invited to a kirtan journey through Jarikhand Forest at Hare Krishna Temple, ISKCON Nairobi.
                Join three days of kirtan, Harinam, Abhishek, prasadam, and devotional association.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Register for 2026 <ExternalLink size={14} />
                </a>
                <Link href="#programme" className="btn-ghost">
                  View Programme
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-[#fff7e4] p-3 shadow-2xl rotate-2">
                <img
                  src="/images/kirtan-safari-2026-poster-thumb.jpg"
                  alt="Kirtan Safari 2026 poster"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#203221] py-6 section-padding">
        <div className="content-width grid sm:grid-cols-3 gap-5">
          {[
            { icon: <CalendarDays size={16} />, label: "Dates", value: "28-30 August 2026" },
            { icon: <MapPin size={16} />, label: "Venue", value: "Hare Krishna Temple" },
            { icon: <Clock size={16} />, label: "Sunday", value: "Continuous kirtan all day" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-white">
              <div className="text-[#f4b553]">{item.icon}</div>
              <div>
                <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-white/45">{item.label}</p>
                <p className="font-inter text-sm text-white/90">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-section bg-[#fff7e4]">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <span className="eyebrow block mb-4 text-[#b86f16]">2026 Theme</span>
              <h2 className="font-playfair text-[#203221] leading-tight mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
                A Kirtan Journey Through Jarikhand Forest
              </h2>
              <p className="font-inter text-[#203221]/70 leading-relaxed mb-8">
                The 2026 visual language is warm, earthy, and celebratory: forest silhouettes, safari sunset gold,
                dancing devotees, and the mood of sacred sound moving through nature.
              </p>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {highlights.map((item) => (
                  <div key={item.title} className="border border-[#dec787] bg-white/65 p-5">
                    <div className="text-[#b86f16] mb-3">{item.icon}</div>
                    <h3 className="font-playfair text-xl font-semibold text-[#203221]">{item.title}</h3>
                    <p className="font-inter text-xs leading-relaxed text-[#203221]/65 mt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="programme" className="grid gap-4">
              {eventDays.map((eventDay) => (
                <article key={eventDay.day} className="bg-white border border-[#dec787] p-6 lg:p-7">
                  <div className="grid sm:grid-cols-[150px_1fr] gap-6">
                    <div className="border-b sm:border-b-0 sm:border-r border-[#dec787] pb-5 sm:pb-0 sm:pr-6">
                      <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-[#b86f16]">{eventDay.weekday}</p>
                      <div className="flex items-start gap-1 my-2">
                        <span className="font-playfair text-6xl leading-none text-[#203221]">{eventDay.day}</span>
                        <span className="font-inter text-xs font-bold uppercase text-[#203221]/50 mt-2">{eventDay.suffix}</span>
                      </div>
                      <p className="font-inter text-sm font-semibold uppercase tracking-[0.12em] text-[#b86f16]">{eventDay.month}</p>
                      <p className="font-cormorant text-lg italic text-[#203221]/65 mt-3">{eventDay.note}</p>
                    </div>
                    <div className="space-y-3">
                      {eventDay.programme.map(([time, title]) => (
                        <div key={`${eventDay.day}-${time}-${title}`} className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
                          <p className="font-inter text-xs font-semibold text-[#203221]/55">{time}</p>
                          <p className="font-inter text-sm text-[#203221]">{title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-[#182315] text-white">
        <div className="content-width section-padding">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">
            <div>
              <span className="eyebrow block mb-4 text-[#f4b553]">Registration & Support</span>
              <h2 className="font-playfair text-display-md mb-5">Join Kirtan Safari 2026</h2>
              <p className="font-inter text-white/65 leading-relaxed max-w-2xl">
                Register through the official 2026 form and follow Kirtan Safari for updates, reminders, and festival media.
                Donations can be sent by Paybill to support the festival prasadam, kirtan, and outreach arrangements.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Open Registration Form <ExternalLink size={14} />
                </a>
                <a href="/images/kirtan-safari-2026-poster.jpg" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  View Poster
                </a>
              </div>
            </div>

            <div className="bg-[#fff7e4] text-[#203221] p-6 border border-[#f4b553]/40">
              <div className="flex items-center gap-3 mb-5">
                <HeartHandshake size={20} className="text-[#b86f16]" />
                <h3 className="font-playfair text-2xl font-semibold">Festival Donations</h3>
              </div>
              <div className="space-y-4 font-inter text-sm">
                <div>
                  <p className="text-[#203221]/45 uppercase tracking-[0.16em] text-[10px]">Paybill No.</p>
                  <p className="text-3xl font-semibold text-[#203221]">250144</p>
                </div>
                <div>
                  <p className="text-[#203221]/45 uppercase tracking-[0.16em] text-[10px]">Account</p>
                  <p className="text-xl font-semibold text-[#203221]">KIRTAN</p>
                </div>
                <div>
                  <p className="text-[#203221]/45 uppercase tracking-[0.16em] text-[10px]">Location</p>
                  <p className="text-[#203221]/75">ISKCON Nairobi, Radha Banke Bihari Mandir, West Ngara Road</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-4 py-2 font-inter text-xs uppercase tracking-[0.14em] text-white/65 hover:border-[#f4b553] hover:text-[#f4b553] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
