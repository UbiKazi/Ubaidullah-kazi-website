import Fuse from "fuse.js";
import { visibleWork } from "@/content/work";
import { seriesById } from "@/content/series";
import { terms } from "@/content/terms";

export interface SearchEntry {
  type: "Work" | "Series" | "Page" | "Term";
  title: string;
  subtitle: string;
  href: string;
  keywords: string;
}

export function buildIndex(pages: { title: string; href: string; subtitle: string }[]): SearchEntry[] {
  const entries: SearchEntry[] = [
    ...pages.map((p) => ({ type: "Page" as const, ...p, keywords: "" })),
    ...Object.values(seriesById).map((s) => ({
      type: "Series" as const,
      title: s.name,
      subtitle: s.kind,
      href: `/work/series/${s.id.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}`,
      keywords: s.description,
    })),
    ...visibleWork.map((w) => ({
      type: "Work" as const,
      title: w.title,
      subtitle: `${w.subject} — ${seriesById[w.series].name}`,
      href: w.detail ? `/work/${w.slug}` : `/work?item=${w.slug}`,
      keywords: [w.tags.join(" "), w.sector, w.geography, w.date].filter(Boolean).join(" "),
    })),
    ...terms.map((t) => ({
      type: "Term" as const,
      title: t.term,
      subtitle: `Term of the Week — ${t.domain}`,
      href: `/insights/terms/${t.slug}`,
      keywords: t.definition,
    })),
  ];
  return entries;
}

export function makeFuse<T>(items: T[], keys: string[]) {
  return new Fuse(items, { keys, threshold: 0.35, ignoreLocation: true });
}
