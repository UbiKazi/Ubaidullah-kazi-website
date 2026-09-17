/**
 * Content schema. Everything the site renders is typed here, so content can later move to a
 * CMS, Notion, SharePoint or JSON without touching any component.
 * Optional fields hide themselves when empty — never fill them with placeholders.
 */

export type Discipline =
  | "finance"
  | "transactions"
  | "research"
  | "strategy"
  | "macro"
  | "legal"
  | "genai";

export type SeriesId =
  | "equityResearch"
  | "ipoNotes"
  | "ubisBank"
  | "dealogue"
  | "workoutWire"
  | "sectorscope"
  | "ecospective"
  | "ledgerline"
  | "newsAnalysis"
  | "bmc"
  | "caseStudies"
  | "judgmentMemos";

/**
 * public-analysis      built from public filings/reporting
 * simulated            fictitious advisory brand and/or hypothetical counterparties
 * educational          teaching material / model answers
 * personal-publication a personal editorial product
 * archived             kept for the record, de-emphasised
 * hold                 NEVER rendered or exported
 */
export type Classification =
  | "public-analysis"
  | "simulated"
  | "educational"
  | "personal-publication"
  | "archived"
  | "hold";

export type DisclaimerKey =
  | "notAdvice"
  | "simulated"
  | "simulatedHypothetical"
  | "legalSummary"
  | "publicReporting"
  | "personalPublication"
  | "verifyFigures";

export type Format = "onepager" | "report" | "deck" | "model" | "memo" | "newspaper";

export interface Metric {
  label: string;
  value: string;
}

export interface Thumb {
  /** file stem inside /public/thumbs, without extension */
  id: string;
  alt: string;
  orientation: "portrait" | "landscape";
  /** true when the preview is a crop of the page rather than the whole page */
  cropped?: boolean;
}

export interface WorkDetail {
  context: string;
  approach: string[];
  analyticalAreas: string[];
  insights: { title: string; body: string }[];
  /** additional page previews shown in the "inside the document" strip */
  pages?: Thumb[];
  sources?: string;
}

export interface WorkItem {
  slug: string;
  title: string;
  subject: string;
  series: SeriesId;
  disciplines: Discipline[];
  tags: string[];
  sector?: string;
  geography?: string;
  /** ISO year-month of the document's data/publication date */
  date: string;
  summary: string;
  metrics?: Metric[];
  thumbnail: Thumb;
  format: Format;
  pages?: number;
  classification: Classification;
  disclaimer?: DisclaimerKey;
  tier: "featured" | "selected" | "library";
  /** Individual OneDrive document link. Leave null until you have a real one. */
  documentUrl?: string | null;
  /** Companion document (e.g. the Excel model behind a report) */
  companion?: { label: string; format: Format; documentUrl?: string | null; thumbnail?: Thumb };
  detail?: WorkDetail;
  /** lower = earlier in featured ordering */
  order?: number;
}

export interface Series {
  id: SeriesId;
  name: string;
  /** How the masthead is typeset on the shelf */
  mastheadStyle: "serif" | "caps" | "spaced" | "news" | "bank" | "plain";
  kind: string;
  description: string;
  format: Format;
  /** Public count label; rounded down so it does not go stale. Omit if unknown. */
  countLabel?: string;
  disciplines: Discipline[];
  /** Colour used for the masthead chip — mirrors the series' own document identity */
  identity: "burgundy" | "navy" | "mono" | "newsprint";
  method: string;
}

export interface ExperienceEntry {
  id: string;
  org: string;
  role: string;
  location?: string;
  start?: string;
  end?: string | null;
  /** false hides dates entirely (used when dates are unconfirmed) */
  showDates: boolean;
  era: "current" | "finance-strategy" | "foundations";
  domain: string;
  summary: string;
  highlights: string[];
  metrics?: Metric[];
  methods: string[];
  relatedWork?: string[];
  link?: { label: string; href: string };
}

export interface Programme {
  id: string;
  name: string;
  shortName: string;
  format: string;
  flow: string[];
  description: string;
  built: string[];
  benchmarks?: Metric[];
  verificationNote?: string;
}

export interface Term {
  slug: string;
  term: string;
  domain: "Finance" | "Islamic Finance" | "Corporate" | "Infrastructure" | "Maritime" | "Motorsport";
  definition: string;
  whyItMatters: string;
  example: string;
  related: string[];
  source: string;
  date?: string;
}

export interface Article {
  slug: string;
  title: string;
  category: "News" | "Articles" | "Research" | "Term of the Week";
  date: string;
  readingTime?: string;
  summary: string;
  tags: string[];
  image?: string;
  url?: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Credential {
  type: "certification" | "academic" | "recognition" | "competition" | "publication" | "diploma";
  name: string;
  issuer: string;
  year?: string;
  detail?: string;
  href?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string;
}
