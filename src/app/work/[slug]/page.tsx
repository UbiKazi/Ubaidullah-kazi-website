import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { visibleWork, workBySlug } from "@/content/work";
import { ProjectView } from "@/views/ProjectView";

type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return visibleWork.filter((w) => w.detail).map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const w = workBySlug((await params).slug);
  if (!w) return {};
  return {
    title: `${w.title} — ${w.subject}`,
    description: w.summary,
    openGraph: { images: [{ url: `/thumbs/${w.thumbnail.id}.webp`, alt: w.thumbnail.alt }] },
  };
}

export default async function Page({ params }: Params) {
  const w = workBySlug((await params).slug);
  if (!w || !w.detail) notFound();
  return <ProjectView item={w} />;
}
