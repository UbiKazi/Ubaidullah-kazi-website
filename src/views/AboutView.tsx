import { site } from "@/config/site";
import { focusDomains, interests } from "@/content/profile";
import { ButtonLink, PageIntro } from "@/components/ui";
import s from "./Pages.module.css";

const blocks = [
  {
    q: "Who I am",
    a: "An IIM Indore MBA with a law degree from Durham, working in sector intelligence at CRISIL Ratings. I started in law, moved through markets and strategy, and now work where finance, research and GenAI meet.",
  },
  {
    q: "What I work on",
    a: "Company valuation, transactions, industry structure and the legal side of business — the questions an investor, banker or strategist has to answer before making a call.",
  },
  {
    q: "How I think",
    a: "Start from the source, choose a structure that forces completeness, and say plainly when the numbers disagree with the consensus. A clear page beats a long one.",
  },
  {
    q: "What I build",
    a: "Repeatable research formats — pitchbooks, primers, trackers, memos — and the GenAI pipelines that produce and check them. I also design finance programmes that teach others to do the same.",
  },
  {
    q: "What I'm exploring",
    a: "How far structured prompting and automated checks can go before human judgement has to take over — and the industries I write about: Islamic finance, maritime and motorsport.",
  },
];

export function AboutView() {
  return (
    <>
      <PageIntro label="About" title="The person behind the library" />
      <div className={`container ${s.aboutGrid}`}>
        <aside className={s.idCard} aria-label="Profile summary">
          <div className={s.monogram} aria-hidden="true">
            {site.monogram}
          </div>
          <p className={s.idName}>{site.name}</p>
          <p className={s.idLine}>Goes by Ubi</p>
          <dl className={s.idFacts}>
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>MBA, IIM Indore · LLB (Hons), Durham</dd>
            </div>
            <div>
              <dt>Writes about</dt>
              <dd>{focusDomains.join(", ")}</dd>
            </div>
          </dl>
          <div className={s.idActions}>
            <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
            <ButtonLink href={site.linkedin} variant="secondary" external>
              LinkedIn
            </ButtonLink>
          </div>
        </aside>
        <div className={s.aboutBlocks}>
          {blocks.map((b) => (
            <section key={b.q} className={s.aboutBlock}>
              <h2>{b.q}</h2>
              <p>{b.a}</p>
            </section>
          ))}
          <section className={s.aboutBlock}>
            <h2>Outside work</h2>
            <ul className={s.interests}>
              {interests.map((i) => (
                <li key={i.name}>
                  <strong>{i.name}</strong>
                  <span>{i.note}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
