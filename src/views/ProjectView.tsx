import type { WorkItem } from "@/content/types";
import { featuredWork } from "@/content/work";
import { seriesById, seriesSlug } from "@/content/series";
import { resolveDocumentCta } from "@/lib/cta";
import { formatLabel, formatMonth } from "@/lib/format";
import { AppLink } from "@/lib/platform";
import { ClassificationBadge, Disclaimer, DocThumb, DocumentCta, MetricList, Tag } from "@/components/ui";
import s from "./Project.module.css";

export function ProjectView({ item }: { item: WorkItem }) {
  const d = item.detail!;
  const series = seriesById[item.series];
  const cta = resolveDocumentCta(item.documentUrl, item.series, formatLabel[item.format].toLowerCase());
  const i = featuredWork.findIndex((w) => w.slug === item.slug);
  const next = featuredWork[(i + 1) % featuredWork.length];

  return (
    <article className={s.page}>
      <div className={`container ${s.crumbs}`}>
        <AppLink href="/work">Work library</AppLink> <span aria-hidden="true">/</span>{" "}
        <AppLink href={`/work/series/${seriesSlug(series.id)}`}>{series.name}</AppLink>
      </div>

      <header className={`container ${s.header}`}>
        <div className={s.headText}>
          <p className={s.meta}>
            <span className={s.seriesName}>{series.name}</span>
            <span>
              {formatLabel[item.format]}
              {item.pages ? `, ${item.pages} ${item.pages === 1 ? "page" : "pages"}` : ""}
            </span>
            <span>{formatMonth(item.date)}</span>
          </p>
          <h1 className={s.title}>{item.title}</h1>
          <p className={s.subject}>{item.subject}</p>
          <p className={s.summary}>{item.summary}</p>
          <div className={s.badges}>
            <ClassificationBadge value={item.classification} />
            {item.sector && <Tag tone="gold">{item.sector}</Tag>}
            {item.geography && <Tag tone="gold">{item.geography}</Tag>}
          </div>
          {item.metrics && (
            <div className={s.metrics}>
              <MetricList items={item.metrics} />
            </div>
          )}
        </div>
        <div className={s.headThumb}>
          <DocThumb thumb={item.thumbnail} simulated={item.classification === "simulated"} priority />
        </div>
      </header>

      <div className={`container ${s.body}`}>
        <div className={s.main}>
          <section className={s.sec} aria-labelledby="ctx">
            <h2 id="ctx" className={s.h2}>
              <span className={s.secNum}>1</span>Context
            </h2>
            <p className={s.lede}>{d.context}</p>
          </section>

          <section className={s.sec} aria-labelledby="appr">
            <h2 id="appr" className={s.h2}>
              <span className={s.secNum}>2</span>Approach
            </h2>
            <ol className={s.approach}>
              {d.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </section>

          <section className={s.sec} aria-labelledby="areas">
            <h2 id="areas" className={s.h2}>
              <span className={s.secNum}>3</span>Analytical areas
            </h2>
            <ul className={s.areas}>
              {d.analyticalAreas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          <section className={s.sec} aria-labelledby="ins">
            <h2 id="ins" className={s.h2}>
              <span className={s.secNum}>4</span>What the analysis found
            </h2>
            <div className={s.insights}>
              {d.insights.map((x) => (
                <div key={x.title} className={s.insight}>
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                </div>
              ))}
            </div>
          </section>

          {(d.pages?.length || item.companion?.thumbnail) && (
            <section className={s.sec} aria-labelledby="inside">
              <h2 id="inside" className={s.h2}>
                <span className={s.secNum}>5</span>Inside the document
              </h2>
              <ul className={s.pages}>
                {d.pages?.map((p) => (
                  <li key={p.id} className={p.orientation === "landscape" ? s.pageWide : undefined}>
                    <DocThumb thumb={p} />
                  </li>
                ))}
                {item.companion?.thumbnail && (
                  <li className={s.pageWide}>
                    <DocThumb thumb={item.companion.thumbnail} />
                    <p className={s.caption}>{item.companion.label} — preview of the DCF tab</p>
                  </li>
                )}
              </ul>
            </section>
          )}

          <section className={s.sec} aria-labelledby="tags">
            <h2 id="tags" className="visually-hidden">
              Topics
            </h2>
            <div className={s.tags}>
              {item.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </section>
        </div>

        <aside className={s.aside} aria-label="Document">
          <div className={s.docBox}>
            <p className={s.docLabel}>The full document</p>
            <p className={s.docName}>
              {item.title} — {formatLabel[item.format]}
            </p>
            <DocumentCta cta={cta} />
            {item.companion && (
              <div className={s.companion}>
                <p className={s.docName}>{item.companion.label}</p>
                <DocumentCta cta={resolveDocumentCta(item.companion.documentUrl, item.series, "model")} variant="secondary" />
              </div>
            )}
            {d.sources && (
              <p className={s.sources}>
                <strong>Sources.</strong> {d.sources}
              </p>
            )}
            <Disclaimer k={item.disclaimer} />
          </div>
        </aside>
      </div>

      <nav className={`container ${s.next}`} aria-label="Next featured piece">
        <AppLink href={`/work/${next.slug}`} className={s.nextLink}>
          <small>Next featured piece</small>
          <span>
            {next.title} <em>— {seriesById[next.series].name}</em>
          </span>
        </AppLink>
      </nav>

      {cta.kind !== "request" && (
        <div className={s.mobileBar}>
          <DocumentCta cta={cta} />
        </div>
      )}
    </article>
  );
}
