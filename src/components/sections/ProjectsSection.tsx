import Link from "next/link";
import { projects } from "@/data/site";

const groups = [
  {
    label: "Education",
    description: "Training, study, student care, and the daily practice of bhakti.",
    items: projects.filter((project) => project.tag === "Education"),
  },
  {
    label: "Service",
    description: "Prasadam distribution, cow protection, farming, and community care.",
    items: projects.filter((project) => project.tag !== "Education"),
  },
];

export default function ProjectsSection() {
  return (
    <section className="sacred-section bg-temple-bg bg-temple-texture">
      <div className="content-width section-padding">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Our Work</p>
            <h2 className="section-title">
              Devotion in practice
            </h2>
          </div>
          <p className="editorial-copy max-w-2xl">
            ISKCON Nairobi&apos;s service life grows through education, prasadam,
            cow protection, festivals, and steady community care. Each project
            is an expression of worship carried into daily life.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label} className="border-t border-dusk/14 pt-6">
              <p className="font-inter text-[0.68rem] font-medium uppercase tracking-[0.08em] text-dusk/48">
                {group.label}
              </p>
              <p className="editorial-copy mt-2 text-[1rem] leading-relaxed">
                {group.description}
              </p>

              <div className="mt-7 space-y-5">
                {group.items.map((project) => (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="group grid gap-4 border-b border-dusk/10 pb-5 sm:grid-cols-[7.5rem_1fr] sm:items-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-28 w-full object-cover opacity-[0.88] sm:h-24"
                    />
                    <div>
                      <p className="font-inter text-[0.62rem] uppercase tracking-[0.08em] text-dusk/42">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-1 font-playfair text-2xl leading-tight text-ink">
                        {project.title}
                      </h3>
                      <p className="editorial-copy mt-2 text-[0.98rem] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link href="/projects" className="quiet-link mt-12">
          View All Service Areas
        </Link>
      </div>
    </section>
  );
}
