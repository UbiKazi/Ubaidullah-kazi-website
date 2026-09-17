import { libraryLinks } from "@/config/library-links";
import type { SeriesId } from "@/content/types";

export type Cta =
  | { kind: "document"; href: string; label: string }
  | { kind: "folder"; href: string; label: string }
  | { kind: "request"; label: string };

/** Individual link → series folder → "on request". Never fabricates a URL. */
export function resolveDocumentCta(documentUrl: string | null | undefined, series: SeriesId, noun = "document"): Cta {
  if (documentUrl) return { kind: "document", href: documentUrl, label: `Open ${noun}` };
  const folder = libraryLinks[series];
  if (folder) return { kind: "folder", href: folder, label: "View in library" };
  return { kind: "request", label: `Full ${noun} on request` };
}

export function resolveSeriesCta(series: SeriesId): Cta {
  const folder = libraryLinks[series];
  if (folder) return { kind: "folder", href: folder, label: "Open the full archive" };
  return { kind: "request", label: "Full archive on request" };
}
