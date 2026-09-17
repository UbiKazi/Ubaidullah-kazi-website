"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { disciplines, series, seriesById } from "@/content/series";
import { visibleWork } from "@/content/work";
import type { Discipline, SeriesId, WorkItem } from "@/content/types";
import { makeFuse } from "@/lib/search";
import { readQuery, writeQuery } from "@/lib/platform";
import { WorkCard } from "./WorkCard";
import { QuickLook } from "./QuickLook";
import s from "./LibraryExplorer.module.css";

type Sort = "curated" | "newest";
const tierRank = { featured: 0, selected: 1, library: 2 } as const;

export function LibraryExplorer({ fixedSeries }: { fixedSeries?: SeriesId }) {
  const [discipline, setDiscipline] = useState<Discipline | "all">("all");
  const [seriesFilter, setSeriesFilter] = useState<SeriesId | "all">(fixedSeries ?? "all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("curated");
  const [quick, setQuick] = useState<WorkItem | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const hydrated = useRef(false);
  const reduce = useReducedMotion();

  const fuse = useMemo(
    () =>
      makeFuse(
        visibleWork.map((w) => ({ ...w, seriesName: seriesById[w.series].name })),
        ["title", "subject", "tags", "sector", "geography", "seriesName", "summary", "date"],
      ),
    [],
  );

  // Read shareable state from the URL once.
  useEffect(() => {
    const q = readQuery();
    const d = q.get("d");
    if (d && disciplines.some((x) => x.id === d)) setDiscipline(d as Discipline);
    const sr = q.get("s");
    if (!fixedSeries && sr && series.some((x) => x.id === sr)) setSeriesFilter(sr as SeriesId);
    if (q.get("q")) setQuery(q.get("q") ?? "");
    const item = q.get("item");
    if (item) {
      const found = visibleWork.find((w) => w.slug === item);
      if (found) setQuick(found);
    }
    hydrated.current = true;
  }, [fixedSeries]);

  useEffect(() => {
    if (!hydrated.current) return;
    const q = new URLSearchParams();
    if (discipline !== "all") q.set("d", discipline);
    if (!fixedSeries && seriesFilter !== "all") q.set("s", seriesFilter);
    if (query) q.set("q", query);
    if (quick) q.set("item", quick.slug);
    writeQuery(q);
  }, [discipline, seriesFilter, query, quick, fixedSeries]);

  const base = fixedSeries ? visibleWork.filter((w) => w.series === fixedSeries) : visibleWork;

  const results = useMemo(() => {
    let list = query.trim() ? fuse.search(query).map((r) => visibleWork.find((w) => w.slug === r.item.slug)!) : [...base];
    if (fixedSeries) list = list.filter((w) => w.series === fixedSeries);
    if (discipline !== "all") list = list.filter((w) => w.disciplines.includes(discipline));
    if (seriesFilter !== "all") list = list.filter((w) => w.series === seriesFilter);
    if (!query.trim()) {
      list.sort((a, b) =>
        sort === "newest"
          ? b.date.localeCompare(a.date)
          : tierRank[a.tier] - tierRank[b.tier] || (a.order ?? 99) - (b.order ?? 99),
      );
    }
    return list;
  }, [query, discipline, seriesFilter, sort, fuse, base, fixedSeries]);

  const countFor = (d: Discipline | "all") => (d === "all" ? base.length : base.filter((w) => w.disciplines.includes(d)).length);
  const visibleDisciplines = disciplines.filter((d) => countFor(d.id) > 0);
  const seriesOptions = series.filter(
    (x) => base.some((w) => w.series === x.id && (discipline === "all" || w.disciplines.includes(discipline))),
  );
  const activeCount = (discipline !== "all" ? 1 : 0) + (!fixedSeries && seriesFilter !== "all" ? 1 : 0) + (query ? 1 : 0);

  const clear = () => {
    setDiscipline("all");
    if (!fixedSeries) setSeriesFilter("all");
    setQuery("");
  };

  const seriesChips = !fixedSeries && seriesOptions.length > 1 && (
    <div className={s.chips} role="group" aria-label="Filter by series">
      <button type="button" aria-pressed={seriesFilter === "all"} onClick={() => setSeriesFilter("all")}>
        All series
      </button>
      {seriesOptions.map((x) => (
        <button key={x.id} type="button" aria-pressed={seriesFilter === x.id} onClick={() => setSeriesFilter(x.id)}>
          {x.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className={s.explorer}>
      <div className={s.toolbar}>
        <div className={s.tabs} role="group" aria-label="Filter by discipline">
          <button type="button" aria-pressed={discipline === "all"} onClick={() => setDiscipline("all")}>
            All <span className={s.count}>{countFor("all")}</span>
          </button>
          {visibleDisciplines.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={discipline === d.id}
              onClick={() => {
                setDiscipline(d.id);
                if (seriesFilter !== "all" && !seriesById[seriesFilter].disciplines.includes(d.id) && !fixedSeries) setSeriesFilter("all");
              }}
              title={d.blurb}
            >
              {d.label} <span className={s.count}>{countFor(d.id)}</span>
            </button>
          ))}
        </div>

        <div className={s.row}>
          <label className={s.search}>
            <span className="visually-hidden">Search the library</span>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Company, sector, country, method…"
            />
          </label>
          <label className={s.sort}>
            <span>Order</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} disabled={Boolean(query.trim())}>
              <option value="curated">Curated</option>
              <option value="newest">Newest</option>
            </select>
          </label>
          {!fixedSeries && (
            <button type="button" className={s.refine} onClick={() => setSheetOpen(true)} aria-expanded={sheetOpen}>
              Series{seriesFilter !== "all" ? ": 1" : ""}
            </button>
          )}
        </div>

        <div className={s.desktopChips}>{seriesChips}</div>

        <p className={s.status} aria-live="polite">
          {results.length} {results.length === 1 ? "piece" : "pieces"}
          {activeCount > 0 && (
            <button type="button" className={s.clear} onClick={clear}>
              Clear filters
            </button>
          )}
        </p>
      </div>

      {results.length === 0 ? (
        <div className={s.empty}>
          <p className={s.emptyTitle}>Nothing matches that combination.</p>
          <p>Try a broader term such as “IPO”, “banking” or “India”, or clear the filters to see everything.</p>
          <button type="button" className={s.clearBig} onClick={clear}>
            Clear filters
          </button>
        </div>
      ) : (
        <motion.ul className={s.grid} layout={!reduce}>
          <AnimatePresence mode="popLayout" initial={false}>
            {results.map((w) => (
              <motion.li
                key={w.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: reduce ? 0 : 0.22, ease: [0.2, 0.7, 0.2, 1] }}
                className={w.thumbnail.orientation === "landscape" ? s.wide : undefined}
              >
                <WorkCard item={w} onQuickLook={setQuick} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {sheetOpen && (
        <div className={s.sheetBackdrop} onClick={() => setSheetOpen(false)}>
          <div
            className={s.sheet}
            role="dialog"
            aria-modal="true"
            aria-label="Filter by series"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && setSheetOpen(false)}
          >
            <div className={s.sheetHead}>
              <p>Filter by series</p>
              <button type="button" onClick={() => setSheetOpen(false)} autoFocus>
                Done
              </button>
            </div>
            {seriesChips}
          </div>
        </div>
      )}

      <QuickLook item={quick} onClose={() => setQuick(null)} />
    </div>
  );
}
