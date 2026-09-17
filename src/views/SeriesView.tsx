import type { Series } from "@/content/types";
import { disciplines, series as allSeries, seriesSlug } from "@/content/series";
import { visibleWork } from "@/content/work";
import { resolveSeriesCta } from "@/lib/cta";
import { formatLabel } from "@/lib/format";
import { AppLink } from "@/lib/platform";
import { DocumentCta, PageIntro } from "@/components/ui";
import { Masthead } from "@/components/SeriesShelf";
import { LibraryExplorer } from "@/components/LibraryExplorer";
import s from "./Pages.module.css";

export function SeriesView({ series }: { series: Series }) {
  const items = visibleWork.filter((w) => w.series === series.id);
  const idx = allSeries.findIndex((x) => x.id === series.id);
  const prev = allSeries[(idx - 1 + allSeries.length) % allSeries.length];
  const next = allSeries[(idx + 1) % allSeries.length];
  return (
    <>
      <p className={`container ${s.crumbs}`}>
        <AppLink href="/work">Work library</AppLink> <span aria-hidden="true">/</span> Series
      </p>
      <PageIntro label={series.kind} title={series.name}>
        <p>{series.description}</p>
      </PageIntro>
      <div className={`container ${s.seriesFacts}`}>
        <div className={s.mastheadBox} data-identity={series.identity}>
          <Masthead series={series} />
        </div>
        <dl className={s.facts}>
          <div>
            <dt>Format</dt>
            <dd>
              {formatLabel[series.format]} — {series.method}
            </dd>
          </div>
          {series.countLabel && (
            <div>
              <dt>Archive</dt>
              <dd>{series.countLabel}</dd>
            </div>
          )}
          <div>
            <dt>Disciplines</dt>
            <dd>{series.disciplines.map((d) => disciplines.find((x) => x.id === d)?.label).join(", ")}</dd>
          </div>
          <div>
            <dt>On this site</dt>
            <dd>
              {items.length} {items.length === 1 ? "edition" : "editions"}
            </dd>
          </div>
        </dl>
        <DocumentCta cta={resolveSeriesCta(series.id)} />
      </div>
      <section className={`container ${s.block}`} aria-label={`${series.name} editions`}>
        <LibraryExplorer fixedSeries={series.id} />
      </section>
      <nav className={`container ${s.pager}`} aria-label="Other series">
        <AppLink href={`/work/series/${seriesSlug(prev.id)}`}>
          <small>Previous series</small>
          {prev.name}
        </AppLink>
        <AppLink href={`/work/series/${seriesSlug(next.id)}`} className={s.pagerNext}>
          <small>Next series</small>
          {next.name}
        </AppLink>
      </nav>
    </>
  );
}
