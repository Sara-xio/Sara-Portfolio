import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FAF8F5] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-12 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span>01 // ABOUT</span>
        </div>

        {/* Editorial 2-Column Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="headline-editorial text-[#22031F]">
              Engineering with <br />
              <span className="italic text-[#87B38D]">purpose and curiosity.</span>
            </h2>

            <div className="space-y-5 text-[#432B3E] text-base sm:text-lg leading-relaxed font-sans">
              <p>
                I am a second-year Bachelor of Computer Applications (BCA) student at{' '}
                <strong className="text-[#22031F] font-semibold">Shri Ramswaroop Memorial University (SRMU)</strong> in Lucknow, India.
                My focus centers on developing practical software solutions that bridge creative design with reliable performance.
              </p>
              <p>
                My primary technical discipline is <span className="text-[#22031F] font-semibold">cross-platform mobile development with Flutter & Dart</span>,
                along with an active exploration of <span className="text-[#22031F] font-semibold">cloud computing paradigms and edge worker infrastructure</span>.
                I approach software with craftsmanship, intentionality, and a focus on building systems that work cleanly.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Text Details */}
          <div className="lg:col-span-5 pt-2 space-y-8">
            <div className="border-t border-[rgba(34,3,31,0.1)] pt-4 space-y-6 bg-white p-6 sm:p-8 rounded-sm border border-[rgba(34,3,31,0.06)] shadow-sm">
              <div>
                <span className="mono-tag text-[#6E5668] block mb-1">Education</span>
                <div className="text-base font-semibold text-[#22031F]">
                  Bachelor of Computer Applications (BCA)
                </div>
                <div className="text-xs text-[#6E5668] font-mono mt-0.5">
                  Second-Year Student &bull; 2024 — 2027
                </div>
              </div>

              <div>
                <span className="mono-tag text-[#6E5668] block mb-1">Institution</span>
                <div className="text-base font-semibold text-[#22031F]">
                  Shri Ramswaroop Memorial University (SRMU)
                </div>
                <div className="text-xs text-[#6E5668] font-mono mt-0.5">
                  Lucknow, Uttar Pradesh, India
                </div>
              </div>

              <div>
                <span className="mono-tag text-[#6E5668] block mb-1">Core Specialization</span>
                <div className="text-base font-semibold text-[#22031F]">
                  Mobile App Development & Cloud Runtimes
                </div>
                <div className="text-xs text-[#87B38D] font-mono mt-0.5 font-semibold">
                  Flutter &bull; Dart &bull; Cloudflare Workers &bull; Modern Web
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
