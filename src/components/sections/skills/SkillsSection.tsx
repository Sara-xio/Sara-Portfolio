import React from 'react';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const skills = [
    {
      number: "01",
      name: "Flutter",
      category: "Mobile Architecture",
      summary: "Cross-platform mobile UI engineering, widget hierarchies, state management, and responsive layouts."
    },
    {
      number: "02",
      name: "Dart",
      category: "Core Language",
      summary: "Object-oriented programming, asynchronous streams, sound typing, and robust application logic."
    },
    {
      number: "03",
      name: "App Development",
      category: "Software Engineering",
      summary: "End-to-end client applications, component design systems, REST API integration, and clean UX."
    },
    {
      number: "04",
      name: "Cloud Computing",
      category: "Distributed Runtimes",
      summary: "Serverless edge deployments (Cloudflare Workers, Vercel), decoupled backends, and cloud fundamentals."
    }
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#F2F6F3] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-12 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span>02 // SKILLS</span>
        </div>

        {/* Section Headline */}
        <div className="mb-16 max-w-3xl">
          <h2 className="headline-editorial text-[#22031F]">
            Core technical <br />
            <span className="italic text-[#87B38D]">foundations.</span>
          </h2>
          <p className="mt-4 text-[#432B3E] font-sans text-base">
            Grounded in active coursework at SRMU, engineering projects, and self-directed exploration.
          </p>
        </div>

        {/* Minimal 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className="p-8 bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] transition-colors rounded-sm space-y-4 shadow-sm group"
            >
              <div className="flex justify-between items-baseline font-mono text-xs">
                <span className="text-[#87B38D] font-bold">{skill.number}</span>
                <span className="text-[#6E5668] uppercase tracking-wider">{skill.category}</span>
              </div>

              <h3 className="font-display text-4xl sm:text-5xl text-[#22031F] group-hover:text-[#87B38D] transition-colors font-bold tracking-tight">
                {skill.name}
              </h3>

              <p className="text-sm text-[#432B3E] leading-relaxed font-sans pt-2 border-t border-[rgba(34,3,31,0.06)]">
                {skill.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
