export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    verifiedUse: string;
    levelDescription: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile",
    number: "01",
    name: "Mobile Application Development",
    description: "Core specialization in cross-platform mobile architecture with a focus on performant UI rendering, native reactivity, and fluid interaction models.",
    skills: [
      {
        name: "Flutter",
        focus: "Widget Trees, State Machines, Animation Framework",
        verifiedUse: "VyapaarPilot responsive edge client & mobile commerce layouts",
        levelDescription: "Active Focus & Production Architecture"
      },
      {
        name: "Dart",
        focus: "Asynchronous Streams, OOP, Strong Typing, Memory Models",
        verifiedUse: "Cross-platform client logic, clean state management",
        levelDescription: "Core Language Specialization"
      }
    ]
  },
  {
    id: "cloud",
    number: "02",
    name: "Cloud Computing & Distributed Systems",
    description: "Investigating distributed infrastructures, edge worker runtimes, API aggregation, and low-latency client delivery.",
    skills: [
      {
        name: "Cloud Fundamentals",
        focus: "Edge Runtimes, Serverless Functions, DNS & CDN Caching",
        verifiedUse: "Cloudflare Workers edge deployment & Vercel serverless integration",
        levelDescription: "Applied Architectural Knowledge"
      },
      {
        name: "Modern App Architecture",
        focus: "Decoupled Client-Server Patterns, REST APIs, Edge Compute",
        verifiedUse: "Micro-service integration across VyapaarPilot and MerchantMind",
        levelDescription: "Active Exploration & Implementation"
      }
    ]
  },
  {
    id: "engineering",
    number: "03",
    name: "Software Development & Web Foundations",
    description: "Grounded engineering practices spanning frontend component systems, developer tooling, and version control.",
    skills: [
      {
        name: "Programming Fundamentals",
        focus: "Data Structures, Algorithmic Thinking, Modular Design",
        verifiedUse: "Undergraduate curriculum at SRMU & real-world utility scripting",
        levelDescription: "Rigorous Academic Grounding"
      },
      {
        name: "Application Development",
        focus: "Component Systems, Responsive Layouts, Interactive State",
        verifiedUse: "Built interfaces for fintech, retail AI, and health tech",
        levelDescription: "Practical End-to-End Delivery"
      },
      {
        name: "Git & Version Control",
        focus: "Branch Workflows, Collaborative Repositories, GitHub CI",
        verifiedUse: "Public code repositories (Sara-xio) & project collaboration",
        levelDescription: "Essential Tooling"
      }
    ]
  }
];
