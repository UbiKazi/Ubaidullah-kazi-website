"use client";
import { useState } from "react";
import { eras, experience } from "@/content/experience";
import type { ExperienceEntry } from "@/content/types";
import { formatPeriod } from "@/lib/format";
import { AppLink } from "@/lib/platform";
import { MetricList } from "./ui";
import s from "./Timeline.module.css";

export function Timeline() {
  const [open, setOpen] = useState<Set<string>>(() => new Set(["crisil", "mentorship", "uber-ai"]));
  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const allOpen = open.size === experience.length;

  return (
    <div className={s.wrap}>
      <div className={s.controls}>
        <button
          type="button"
          className={s.expandAll}
          onClick={() => setOpen(allOpen ? new Set() : new Set(experience.map((e) => e.id)))}
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
      {eras.map((era) => (
        <section key={era.id} className={s.era} aria-labelledby={`era-${era.id}`}>
          <header className={s.eraHead}>
            <span className={s.eraWhen}>{era.label}</span>
            <h2 id={`era-${era.id}`} className={s.eraTitle}>
              {era.title}
            </h2>
          </header>
          <ol className={s.list}>
            {experience
              .filter((e) => e.era === era.id)
              .map((e) => (
                <Entry key={e.id} entry={e} open={open.has(e.id)} onToggle={() => toggle(e.id)} />
              ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

function Entry({ entry: e, open, onToggle }: { entry: ExperienceEntry; open: boolean; onToggle: () => void }) {
  const hasMore = e.highlights.length > 0 || (e.metrics?.length ?? 0) > 0;
  const period = e.showDates ? formatPeriod(e.start, e.end) : "Current";
  return (
    <li className={`${s.entry} ${open ? s.open : ""}`}>
      <span className={s.node} aria-hidden="true" />
      <div className={s.card}>
        <div className={s.top}>
          <div>
            <h3 className={s.org}>{e.org}</h3>
            <p className={s.role}>{e.role}</p>
          </div>
          <p className={s.meta}>
            <span className="tabular">{period}</span>
            {e.location && <span>{e.location}</span>}
            <span className={s.domain}>{e.domain}</span>
          </p>
        </div>
        <p className={s.summary}>{e.summary}</p>
        {hasMore && (
          <button type="button" className={s.toggle} aria-expanded={open} aria-controls={`xp-${e.id}`} onClick={onToggle}>
            {open ? "Hide evidence" : "Show evidence"}
            <span className={s.chev} aria-hidden="true" />
          </button>
        )}
        <div id={`xp-${e.id}`} className={s.more} hidden={!open || !hasMore}>
          {e.metrics && <MetricList items={e.metrics} compact />}
          {e.highlights.length > 0 && (
            <ul className={s.highlights}>
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={s.foot}>
          <ul className={s.methods} aria-label="Methods">
            {e.methods.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          {e.link && (
            <AppLink href={e.link.href} className={s.link}>
              {e.link.label}
            </AppLink>
          )}
        </div>
      </div>
    </li>
  );
}
