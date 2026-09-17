import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { series, seriesSlug } from "@/content/series";
import { visibleWork } from "@/content/work";
import { terms } from "@/content/terms";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work/",
    "/lab/",
    "/experience/",
    "/mentorship/",
    "/insights/",
    "/insights/terms/",
    "/about/",
    "/resume/",
    ...series.map((s) => `/work/series/${seriesSlug(s.id)}/`),
    ...visibleWork.filter((w) => w.detail).map((w) => `/work/${w.slug}/`),
    ...terms.map((t) => `/insights/terms/${t.slug}/`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
