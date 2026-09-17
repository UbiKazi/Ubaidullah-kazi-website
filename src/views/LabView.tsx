import { aiMistakes, systems } from "@/content/lab";
import { seriesById, seriesSlug } from "@/content/series";
import { skills } from "@/content/profile";
import { AppLink } from "@/lib/platform";
import { ButtonLink, PageIntro, SectionHead } from "@/components/ui";
import { Pipeline } from "@/components/Pipeline";
import s from "./Pages.module.css";

export function LabView() {
  const genai = skills.find((g) => g.group === "Generative AI");
  return (
    <>
      <PageIntro label="AI Lab" title="How GenAI fits into the work">
        <p>
          I use language models to move faster through research, structure and first drafts — and I build checks
          around them, because a confident wrong number is worse than no number. This page shows the method, where it
          fails, and the systems it runs inside.
        </p>
      </PageIntro>

      <section className={`container ${s.block}`} aria-labelledby="pipe-h">
        <SectionHead id="pipe-h" label="The pipeline" title="Five stages from source to published page" intro="Select a stage to see what happens there." />
        <Pipeline />
      </section>

      <section className={`container ${s.block}`} aria-labelledby="fail-h">
        <SectionHead
          id="fail-h"
          label="Where AI gets it wrong"
          title="Errors I plan for — and teach others to catch"
          intro="In the AI-finance programme I teach, every session includes a deliberate, pre-tested mistake. These are the four, and the check that exposes each."
        />
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">What the model produced</th>
                <th scope="col">What caught it</th>
              </tr>
            </thead>
            <tbody>
              {aiMistakes.map((m) => (
                <tr key={m.where}>
                  <th scope="row">{m.where}</th>
                  <td>{m.what}</td>
                  <td>{m.caughtBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`container ${s.block}`} aria-labelledby="sys-h">
        <SectionHead
          id="sys-h"
          label="Systems"
          title="The production systems behind the library"
          intro="Each series runs on a repeatable build: a fixed format, generated content, and automated checks before human review."
        />
        <ul className={s.systemGrid}>
          {systems.map((x) => (
            <li key={x.name} className={s.system}>
              <h3>{x.name}</h3>
              <p className={s.systemWhat}>{x.what}</p>
              <p className={s.systemHow}>{x.how}</p>
              <p className={s.systemFoot}>
                {x.scale && <span className="tabular">{x.scale}</span>}
                {x.series ? (
                  <AppLink href={`/work/series/${seriesSlug(x.series)}`}>{seriesById[x.series].name}</AppLink>
                ) : (
                  <AppLink href="/insights/terms">See the terms</AppLink>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${s.block} ${s.split}`} aria-labelledby="eval-h">
        <div>
          <SectionHead
            id="eval-h"
            label="Evaluating models"
            title="On the other side of the model"
            intro="As a freelance evaluator for Uber AI Solutions, I assess LLM responses for groundedness, completeness and accuracy — the same standards I apply to my own AI-assisted work."
          />
          <ButtonLink href="/experience" variant="secondary">
            See the experience
          </ButtonLink>
        </div>
        {genai && (
          <div className={s.panel}>
            <h3 className={s.panelTitle}>Tools and practices</h3>
            <ul className={s.pillList}>
              {genai.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className={s.note}>
              I am a finance and research professional who builds with AI, not an AI engineer.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
