"use client";
import { useEffect, useRef } from "react";
import type { WorkItem } from "@/content/types";
import { seriesById, seriesSlug } from "@/content/series";
import { resolveDocumentCta } from "@/lib/cta";
import { formatLabel, formatMonth } from "@/lib/format";
import { AppLink } from "@/lib/platform";
import { ClassificationBadge, Disclaimer, DocThumb, DocumentCta, MetricList, Tag } from "./ui";
import s from "./QuickLook.module.css";

export function QuickLook({ item, onClose }: { item: WorkItem | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);

  const series = item ? seriesById[item.series] : null;

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-labelledby="ql-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {item && series && (
        <div className={s.panel}>
          <button type="button" className={s.close} onClick={onClose}>
            <span className="visually-hidden">Close</span>
            <span aria-hidden="true">×</span>
          </button>
          <div className={s.thumb}>
            <DocThumb thumb={item.thumbnail} simulated={item.classification === "simulated"} priority />
          </div>
          <div className={s.body}>
            <p className={s.series}>
              <AppLink href={`/work/series/${seriesSlug(series.id)}`}>{series.name}</AppLink>
              <span>
                {formatLabel[item.format]}
                {item.pages && item.pages > 1 ? `, ${item.pages} pages` : ""} — {formatMonth(item.date)}
              </span>
            </p>
            <h2 id="ql-title" className={s.title}>
              {item.title}
            </h2>
            <p className={s.subject}>{item.subject}</p>
            <p className={s.summary}>{item.summary}</p>
            {item.metrics && <MetricList items={item.metrics} />}
            <div className={s.tags}>
              {item.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className={s.actions}>
              <DocumentCta cta={resolveDocumentCta(item.documentUrl, item.series)} />
              <ClassificationBadge value={item.classification} />
            </div>
            <Disclaimer k={item.disclaimer} />
          </div>
        </div>
      )}
    </dialog>
  );
}
