"use client";
import type { WorkItem } from "@/content/types";
import { seriesById } from "@/content/series";
import { AppLink } from "@/lib/platform";
import { formatLabel, formatMonth } from "@/lib/format";
import { ClassificationBadge, DocThumb, MetricList } from "./ui";
import s from "./WorkCard.module.css";

interface Props {
  item: WorkItem;
  /** Items without a detail page open a quick-look panel instead */
  onQuickLook?: (item: WorkItem) => void;
  size?: "default" | "large";
  priority?: boolean;
}

export function WorkCard({ item, onQuickLook, size = "default", priority }: Props) {
  const series = seriesById[item.series];
  const hasPage = Boolean(item.detail);
  const orientation = item.thumbnail.orientation;
  const title = (
    <>
      <span className={s.title}>{item.title}</span>
      <span className={s.subject}>{item.subject}</span>
    </>
  );

  return (
    <article className={`${s.card} ${s[orientation]} ${size === "large" ? s.large : ""}`} data-format={item.format}>
      <div className={s.desk}>
        <DocThumb thumb={item.thumbnail} simulated={item.classification === "simulated"} priority={priority} />
        {item.companion?.thumbnail && (
          <DocThumb thumb={item.companion.thumbnail} className={s.companion} />
        )}
        <span className={s.formatChip}>
          {formatLabel[item.format]}
          {item.pages && item.pages > 1 ? `, ${item.pages} pp` : ""}
          {item.companion ? ` + ${formatLabel[item.companion.format].toLowerCase()}` : ""}
        </span>
      </div>
      <div className={s.body}>
        <p className={s.series}>
          <span className={s.seriesName}>{series.name}</span>
          <span className={s.date}>{formatMonth(item.date)}</span>
        </p>
        <h3 className={s.heading}>
          {hasPage ? (
            <AppLink href={`/work/${item.slug}`} className={s.stretch}>
              {title}
            </AppLink>
          ) : (
            <button type="button" className={s.stretch} onClick={() => onQuickLook?.(item)} aria-haspopup="dialog">
              {title}
            </button>
          )}
        </h3>
        <p className={s.summary}>{item.summary}</p>
        {item.metrics && size === "large" && <MetricList items={item.metrics.slice(0, 3)} compact />}
        <div className={s.foot}>
          <ClassificationBadge value={item.classification} />
          <span className={s.cue} aria-hidden="true">
            {hasPage ? "Read the breakdown" : "Quick look"}
          </span>
        </div>
      </div>
    </article>
  );
}
