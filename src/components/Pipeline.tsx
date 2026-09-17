"use client";
import { useState } from "react";
import { pipeline } from "@/content/lab";
import s from "./Pipeline.module.css";

export function Pipeline({ interactive = true }: { interactive?: boolean }) {
  const [active, setActive] = useState(3);
  const step = pipeline[active];
  return (
    <div className={s.wrap}>
      <ol className={s.steps} role={interactive ? "tablist" : undefined} aria-label="How a piece gets made">
        {pipeline.map((p, i) => (
          <li key={p.id} className={`${s.step} ${p.id === "verify" ? s.human : ""}`} role={interactive ? "presentation" : undefined}>
            {interactive ? (
              <button
                type="button"
                role="tab"
                id={`pipe-tab-${p.id}`}
                aria-selected={i === active}
                aria-controls="pipe-panel"
                tabIndex={i === active ? 0 : -1}
                className={s.button}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                    e.preventDefault();
                    const n = (i + 1) % pipeline.length;
                    setActive(n);
                    document.getElementById(`pipe-tab-${pipeline[n].id}`)?.focus();
                  }
                  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    e.preventDefault();
                    const n = (i - 1 + pipeline.length) % pipeline.length;
                    setActive(n);
                    document.getElementById(`pipe-tab-${pipeline[n].id}`)?.focus();
                  }
                }}
              >
                <StepBody index={i} name={p.name} short={p.short} />
              </button>
            ) : (
              <div className={s.button}>
                <StepBody index={i} name={p.name} short={p.short} />
              </div>
            )}
          </li>
        ))}
      </ol>
      {interactive && (
        <div id="pipe-panel" role="tabpanel" aria-labelledby={`pipe-tab-${step.id}`} className={s.panel}>
          <p className={s.panelText}>{step.detail}</p>
          <ul className={s.examples}>
            {step.examples.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      <p className={s.principle}>
        <span>AI accelerates the work.</span> <span>Human judgement validates it.</span>
      </p>
    </div>
  );
}

function StepBody({ index, name, short }: { index: number; name: string; short: string }) {
  return (
    <>
      <span className={s.num} aria-hidden="true">
        {index + 1}
      </span>
      <span className={s.name}>{name}</span>
      <span className={s.short}>{short}</span>
    </>
  );
}
