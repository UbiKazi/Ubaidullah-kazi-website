/** Preview build: thumbnails are inlined as data URIs so the page is fully self-contained. */
const files = import.meta.glob("../public/thumbs/*.webp", { eager: true, query: "?inline", import: "default" }) as Record<string, string>;
const byId: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) byId[path.split("/").pop()!.replace(".webp", "")] = url;

export function thumbSrc(id: string): string {
  return byId[id] ?? "";
}
