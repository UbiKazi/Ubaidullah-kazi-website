import type { Education, ExperienceEntry } from "./types";

/**
 * CAREER TIMELINE
 * showDates:false hides dates for entries whose dates are not yet confirmed — add start/end
 * and flip it to true when ready. Metrics are only those stated as outcomes in the source CV.
 */
export const eras = [
  { id: "current", label: "Now", title: "Research, AI evaluation and teaching" },
  { id: "finance-strategy", label: "2025–2026", title: "Finance and strategy in practice" },
  { id: "foundations", label: "2020–2023", title: "Legal and markets foundations" },
] as const;

export const experience: ExperienceEntry[] = [
  {
    id: "crisil",
    org: "CRISIL Ratings",
    role: "Sector Intelligence & Business Development",
    showDates: false,
    era: "current",
    domain: "Credit ratings",
    summary:
      "Sector intelligence and business development coverage across defence, data-centre infrastructure, microfinance and specialty chemicals.",
    highlights: [],
    methods: ["Sector research", "Industry coverage", "Business development"],
  },
  {
    id: "mentorship",
    org: "Live-project mentorship",
    role: "Mentor and curriculum designer",
    showDates: false,
    era: "current",
    domain: "Finance education",
    summary:
      "Designs and delivers weekend live-project programmes in equity research, private equity and venture capital, and AI-enabled financial analysis.",
    highlights: [
      "Built three curricula spanning 15 sessions, from Excel foundations to LBO capstones",
      "Authored the model answers participants' work is graded against — DCF, LBO and cap-table benchmarks",
      "Designed a recurring \"AI gets it wrong\" verification exercise for every AI-finance session",
    ],
    methods: ["Curriculum design", "Financial modelling", "Assessment rubrics", "AI verification"],
    link: { label: "See the programmes", href: "/mentorship" },
  },
  {
    id: "uber-ai",
    org: "Uber AI Solutions",
    role: "AI data labelling (freelance)",
    start: "2025-06",
    end: undefined,
    showDates: true,
    era: "current",
    domain: "LLM evaluation",
    summary:
      "Evaluates large-language-model outputs for groundedness, completeness and accuracy, and classifies text used to train them.",
    highlights: [
      "Evaluated 20+ LLM responses and classified 350+ text excerpts across 5 genres",
      "Adapted response-quality feedback to contracts, invoices and academic research papers",
      "Officially recognised for training an AI model to assess response quality",
    ],
    metrics: [
      { label: "LLM responses evaluated", value: "20+" },
      { label: "Excerpts classified", value: "350+" },
    ],
    methods: ["LLM evaluation", "Groundedness checks", "Text classification"],
    relatedWork: [],
    link: { label: "How this shapes the AI Lab", href: "/lab" },
  },
  {
    id: "iim-treasury",
    org: "IIM Indore — Student Affairs Council",
    role: "Deputy Treasurer (Fests & Events), Department of Treasury",
    location: "Indore",
    start: "2025-03",
    end: "2026-03",
    showDates: true,
    era: "finance-strategy",
    domain: "Institutional finance",
    summary:
      "Ran budgeting, disbursement and statutory audit for student-body entities, and rebuilt the council's rules and payment processes.",
    highlights: [
      "Cut the council fee from ₹5,950 to ₹5,550 per student by finding new revenue sources, easing student burden by ₹2.4 lakh",
      "Budgeted, evaluated and audited 35+ entities handling ₹5 Cr",
      "Reviewed 300+ transactions for TDS, GST and institute-policy compliance",
      "Reduced payment processing from 15 minutes to 1 through automation, saving 4,500+ hours",
      "Drafted a 50-section constitution for about 1,300 students through multi-stakeholder consultation",
    ],
    metrics: [
      { label: "Funds overseen", value: "₹5 Cr" },
      { label: "Processing time", value: "15 → 1 min" },
      { label: "Hours saved", value: "4,500+" },
    ],
    methods: ["Budgeting", "Audit", "Tax compliance", "Process automation", "Governance"],
  },
  {
    id: "lodha",
    org: "Abhinandan (Lodha) Ventures",
    role: "Sales Strategy Intern",
    location: "Mumbai",
    start: "2025-04",
    end: "2025-05",
    showDates: true,
    era: "finance-strategy",
    domain: "Real estate",
    summary:
      "Diagnosed channel-partner bottlenecks across a large residential portfolio and designed the processes, tools and agreements to fix them.",
    highlights: [
      "Analysed a ₹1,000 Cr+ portfolio across 7 sites and devised strategies aimed at lifting margins from 24% toward 40%",
      "Interviewed 50+ channel partners on Pune's ₹6,100–6,600 per sq. ft. market",
      "Tracked channel-partner productivity rising from ₹0.59 Cr to ₹1.22 Cr per partner using Excel and BI tools",
      "Scoped a channel-partner app and WhatsApp bot with the tech team to automate workflows",
      "Built a standardised channel-partner agreement framework for commission payouts and MahaRERA compliance",
    ],
    metrics: [
      { label: "Portfolio analysed", value: "₹1,000 Cr+" },
      { label: "Sites", value: "7" },
      { label: "Partners interviewed", value: "50+" },
    ],
    methods: ["Stakeholder interviews", "BI analysis", "Process design", "Contract frameworks"],
  },
  {
    id: "skilled-sapiens",
    org: "Skilled Sapiens",
    role: "Multi-domain project intern (remote)",
    location: "Delhi",
    start: "2025-02",
    end: "2025-06",
    showDates: true,
    era: "finance-strategy",
    domain: "Equity research, strategy, AI operations",
    summary:
      "Three projects: an equity research and valuation of Britannia Industries, a go-to-market strategy for an ed-tech venture, and AI workflow adoption.",
    highlights: [
      "Built a 3-statement model for Britannia and recommended Long-Term Buy at ₹5,300 per share (~15% upside)",
      "Used DCF and comparables to justify a premium P/E of 50.2, alongside a 52.6% average ROE",
      "Sized the ~₹40,000 Cr Indian biscuits market and mapped competition with Porter's Five Forces",
      "Designed a go-to-market plan, tiered pricing and KPI framework for an ed-tech client targeting Tier 1–3 schools",
      "Integrated automation tools (Jasper, Zapier) into marketing and content workflows and built the business case for AI pilots",
    ],
    metrics: [
      { label: "Price target", value: "₹5,300" },
      { label: "Market sized", value: "~₹40,000 Cr" },
    ],
    methods: ["3-statement modelling", "DCF", "Comparables", "Sensitivity analysis", "Go-to-market", "Workflow automation"],
  },
  {
    id: "clove",
    org: "Clove Legal LLP",
    role: "Legal Intern — IP, Corporate & Litigation",
    location: "Mumbai",
    start: "2023-01",
    end: "2023-02",
    showDates: true,
    era: "foundations",
    domain: "Corporate law",
    summary: "Drafted commercial agreements and research memoranda for technology and property clients.",
    highlights: [
      "Drafted 10+ agreements — non-disclosure, music and software licensing, service outsourcing — for technology companies",
      "Wrote 4 research memoranda on issuing non-convertible debentures and developing property under the MIDC Rules, 2009",
      "Prepared 15+ litigation compendiums of affidavits, notices of motion and petitions",
    ],
    methods: ["Contract drafting", "Legal research", "Litigation support"],
  },
  {
    id: "amplify",
    org: "AmplifyME (Amplify Trading)",
    role: "Summer Analyst",
    location: "London",
    start: "2021-06",
    end: "2021-07",
    showDates: true,
    era: "foundations",
    domain: "Investment banking & markets",
    summary:
      "A simulated sell-side M&A and IPO mandate for a fintech client, plus equity research and market analysis.",
    highlights: [
      "Valued a fintech client and built an IPO pitch deck for a simulated sell-side mandate",
      "Wrote an equity research report on Alphabet Inc. from fundamental analysis",
      "Analysed the Turkish real estate market and presented key trends to a client audience",
      "Built a Python-based algorithmic trading system in Jupyter",
      "Earned a Distinction in the Level 6 (LIBF-accredited) Applied Finance diploma",
    ],
    methods: ["Company valuation", "IPO pitch", "Equity research", "Python"],
  },
  {
    id: "white-collar",
    org: "White Collar Legal LLP",
    role: "Legal Intern — IP & Corporate",
    location: "Pune",
    start: "2021-01",
    end: "2021-02",
    showDates: true,
    era: "foundations",
    domain: "Intellectual property",
    summary: "Handled trademark prosecution and drafted IP and equity-related contracts.",
    highlights: [
      "Filed 5+ trademark applications and 20+ objection replies",
      "Drafted stock-option and software-licensing contracts, and copyright and trademark transfer agreements",
    ],
    methods: ["Trademark filing", "Contract drafting"],
  },
  {
    id: "kothari",
    org: "Kothari Legal Services LLP",
    role: "Legal Intern — Banking & Real Estate",
    location: "Pune",
    start: "2020-08",
    end: "2020-09",
    showDates: true,
    era: "foundations",
    domain: "Banking & property law",
    summary: "Title due diligence for a national bank.",
    highlights: [
      "Retrieved 25+ property title documents spanning 1990–2020 from the regional land registry",
      "Wrote 4 full title search reports, 2 legal audits and 6 interim search records",
      "Examined stamp-duty classifications under the Maharashtra and Karnataka Stamp Acts",
    ],
    methods: ["Title due diligence", "Stamp duty", "Legal audit"],
  },
];

