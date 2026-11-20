import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLenis } from './hooks/useLenis';
import { getStructuredData } from './utils/seo';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navigation } from './components/layout/Navigation';
import { PresentationSection } from './components/sections/presentation/PresentationSection';
import { AboutSection } from './components/sections/about/AboutSection';
import { SkillsSection } from './components/sections/skills/SkillsSection';
import { ProjectsSection } from './components/sections/projects/ProjectsSection';
import { CertificatesSection } from './components/sections/certificates/CertificatesSection';
import { JourneySection } from './components/sections/journey/JourneySection';
import { ContactSection } from './components/sections/contact/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  useLenis(!isLoading);

  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'journey', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const schemas = getStructuredData();

  return (
    <>
      <Helmet>
        <title>Sara Ali Ahmad — Creative Developer, Flutter & Cloud Explorer</title>
        <meta
          name="description"
          content="Explore the personal portfolio of Sara Ali Ahmad, a BCA student at SRMU, Lucknow, learning Flutter application development and cloud computing. Discover her projects, skills and verified records."
        />
        <link rel="canonical" href="https://sara-ali-ahmad.vercel.app/" />
        {schemas.map((schema, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* Subtle organic film grain texture */}
      <div className="film-grain" />

      {/* Custom trailing interactive cursor */}
      <CustomCursor />

      {/* Minimal Intro Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Light Botanical Editorial Experience */}
      <div className={`relative min-h-screen bg-[#FAF8F5] text-[#22031F] ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navigation activeSection={activeSection} />

        <main>
          {/* 1. Home / Hero */}
          <PresentationSection />

          {/* 2. About */}
          <AboutSection />

          {/* 3. Skills */}
          <SkillsSection />

          {/* 4. Projects */}
          <ProjectsSection />

          {/* 5. Certificates */}
          <CertificatesSection />

          {/* 6. Journey */}
          <JourneySection />

          {/* 7. Contact */}
          <ContactSection />
        </main>
      </div>
    </>
  );
}
