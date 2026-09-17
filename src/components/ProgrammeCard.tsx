import type { Programme } from "@/content/types";
import { MetricList } from "./ui";
import s from "./ProgrammeCard.module.css";

export function ProgrammeFlow({ flow, label }: { flow: string[]; label: string }) {
  return (
    <ol className={s.flow} aria-label={`${label} sequence`}>
      {flow.map((f, i) => (
        <li key={f}>
          <span className={s.flowNum} aria-hidden="true">
            {i + 1}
          </span>
          {f}
        </li>
      ))}
    </ol>
  );
}

export function ProgrammeCard({ p, full }: { p: Programme; full?: boolean }) {
  return (
    <article className={`${s.card} ${full ? s.full : ""}`} id={p.id}>
      <header className={s.head}>
        <span className={s.short}>{p.shortName}</span>
        <h3 className={s.name}>{p.name}</h3>
        <p className={s.format}>{p.format}</p>
      </header>
      <ProgrammeFlow flow={p.flow} label={p.name} />
      <p className={s.desc}>{p.description}</p>
      {full && (
        <div className={s.detail}>
          <div>
            <h4 className={s.sub}>What I built for it</h4>
            <ul className={s.built}>
              {p.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className={s.side}>
            {p.benchmarks && (
              <div>
                <h4 className={s.sub}>Model-answer benchmarks</h4>
                <MetricList items={p.benchmarks} />
              </div>
            )}
            {p.verificationNote && (
              <blockquote className={s.note}>
                <p>{p.verificationNote}</p>
              </blockquote>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
