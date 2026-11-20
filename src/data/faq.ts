export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Who is Sara Ali Ahmad?",
    answer: "Sara Ali Ahmad is a creative developer and second-year Bachelor of Computer Applications (BCA) student based in Lucknow, Uttar Pradesh, India. She is actively specializing in Flutter and Dart mobile application development, cloud computing paradigms, and modern software engineering.",
    category: "Identity"
  },
  {
    question: "What does Sara Ali Ahmad study and where?",
    answer: "Sara is currently pursuing her Bachelor of Computer Applications (BCA) as a second-year undergraduate student at Shri Ramswaroop Memorial University (SRMU) in Lucknow, Uttar Pradesh, India.",
    category: "Education"
  },
  {
    question: "Which technologies and frameworks is Sara learning and using?",
    answer: "Her core technical focus is Mobile Application Development using Flutter and Dart, alongside Cloud Computing fundamentals (serverless edge runtimes such as Cloudflare Workers), web development with modern React and TypeScript, and version control via Git and GitHub.",
    category: "Technical Stack"
  },
  {
    question: "What projects has Sara Ali Ahmad built?",
    answer: "Sara has engineered four key projects: VyapaarPilot (a responsive Flutter mobile/web commerce platform deployed on Cloudflare Workers), MerchantMind (an autonomous working capital OS for Bharat MSMEs presented at Srijan 2k26), Retail Intelligencia (a smart retail platform using Edge AI and computer vision), and SehatVaani (an AI-driven multilingual pre-consultation healthcare portal).",
    category: "Projects"
  },
  {
    question: "Where is Sara Ali Ahmad based?",
    answer: "Sara is based in Lucknow, Uttar Pradesh, India, with cultural roots in Patna, Bihar.",
    category: "Location"
  },
  {
    question: "How can someone contact Sara Ali Ahmad?",
    answer: "You can reach Sara directly by email at saraaliahmad212121@gmail.com, connect with her on LinkedIn (linkedin.com/in/sara-ali-ahmad-0971833a7), review her code on GitHub (github.com/Sara-xio), or find her on Commudle (commudle.com/users/becf081ddabe4515a6d5ee6b).",
    category: "Contact"
  }
];
