import { stats } from "@/data/site";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-temple-brown text-sand">
      <img
        src="/images/iskcon-nairobi-main-altar-wide.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-dusk/90" />

      <div className="relative z-10 content-width section-padding py-[clamp(5rem,9vw,8rem)]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 font-inter text-[0.66rem] uppercase tracking-[0.08em] text-gold-light/62">
              A Living Community
            </p>
            <h2 className="section-title-light">
              Krishna consciousness across East Africa
            </h2>
          </div>

          <div>
            <p className="font-cormorant text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.65] text-sand/82">
              Students study here. Families gather here. Prasadam is served
              here. Cows are protected here. Festivals bring Nairobi together
              in kirtan, service, and worship.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-y border-sand/14 py-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair text-3xl leading-none text-gold-light sm:text-4xl">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </p>
                  <p className="mt-2 font-inter text-[0.62rem] uppercase tracking-[0.08em] text-sand/52">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 max-w-xl font-cormorant text-xl italic leading-relaxed text-sand/64">
              &quot;The welfare of all living beings is the highest act of devotion.&quot;
              <footer className="mt-4 font-inter text-[0.62rem] not-italic uppercase tracking-[0.08em] text-gold-light/55">
                Srila Prabhupada
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
