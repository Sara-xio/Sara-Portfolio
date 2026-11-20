export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string | null;
  image: string;
  statsLabel: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "vyapaarpilot",
    number: "01",
    title: "VyapaarPilot",
    category: "Mobile & Web Commerce Engine",
    tagline: "Flutter-Powered Micro-Enterprise Commerce & Business Pilot",
    description: "A responsive commerce and business pilot interface developed in Flutter and Dart, deployed on Cloudflare Workers edge architecture. Engineered for high-throughput mobile retail workflows, fast cross-platform rendering, and low-latency interaction for micro-merchants.",
    techStack: ["Flutter", "Dart", "Cloudflare Workers", "WebAssembly", "State Management", "Responsive UI"],
    liveUrl: "https://vyapaarpilot.sundram-devv.workers.dev/",
    repoUrl: null,
    image: "/projects/vyapaarpilot.png",
    statsLabel: "Edge-Deployed Flutter Engine",
    year: "2025–2026",
    role: "Flutter & Frontend Development"
  },
  {
    id: "merchantmind",
    number: "02",
    title: "MerchantMind",
    category: "Fintech Intelligence & Decision OS",
    tagline: "Autonomous Working Capital OS for Bharat MSMEs",
    description: "Srijan 2k26 hackathon showcase platform that transforms merchant payment telemetry, banking feeds, customer Khata, and settlement ledgers into deterministic working capital intelligence. Detects liquidity cliffs, provides verifiable evidence, and executes 1-click recovery actions with an integrated AI Sahayak.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Financial Telemetry", "Decision Rules", "Data Visualization"],
    liveUrl: "https://merchantmind-srijan2k26.vercel.app/",
    repoUrl: null,
    image: "/projects/merchantmind.png",
    statsLabel: "9-Stage Telemetry Intelligence",
    year: "2026",
    role: "Frontend Engineering & UI Systems"
  },
  {
    id: "retailintelligencia",
    number: "03",
    title: "Retail Intelligencia",
    category: "Edge AI & Computer Vision",
    tagline: "Edge AI & Real-Time Computer Vision for Smarter Retail",
    description: "A computer-vision-driven retail intelligence system designed to minimize repetitive manual operations, eliminate checkout friction, and transform real-time visual feeds into operational insights. Features multi-class edge detection (product, cart, shelf), shopper footfall heatmaps, and automated stock alerts.",
    techStack: ["Edge AI", "Computer Vision", "TypeScript", "Canvas Stream", "Tailwind CSS", "Real-Time Inference"],
    liveUrl: "https://retailintelligencia.vercel.app/",
    repoUrl: null,
    image: "/projects/retailintelligencia.png",
    statsLabel: "Multi-Class Detection Pipeline",
    year: "2025–2026",
    role: "Interactive Client Architecture"
  },
  {
    id: "sehatvaani",
    number: "04",
    title: "SehatVaani",
    category: "Healthcare AI & Clinical Informatics",
    tagline: "AI-Powered Pre-Consultation Clinical History Engine",
    description: "An intelligent healthcare pre-consultation portal that captures patient narratives in their native language through voice and touch, structuring conversational input into physician-ready clinical summaries with chief complaints, HPI, and red flag detection prior to doctor appointments.",
    techStack: ["Multilingual Voice AI", "Clinical NLP", "React", "TypeScript", "Accessible UX", "Tailwind CSS"],
    liveUrl: "https://sehatvaani.vercel.app/",
    repoUrl: null,
    image: "/projects/sehatvaani.png",
    statsLabel: "Multilingual Clinical Structuring",
    year: "2025–2026",
    role: "Frontend Development & UX"
  }
];
