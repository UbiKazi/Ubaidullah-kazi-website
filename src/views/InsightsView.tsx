import { articles } from "@/content/lab";
import { terms } from "@/content/terms";
import { focusDomains } from "@/content/profile";
import { formatMonth } from "@/lib/format";
import { AppLink } from "@/lib/platform";
import { ButtonLink, PageIntro, SectionHead, Tag } from "@/components/ui";
import { TermCard } from "@/components/TermCard";
import s from "./Pages.module.css";

export function InsightsView() {
  const [latest, ...others] = terms;
  return (
    <>
      <PageIntro label="Insights" title="Thinking in public">
        <p>
          Short explainers, weekly terms and long-form writing on finance, corporate law and the industries I follow
          most closely.
        </p>
      </PageIntro>

      <section className={`container ${s.block}`} aria-labelledby="tow-h">
        <SectionHead
          id="tow-h"
          label="Term of the Week"
          title="This week's term"
          action={<ButtonLink href="/insights/terms" variant="secondary">All {terms.length} terms</ButtonLink>}
        />
        <div className={s.termLead}>
          <TermCard term={latest} size="large" />
          <ul className={s.termMini}>
            {others.slice(0, 4).map((t) => (
              <li key={t.slug}>
                <AppLink href={`/insights/terms/${t.slug}`}>
                  <span className={s.termMiniDomain}>{t.domain}</span>
                  <strong>{t.term}</strong>
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`container ${s.block}`} aria-labelledby="art-h">
        <SectionHead
          id="art-h"
          label="Writing"
          title="Articles"
          intro="Long-form pieces built on the Term of the Week research — conceptual foundation, industry context, a case study and an outlook."
        />
        {articles.length === 0 ? (
          <div className={s.emptyPanel}>
            <p className={s.emptyTitle}>The first long-form pieces are in preparation.</p>
            <p>They will cover these domains. Until then, the terms above are the best place to start.</p>
            <ul className={s.pillList}>
              {focusDomains.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={s.articleList}>
            {articles.map((a) => (
              <li key={a.slug} className={s.article}>
                <p className={s.articleMeta}>
                  {a.category} — {formatMonth(a.date)}
                  {a.readingTime ? ` — ${a.readingTime}` : ""}
                </p>
                <h3>
                  <AppLink href={a.url ?? `/insights/${a.slug}`} {...(a.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {a.title}
                  </AppLink>
                </h3>
                <p>{a.summary}</p>
                <div className={s.tagRow}>
                  {a.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`container ${s.block} ${s.split}`} aria-labelledby="pub-h">
        <SectionHead
          id="pub-h"
          label="Publications"
          title="Recurring research formats"
          intro="The Ledgerline, Ecospective, Dealogue and the other series are published as fixed-format editions. They live in the work library."
        />
        <div className={s.panel}>
          <h3 className={s.panelTitle}>Commercial awareness, as a community</h3>
          <p>
            I also run a commercial-awareness newsletter society — the same habit of summarising the week&apos;s
            business news, shared with a membership.
          </p>
          <ButtonLink href="/work/series/ledgerline" variant="quiet">
            Read The Ledgerline
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
