import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="sacred-section bg-sand">
      <div className="content-width section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">A Sacred Home</p>
            <h2 className="section-title max-w-md">
              A temple in the heart of Nairobi
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="editorial-intro">
              ISKCON Nairobi is the home of Sri Sri Radha Bankebihari, a place
              of worship, study, prasadam, kirtan, and service in the heart of
              East Africa.
            </p>
            <p className="editorial-copy mt-7 max-w-2xl">
              The temple gathers seekers, families, students, residents, and
              visitors into a daily rhythm of devotion. Morning worship, sacred
              study, festivals, hospitality, and prasadam are offered as a
              living continuation of Srila Prabhupada&apos;s vision for Kenya and
              the African mission.
            </p>
            <Link href="/about" className="quiet-link mt-8">
              Read About the Temple
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
