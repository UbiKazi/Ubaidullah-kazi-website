import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { series, seriesFromSlug, seriesSlug } from "@/content/series";
import { SeriesView } from "@/views/SeriesView";

type Params = { params: Promise<{ series: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return series.map((s) => ({ series: seriesSlug(s.id) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const x = seriesFromSlug((await params).series);
  return x ? { title: `${x.name} — ${x.kind}`, description: x.description } : {};
}

export default async function Page({ params }: Params) {
  const x = seriesFromSlug((await params).series);
  if (!x) notFound();
  return <SeriesView series={x} />;
}
