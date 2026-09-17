import type { Credential, SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    group: "Finance",
    items: [
      "3-statement modelling",
      "FCFF DCF",
      "WACC / CAPM",
      "Trading comparables",
      "LBO modelling",
      "VC cap tables and returns",
      "Sensitivity analysis",
      "Ratio and DuPont analysis",
    ],
  },
  {
    group: "Transactions",
    items: [
      "Sell-side and buy-side materials",
      "IPO analysis",
      "Valuation football fields",
      "Commercial due diligence",
      "Insolvency and restructuring (IBC)",
    ],
  },
  {
    group: "Strategy & research",
    items: [
      "Market sizing",
      "Porter's Five Forces",
      "PESTLE and SWOT",
      "Business Model Canvas",
      "Go-to-market and pricing",
      "Stakeholder interviews",
      "Mixed-methods research",
    ],
  },
  {
    group: "Data & tools",
    items: ["Excel (Power Query, dynamic arrays)", "Power BI", "Tableau", "SQL", "Python (Jupyter)", "Google Sheets", "Screener.in"],
  },
  {
    group: "Generative AI",
    items: [
      "Claude, ChatGPT, NotebookLM",
      "LLM response evaluation",
      "AI output verification",
      "Document-generation pipelines",
      "Programmatic QA of outputs",
      "Workflow automation (Jasper, Zapier)",
    ],
  },
  {
    group: "Legal & business",
    items: [
      "Contract drafting",
      "Trademark prosecution",
      "Title due diligence",
      "Arbitration law",
      "M&A, PE and VC law",
      "MahaRERA compliance",
    ],
  },
];

export const credentials: Credential[] = [
  { type: "recognition", name: "Forward Scholar", issuer: "McKinsey & Company", year: "2025" },
  {
    type: "publication",
    name: "VARC Workbook",
    issuer: "Author, published on Amazon",
    year: "2024",
    href: "https://www.amazon.in/VARC-Workbook-Based-Latest-Pattern/dp/B0CZXS2H3M",
  },
  { type: "certification", name: "Financial Modeling & Valuation Analyst (FMVA®)", issuer: "Corporate Finance Institute", detail: "87%" },
  { type: "certification", name: "Capital Markets & Securities Analyst (CMSA®)", issuer: "Corporate Finance Institute", detail: "90%" },
  { type: "certification", name: "Business Intelligence & Data Analyst (BIDA®)", issuer: "Corporate Finance Institute", detail: "88%" },
  { type: "certification", name: "Commercial Banking & Credit Analyst (CBCA®)", issuer: "Corporate Finance Institute", detail: "79%" },
  { type: "diploma", name: "Applied Finance (Level 6, LIBF-accredited)", issuer: "Amplify Trading", year: "2021", detail: "Distinction" },
  { type: "diploma", name: "M&A, Institutional Finance and Investment Laws (PE & VC)", issuer: "Online diploma", detail: "A+" },
  { type: "certification", name: "Data Analytics Professional Certificate", issuer: "Google (Coursera)" },
  { type: "certification", name: "Marketing Analytics Professional Certificate", issuer: "Meta (Coursera)" },
  {
    type: "academic",
    name: "Top 5% of batch in seven courses",
    issuer: "IIM Indore",
    detail:
      "Marketing Research, Legal Aspects of Business, Strategic Management II, Information Systems for Managers, Managerial Communication, Critical Reading & Analytical Writing, Marketing Management I",
  },
  { type: "competition", name: "3rd place, business case competition", issuer: "IMS India × MDI Murshidabad", year: "2024" },
  { type: "competition", name: "Top Individual and Campus Finalist, Amazon ACE Challenge", issuer: "Amazon", year: "2024" },
  { type: "competition", name: "Finalist from 1,707 participants, HR Analytics case event", issuer: "IIM Kashipur", year: "2024" },
];

export const interests = [
  { name: "Formula 1 and Formula E", note: "The business of racing as much as the racing" },
  { name: "Badminton", note: "Played for St Cuthbert's Society at Durham" },
  { name: "Elocution", note: "President of the school Model UN Association" },
  { name: "Workout soundtracks", note: "Customising music for training sessions" },
];

/** Thought-leadership domains the Term of the Week series writes about. */
export const focusDomains = ["Islamic Finance", "Maritime", "Motorsport", "Corporate", "Infrastructure", "Finance"];
