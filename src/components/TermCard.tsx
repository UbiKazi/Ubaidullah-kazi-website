"use client";
import { useState } from "react";
import type { Term } from "@/content/types";
import { AppLink } from "@/lib/platform";
import s from "./TermCard.module.css";

export function TermCard({ term, link = true, size = "default" }: { term: Term; link?: boolean; size?: "default" | "large" }) {
  const [side, setSide] = useState<"what" | "why">("what");
  return (
    <article className={`${s.card} ${size === "large" ? s.large : ""}`}>
      <header className={s.head}>
        <span className={s.kicker}>Term of the Week</span>
        <span className={s.domain}>{term.domain}</span>
      </header>
      <h3 className={s.term}>
        {link ? <AppLink href={`/insights/terms/${term.slug}`}>{term.term}</AppLink> : term.term}
      </h3>
      <div className={s.switch} role="tablist" aria-label={`${term.term} views`}>
        <button type="button" role="tab" aria-selected={side === "what"} onClick={() => setSide("what")}>
          What it is
        </button>
        <button type="button" role="tab" aria-selected={side === "why"} onClick={() => setSide("why")}>
          Why it matters
        </button>
      </div>
      <div className={s.body} role="tabpanel">
        {side === "what" ? (
          <>
            <p className={s.def}>{term.definition}</p>
            <p className={s.example}>
              <strong>Example.</strong> {term.example}
            </p>
          </>
        ) : (
          <>
            <p className={s.def}>{term.whyItMatters}</p>
            <p className={s.related}>
              <strong>Related:</strong> {term.related.join(", ")}
            </p>
          </>
        )}
      </div>
      <footer className={s.foot}>From {term.source}</footer>
    </article>
  );
}
