import React from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../../../data/projects';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#FAF8F5] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-12 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span>03 // PROJECTS</span>
        </div>

        {/* Section Headline */}
        <div className="mb-20 max-w-3xl">
          <h2 className="headline-editorial text-[#22031F]">
            Featured works built for <br />
            <span className="italic text-[#87B38D]">real-world utility.</span>
          </h2>
          <p className="mt-4 text-[#432B3E] font-sans text-base">
            Four live projects spanning mobile commerce, MSME fintech, retail AI, and clinical health informatics.
          </p>
        </div>

        {/* Asymmetric Project Showcase */}
        <div className="space-y-28">
          {projects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Visual Preview Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } relative overflow-hidden rounded-sm border border-[rgba(34,3,31,0.09)] bg-white shadow-md`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VIEW PROJECT"
                    className="block relative aspect-[16/10] overflow-hidden group/image"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} live interface preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/image:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-sm bg-white/95 backdrop-blur-md border border-[rgba(34,3,31,0.1)] font-mono text-[10px] text-[#22031F] tracking-widest uppercase font-semibold">
                      {project.statsLabel}
                    </div>

                    <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center space-x-1 px-3.5 py-1.5 rounded-full bg-[#87B38D] text-white font-mono text-[11px] font-semibold tracking-wider shadow-sm">
                      <span>LIVE SITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } space-y-5`}
                >
                  <div className="flex items-center space-x-3 font-mono text-xs">
                    <span className="font-serif italic text-2xl text-[#87B38D] font-semibold">{project.number}</span>
                    <span className="text-[#6E5668]">//</span>
                    <span className="uppercase tracking-widest text-[#22031F] font-semibold">{project.category}</span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-[#22031F] tracking-tight">
                    {project.title}
                  </h3>

                  <div className="font-serif italic text-lg sm:text-xl text-[#432B3E]">
                    "{project.tagline}"
                  </div>

                  <p className="text-sm sm:text-base text-[#432B3E] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono bg-white border border-[rgba(34,3,31,0.08)] text-[#22031F] rounded-sm shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="OPEN"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#87B38D] hover:bg-[#73A37A] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                    >
                      <span>Explore Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
