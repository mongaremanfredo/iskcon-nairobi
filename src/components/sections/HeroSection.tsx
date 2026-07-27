import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-hero relative min-h-[100svh] overflow-hidden">
      <img
        src="/images/iskcon-nairobi-aerial.jpg"
        alt="Aerial view of ISKCON Nairobi temple with the Nairobi skyline"
        className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(58,42,36,0.18),rgba(58,42,36,0.62)),linear-gradient(to_right,rgba(58,42,36,0.58),rgba(58,42,36,0.12))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(184,148,78,0.12),transparent_36%)]" />

      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="content-width section-padding pb-[clamp(5rem,10vh,8rem)] pt-32">
          <div className="max-w-[680px]">
            <p className="mb-5 font-inter text-[0.68rem] font-medium uppercase tracking-[0.08em] text-sand/72">
              Sri Sri Radha Bankebihari Temple
            </p>
            <h1 className="font-playfair text-[clamp(3.35rem,9vw,7.5rem)] font-normal leading-[0.96] text-sand text-shadow">
              ISKCON
              <br />
              <span className="text-gold-light italic">Nairobi</span>
            </h1>
            <p className="mt-8 max-w-xl font-cormorant text-[clamp(1.15rem,2vw,1.7rem)] leading-[1.58] text-sand/84 text-shadow">
              A spiritual home in the heart of Nairobi, rooted in worship, study,
              prasadam, kirtan, and service.
            </p>
            <Link href="/visit" className="btn-ghost mt-9 w-auto">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .home-hero .section-padding {
            padding-bottom: 4.8rem !important;
            padding-top: 7rem !important;
          }

          .home-hero p:last-of-type {
            max-width: 19rem !important;
          }

          .home-hero a {
            width: auto !important;
            min-height: 42px !important;
            padding: 0.78rem 1.05rem !important;
            font-size: 0.62rem !important;
          }
        }
      `}</style>
    </section>
  );
}