export const education: Education[] = [
  {
    degree: "MBA (Post Graduate Programme in Management)",
    institution: "Indian Institute of Management Indore",
    location: "India",
    period: "2024–2026",
    detail: "Top 10% of batch",
  },
  {
    degree: "Bachelor of Laws (Hons)",
    institution: "Durham University",
    location: "United Kingdom",
    period: "Graduated 2022",
    detail: "Upper Second Class (2:1)",
  },
];

/** Selected academic projects and research, shown on the résumé page. */
export const projects = [
  {
    title: "Valuation of Bajaj Finance Ltd.",
    context: "Financial Institutions & Markets, IIM Indore",
    date: "2025",
    points: [
      "3-statement model and DCF leading to a HOLD rating at a ₹7,575 price target",
      "Relative valuation to justify a premium P/B of 7.2x against a 2.8x peer average",
    ],
  },
  {
    title: "Footfall growth strategy for Rare Rabbit",
    context: "Marketing Research, IIM Indore",
    date: "2025",
    points: [
      "Mixed-methods research diagnosing intra-brand cannibalisation",
      "Recommended scaled personalised styling and differentiated inventory",
    ],
  },
  {
    title: "Career Edge — turnaround strategy",
    context: "Live project",
    date: "2024",
    points: [
      "Root-cause analysis of a 15% sales decline using Fishbone and PESTLE frameworks",
      "A \"4R\" turnaround plan with projected revenue and margin improvement",
    ],
  },
  {
    title: "Forum Shopping in International Commercial Litigation",
    context: "LLB dissertation, Durham University",
    date: "2022",
    points: [
      "12,000-word comparison of the United Kingdom and France",
      "Drew on 13 books, 20 articles, 15 commentaries, 16 disputes and 12 codes",
    ],
  },
  {
    title: "Intellectual Property Disputes in Sports and Gaming",
    context: "Research paper",
    date: "2020",
    points: ["Regulatory risk assessment across 8 landmark IP disputes"],
  },
];
