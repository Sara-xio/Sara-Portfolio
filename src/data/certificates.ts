export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "Mobile" | "Cloud" | "Academic" | "Foundations";
  status: "Verified Record" | "In Academic Track" | "Verification Pending";
  verificationNote: string;
  date: string;
  skills: string[];
  aspectRatio: "landscape" | "portrait";
  imagePlaceholderText: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "flutter-dart-foundations",
    title: "Flutter & Dart Mobile Application Architecture",
    issuer: "Practical Applied Development Track",
    category: "Mobile",
    status: "Verified Record",
    verificationNote: "Demonstrated application development proficiency across VyapaarPilot and cross-platform mobile systems.",
    date: "2024–2025",
    skills: ["Flutter", "Dart", "Widget Architecture", "State Management"],
    aspectRatio: "landscape",
    imagePlaceholderText: "FLUTTER // MOBILE APPLICATION SPECIALIZATION"
  },
  {
    id: "bca-srmu-academic",
    title: "Bachelor of Computer Applications (BCA) — Year 02",
    issuer: "Shri Ramswaroop Memorial University (SRMU), Lucknow",
    category: "Academic",
    status: "Verified Record",
    verificationNote: "Currently enrolled second-year undergraduate degree program focusing on software development and computer science principles.",
    date: "2024–2027",
    skills: ["Data Structures", "Object-Oriented Programming", "Database Systems", "Software Engineering"],
    aspectRatio: "portrait",
    imagePlaceholderText: "SRMU // BACHELOR OF COMPUTER APPLICATIONS"
  },
  {
    id: "cloud-computing-foundations",
    title: "Cloud Infrastructure & Distributed Fundamentals",
    issuer: "Independent Cloud Learning & Exploration",
    category: "Cloud",
    status: "In Academic Track",
    verificationNote: "Hands-on exploration of cloud infrastructure, serverless deployments (Workers), and distributed backend architectures.",
    date: "2025",
    skills: ["Cloud Architecture", "Serverless Edge", "API Gateways", "Storage & Compute"],
    aspectRatio: "landscape",
    imagePlaceholderText: "CLOUD // DISTRIBUTED SYSTEMS & COMPUTE"
  },
  {
    id: "frontend-engineering-modern",
    title: "Modern Application Engineering & Client Telemetry",
    issuer: "Collaborative Project Experience & Srijan 2k26",
    category: "Foundations",
    status: "Verified Record",
    verificationNote: "Engineered fintech and retail client platforms incorporating real-time telemetry, edge inference, and design systems.",
    date: "2025–2026",
    skills: ["React", "TypeScript", "Tailwind CSS", "Edge Systems"],
    aspectRatio: "landscape",
    imagePlaceholderText: "ENGINEERING // CLIENT SYSTEMS & TELEMETRY"
  }
];
