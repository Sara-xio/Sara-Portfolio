import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { Certificate } from '../../data/certificates';

interface LightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function Lightbox({ certificate, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100000] bg-[#22031F]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-12"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-white border border-[rgba(34,3,31,0.1)] p-6 sm:p-8 md:p-10 rounded-sm shadow-2xl flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            data-cursor="CLOSE"
            className="absolute top-4 right-4 p-2 text-[#6E5668] hover:text-[#22031F] border border-[rgba(34,3,31,0.1)] rounded-full hover:border-[#87B38D] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate visual preview / placeholder display */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F2F6F3] border border-[rgba(34,3,31,0.08)] p-6 rounded-sm min-h-[250px] text-center relative overflow-hidden">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-full bg-[#87B38D]/15 text-[#87B38D] border border-[#87B38D]/30">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="font-mono text-xs tracking-widest text-[#22031F] uppercase font-semibold">
                {certificate.imagePlaceholderText}
              </div>
              <div className="font-mono text-[10px] text-[#6E5668] tracking-wider">
                RECORD ID: SAA-{certificate.id.toUpperCase()}
              </div>
              <div className="pt-2 text-[11px] text-[#6E5668] italic border-t border-[rgba(34,3,31,0.08)]">
                Authentic academic & development asset
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 font-mono text-[11px] tracking-widest text-[#87B38D] mb-2 uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
                <span>{certificate.status}</span>
                <span>&bull;</span>
                <span className="text-[#6E5668]">{certificate.date}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#22031F] leading-tight mb-2">
                {certificate.title}
              </h3>

              <div className="font-display text-sm text-[#432B3E] mb-3">
                Issuing Context: <span className="text-[#22031F] font-semibold">{certificate.issuer}</span>
              </div>

              <p className="text-sm text-[#432B3E] leading-relaxed mb-5 font-sans">
                {certificate.verificationNote}
              </p>

              <div>
                <span className="mono-tag text-[#6E5668] block mb-2">Core Competencies:</span>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs font-mono py-1 px-2.5 bg-[#F2F6F3] border border-[rgba(34,3,31,0.08)] text-[#22031F] rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(34,3,31,0.08)] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#6E5668] tracking-widest uppercase">
                {certificate.category}
              </span>
              <a
                href="https://www.linkedin.com/in/sara-ali-ahmad-0971833a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 font-mono text-xs text-[#87B38D] hover:underline font-semibold"
              >
                <span>Verify on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
