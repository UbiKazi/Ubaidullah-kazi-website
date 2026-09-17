import type { ReactNode } from "react";
import { AppLink } from "@/lib/platform";
import { thumbSrc } from "@/lib/assets";
import { classificationMeta, disclaimers } from "@/lib/classification";
import type { Cta } from "@/lib/cta";
import type { Classification, DisclaimerKey, Thumb } from "@/content/types";
import s from "./ui.module.css";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
}) {
  const cls = `${s.btn} ${s[variant]}`;
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <ExternalIcon />
        <span className="visually-hidden">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <AppLink className={cls} href={href}>
      {children}
    </AppLink>
  );
}

export function ExternalIcon() {
  return (
    <svg className={s.ext} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M4 2h6v6M10 2L3 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Renders a resolved document/folder CTA; "on request" becomes a mailto-free, disabled-looking note. */
export function DocumentCta({ cta, variant = "primary" }: { cta: Cta; variant?: "primary" | "secondary" }) {
  if (cta.kind === "request") {
    return (
      <span className={`${s.btn} ${s.request}`} aria-disabled="true">
        <LockIcon />
        {cta.label}
      </span>
    );
  }
  return (
    <ButtonLink href={cta.href} variant={variant} external>
      {cta.label}
    </ButtonLink>
  );
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <rect x="2" y="5.5" width="8" height="5.5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 5.5V4a2 2 0 1 1 4 0v1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function SectionHead({
  label,
  title,
  intro,
  action,
  id,
  level = 2,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  id?: string;
  level?: 1 | 2;
}) {
  const H = level === 1 ? "h1" : "h2";
  return (
    <div className={s.head}>
      <div className={s.headText}>
        {label && <p className={`label ${s.headLabel}`}>{label}</p>}
        <H id={id} className={level === 1 ? s.h1 : s.h2}>
          {title}
        </H>
        {intro && <div className={s.intro}>{intro}</div>}
      </div>
      {action && <div className={s.headAction}>{action}</div>}
    </div>
  );
}

export function Tag({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "gold" | "burgundy" }) {
  return <span className={`${s.tag} ${s["tag_" + tone]}`}>{children}</span>;
}

export function ClassificationBadge({ value }: { value: Classification }) {
  if (value === "hold") return null;
  const m = classificationMeta[value];
  return <span className={`${s.badge} ${s["badge_" + m.tone]}`}>{m.label}</span>;
}

export function Disclaimer({ k }: { k?: DisclaimerKey }) {
  if (!k) return null;
  return (
    <p className={s.disclaimer}>
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 7v4.5M8 4.6v.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span>{disclaimers[k]}</span>
    </p>
  );
}

/** A document preview framed as a physical page. */
export function DocThumb({
  thumb,
  sizes = "(max-width: 700px) 45vw, 280px",
  priority,
  simulated,
  className,
}: {
  thumb: Thumb;
  sizes?: string;
  priority?: boolean;
  simulated?: boolean;
  className?: string;
}) {
  return (
    <figure className={`${s.thumb} ${s["thumb_" + thumb.orientation]} ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbSrc(thumb.id)}
        alt={thumb.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
      />
      {thumb.cropped && <span className={s.crop}>Excerpt</span>}
      {simulated && (
        <span className={s.ribbon} aria-hidden="true">
          Simulated
        </span>
      )}
    </figure>
  );
}

export function MetricList({ items, compact }: { items: { label: string; value: string }[]; compact?: boolean }) {
  if (!items.length) return null;
  return (
    <dl className={`${s.metrics} ${compact ? s.metricsCompact : ""}`}>
      {items.map((m) => (
        <div key={m.label}>
          <dt>{m.label}</dt>
          <dd className="tabular">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PageIntro({ label, title, children }: { label: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className={`container ${s.pageIntro}`}>
      <SectionHead label={label} title={title} intro={children} level={1} />
    </div>
  );
}
