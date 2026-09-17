import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { termBySlug, terms } from "@/content/terms";
import { TermView } from "@/views/TermView";

type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return terms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = termBySlug((await params).slug);
  return t ? { title: `${t.term} — Term of the Week`, description: t.definition } : {};
}

export default async function Page({ params }: Params) {
  const t = termBySlug((await params).slug);
  if (!t) notFound();
  return <TermView term={t} />;
}
