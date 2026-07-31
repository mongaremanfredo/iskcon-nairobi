"use client";

import { useState } from "react";
import { X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
};

// Swap/add real photos here. Keeping the same /images/hktc/ path convention
// already used on the rest of the site.
const images: GalleryImage[] = [
  { src: "/images/hktc/hktc-nairobi-hero-class.jpg", alt: "HKTC Nairobi students in class" },
  { src: "/images/hktc/hktc-nairobi-kirtan-class.jpg", alt: "HKTC Nairobi students leading kirtan" },
  { src: "/images/hktc/hktc-nairobi-prabhupada-book-study.jpg", alt: "Students studying Srila Prabhupada's books" },
  { src: "/images/hktc/hktc-nairobi-graduation-certificates.jpg", alt: "Students after graduation with certificates" },
  { src: "/images/hktc/hktc-nairobi-student-class.jpg", alt: "HKTC Nairobi student class in session" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden border border-temple-sand bg-temple-cream"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-temple-brown/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-5 top-5 text-sand hover:text-gold"
          >
            <X size={28} />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[80vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-6 font-playfair text-3xl text-sand hover:text-gold sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-6 font-playfair text-3xl text-sand hover:text-gold sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
