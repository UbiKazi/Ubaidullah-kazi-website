import type { Term } from "./types";

/**
 * TERM OF THE WEEK
 * Newest first. `source` names the publication the term was used in.
 */
export const terms: Term[] = [
  {
    slug: "currency-intervention",
    term: "Currency intervention",
    domain: "Finance",
    definition:
      "Direct buying or selling of a currency by a government or central bank to push its value up or down, usually to counter disorderly moves.",
    whyItMatters:
      "Intervention signals that policymakers think markets have overshot. It can move exchange rates quickly, but it rarely changes the direction set by interest-rate differences unless it is coordinated or repeated.",
    example:
      "In early August 2026 the US and Japan jointly bought yen after it touched a 40-year low, with purchases estimated at about $53bn.",
    related: ["Exchange-rate regime", "FX reserves", "Sterilisation", "Carry trade"],
    source: "The Ledgerline, week of 3–9 August 2026",
    date: "2026-08",
  },
  {
    slug: "sukuk",
    term: "Sukuk",
    domain: "Islamic Finance",
    definition:
      "A Shariah-compliant certificate that gives holders a share in an underlying asset or venture and its returns, rather than a claim to interest on a loan.",
    whyItMatters:
      "Sukuk let governments and companies raise capital from investors who avoid interest-bearing debt, which is why structure, asset backing and Shariah governance matter as much as the coupon.",
    example:
      "An issuer sells an asset to a special-purpose vehicle, leases it back, and passes the rental income to sukuk holders as periodic distributions.",
    related: ["Ijara", "Murabaha", "Special-purpose vehicle", "Shariah board"],
    source: "Term of the Week — Islamic Finance",
  },
  {
    slug: "offtake-agreement",
    term: "Offtake agreement",
    domain: "Infrastructure",
    definition: "A contract in which a buyer commits in advance to purchase some or all of a facility's output.",
    whyItMatters:
      "Contracted demand is what makes large infrastructure financeable: lenders and acquirers value predictable cash flows far above merchant exposure to spot prices.",
    example:
      "Power plants supplying a parent company's own refineries carry captive offtake, which reduces demand risk for a prospective buyer.",
    related: ["Power purchase agreement", "Merchant risk", "Project finance", "Take-or-pay"],
    source: "Ubi's Bank — Saudi Aramco sell-side glossary",
  },
  {
    slug: "open-offer",
    term: "Open offer",
    domain: "Corporate",
    definition:
      "An offer an acquirer must make to a listed company's public shareholders to buy their shares once its holding crosses a regulatory threshold.",
    whyItMatters:
      "It gives minority shareholders an exit on comparable terms when control changes hands, and it can materially raise the cost of a deal.",
    example:
      "Alongside its preferential allotment in RBL Bank, Emirates NBD made a mandatory open offer for a further 26% of the bank.",
    related: ["Takeover code", "Preferential allotment", "Change of control", "Minority protection"],
    source: "Dealogue — Emirates NBD → RBL Bank",
  },
  {
    slug: "moratorium",
    term: "Moratorium (insolvency)",
    domain: "Corporate",
    definition:
      "A court-ordered pause on legal actions and recovery against a company once its insolvency process begins.",
    whyItMatters:
      "The pause stops a race among creditors to seize assets, giving the resolution professional time to keep the business running and invite rescue plans.",
    example:
      "When Byju's parent was admitted to insolvency in July 2024, a moratorium froze recovery actions while an interim resolution professional took control.",
    related: ["CIRP", "Committee of creditors", "Resolution plan", "Liquidation waterfall"],
    source: "The Workout Wire — Byju's",
  },
  {
    slug: "severability",
    term: "Severability",
    domain: "Corporate",
    definition:
      "The principle that a defective part of a decision or contract can be struck out while the rest stays valid and enforceable.",
    whyItMatters:
      "It lets courts correct a flaw without discarding everything else — a key reason India's Supreme Court found a limited power to modify arbitral awards.",
    example:
      "A court may set aside one invalid head of an arbitral award while leaving the tribunal's other findings intact.",
    related: ["Set-aside", "Arbitral award", "Section 34", "Finality"],
    source: "Judgment memo — Gayatri Balasamy v ISG Novasoft",
  },
  {
    slug: "biosimilar",
    term: "Biosimilar",
    domain: "Corporate",
    definition:
      "A biologic medicine highly similar to an approved reference biologic, typically sold at a lower price once the original's patents expire.",
    whyItMatters:
      "Biosimilars are a growth engine for drugmakers moving beyond small-molecule generics, and a major lever on healthcare costs.",
    example:
      "Organon's biosimilars franchise was a central reason Sun Pharma's acquisition would make it one of the world's larger biosimilar players.",
    related: ["Biologics", "Patent cliff", "Generics", "Interchangeability"],
    source: "News analysis — Sun Pharma × Organon",
  },
];

export const termBySlug = (slug: string) => terms.find((t) => t.slug === slug);
