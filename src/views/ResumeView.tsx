import { site } from "@/config/site";
import { education, experience, projects } from "@/content/experience";
import { credentials, skills } from "@/content/profile";
import { formatPeriod } from "@/lib/format";
import { ButtonLink, PageIntro } from "@/components/ui";
import s from "./Resume.module.css";

const credOrder = ["recognition", "publication", "certification", "diploma", "academic", "competition"] as const;
const credLabel: Record<(typeof credOrder)[number], string> = {
  recognition: "Recognition",
  publication: "Publication",
  certification: "Certifications",
  diploma: "Diplomas",
  academic: "Academic",
  competition: "Competitions",
};

export function ResumeView() {
  return (
    <>
      <PageIntro label="Résumé" title="The short version">
        <p>A concise record. The rest of the site holds the evidence; the formal CV holds the full detail.</p>
      </PageIntro>
      <div className={`container ${s.actions} no-print`}>
        {site.cvUrl ? (
          <ButtonLink href={site.cvUrl} external>
            Download CV (PDF)
          </ButtonLink>
        ) : (
          <ButtonLink href={`mailto:${site.email}?subject=CV%20request`}>Request the full CV</ButtonLink>
        )}
        <ButtonLink href={site.linkedin} variant="secondary" external>
          LinkedIn profile
        </ButtonLink>
      </div>

      <div className={`container ${s.sheet}`}>
        <header className={s.top}>
          <div>
            <h2 className={s.name}>{site.name}</h2>
            <p className={s.tag}>Finance, research, strategy and GenAI</p>
          </div>
          <p className={s.contact}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.location}</span>
          </p>
        </header>

        <section className={s.sec} aria-labelledby="r-exp">
          <h3 id="r-exp" className={s.h}>
            Experience
          </h3>
          {experience.map((e) => (
            <div key={e.id} className={s.row}>
              <div className={s.when}>{e.showDates ? formatPeriod(e.start, e.end) : "Current"}</div>
              <div>
                <p className={s.what}>
                  <strong>{e.org}</strong> — {e.role}
                  {e.location ? `, ${e.location}` : ""}
                </p>
                {e.highlights.length > 0 ? (
                  <ul className={s.points}>
                    {e.highlights.slice(0, 3).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={s.plain}>{e.summary}</p>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className={s.sec} aria-labelledby="r-edu">
          <h3 id="r-edu" className={s.h}>
            Education
          </h3>
          {education.map((e) => (
            <div key={e.institution} className={s.row}>
              <div className={s.when}>{e.period}</div>
              <p className={s.what}>
                <strong>{e.institution}</strong> — {e.degree}
                {e.detail ? `; ${e.detail}` : ""}
              </p>
            </div>
          ))}
        </section>

        <section className={s.sec} aria-labelledby="r-proj">
          <h3 id="r-proj" className={s.h}>
            Selected projects and research
          </h3>
          {projects.map((p) => (
            <div key={p.title} className={s.row}>
              <div className={s.when}>{p.date}</div>
              <div>
                <p className={s.what}>
                  <strong>{p.title}</strong> — {p.context}
                </p>
                <ul className={s.points}>
                  {p.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className={s.sec} aria-labelledby="r-cred">
          <h3 id="r-cred" className={s.h}>
            Credentials and achievements
          </h3>
          <div className={s.credGrid}>
            {credOrder.map((t) => {
              const list = credentials.filter((c) => c.type === t);
              if (!list.length) return null;
              return (
                <div key={t}>
                  <h4 className={s.credHead}>{credLabel[t]}</h4>
                  <ul className={s.credList}>
                    {list.map((c) => (
                      <li key={c.name}>
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noopener noreferrer">
                            {c.name}
                          </a>
                        ) : (
                          <span>{c.name}</span>
                        )}
                        <small>
                          {[c.issuer, c.year, c.detail].filter(Boolean).join(" — ")}
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className={s.sec} aria-labelledby="r-skills">
          <h3 id="r-skills" className={s.h}>
            Skills
          </h3>
          <dl className={s.skills}>
            {skills.map((g) => (
              <div key={g.group}>
                <dt>{g.group}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
