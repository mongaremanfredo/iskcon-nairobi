"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";

const tagClasses: Record<string, string> = {
  Education: "bg-gold/95 text-dusk",
  Agriculture: "bg-acacia/95 text-white",
  "Community Service": "bg-sunset/95 text-white",
};

export default function ProjectsSection() {
  return (
    <section className="projects-section py-section bg-temple-bg bg-temple-texture">
      <div className="content-width section-padding">
        {/* Header */}
        <div className="projects-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow block mb-3">Our Work</span>
            <h2 className="section-title">
              Where Devotion<br />
              <em className="text-gold not-italic font-normal">Meets Action</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 font-inter text-xs text-gold font-semibold tracking-widest uppercase hover:gap-3 transition-all"
          >
            All Projects <ArrowRight size={12} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={project.href}
              className="project-card group relative overflow-hidden block"
            >
              {/* Image */}
              <div className="project-image relative aspect-card overflow-hidden image-grade">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Tag */}
                <div className="project-tag absolute top-4 left-4">
                  <span className={`font-inter text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 ${tagClasses[project.tag] ?? "bg-primary/95 text-white"}`}>
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="project-content absolute bottom-0 left-0 right-0 p-6">
                  <p className="project-subtitle font-inter text-white/60 text-xs tracking-widest uppercase mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="project-title font-playfair text-white text-2xl font-semibold mb-2 text-shadow">
                    {project.title}
                  </h3>
                  <p className="project-description font-inter text-white/70 text-sm leading-relaxed max-w-xs line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 font-inter text-gold text-xs font-semibold tracking-widest uppercase transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>

                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-gold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .projects-section {
            padding-top: calc(var(--space-section, 6rem) / 2) !important;
            padding-bottom: calc(var(--space-section, 6rem) / 2) !important;
          }

          .projects-section :global(.section-padding) {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .projects-header {
            gap: 0.7rem !important;
            margin-bottom: 1.35rem !important;
          }

          .projects-header :global(.eyebrow) {
            margin-bottom: 0.45rem !important;
          }

          .projects-header :global(.section-title) {
            font-size: clamp(1.8rem, 9vw, 2.35rem) !important;
            line-height: 0.95 !important;
          }

          .projects-header :global(a) {
            font-size: 0.62rem !important;
            margin-top: -0.15rem !important;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.55rem !important;
          }

          .project-image {
            aspect-ratio: 0.92 / 1 !important;
          }

          .project-tag {
            top: 0.45rem !important;
            left: 0.45rem !important;
          }

          .project-tag span {
            font-size: 0.45rem !important;
            letter-spacing: 0.08em !important;
            padding: 0.18rem 0.34rem !important;
          }

          .project-content {
            padding: 0.58rem !important;
          }

          .project-subtitle {
            font-size: 0.48rem !important;
            letter-spacing: 0.08em !important;
            margin-bottom: 0.08rem !important;
            line-height: 1.15 !important;
          }

          .project-title {
            font-size: clamp(0.95rem, 4.5vw, 1.15rem) !important;
            line-height: 1.02 !important;
            margin-bottom: 0 !important;
          }

          .project-description,
          .project-content > div {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
