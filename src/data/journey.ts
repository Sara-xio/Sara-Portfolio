export interface JourneyMilestone {
  period: string;
  number: string;
  title: string;
  institutionOrContext: string;
  location: string;
  summary: string;
  highlights: string[];
  current: boolean;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "2024 — Present",
    number: "01",
    title: "Bachelor of Computer Applications (BCA) — Year 02",
    institutionOrContext: "Shri Ramswaroop Memorial University (SRMU)",
    location: "Lucknow, Uttar Pradesh, India",
    summary: "Deepening theoretical computing knowledge, object-oriented paradigms, database modeling, and algorithmic problem-solving while actively building real software outside the classroom.",
    highlights: [
      "Second-year undergraduate coursework in Computer Applications",
      "Focus on data structures, software engineering principles, and databases",
      "Collaborative technical learning and hackathon participation"
    ],
    current: true
  },
  {
    period: "2024 — Present",
    number: "02",
    title: "Deep Dive into Flutter & Dart Cross-Platform Engineering",
    institutionOrContext: "Self-Directed Technical Specialization",
    location: "Lucknow, India",
    summary: "Dedicated focus to mastering mobile app development using the Flutter framework and Dart language. Translating complex design mockups into smooth, responsive cross-platform applications.",
    highlights: [
      "Built and deployed the VyapaarPilot commerce interface to edge infrastructure",
      "Explored responsive canvas rendering and high-frequency interaction patterns",
      "Integrated REST APIs and modern state management"
    ],
    current: true
  },
  {
    period: "2025 — Present",
    number: "03",
    title: "Practical Exploration of Cloud Computing & Edge Runtimes",
    institutionOrContext: "Modern Architecture & Distributed Runtimes",
    location: "Lucknow, India",
    summary: "Expanding technical breadth beyond client interfaces into modern cloud computing paradigms, serverless compute, and edge runtime environments.",
    highlights: [
      "Hands-on serverless hosting via Cloudflare Workers and Vercel edge networks",
      "Examining distributed systems, micro-services, and cloud fundamentals",
      "Understanding low-latency API integration for mobile clients"
    ],
    current: true
  },
  {
    period: "2025 — 2026",
    number: "04",
    title: "Real-World Multi-Domain Application Development",
    institutionOrContext: "Fintech, Retail AI & Health Informatics",
    location: "Lucknow, India",
    summary: "Applied engineering skills to develop real-world solutions including MerchantMind (working capital OS for Bharat MSMEs), Retail Intelligencia (edge computer vision retail), and SehatVaani (multilingual healthcare pre-consultation).",
    highlights: [
      "Developed high-fidelity interfaces for complex domain problems",
      "Delivered live web and mobile experiences with verified accessibility",
      "Collaborated on hackathon showcases (Srijan 2k26)"
    ],
    current: false
  }
];
