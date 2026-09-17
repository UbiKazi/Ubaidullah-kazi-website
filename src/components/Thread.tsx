"use client";
import { useState } from "react";
import { AppLink } from "@/lib/platform";
import { thumbSrc } from "@/lib/assets";
import { threadNodes } from "./thread-data";
import s from "./Thread.module.css";

export function Thread({ compact }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const node = threadNodes[active];

  return (
    <div className={`${s.wrap} ${compact ? s.compact : ""}`}>
      <div className={s.method} aria-hidden="true">
        {["Gather", "Analyse", "Structure", "Communicate"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className={s.scroller}>
        <ol className={s.rail} aria-label="Ten kinds of analysis, one method">
          {threadNodes.map((n, i) => (
            <li key={n.id} className={s.node}>
              <button
                type="button"
                className={s.nodeButton}
                aria-pressed={i === active}
                aria-controls="thread-detail"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className={`${s.sheet} ${n.thumb ? s["sheet_" + n.thumb.orientation] : s.sheet_ai}`}>
                  {n.thumb ? (
                    // decorative: the label beside it carries the meaning
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumbSrc(n.thumb.id)} alt="" decoding="async" />
                  ) : (
                    <AiGlyph />
                  )}
                </span>
                <span className={s.dot} aria-hidden="true" />
                <span className={s.step}>{n.step}</span>
                <span className={s.example}>{n.example}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="thread-detail" className={s.detail} aria-live="polite">
        <p className={s.q}>
          <span className="label">The question</span>
          <span className={s.qText}>{node.question}</span>
        </p>
        <ul className={s.tools} aria-label="Tools used">
          {node.tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <AppLink href={node.href} className={s.go}>
          {node.id === "genai" ? "See how the pipeline works" : `Open the ${node.step.toLowerCase()}`}
        </AppLink>
      </div>
    </div>
  );
}

function AiGlyph() {
  return (
    <svg viewBox="0 0 80 100" width="100%" height="100%" aria-hidden="true">
      <rect x="0" y="0" width="80" height="100" fill="var(--band)" />
      {[18, 34, 50, 66, 82].map((y, i) => (
        <g key={y}>
          <rect x="14" y={y - 5} width="10" height="10" rx="2" fill={i === 3 ? "var(--gold)" : "#fbf8f3"} opacity={i === 3 ? 1 : 0.9} />
          <rect x="30" y={y - 2} width={i === 3 ? 30 : 36} height="4" rx="2" fill="#fbf8f3" opacity="0.55" />
          {i < 4 && <path d={`M19 ${y + 5} v6`} stroke="#fbf8f3" strokeWidth="1.5" opacity="0.6" />}
        </g>
      ))}
    </svg>
  );
}
