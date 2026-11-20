import { projects } from '../data/projects';
import { faqs } from '../data/faq';

export function getStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sara-ali-ahmad.vercel.app/#person",
    "name": "Sara Ali Ahmad",
    "alternateName": ["Sara Ali", "Sara", "sara-xio"],
    "jobTitle": "Creative Developer & Mobile App Engineer",
    "description": "Second-year BCA student at Shri Ramswaroop Memorial University (SRMU), Lucknow, specializing in Flutter mobile application development, cloud computing architectures, and creative web engineering.",
    "email": "saraaliahmad212121@gmail.com",
    "url": "https://sara-ali-ahmad.vercel.app/",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Shri Ramswaroop Memorial University (SRMU)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/sara-ali-ahmad-0971833a7/",
      "https://github.com/Sara-xio",
      "https://www.commudle.com/users/becf081ddabe4515a6d5ee6b"
    ],
    "knowsAbout": [
      "Flutter",
      "Dart",
      "Cloud Computing",
      "Mobile Application Development",
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Software Engineering"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sara-ali-ahmad.vercel.app/#website",
    "url": "https://sara-ali-ahmad.vercel.app/",
    "name": "Sara Ali Ahmad — Experimental Portfolio",
    "description": "An experimental digital portfolio introducing Sara Ali Ahmad through typography, motion, technology, and verified projects.",
    "publisher": {
      "@id": "https://sara-ali-ahmad.vercel.app/#person"
    },
    "inLanguage": "en"
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://sara-ali-ahmad.vercel.app/#profilepage",
    "url": "https://sara-ali-ahmad.vercel.app/",
    "name": "Sara Ali Ahmad Profile & Works",
    "mainEntity": {
      "@id": "https://sara-ali-ahmad.vercel.app/#person"
    }
  };

  const creativeWorkSchemas = projects.map((p) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": p.title,
    "headline": p.tagline,
    "description": p.description,
    "creator": {
      "@id": "https://sara-ali-ahmad.vercel.app/#person"
    },
    "url": p.liveUrl,
    "keywords": p.techStack.join(", "),
    "dateCreated": p.year
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return [personSchema, websiteSchema, profilePageSchema, ...creativeWorkSchemas, faqSchema];
}
