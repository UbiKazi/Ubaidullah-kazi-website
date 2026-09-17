"use client";
import { useEffect, useRef, useState } from "react";
import s from "./KpiStrip.module.css";

export interface Kpi {
  value: string;
  label: string;
  note: string;
}

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let started = false;
    setN(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 900, 1);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <span ref={ref} className="tabular" aria-hidden="true">
      {match ? n : ""}
      {suffix}
    </span>
  );
}

export function KpiStrip({ items }: { items: Kpi[] }) {
  return (
    <dl className={s.strip}>
      {items.map((k) => (
        <div key={k.label} className={s.tile}>
          <dt className={s.label}>{k.label}</dt>
          <dd className={s.value}>
            <span className="visually-hidden">{k.value}</span>
            <CountUp value={k.value} />
          </dd>
          <dd className={s.note}>{k.note}</dd>
        </div>
      ))}
    </dl>
  );
}
