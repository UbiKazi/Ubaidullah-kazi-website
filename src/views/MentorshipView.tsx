import { programmes } from "@/content/mentorship";
import { PageIntro, SectionHead } from "@/components/ui";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import s from "./Pages.module.css";

const principles = [
  { title: "Build the model answer first", body: "The modelling programmes come with solved benchmarks I built, so grading is consistent and participants can check their own mechanics." },
  { title: "Let people choose their track", body: "Dual-track deliverables — a model or a report, a buyout or a venture round — match the work to the role each participant wants." },
  { title: "Teach verification, not just tools", body: "AI sessions include a planned failure, so checking outputs against primary sources becomes a habit rather than an afterthought." },
  { title: "Finish with something usable", body: "Programmes end in portfolio-ready deliverables, with guides for turning them into CV content." },
];

export function MentorshipView() {
  return (
    <>
      <PageIntro label="Mentorship" title="Turning concepts into applied work">
        <p>
          I design and deliver weekend live-project programmes in equity research, private equity and venture capital,
          and AI-enabled financial analysis — writing the curriculum, the exercises, the grading rubric and the model
          answers.
        </p>
      </PageIntro>

      <section className={`container ${s.block}`} aria-labelledby="how-h">
        <SectionHead id="how-h" label="Approach" title="How the programmes are built" />
        <ul className={s.principles}>
          {principles.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${s.block}`} aria-labelledby="prog-h">
        <SectionHead id="prog-h" label="Programmes" title="Three programmes, fifteen sessions" />
        <div className={s.programmeStack}>
          {programmes.map((p) => (
            <ProgrammeCard key={p.id} p={p} full />
          ))}
        </div>
        <p className={s.fine}>Model answers are educational material built on public company data and fictitious capstone cases.</p>
      </section>
    </>
  );
}
