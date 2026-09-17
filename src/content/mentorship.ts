import type { Programme } from "./types";

/**
 * MENTORSHIP PROGRAMMES
 * Participant counts, cohort sizes and completion rates are intentionally absent until confirmed.
 * Add them as `benchmarks` entries once you have real numbers.
 */
export const programmes: Programme[] = [
  {
    id: "erfm",
    name: "Equity Research & Financial Modelling",
    shortName: "ER & FM",
    format: "5 live sessions + live project",
    flow: ["Excel foundations", "Industry analysis", "3-statement forecasting", "DCF & discount rates", "Relative valuation"],
    description:
      "Takes participants from spreadsheet fluency to a complete valuation, then lets them choose the deliverable that matches the role they want.",
    built: [
      "A dual-track deliverable framework — a financial-model workbook or an equity research report, each with 6–7 mandated components",
      "A full 3-statement model and 5-year FCFF DCF on Britannia Industries, used as the grading reference for model architecture",
      "A sell-side-style research report on Dabur India with a DCF base case and P/E cross-check, used as the model-answer deliverable",
      "Applied Excel and valuation technique: Power Query, dynamic arrays, XLOOKUP, WACC/CAPM, sensitivity grids",
    ],
    benchmarks: [
      { label: "Dabur DCF base case", value: "~₹243" },
      { label: "Dabur P/E cross-check", value: "~39x" },
    ],
  },
  {
    id: "pevc",
    name: "Private Equity & Venture Capital",
    shortName: "PE & VC",
    format: "6 sessions + dual-track capstone",
    flow: ["Foundations", "Buyout mechanics", "LBO valuation", "VC power-law thinking", "Term sheets", "Capstone"],
    description:
      "Builds towards an investment-committee decision: participants model a buyout or a venture round, write the memo, and defend it under questioning.",
    built: [
      "A dual-track capstone — a fictitious ₹640cr control buyout or a ₹60cr Series A raise",
      "A grading rubric covering modelling rigour, investment judgement, risk identification and memo clarity",
      "A 5-year LBO model (debt schedule, cash sweep, entry and exit returns) and a Series A cap-table and returns model as model answers",
      "Blank-template and solved-model pairs so participants can check leverage sizing, paydown, dilution and returns themselves",
      "Mock investment-committee defence for individuals and teams of up to four",
      "A PE/VC CV-pointer guide with pre-structured bullets and a keyword bank",
    ],
    benchmarks: [
      { label: "LBO base-case MOIC", value: "3.17x" },
      { label: "LBO base-case IRR", value: "26%" },
    ],
  },
  {
    id: "aefa",
    name: "AI-Enabled Financial Analyst",
    shortName: "AEFA",
    format: "4 weekly 90-minute sessions, free-tier tools only",
    flow: ["Equity research & modelling", "Sentiment analysis", "Deal sourcing", "Due diligence"],
    description:
      "Applied AI for finance using only free tools — Claude or ChatGPT, Screener.in, Google Sheets and NotebookLM — so cost is never the barrier.",
    built: [
      "A facilitator's manual across 4 sessions and 35 slides, with theory outlines, tool checklists and step-by-step tutorials so the programme runs repeatably",
      "Four deliverable formats: an AI-assisted 3-statement model, a sentiment-versus-price sheet, a verified prospect shortlist and a diligence checklist",
      "A verification framework for catching hallucinations, stale data and fabricated citations against filings, price data and screener queries",
      "A skills and CV-pointer guide mapped to the programme's deliverables",
    ],
    verificationNote:
      "Every session includes a deliberate, pre-tested moment where the AI gets it wrong — a hallucinated EBITDA margin, a mismatched sentiment score, a fabricated shortlist entry, a missed governance red flag. The lesson is the same each week: AI drafts, humans verify.",
  },
];
