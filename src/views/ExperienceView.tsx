import { education } from "@/content/experience";
import { PageIntro, SectionHead } from "@/components/ui";
import { Timeline } from "@/components/Timeline";
import s from "./Pages.module.css";

export function ExperienceView() {
  return (
    <>
      <PageIntro label="Experience" title="From law to finance to AI — one analytical habit">
        <p>
          Legal internships taught me to read closely and draft precisely. Markets and strategy work taught me to
          quantify. Today I combine both with GenAI. Open any role to see the evidence behind it.
        </p>
      </PageIntro>
      <section className={`container ${s.block}`}>
        <Timeline />
      </section>
      <section className={`container ${s.block}`} aria-labelledby="edu-h">
        <SectionHead id="edu-h" label="Education" title="Two degrees, two disciplines" />
        <ul className={s.eduGrid}>
          {education.map((e) => (
            <li key={e.institution} className={s.edu}>
              <p className={s.eduPeriod}>{e.period}</p>
              <h3>{e.institution}</h3>
              <p>{e.degree}</p>
              {e.detail && <p className={s.eduDetail}>{e.detail}</p>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
