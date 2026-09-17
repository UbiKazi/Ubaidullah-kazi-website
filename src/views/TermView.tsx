import type { Term } from "@/content/types";
import { terms } from "@/content/terms";
import { formatMonth } from "@/lib/format";
import { AppLink } from "@/lib/platform";
import s from "./Pages.module.css";

export function TermView({ term }: { term: Term }) {
  const i = terms.findIndex((t) => t.slug === term.slug);
  const next = terms[(i + 1) % terms.length];
  return (
    <article className={`container ${s.termPage}`}>
      <p className={s.crumbs}>
        <AppLink href="/insights">Insights</AppLink> <span aria-hidden="true">/</span>{" "}
        <AppLink href="/insights/terms">Term of the Week</AppLink>
      </p>
      <div className={s.termSheet}>
        <p className={s.termMeta}>
          <span>{term.domain}</span>
          {term.date && <span>{formatMonth(term.date)}</span>}
        </p>
        <h1 className={s.termTitle}>{term.term}</h1>
        <p className={s.termDef}>{term.definition}</p>
        <dl className={s.termBlocks}>
          <div>
            <dt>Why it matters</dt>
            <dd>{term.whyItMatters}</dd>
          </div>
          <div>
            <dt>Example</dt>
            <dd>{term.example}</dd>
          </div>
          <div>
            <dt>Related concepts</dt>
            <dd>
              <ul className={s.pillList}>
                {term.related.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
        <p className={s.termSource}>Source: {term.source}. General explanation, not legal, financial or investment advice.</p>
      </div>
      <nav className={s.pager} aria-label="More terms">
        <AppLink href="/insights/terms">
          <small>Back to</small>All terms
        </AppLink>
        <AppLink href={`/insights/terms/${next.slug}`} className={s.pagerNext}>
          <small>Next term</small>
          {next.term}
        </AppLink>
      </nav>
    </article>
  );
}
