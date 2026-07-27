import Link from "next/link";

export default function DonationSection() {
  return (
    <section className="sacred-section relative overflow-hidden bg-sand">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dusk/16 to-transparent" />
      <div className="content-width section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Support the Temple</p>
          <h2 className="section-title">Sustain worship and service</h2>
          <p className="editorial-intro mx-auto mt-7">
            Your contribution sustains daily worship, prasadam distribution,
            student education, festivals, hospitality, and cow protection.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/donate" className="btn-primary w-auto">
              Support the Mission
            </Link>
            <Link href="/donate" className="quiet-link">
              See Giving Options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
