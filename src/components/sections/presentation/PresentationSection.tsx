import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { KineticSculpture } from '../../three/KineticSculpture';
import { CanvasFallback } from '../../three/CanvasFallback';
import { MagneticButton } from '../../ui/MagneticButton';

export function PresentationSection() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#FAF8F5] overflow-hidden flex flex-col justify-between pt-28 pb-10 sm:pb-14 px-6 sm:px-8 md:px-14"
    >
      {/* Background 3D Canvas / Fallback */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        {hasWebGL ? <KineticSculpture /> : <CanvasFallback />}
      </div>

      {/* Top Identity Tag */}
      <div className="relative z-10 flex justify-between items-center text-xs font-mono tracking-widest text-[#6E5668] border-b border-[rgba(34,3,31,0.08)] pb-4">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span className="text-[#22031F] font-semibold">SARA ALI AHMAD</span>
          <span className="hidden sm:inline text-[#6E5668]/50">&bull;</span>
          <span className="hidden sm:inline text-[#432B3E]">BCA &bull; SRMU LUCKNOW</span>
        </div>
        <div className="text-[11px] font-mono text-[#87B38D] font-semibold">
          26.8467° N, 80.9462° E
        </div>
      </div>

      {/* Centerpiece Hero Typography */}
      <div className="relative z-10 my-auto py-10 sm:py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-7"
        >
          {/* Subtle Sage Green botanical tag */}
          <div className="flex items-center space-x-3">
            <span className="h-[2px] w-10 bg-[#87B38D]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#87B38D] font-bold">
              CREATIVE DEVELOPER PORTFOLIO
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="select-none leading-[0.88] tracking-tighter">
            <span className="block font-display font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] text-[#22031F] uppercase">
              SARA ALI
            </span>
            <span className="block font-serif italic text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-[#87B38D] font-light">
              AHMAD
            </span>
          </h1>

          {/* Concise Statement */}
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#22031F] leading-snug max-w-3xl">
            "Building thoughtful digital experiences through <span className="text-[#87B38D] not-italic font-sans font-medium">code</span>, <span className="text-[#F2B7C6] not-italic font-sans font-medium">creativity</span> and curiosity."
          </p>

          <p className="text-sm sm:text-base text-[#432B3E] leading-relaxed max-w-2xl font-sans">
            Second-year BCA student at Shri Ramswaroop Memorial University (SRMU), Lucknow.
            Specializing in Flutter mobile application development and exploring modern cloud computing architectures.
          </p>

          {/* Direct Primary Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => scrollToSection('projects')}
              dataCursor="PROJECTS"
              className="px-7 py-3.5 rounded-full bg-[#87B38D] hover:bg-[#73A37A] text-white font-mono text-xs uppercase tracking-widest font-semibold space-x-2 shadow-md transition-all"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <button
              onClick={() => scrollToSection('contact')}
              data-cursor="CONTACT"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F2F6F3] border border-[rgba(34,3,31,0.12)] text-[#22031F] font-mono text-xs uppercase tracking-widest font-medium transition-all inline-flex items-center space-x-2 shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#87B38D]" />
              <span>CONTACT ME</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 flex justify-between items-center border-t border-[rgba(34,3,31,0.08)] pt-4 text-xs font-mono text-[#6E5668]">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#87B38D]"></span>
          <span className="text-[#432B3E]">FLUTTER &bull; DART &bull; CLOUD COMPUTING &bull; APP ARCHITECTURE</span>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          data-cursor="SCROLL"
          className="flex items-center space-x-2 text-[#87B38D] hover:text-[#22031F] transition-colors uppercase tracking-widest font-semibold"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
