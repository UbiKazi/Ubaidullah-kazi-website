import type { SeriesId } from "@/content/types";

/**
 * ONEDRIVE LIBRARY LINKS
 * ─────────────────────────────────────────────────────────────────────────────
 * One folder per series. Paste the "Anyone with the link can view" URL for each.
 * Leave a value as null and the site shows "Full archive available on request"
 * instead of a link. Never put a guessed URL here.
 *
 * Individual documents: set `documentUrl` on the item in src/content/work.ts.
 */
export const libraryLinks: Record<SeriesId, string | null> = {
  equityResearch: null, // EQUITY_RESEARCH_FOLDER_URL (reports + Excel models)
  ipoNotes: null, // IPO_RESEARCH_FOLDER_URL
  ubisBank: null, // INVESTMENT_BANKING_FOLDER_URL (Ubi's Bank pitchbooks)
  dealogue: null, // DEAL_ANALYSIS_FOLDER_URL
  workoutWire: null, // RESTRUCTURING_FOLDER_URL
  sectorscope: null, // SECTORSCOPE_FOLDER_URL
  ecospective: null, // MACRO_FOLDER_URL
  ledgerline: null, // LEDGERLINE_FOLDER_URL
  newsAnalysis: null, // NEWS_ANALYSIS_FOLDER_URL
  bmc: null, // BUSINESS_MODEL_CANVAS_FOLDER_URL
  caseStudies: null, // CASE_STUDIES_FOLDER_URL
  judgmentMemos: null, // LEGAL_RESEARCH_FOLDER_URL
};
