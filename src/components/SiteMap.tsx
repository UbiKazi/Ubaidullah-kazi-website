import { AppLink } from "@/lib/platform";
import { experience } from "@/content/experience";
import { programmes } from "@/content/mentorship";
import { featuredWork } from "@/content/work";
import s from "./SiteMap.module.css";

/** The site's mental model, rendered as a navigable tree. */
export function SiteMap() {
  const current = experience.filter((e) => e.era === "current" || e.id === "lodha").slice(0, 4);
  return (
    <div className={s.map}>
      <div className={s.root} aria-hidden="true">
        <span>Finance × Research × Strategy × GenAI</span>
      </div>
      <div className={s.branches}>
        <Branch title="Experience" href="/experience" blurb="Where the method was learned">
          <ul className={s.leaves}>
            {current.map((e) => (
              <li key={e.id}>
                <strong>{e.org}</strong>
                <span>{e.domain}</span>
              </li>
            ))}
          </ul>
        </Branch>
        <Branch title="Thinking" href="/insights" blurb="Where it gets written up">
          <ul className={s.leaves}>
            <li>
              <AppLink href="/insights">
                <strong>Articles</strong>
              </AppLink>
              <span>Long-form writing and external pieces</span>
            </li>
            <li>
              <AppLink href="/insights/terms">
                <strong>Term of the Week</strong>
              </AppLink>
              <span>Definitions tied to the news</span>
            </li>
          </ul>
        </Branch>
        <Branch title="Building" href="/work" blurb="The library it produces" primary>
          <ul className={s.leaves}>
            <li>
              <AppLink href="/work#featured">
                <strong>Featured</strong>
              </AppLink>
              <span>{featuredWork.length} pieces with full breakdowns</span>
            </li>
            <li>
              <AppLink href="/work#library">
                <strong>Archive</strong>
              </AppLink>
              <span>12 series, full documents in the library</span>
            </li>
            <li>
              <AppLink href="/lab">
                <strong>AI Lab</strong>
              </AppLink>
              <span>The pipeline behind them</span>
            </li>
          </ul>
        </Branch>
        <Branch title="Mentorship" href="/mentorship" blurb="Where it gets taught">
          <ul className={s.leaves}>
            {programmes.map((p) => (
              <li key={p.id}>
                <AppLink href={`/mentorship#${p.id}`}>
                  <strong>{p.name}</strong>
                </AppLink>
              </li>
            ))}
          </ul>
        </Branch>
      </div>
    </div>
  );
}

function Branch({
  title,
  href,
  blurb,
  children,
  primary,
}: {
  title: string;
  href: string;
  blurb: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <section className={`${s.branch} ${primary ? s.primary : ""}`} aria-label={title}>
      <AppLink href={href} className={s.branchHead}>
        <span className={s.branchTitle}>{title}</span>
        <span className={s.branchBlurb}>{blurb}</span>
      </AppLink>
      {children}
    </section>
  );
}
