import type { Classification, DisclaimerKey } from "@/content/types";

export const classificationMeta: Record<Exclude<Classification, "hold">, { label: string; tone: "neutral" | "sim" | "edu" | "pub" | "muted" }> = {
  "public-analysis": { label: "Public-source analysis", tone: "neutral" },
  simulated: { label: "Simulated mandate", tone: "sim" },
  educational: { label: "Educational", tone: "edu" },
  "personal-publication": { label: "Personal publication", tone: "pub" },
  archived: { label: "Archived", tone: "muted" },
};

export const disclaimers: Record<DisclaimerKey, string> = {
  notAdvice: "Personal research built from public information. Not investment advice.",
  simulated:
    "Ubi's Bank is a fictitious advisory brand; its team and track record are invented for the exercise. Company data is from public disclosures. Not investment advice.",
  simulatedHypothetical:
    "Ubi's Bank is a fictitious advisory brand and the acquisition target is hypothetical. Acquirer data is from public disclosures. Not investment advice.",
  legalSummary: "Summary of a public judgment for study purposes. Not legal advice; verify against the official judgment.",
  publicReporting: "Compiled from public reporting. Figures are estimates and may have changed since publication.",
  personalPublication: "A personal editorial product compiled from public market data. Not investment advice.",
  verifyFigures: "Some figures are estimates and are marked as such in the document. Not investment advice.",
};
