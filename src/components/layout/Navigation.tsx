import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AudioAmbience } from './AudioAmbience';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[rgba(34,3,31,0.08)] shadow-[0_2px_12px_rgba(34,3,31,0.03)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            data-cursor="TOP"
            className="group flex items-baseline space-x-2"
            aria-label="Return to top"
          >
            <span className="font-serif italic text-xl tracking-tight text-[#22031F] group-hover:text-[#87B38D] transition-colors">
              Sara Ali Ahmad
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#87B38D]"></span>
          </a>

          {/* Right Action: Sound & Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <AudioAmbience />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-widest uppercase">
              {navLinks.slice(0, 5).map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  data-cursor="GO"
                  className={`transition-colors font-medium ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#87B38D] font-bold border-b border-[#87B38D] pb-0.5'
                      : 'text-[#432B3E] hover:text-[#22031F]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleLinkClick('#contact')}
                data-cursor="CONTACT"
                className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-widest text-white bg-[#87B38D] hover:bg-[#73A37A] px-4 py-2 rounded-full transition-all uppercase font-semibold shadow-sm"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-cursor="MENU"
              className="md:hidden p-2 text-[#22031F] hover:text-[#87B38D] border border-[rgba(34,3,31,0.1)] rounded-full bg-white shadow-sm transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9985] bg-[#FAF8F5]/98 backdrop-blur-xl pt-28 px-8 pb-10 flex flex-col justify-between md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-baseline justify-between text-left py-2.5 border-b border-[rgba(34,3,31,0.06)] text-[#22031F] hover:text-[#87B38D] transition-colors"
                >
                  <span className="font-serif text-3xl">{link.label}</span>
                  <span className="font-mono text-xs text-[#6E5668]">0{idx + 1}</span>
                </button>
              ))}
            </nav>

            <div className="pt-6 border-t border-[rgba(34,3,31,0.08)] text-xs font-mono text-[#432B3E] space-y-1">
              <div>saraaliahmad212121@gmail.com</div>
              <div className="text-[10px] text-[#6E5668]">Lucknow, Uttar Pradesh, India</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
