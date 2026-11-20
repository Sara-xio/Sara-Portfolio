import React from 'react';
import { motion } from 'framer-motion';
import { journeyMilestones, JourneyMilestone } from '../../../data/journey';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-[#FAF8F5] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-12 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span>05 // JOURNEY</span>
        </div>

        {/* Section Headline */}
        <div className="mb-16 max-w-3xl">
          <h2 className="headline-editorial text-[#22031F]">
            Educational path & <br />
            <span className="italic text-[#87B38D]">milestones.</span>
          </h2>
          <p className="mt-4 text-[#432B3E] font-sans text-base">
            Chronological overview of undergraduate studies at SRMU and ongoing technical progression.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative border-l border-[rgba(34,3,31,0.12)] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          {journeyMilestones.map((milestone: JourneyMilestone) => (
            <div key={milestone.number} className="relative group">
              {/* Timeline Marker Dot in Sage Green */}
              <div
                className={`absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center ${
                  milestone.current
                    ? 'border-[#87B38D] bg-white'
                    : 'border-[rgba(34,3,31,0.2)] bg-white'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    milestone.current ? 'bg-[#87B38D]' : 'bg-[#6E5668]/40'
                  }`}
                />
              </div>

              {/* Milestone Content Card */}
              <div className="bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] p-6 sm:p-8 rounded-sm transition-all duration-300 space-y-3.5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex items-center space-x-2 text-[#87B38D]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-semibold">{milestone.period}</span>
                    {milestone.current && (
                      <span className="text-[10px] px-2 py-0.5 bg-[#87B38D]/15 text-[#22031F] rounded-full border border-[#87B38D]/30 font-semibold">
                        CURRENT FOCUS
                      </span>
                    )}
                  </div>
                  <span className="text-[#6E5668]">PHASE {milestone.number}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#22031F] group-hover:text-[#87B38D] transition-colors">
                  {milestone.title}
                </h3>

                <div className="flex items-center space-x-2 font-display text-sm text-[#432B3E]">
                  <span>{milestone.institutionOrContext}</span>
                  <span>&bull;</span>
                  <span className="inline-flex items-center space-x-1 text-xs text-[#6E5668]">
                    <MapPin className="w-3 h-3 text-[#87B38D]" />
                    <span>{milestone.location}</span>
                  </span>
                </div>

                <p className="text-sm text-[#432B3E] leading-relaxed font-sans">
                  {milestone.summary}
                </p>

                <div className="pt-3 border-t border-[rgba(34,3,31,0.06)] space-y-1.5">
                  {milestone.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start space-x-2 text-xs font-mono text-[#22031F]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#87B38D] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
