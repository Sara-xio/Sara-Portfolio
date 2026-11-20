import React, { useRef, useState } from 'react';
import { certificates, Certificate } from '../../../data/certificates';
import { Lightbox } from '../../ui/Lightbox';
import { ChevronLeft, ChevronRight, ShieldCheck, Maximize2, ExternalLink } from 'lucide-react';

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="certificates"
      className="relative py-24 sm:py-32 bg-[#F2F6F3] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 border-b border-[rgba(34,3,31,0.08)] pb-6">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-2 sm:mb-0 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
            <span>04 // CERTIFICATES</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              data-cursor="PREV"
              className="p-2 rounded-full border border-[rgba(34,3,31,0.12)] hover:border-[#87B38D] bg-white text-[#22031F] hover:text-[#87B38D] transition-colors shadow-xs"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              data-cursor="NEXT"
              className="p-2 rounded-full border border-[rgba(34,3,31,0.12)] hover:border-[#87B38D] bg-white text-[#22031F] hover:text-[#87B38D] transition-colors shadow-xs"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14 max-w-3xl">
          <h2 className="headline-editorial text-[#22031F]">
            Academic milestones & <br />
            <span className="italic text-[#87B38D]">verified credentials.</span>
          </h2>
          <p className="mt-4 text-[#432B3E] font-sans text-base">
            Verified academic track at SRMU and specialized mobile engineering coursework.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={carouselRef}
          data-cursor="DRAG"
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none cursor-grab active:cursor-grabbing select-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {certificates.map((cert: Certificate) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              data-cursor="EXPAND"
              className="flex-shrink-0 w-[300px] sm:w-[360px] bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] rounded-sm p-6 flex flex-col justify-between transition-all duration-300 group shadow-sm"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div>
                <div
                  className={`w-full ${
                    cert.aspectRatio === 'portrait' ? 'h-60' : 'h-44'
                  } bg-[#FAF8F5] border border-[rgba(34,3,31,0.08)] rounded-sm p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#87B38D]/40 transition-colors mb-5`}
                >
                  <div className="flex justify-between items-start z-10">
                    <span className="font-mono text-[10px] text-[#6E5668] tracking-widest uppercase">
                      CREDENTIAL
                    </span>
                    <span className="p-1 rounded-full bg-white text-[#6E5668] group-hover:text-[#87B38D] transition-colors shadow-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="my-auto text-center space-y-2 z-10">
                    <ShieldCheck className="w-7 h-7 text-[#87B38D] mx-auto opacity-95 group-hover:scale-110 transition-transform" />
                    <div className="font-mono text-[11px] text-[#22031F] tracking-wider uppercase font-semibold">
                      {cert.imagePlaceholderText}
                    </div>
                  </div>

                  <div className="flex justify-between items-center z-10 pt-2 border-t border-[rgba(34,3,31,0.06)] text-[9px] font-mono text-[#6E5668]">
                    <span>{cert.status.toUpperCase()}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 font-mono text-[11px] tracking-widest text-[#87B38D] uppercase mb-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87B38D]"></span>
                  <span>{cert.status}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#22031F] group-hover:text-[#87B38D] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                <p className="font-sans text-xs text-[#432B3E] mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#6E5668] line-clamp-2 leading-relaxed font-sans">
                  {cert.verificationNote}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(34,3,31,0.06)] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#6E5668] uppercase">
                  {cert.category}
                </span>

                <span className="font-mono text-xs text-[#87B38D] group-hover:underline inline-flex items-center space-x-1 font-semibold">
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Source Citation */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-[#432B3E] border-t border-[rgba(34,3,31,0.08)] pt-4">
          <span className="text-[#6E5668]">VERIFIED ACADEMIC & DEVELOPMENT TRACK</span>
          <a
            href="https://www.linkedin.com/in/sara-ali-ahmad-0971833a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#87B38D] hover:underline inline-flex items-center space-x-1 font-semibold"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <Lightbox certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
