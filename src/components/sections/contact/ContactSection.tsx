import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#F2F6F3] border-t border-[rgba(34,3,31,0.08)] px-6 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#87B38D] uppercase mb-12 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#87B38D]"></span>
          <span>06 // CONTACT</span>
        </div>

        {/* Main CTA */}
        <div className="my-10 space-y-6 max-w-4xl">
          <div className="flex items-center space-x-3">
            <span className="h-[2px] w-10 bg-[#87B38D]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#87B38D] font-bold">
              HAVE AN IDEA?
            </span>
          </div>

          <h2 className="headline-giant text-[#22031F] font-display font-bold uppercase select-none">
            LET'S BUILD <br />
            <span className="font-serif italic font-light text-[#87B38D]">SOMETHING.</span>
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-[#432B3E] font-sans">
            Open to discussions around Flutter mobile engineering, cloud computing, and collaborative projects.
          </p>
        </div>

        {/* Minimal 3-Card Contact Grid in White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
          {/* Email */}
          <div className="p-7 bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] rounded-sm transition-colors flex flex-col justify-between space-y-6 group shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6E5668] mb-3">
                <span>EMAIL</span>
                <Mail className="w-4 h-4 text-[#87B38D]" />
              </div>
              <div className="font-mono text-sm sm:text-base text-[#22031F] break-all group-hover:text-[#87B38D] transition-colors font-medium">
                saraaliahmad212121@gmail.com
              </div>
            </div>
            <a
              href="mailto:saraaliahmad212121@gmail.com"
              data-cursor="EMAIL"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#87B38D] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#73A37A] transition-all shadow-xs"
            >
              <span>Send an Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-7 bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] rounded-sm transition-colors flex flex-col justify-between space-y-6 group shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6E5668] mb-3">
                <span>LINKEDIN</span>
                <Linkedin className="w-4 h-4 text-[#87B38D]" />
              </div>
              <div className="font-display text-lg text-[#22031F] group-hover:text-[#87B38D] transition-colors font-semibold">
                sara-ali-ahmad
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/sara-ali-ahmad-0971833a7/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CONNECT"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#FAF8F5] border border-[rgba(34,3,31,0.12)] text-[#22031F] font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#87B38D] hover:text-[#87B38D] transition-all"
            >
              <span>Connect</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* GitHub & Commudle */}
          <div className="p-7 bg-white border border-[rgba(34,3,31,0.08)] hover:border-[#87B38D] rounded-sm transition-colors flex flex-col justify-between space-y-6 group shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6E5668] mb-3">
                <span>CODE & COMMUNITY</span>
                <Github className="w-4 h-4 text-[#87B38D]" />
              </div>
              <div className="font-mono text-sm text-[#22031F] group-hover:text-[#87B38D] transition-colors font-medium">
                Sara-xio &bull; Commudle
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="https://github.com/Sara-xio"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="inline-flex items-center justify-between w-full px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[rgba(34,3,31,0.12)] text-[#22031F] font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#87B38D] hover:text-[#87B38D] transition-all"
              >
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.commudle.com/users/becf081ddabe4515a6d5ee6b"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="COMMUDLE"
                className="inline-flex items-center justify-center w-full py-1 text-xs font-mono text-[#432B3E] hover:text-[#87B38D] transition-colors"
              >
                <span>Commudle &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="pt-12 border-t border-[rgba(34,3,31,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E5668]">
          <div className="text-[#22031F] font-semibold font-serif italic text-base">
            Sara Ali Ahmad &bull; <span className="font-sans text-xs text-[#432B3E] font-normal not-italic">BCA Student, SRMU Lucknow</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href="https://www.linkedin.com/in/sara-ali-ahmad-0971833a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#87B38D] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/Sara-xio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#87B38D] transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.commudle.com/users/becf081ddabe4515a6d5ee6b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#87B38D] transition-colors"
            >
              COMMUDLE
            </a>
          </div>

          <div className="text-[11px] text-[#6E5668]">
            &copy; {currentYear} &bull; ALL RIGHTS RESERVED
          </div>
        </footer>
      </div>
    </section>
  );
}
