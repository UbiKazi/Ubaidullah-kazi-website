/** Asset URL helpers (Next.js build). The preview build aliases this module to inline assets. */
export function thumbSrc(id: string): string {
  return `/thumbs/${id}.webp`;
}
