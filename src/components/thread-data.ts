import type { Thumb } from "@/content/types";

export interface ThreadNode {
  id: string;
  step: string;
  example: string;
  href: string;
  thumb?: Thumb;
  question: string;
  tools: string[];
}

/** The analytical thread: one method applied to ten kinds of material. */
export const threadNodes: ThreadNode[] = [
  {
    id: "er",
    step: "Equity research",
    example: "Apple",
    href: "/work/apple-equity-research",
    thumb: { id: "apple-er", alt: "", orientation: "portrait" },
    question: "What is the company worth — and why might the market disagree?",
    tools: ["Business analysis", "DCF", "Comps", "DuPont"],
  },
  {
    id: "model",
    step: "Financial model",
    example: "Apple, 8 tabs",
    href: "/work/apple-equity-research",
    thumb: { id: "apple-model", alt: "", orientation: "landscape" },
    question: "Do the three statements tie, and which assumptions move value most?",
    tools: ["3-statement links", "Schedules", "Sensitivity grid"],
  },
  {
    id: "ipo",
    step: "IPO note",
    example: "Swiggy",
    href: "/work?item=swiggy-ipo-note",
    thumb: { id: "swiggy-ipo", alt: "", orientation: "landscape" },
    question: "What is being sold, at what price, and who wants it?",
    tools: ["Issue structure", "Subscription data", "Peer set"],
  },
  {
    id: "pitch",
    step: "M&A pitchbook",
    example: "Saudi Aramco",
    href: "/work?item=saudi-aramco-power-divestment",
    thumb: { id: "aramco", alt: "", orientation: "landscape" },
    question: "Should the client run a sale now, how, and for how much?",
    tools: ["Precedents", "Football field", "Process design"],
  },
  {
    id: "sector",
    step: "Sector primer",
    example: "Global banking",
    href: "/work/sectorscope-global-banking",
    thumb: { id: "sectorscope-banking", alt: "", orientation: "landscape" },
    question: "How does this industry make money, and where is value moving?",
    tools: ["PESTLE", "Five Forces", "TAM/SAM/SOM"],
  },
  {
    id: "macro",
    step: "Macro snapshot",
    example: "China, June 2026",
    href: "/work/ecospective-china-june-2026",
    thumb: { id: "ecospective-china", alt: "", orientation: "portrait" },
    question: "What did this month's data say about the economy?",
    tools: ["Growth", "Prices", "Trade", "Policy"],
  },
  {
    id: "legal",
    step: "Legal analysis",
    example: "Balasamy v ISG Novasoft",
    href: "/work/gayatri-balasamy-v-isg-novasoft",
    thumb: { id: "balasamy", alt: "", orientation: "portrait" },
    question: "What did the court decide, and what changes for parties now?",
    tools: ["Facts", "Ratio", "Dissent", "Precedent"],
  },
  {
    id: "restructuring",
    step: "Restructuring",
    example: "Byju's",
    href: "/work/workout-wire-byjus",
    thumb: { id: "workout-wire-byjus", alt: "", orientation: "portrait" },
    question: "Who is owed what, and what are they likely to recover?",
    tools: ["Creditor stack", "IBC process", "Precedent"],
  },
  {
    id: "brand",
    step: "Brand case",
    example: "American Express",
    href: "/work/american-express-case-study",
    thumb: { id: "amex", alt: "", orientation: "portrait" },
    question: "What strategic choice made this brand, and what did it cost?",
    tools: ["Origin", "Strategy", "Execution", "Results"],
  },
  {
    id: "genai",
    step: "GenAI experiment",
    example: "The production pipeline",
    href: "/lab",
    question: "Can the format itself be built so every edition is consistent and checked?",
    tools: ["Fixed templates", "Automated QA", "Human verification"],
  },
];
