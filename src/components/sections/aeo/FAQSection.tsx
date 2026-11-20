import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, FAQItem } from '../../../data/faq';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#FAF8F5] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-12 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span>AEO // QUESTIONS & ANSWERS</span>
        </div>

        <div className="mb-14">
          <h2 className="headline-editorial text-[#22031F]">
            Direct information <br />
            <span className="italic text-[#87B38D]">about Sara's work.</span>
          </h2>
          <p className="mt-4 text-[#432B3E] font-sans text-base">
            Structured information regarding education, skills, and projects.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] rounded-sm transition-colors overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  data-cursor="TOGGLE"
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-xs text-[#87B38D] font-bold">0{idx + 1}</span>
                    <span className="font-display text-lg sm:text-xl font-semibold text-[#22031F]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6E5668] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#87B38D]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-[rgba(34,3,31,0.06)] font-sans text-sm sm:text-base text-[#432B3E] leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
