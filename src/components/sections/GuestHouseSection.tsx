import Link from "next/link";

export default function GuestHouseSection() {
  return (
    <section className="relative overflow-hidden bg-temple-brown text-sand">
      <img
        src="/images/iskcon-nairobi-aerial.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-dusk/90" />

      <div className="relative z-10 content-width section-padding py-[clamp(5rem,9vw,8rem)]">
        <div className="max-w-3xl">
          <p className="mb-4 font-inter text-[0.66rem] uppercase tracking-[0.08em] text-gold-light/62">
            Spiritual Hospitality
          </p>
          <h2 className="section-title-light">Stay within the temple rhythm</h2>
          <p className="mt-7 font-cormorant text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.65] text-sand/76">
            Guests are invited to rest, attend the morning and evening
            programmes, receive prasadam, and experience temple life from
            within the Nairobi campus.
          </p>
          <Link
            href="/guest-house"
            className="quiet-link mt-9 border-sand/28 text-sand hover:border-gold-light hover:text-gold-light"
          >
            Guest House Information
          </Link>
        </div>
      </div>
    </section>
  );
}
