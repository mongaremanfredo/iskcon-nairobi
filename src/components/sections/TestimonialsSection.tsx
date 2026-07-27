import { testimonials } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section className="sacred-section bg-temple-bg">
      <div className="content-width section-padding">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Stories From the Field</p>
            <h2 className="section-title">
              Voices of our community
            </h2>
          </div>
          <p className="editorial-copy max-w-2xl">
            The temple is carried by many lives: guests, students, volunteers,
            teachers, families, and friends who find shelter in worship and
            service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.image}
              className="grid gap-6 border-t border-dusk/12 pt-7 sm:grid-cols-[9rem_1fr] sm:items-start"
            >
              <div className="relative w-32 sm:w-36">
                <div className="relative h-32 w-32 overflow-hidden border-4 border-dusk/10 shadow-card sm:h-36 sm:w-36">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 border-2 border-gold/20" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-8 w-8 border-r-2 border-b-2 border-gold/60" />
                <div className="absolute -top-2 -left-2 h-8 w-8 border-l-2 border-t-2 border-gold/50" />
              </div>

              <div>
                <blockquote className="font-cormorant text-[1.18rem] italic leading-relaxed text-dusk/76 sm:text-[1.35rem]">
                  &quot;{item.quote}&quot;
                </blockquote>
                <div className="mt-5 border-t border-dusk/10 pt-4">
                  <p className="font-inter text-sm font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 font-inter text-xs text-ink/48">{item.role}</p>
                  <p className="mt-2 font-inter text-[0.62rem] uppercase tracking-[0.08em] text-gold-dark">
                    {item.origin}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
