import type { Article, SeriesId } from "./types";

export const pipeline = [
  {
    id: "input",
    name: "Source",
    short: "Filings, prospectuses, data releases, reporting",
    detail:
      "Every piece starts from primary or reputable public material — 10-Ks, draft prospectuses, statistics bureaus, court judgments, company releases. Sources are named on the page they support.",
    examples: ["Apple FY2025 10-K", "PRISM draft prospectus", "China NBS and customs data"],
  },
  {
    id: "draft",
    name: "AI draft",
    short: "Structure the material into a fixed format",
    detail:
      "A language model organises the research into a format's fixed sections — PESTLE blocks, deal terms, creditor structure, ratio decidendi. The format does the thinking about what must be covered; the model does the first pass on filling it.",
    examples: ["Seven-framework sector primer", "22-page pitchbook skeleton", "Two-page judgment memo"],
  },
  {
    id: "qa",
    name: "Automated checks",
    short: "Test the layout and the text programmatically",
    detail:
      "Build scripts render each page and check it: text overflow, page counts, pixel-level colour sampling, re-extraction of the rendered text, and character sets that fonts cannot draw.",
    examples: ["Overflow detection", "Page-count verification", "Text re-extraction", "Glyph safety"],
  },
  {
    id: "verify",
    name: "Human verification",
    short: "Check the numbers and the reasoning",
    detail:
      "Figures are checked against sources, estimates are flagged in amber or marked for verification, and results that look wrong get explained rather than hidden — like a DCF that disagrees with the market.",
    examples: ["Amber estimate flags", "Source footers", "\"Verify before publication\" notes"],
  },
  {
    id: "publish",
    name: "Publish",
    short: "A branded, print-ready page",
    detail:
      "The output renders to a fixed A4 format through ReportLab or an HTML-to-PDF pipeline, in the house style of its series, and joins the library.",
    examples: ["ReportLab layouts", "HTML → PDF with Playwright", "Branded templates"],
  },
] as const;

export const aiMistakes = [
  { where: "Equity research", what: "A hallucinated EBITDA margin", caughtBy: "Reconciling against the filed statements" },
  { where: "Sentiment analysis", what: "Sentiment scores that contradict price action", caughtBy: "Side-by-side sentiment versus price sheet" },
  { where: "Deal sourcing", what: "A company on the shortlist that does not exist", caughtBy: "Screener queries on every entry" },
  { where: "Due diligence", what: "A governance red flag the summary skipped", caughtBy: "Grounding answers in the source documents" },
];

/** Production systems behind the library. Counts come from the series themselves. */
export const systems: { name: string; series?: SeriesId; what: string; how: string; scale?: string }[] = [
  {
    name: "Pitchbook builder",
    series: "ubisBank",
    what: "Investment-banking discussion materials for sell-side, buy-side and IPO mandates",
    how: "A fixed 22-page structure with a mandatory QA suite run on every build",
    scale: "40+ builds across 20 countries",
  },
  {
    name: "Economy snapshot engine",
    series: "ecospective",
    what: "One-page country snapshots",
    how: "An auto-fit layout engine that sizes content to the page, with programmatic QA",
    scale: "14 country editions",
  },
  {
    name: "Weekly paper pipeline",
    series: "ledgerline",
    what: "A single-page business newspaper",
    how: "HTML rendered to PDF under a strict one-page A4 constraint",
    scale: "6 weekly editions",
  },
  {
    name: "IPO note layout",
    series: "ipoNotes",
    what: "Landscape IPO research notes",
    how: "Measure-then-draw layout that adapts to each issue's content",
    scale: "25+ companies, multiple geographies",
  },
  {
    name: "Canvas builder",
    series: "bmc",
    what: "Business Model Canvases for global companies",
    how: "Geometry extracted from a template PDF and converted between coordinate systems for precise overlays",
    scale: "25+ companies",
  },
  {
    name: "Judgment memo engine",
    series: "judgmentMemos",
    what: "Two-page arbitration judgment memos",
    how: "A shared engine module reused across every case",
    scale: "14 cases, 14 jurisdictions",
  },
  {
    name: "Term of the Week",
    what: "Three linked outputs per term: a glossary card, a news explainer and a long-form article",
    how: "Web research → card → one-page explainer → article, across six industries",
    scale: "20+ terms",
  },
];

/**
 * ARTICLES
 * Add long-form pieces here. `url` for external (Medium, LinkedIn); omit it for future native posts.
 */
export const articles: Article[] = [];
