import Link from "next/link";

const galleryImages = [
  {
    src: "/images/iskcon-nairobi-aerial.jpg",
    alt: "ISKCON Nairobi temple and city skyline",
  },
  {
    src: "/images/iskcon-nairobi-main-altar-wide.jpg",
    alt: "Main altar at ISKCON Nairobi",
  },
  {
    src: "/images/placeholders/iskcon-food-for-life.jpg",
    alt: "Prasadam service",
  },
];

export default function GallerySection() {
  return (
    <section className="sacred-section bg-temple-cream">
      <div className="content-width section-padding">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Our World</p>
            <h2 className="section-title">Life at ISKCON Nairobi</h2>
          </div>
          <p className="editorial-copy max-w-2xl">
            Temple life is carried in images of worship, prasadam, study,
            gathering, and service. The gallery offers a quieter glimpse into
            that daily rhythm.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="h-[24rem] w-full object-cover lg:h-[34rem]"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryImages.slice(1).map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover lg:h-[16.5rem]"
              />
            ))}
          </div>
        </div>

        <Link href="/media" className="quiet-link mt-10">
          Visit the Gallery
        </Link>
      </div>
    </section>
  );
}
