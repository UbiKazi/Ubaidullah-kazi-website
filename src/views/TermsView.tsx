"use client";
import { useState } from "react";
import { terms } from "@/content/terms";
import { PageIntro } from "@/components/ui";
import { TermCard } from "@/components/TermCard";
import s from "./Pages.module.css";

export function TermsView() {
  const domains = Array.from(new Set(terms.map((t) => t.domain)));
  const [domain, setDomain] = useState<string>("All");
  const list = domain === "All" ? terms : terms.filter((t) => t.domain === domain);
  return (
    <>
      <PageIntro label="Term of the Week" title="A glossary built from the news">
        <p>
          Each term is defined in plain English, tied to why it matters, and anchored to a real example — usually the
          story or document where I first needed it.
        </p>
      </PageIntro>
      <div className={`container ${s.block}`}>
        <div className={s.filterRow} role="group" aria-label="Filter by domain">
          {["All", ...domains].map((d) => (
            <button key={d} type="button" aria-pressed={domain === d} onClick={() => setDomain(d)}>
              {d}
            </button>
          ))}
        </div>
        <ul className={s.termGrid}>
          {list.map((t) => (
            <li key={t.slug}>
              <TermCard term={t} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
