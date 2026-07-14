"use client";

import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=600&q=80", caption: "Janmashtami celebrations at ISKCON Nairobi", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", caption: "Food For Life distribution, Kibera", span: "" },
  { src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80", caption: "Kirtan Safari — dawn session on the savanna", span: "" },
  { src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80", caption: "Cows at the Thika Goshala Farm", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80", caption: "HKTC Nairobi students during morning class", span: "" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", caption: "East African landscape at golden hour", span: "" },
];

export default function GallerySection() {
  return (
    <section className="py-section bg-temple-cream">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow block mb-3">Our World</span>
            <h2 className="section-title">
              Life at<br />
              <em className="text-gold not-italic font-normal">ISKCON Nairobi</em>
            </h2>
          </div>
          <Link
            href="/media"
            className="flex items-center gap-2 font-inter text-xs text-gold font-semibold tracking-widest uppercase hover:gap-3 transition-all"
          >
            Full Gallery <ArrowRight size={12} />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[auto] gap-3 lg:gap-4" style={{ gridAutoRows: "200px" }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer image-grade ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-start gap-2">
                  <Camera size={11} className="text-gold mt-0.5 flex-shrink-0" />
                  <p className="font-inter text-white text-xs leading-relaxed">{img.caption}</p>
                </div>
              </div>
              {/* Gold corner */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold/0 group-hover:border-gold/80 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
