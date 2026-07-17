import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Media - Photo & Video Gallery",
  description: "Photos and videos from ISKCON Nairobi - temple life, festivals, community service, and the beauty of Krishna consciousness in East Africa.",
};

const categories = ["All", "Temple Life", "Festivals", "Farm & Goshala", "Food For Life", "HKTC", "Kirtan Safari"];

const images = [
  { src: "/images/iskcon-nairobi-main-altar-thumb.jpg", caption: "Main altar at ISKCON Nairobi", category: "Temple Life" },
  { src: "/images/iskcon-nairobi-main-altar-wide-thumb.jpg", caption: "Full altar view with three sections", category: "Temple Life" },
  { src: "/images/placeholders/iskcon-temple-bangalore.jpg", caption: "Janmashtami celebration mood", category: "Festivals" },
  { src: "/images/placeholders/hare-krishna-harinam.jpg", caption: "Dawn kirtan on the Kenyan savanna", category: "Kirtan Safari" },
  { src: "/images/placeholders/iskcon-food-for-life.jpg", caption: "Food For Life prasadam service", category: "Food For Life" },
  { src: "/images/placeholders/cows-pasture-pixabay.jpg", caption: "Cow protection and farm service", category: "Farm & Goshala" },
  { src: "/images/placeholders/hare-krishna-harinam.jpg", caption: "Students during morning study", category: "HKTC" },
  { src: "/images/placeholders/hare-krishna-harinam.jpg", caption: "Temple programme - evening arati", category: "Temple Life" },
  { src: "/images/placeholders/iskcon-ratha-yatra-moscow.jpg", caption: "Kirtan Safari - sunset session", category: "Kirtan Safari" },
  { src: "/images/placeholders/iskcon-ratha-yatra.jpg", caption: "Ratha Yatra procession atmosphere", category: "Festivals" },
  { src: "/images/placeholders/cows-pasture-pixabay.jpg", caption: "Organic farming at Thika", category: "Farm & Goshala" },
  { src: "/images/placeholders/iskcon-temple-bangalore.jpg", caption: "Gaura Purnima celebration mood", category: "Festivals" },
  { src: "/images/placeholders/iskcon-temple-bangalore.jpg", caption: "African sunrise near Nairobi", category: "Temple Life" },
  { src: "/images/placeholders/iskcon-temple-bangalore.jpg", caption: "Golden hour over Kenya", category: "Temple Life" },
];

export default function MediaPage() {
  const mediaSocials = socialLinks.filter((link) => ["YouTube", "Instagram", "Facebook"].includes(link.name));

  return (
    <>
      <PageHero
        title="Photo"
        titleAccent="& Video Gallery"
        subtitle="Media Library"
        description="Life at ISKCON Nairobi through the lens - festivals, farm, temple worship, and the beauty of devotional community in East Africa."
        image="/images/placeholders/hare-krishna-harinam.jpg"
        height="sm"
      />

      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="mb-10 bg-white border border-temple-sand p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <span className="eyebrow block mb-2">HKTC Nairobi</span>
              <h2 className="font-playfair text-2xl font-semibold text-ink">Graduation Ceremony Album</h2>
              <p className="font-inter text-ink/60 text-sm mt-2 max-w-2xl">
                To keep this website fast, the full graduation gallery stays in Google Photos while selected images can be curated locally when needed.
              </p>
            </div>
            <a
              href="https://photos.app.goo.gl/MIZfuQWWgNPvBuG43"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-xs"
            >
              View Full Album
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`font-inter text-xs font-semibold tracking-widest uppercase px-4 py-2 border transition-colors ${
                  i === 0
                    ? "bg-gold text-white border-gold"
                    : "border-temple-sand text-ink/50 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((img, i) => (
              <div key={i} className="group relative overflow-hidden break-inside-avoid mb-3 cursor-pointer image-grade">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-inter text-white text-xs leading-tight">{img.caption}</p>
                  <p className="font-inter text-gold text-[10px] mt-1 uppercase tracking-wider">{img.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-inter text-ink/40 text-sm">More photos and videos are shared on ISKCON Nairobi social channels.</p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {mediaSocials.map((platform) => (
                <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="font-inter text-xs font-semibold text-gold tracking-widest uppercase border-b border-gold/30 pb-0.5 hover:border-gold transition-colors">
                  {platform.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
