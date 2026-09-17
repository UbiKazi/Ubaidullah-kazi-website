import type { WorkItem } from "./types";

/**
 * WORK LIBRARY
 * To add a piece: copy an entry, give it a unique slug, drop a thumbnail into /public/thumbs
 * (see scripts/make_thumbs.py), and set tier. `detail` is only needed for featured items.
 * Every figure below is taken from the document itself.
 */
export const work: WorkItem[] = [
  // ─────────────────────────── FEATURED ───────────────────────────
  {
    slug: "apple-equity-research",
    order: 1,
    title: "Apple Inc.",
    subject: "Equity research report and integrated financial model",
    series: "equityResearch",
    disciplines: ["finance", "research"],
    tags: ["Equity research", "Financial model", "DCF", "Trading comps", "DuPont", "Consumer tech"],
    sector: "Consumer technology",
    geography: "United States",
    date: "2026-07",
    summary:
      "An 11-page report and 8-tab linked model covering FY21–25 actuals, FY26–30 forecasts, an FCFF DCF and peer comparison.",
    metrics: [
      { label: "FY25 net sales", value: "$416.2bn" },
      { label: "WACC", value: "9.57%" },
      { label: "Model tabs", value: "8" },
    ],
    thumbnail: { id: "apple-er", alt: "Cover page of the Apple Inc. equity research report", orientation: "portrait" },
    format: "report",
    pages: 11,
    classification: "public-analysis",
    disclaimer: "notAdvice",
    tier: "featured",
    documentUrl: null,
    companion: {
      label: "Integrated 3-statement model",
      format: "model",
      documentUrl: null,
      thumbnail: {
        id: "apple-model",
        alt: "Preview of the DCF tab in the Apple financial model, showing the WACC and terminal growth sensitivity grid",
        orientation: "landscape",
      },
    },
    detail: {
      context:
        "A personal-project valuation of Apple built from the FY2025 10-K and Q1–Q2 FY2026 results, presented in ₹ crore (converted at ₹95.60/USD) so it sits alongside the rest of a multi-company coverage set.",
      approach: [
        "Business, segment and industry analysis",
        "Integrated 3-statement model with capex, debt and working-capital schedules",
        "FCFF DCF with a CAPM-based WACC and Gordon growth terminal value",
        "WACC × terminal-growth sensitivity grid",
        "Trading comparables, ratio analysis and DuPont decomposition",
        "Quarterly results read-through against consensus",
      ],
      analyticalAreas: ["Valuation", "Capital structure", "Returns analysis", "Peer benchmarking"],
      insights: [
        {
          title: "Book equity turns negative — and that is not distress",
          body:
            "Sustained capital returns push modelled book equity below zero by FY2029–30 while the balance sheet still ties every year. The report explains it as a capital-structure choice by a highly cash-generative company, not a solvency signal.",
        },
        {
          title: "The DCF disagrees with the market, and says why",
          body:
            "A conservative 5-year DCF implies about ₹15,004 per share (~$157), roughly 54% below the reference price. The report reads the gap as the premium the market pays for ecosystem durability, rather than calling the stock overvalued.",
        },
        {
          title: "A 152% ROE is a buyback artefact",
          body:
            "DuPont analysis shows the implied ROE is driven by a 4.87x equity multiplier on a buyback-compressed equity base — so EV/EBITDA and P/E are treated as the meaningful comparison points instead.",
        },
      ],
      pages: [
        { id: "apple-er-p7", alt: "Consolidated income statement page with FY21–FY30 figures", orientation: "portrait" },
        { id: "apple-er-p8", alt: "Discounted cash flow valuation page with WACC build", orientation: "portrait" },
      ],
      sources: "Apple FY2025 10-K, Q1/Q2 FY2026 results, SEC EDGAR, StockAnalysis, CompaniesMarketCap.",
    },
  },
  {
    slug: "prism-ipo-pitchbook",
    order: 2,
    title: "PRISM Hotels & Resorts",
    subject: "IPO discussion materials — simulated joint bookrunner pitch",
    series: "ubisBank",
    disciplines: ["transactions", "finance"],
    tags: ["IPO", "Pitchbook", "ECM", "Valuation", "Football field", "Travel tech"],
    sector: "Travel technology & hospitality",
    geography: "India",
    date: "2026-07",
    summary:
      "A 22-page pitch on the proposed listing of PRISM (formerly Oravel Stays / OYO), built on its updated draft prospectus.",
    metrics: [
      { label: "Fresh issue", value: "₹6,650cr" },
      { label: "EV midpoint", value: "₹64,000cr" },
      { label: "Pages", value: "22" },
    ],
    thumbnail: { id: "prism", alt: "Cover of the Ubi's Bank pitchbook prepared for PRISM Hotels & Resorts", orientation: "landscape" },
    format: "deck",
    pages: 22,
    classification: "simulated",
    disclaimer: "simulated",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "Pitch materials for a fictitious bank, Ubi's Bank, competing for a bookrunner role on a real, reported IPO. Company figures come from the updated draft red herring prospectus filed 30 June 2026 and press coverage; the bank, its team and its track record are invented for the exercise.",
      approach: [
        "Market sizing and listed-peer landscape",
        "Company analysis: portfolio, channel mix, financial inflection",
        "Trading comparables on EV/revenue",
        "The company's own IPO history as a pricing reference",
        "5-year DCF with WACC × growth sensitivity",
        "Valuation football field, deal structure and demand strategy",
      ],
      analyticalAreas: ["Equity capital markets", "Valuation", "Equity story", "Investor targeting"],
      insights: [
        {
          title: "Nine months beat a full year",
          body:
            "9M FY26 revenue of ₹6,941cr already exceeds FY25's ₹6,253cr, and nine-month net profit of ₹748cr is roughly three times the FY25 figure.",
        },
        {
          title: "A deleveraging IPO, not a growth raise",
          body:
            "The ₹6,650cr issue is 100% primary, with about 75% earmarked for debt repayment — so the equity story is built around balance-sheet repair and no early-investor exit.",
        },
        {
          title: "Three methods, one range",
          body:
            "Comps, the company's own filing history and the DCF triangulate to ₹58,000–70,000cr, against a 2021 ask of $11–12bn.",
        },
      ],
      pages: [
        { id: "prism-p4", alt: "Executive summary page of the PRISM pitchbook", orientation: "landscape" },
        { id: "prism-p12", alt: "Investment highlights page with six equity-story pillars", orientation: "landscape" },
        { id: "prism-p15", alt: "Discounted cash flow page with sensitivity table", orientation: "landscape" },
      ],
      sources: "PRISM UDRHP (30 Jun 2026), Groww, Inc42, Outlook Money, StockAnalysis, Mordor Intelligence.",
    },
  },
  {
    slug: "emirates-nbd-rbl-bank",
    order: 3,
    title: "Emirates NBD → RBL Bank",
    subject: "Cross-border majority acquisition",
    series: "dealogue",
    disciplines: ["transactions", "research"],
    tags: ["M&A", "Banking", "Cross-border", "Open offer", "Deal analysis"],
    sector: "Banking",
    geography: "UAE / India",
    date: "2026-07",
    summary:
      "A Gulf lender taking 60% of an Indian private bank through a preferential issue and open offer.",
    metrics: [
      { label: "Deal value", value: "~$3.0bn" },
      { label: "Stake", value: "60%" },
      { label: "Status", value: "Closed" },
    ],
    thumbnail: { id: "dealogue-enbd-rbl", alt: "Dealogue one-pager on Emirates NBD's acquisition of RBL Bank", orientation: "portrait" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    disclaimer: "verifyFigures",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "A one-page breakdown of Emirates NBD's controlling investment in RBL Bank, from announcement (18 Oct 2025) to close (18 Jun 2026), compiled from company disclosures and press coverage.",
      approach: [
        "Transaction terms and consideration",
        "Valuation versus sector multiples",
        "Market reaction for target and acquirer",
        "Financing, pro-forma impact and regulatory approvals",
      ],
      analyticalAreas: ["Deal structuring", "Bank valuation", "Regulation", "Strategic rationale"],
      insights: [
        {
          title: "The market re-rated a discount",
          body:
            "Shares were issued at ₹280, below the prior close, yet RBL's stock rose about 7% the next day — investors priced the anchor shareholder, not the entry multiple.",
        },
        {
          title: "Buying distribution, not a balance sheet",
          body:
            "The thesis is time: a ready-made retail franchise plugged into the India–Gulf trade and remittance corridor, instead of a decade of organic branch building.",
        },
      ],
      sources: "Emirates NBD, RBL Bank, EY, Business Standard, ICRA. Estimated figures are marked in the source.",
    },
  },
  {
    slug: "sectorscope-global-banking",
    order: 4,
    title: "Global Banking",
    subject: "One-page sector primer",
    series: "sectorscope",
    disciplines: ["research", "strategy"],
    tags: ["Sector research", "PESTLE", "Five Forces", "TAM/SAM/SOM", "SWOT", "Banking"],
    sector: "Banking",
    geography: "Global",
    date: "2026-07",
    summary:
      "Seven frameworks on one page: macro scan, competitive forces, value chain, market size, SWOT, life cycle and scenarios.",
    metrics: [
      { label: "2025 industry net income", value: "~$1.3tn" },
      { label: "Life-cycle stage", value: "Maturity" },
    ],
    thumbnail: {
      id: "sectorscope-banking",
      alt: "Top section of the SECTORSCOPE Global Banking primer showing the PESTLE scan and Porter's Five Forces",
      orientation: "landscape",
      cropped: true,
    },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    disclaimer: "verifyFigures",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "The format this website's visual system grew out of: a whole industry reduced to one structured page that a reader can scan in minutes.",
      approach: [
        "PESTLE macro-environment scan",
        "Porter's Five Forces with intensity ratings",
        "Six-stage industry value chain",
        "TAM / SAM / SOM market sizing",
        "SWOT, life-cycle staging and bear/base/bull scenarios",
      ],
      analyticalAreas: ["Industry structure", "Competitive dynamics", "Market sizing", "Scenario planning"],
      insights: [
        {
          title: "Record profits in a mature industry",
          body:
            "Net income reached about $1.3tn in 2025 while margins compressed slightly — evidence of maturity, not category expansion.",
        },
        {
          title: "Where value is moving",
          body:
            "With fintechs and neobanks at roughly 17% of industry revenue, the primer points value toward fee income, AI-driven efficiency and digital-asset infrastructure.",
        },
      ],
      sources: "McKinsey Global Banking Review 2026, Statista, Precedence Research, company disclosures.",
    },
  },
  {
    slug: "ecospective-china-june-2026",
    order: 5,
    title: "China, June 2026",
    subject: "Monthly economy snapshot",
    series: "ecospective",
    disciplines: ["macro"],
    tags: ["Macro", "GDP", "Inflation", "Trade", "Monetary policy", "China"],
    geography: "China",
    date: "2026-06",
    summary: "Growth, inflation, jobs, markets, rates, trade and policy for one month, on one page.",
    metrics: [
      { label: "Q2 GDP", value: "+4.3% YoY" },
      { label: "June exports", value: "$412bn" },
    ],
    thumbnail: { id: "ecospective-china", alt: "Ecospective China June 2026 economy snapshot", orientation: "portrait" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    disclaimer: "notAdvice",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "One of a series of country snapshots built on a fixed layout, so a reader can compare economies month to month without relearning the page.",
      approach: [
        "Growth, inflation and labour data",
        "Equity markets, lending rates and credit growth",
        "Trade flows and sector pulse",
        "Fiscal stance and a dated policy timeline",
      ],
      analyticalAreas: ["Macroeconomics", "Trade", "Monetary policy"],
      insights: [
        {
          title: "Two economies in one week",
          body:
            "Q2 GDP missed forecast at 4.3% while June exports hit a record $412bn on AI-chip demand — an export machine running beside a domestic economy weighed down by property.",
        },
        {
          title: "Policy stayed put",
          body:
            "The central bank held benchmark lending rates for a 13th straight month despite the miss, signalling caution.",
        },
      ],
      sources: "NBS, PBOC, GACC, CSI, China Beige Book.",
    },
  },
  {
    slug: "workout-wire-byjus",
    order: 6,
    title: "Byju's (Think & Learn)",
    subject: "Insolvency case tracker",
    series: "workoutWire",
    disciplines: ["transactions", "legal"],
    tags: ["Restructuring", "IBC", "CIRP", "Creditor structure", "EdTech"],
    sector: "EdTech",
    geography: "India / US",
    date: "2026-07",
    summary:
      "How India's most valuable start-up entered insolvency, who holds the claims, and what the precedent suggests about recovery.",
    metrics: [
      { label: "Debt at filing", value: "~$1.5bn" },
      { label: "Trigger claim", value: "₹158.9cr" },
      { label: "Status", value: "Active CIRP" },
    ],
    thumbnail: { id: "workout-wire-byjus", alt: "The Workout Wire case tracker on Byju's insolvency", orientation: "portrait" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    disclaimer: "publicReporting",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "A restructuring tracker applying a creditor's lens to a contested Indian insolvency with parallel US proceedings, updated to July 2026.",
      approach: [
        "Filing details and causes of insolvency",
        "Creditor structure and financing position",
        "Regulatory and legal disputes, including cross-border proceedings",
        "Comparable precedent and recovery outlook",
      ],
      analyticalAreas: ["Insolvency law (IBC 2016)", "Credit", "Distressed situations"],
      insights: [
        {
          title: "A small claim, a large exposure",
          body:
            "Insolvency was triggered by an operational creditor's ₹158.9cr claim — under 0.1% of peak valuation — while the real exposure was a $1.2bn term loan.",
        },
        {
          title: "Precedent points to a long road",
          body:
            "Comparing it with Aircel's drawn-out process, the tracker flags protracted timelines and steep haircuts as the likely path.",
        },
      ],
      sources: "Compiled from public reporting as of July 2026.",
    },
  },
  {
    slug: "gayatri-balasamy-v-isg-novasoft",
    order: 7,
    title: "Gayatri Balasamy v ISG Novasoft",
    subject: "Supreme Court of India — judgment memo",
    series: "judgmentMemos",
    disciplines: ["legal"],
    tags: ["Arbitration", "Constitution Bench", "Section 34", "Case law", "India"],
    geography: "India",
    date: "2025-04",
    summary:
      "Can a court modify an arbitral award, or only set it aside? A 4:1 Constitution Bench answer, distilled.",
    metrics: [
      { label: "Bench", value: "5 judges" },
      { label: "Majority", value: "4:1" },
    ],
    thumbnail: { id: "balasamy", alt: "First page of the judgment memo on Gayatri Balasamy v ISG Novasoft", orientation: "portrait" },
    format: "memo",
    pages: 2,
    classification: "public-analysis",
    disclaimer: "legalSummary",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "A two-page memo on 2025 INSC 605, decided 30 April 2025, prepared as part of a series covering arbitration judgments across jurisdictions.",
      approach: [
        "Material facts and procedural history",
        "Ratio decidendi, including the dissent",
        "Conclusion and practical effect",
        "Definitions of the provisions and doctrines involved",
        "A memory aid to make the holding stick",
      ],
      analyticalAreas: ["Arbitration law", "Judicial review", "Precedent"],
      insights: [
        {
          title: "A narrow power to modify",
          body:
            "The majority held that courts may modify an award under ss. 34 and 37 — but only to sever an invalid part, correct clerical or computational errors, or adjust post-award interest.",
        },
        {
          title: "Precedent narrowed, finality defended",
          body:
            "NHAI v M. Hakeem (2021) is overruled to that extent, while the dissent warns that any modification power risks becoming an appeal on the merits.",
        },
      ],
      pages: [{ id: "balasamy-p2", alt: "Second page of the memo with conclusion, definitions and authorities", orientation: "portrait" }],
      sources: "Summary of a public judgment. Figures on the facts are drawn from secondary legal commentary.",
    },
  },
  {
    slug: "american-express-case-study",
    order: 8,
    title: "American Express",
    subject: "Brand case study",
    series: "caseStudies",
    disciplines: ["strategy"],
    tags: ["Brand strategy", "Payments", "Premium positioning", "Case study"],
    sector: "Financial services & payments",
    geography: "United States",
    date: "2026",
    summary: "From freight wagons to a premium card network — how a company chose status over scale.",
    metrics: [
      { label: "FY25 revenue", value: "$72.2bn" },
      { label: "Cards in force", value: "154m" },
    ],
    thumbnail: { id: "amex", alt: "American Express brand case study one-pager", orientation: "portrait" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    tier: "featured",
    documentUrl: null,
    detail: {
      context:
        "One of a set of brand case studies built on the same structure — origin, challenge, journey, strategy, execution, results — so different industries can be read side by side.",
      approach: [
        "Origin story and strategic crossroads",
        "Five-milestone journey",
        "Strategy and execution highlights",
        "Results, recognition and cultural impact",
      ],
      analyticalAreas: ["Brand strategy", "Competitive positioning", "Business history"],
      insights: [
        {
          title: "Sell exclusivity, not credit",
          body:
            "Where a rival chased volume, American Express ran a closed-loop network and charged premium fees on both sides of it — betting that a smaller, wealthier base would outearn a larger one.",
        },
      ],
      sources: "Company disclosures and public brand rankings.",
    },
  },

  // ─────────────────────────── SELECTED ───────────────────────────
  {
    slug: "saudi-aramco-power-divestment",
    title: "Saudi Aramco",
    subject: "Sell-side pitch on a gas-fired power plant divestment",
    series: "ubisBank",
    disciplines: ["transactions", "finance"],
    tags: ["Sell-side M&A", "Pitchbook", "Power", "Infrastructure", "DCF"],
    sector: "Power & infrastructure",
    geography: "Saudi Arabia",
    date: "2026-07",
    summary: "Making the case for formally launching the reported sale of up to five power plants.",
    metrics: [
      { label: "Proceeds range", value: "$3.6–4.6bn" },
      { label: "Pages", value: "22" },
    ],
    thumbnail: { id: "aramco", alt: "Cover of the Ubi's Bank sell-side pitchbook for Saudi Aramco", orientation: "landscape" },
    format: "deck",
    pages: 22,
    classification: "simulated",
    disclaimer: "simulated",
    tier: "selected",
    documentUrl: null,
  },
  {
    slug: "dp-world-delta-mekong",
    title: "DP World",
    subject: "Buy-side pitch on a freight-forwarding bolt-on",
    series: "ubisBank",
    disciplines: ["transactions", "finance"],
    tags: ["Buy-side M&A", "Pitchbook", "Logistics", "Leverage capacity"],
    sector: "Ports & logistics",
    geography: "UAE / Vietnam",
    date: "2026-07",
    summary: "A bolt-on acquisition case sized against leverage headroom, with a hypothetical Vietnamese target.",
    metrics: [
      { label: "EV range", value: "$66.3–86.7m" },
      { label: "Pages", value: "22" },
    ],
    thumbnail: { id: "dpworld", alt: "Cover of the Ubi's Bank buy-side pitchbook for DP World", orientation: "landscape" },
    format: "deck",
    pages: 22,
    classification: "simulated",
    disclaimer: "simulatedHypothetical",
    tier: "selected",
    documentUrl: null,
  },
  {
    slug: "swiggy-ipo-note",
    title: "Swiggy",
    subject: "IPO note",
    series: "ipoNotes",
    disciplines: ["finance", "research", "transactions"],
    tags: ["IPO", "Consumer internet", "Quick commerce", "India"],
    sector: "Consumer internet",
    geography: "India",
    date: "2024-11",
    summary: "Issue structure, three years of losses narrowing, and why institutions and retail disagreed.",
    metrics: [
      { label: "Offer size", value: "₹11,327cr" },
      { label: "QIB demand", value: "6.02x" },
    ],
    thumbnail: { id: "swiggy-ipo", alt: "IPO note on Swiggy Limited", orientation: "landscape" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    disclaimer: "notAdvice",
    tier: "selected",
    documentUrl: null,
  },
  {
    slug: "sun-pharma-organon",
    title: "Sun Pharma × Organon",
    subject: "News analysis",
    series: "newsAnalysis",
    disciplines: ["research", "transactions"],
    tags: ["News analysis", "Pharma", "M&A", "Cross-border"],
    sector: "Pharmaceuticals",
    geography: "India / US",
    date: "2026-04",
    summary: "India's largest pharma deal, unpacked into implications, stakeholders, glossary and timeline.",
    metrics: [{ label: "Enterprise value", value: "$11.75bn" }],
    thumbnail: { id: "sunpharma", alt: "News analysis on Sun Pharma's acquisition of Organon", orientation: "portrait" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    tier: "selected",
    documentUrl: null,
  },
  {
    slug: "tsmc-business-model-canvas",
    title: "TSMC",
    subject: "Business Model Canvas",
    series: "bmc",
    disciplines: ["strategy"],
    tags: ["Business model", "Semiconductors", "Strategy"],
    sector: "Semiconductors",
    geography: "Taiwan / Global",
    date: "2026",
    summary: "The pure-play foundry model across all nine canvas blocks, with FY2025 revenue mix.",
    metrics: [{ label: "HPC share of revenue", value: "58%" }],
    thumbnail: { id: "tsmc-bmc", alt: "Business Model Canvas for TSMC", orientation: "landscape" },
    format: "onepager",
    pages: 1,
    classification: "public-analysis",
    tier: "selected",
    documentUrl: null,
  },
  {
    slug: "ledgerline-aug-3-9-2026",
    title: "The Ledgerline",
    subject: "Week in review, 3–9 August 2026",
    series: "ledgerline",
    disciplines: ["macro", "research"],
    tags: ["Markets", "Policy", "Earnings", "Currency", "Weekly"],
    geography: "Global",
    date: "2026-08",
    summary: "A weak jobs report, a record-setting rally and a coordinated yen defence — on one front page.",
    thumbnail: { id: "ledgerline", alt: "Front page of The Ledgerline week-in-review edition", orientation: "portrait" },
    format: "newspaper",
    pages: 1,
    classification: "personal-publication",
    disclaimer: "personalPublication",
    tier: "selected",
    documentUrl: null,
  },
  {
    slug: "apple-financial-model",
    title: "Apple Inc.",
    subject: "Integrated 3-statement model",
    series: "equityResearch",
    disciplines: ["finance"],
    tags: ["Financial model", "Excel", "DCF", "Sensitivity analysis"],
    sector: "Consumer technology",
    geography: "United States",
    date: "2026-07",
    summary: "Assumptions, statements, schedules, DCF and comps across eight linked tabs.",
    metrics: [{ label: "Base value / share", value: "₹15,004" }],
    thumbnail: {
      id: "apple-model",
      alt: "Preview of the DCF tab in the Apple financial model",
      orientation: "landscape",
    },
    format: "model",
    classification: "public-analysis",
    disclaimer: "notAdvice",
    tier: "library",
    documentUrl: null,
  },
];

export const visibleWork = work.filter((w) => w.classification !== "hold");
export const featuredWork = visibleWork
  .filter((w) => w.tier === "featured")
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
export const workBySlug = (slug: string) => visibleWork.find((w) => w.slug === slug);
