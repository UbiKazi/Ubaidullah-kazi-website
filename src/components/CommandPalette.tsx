"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { buildIndex, makeFuse, type SearchEntry } from "@/lib/search";
import { navigate } from "@/lib/platform";
import { navItems } from "./nav";
import s from "./CommandPalette.module.css";

const pages = [
  { title: "Home", href: "/", subtitle: "Start here" },
  ...navItems.map((n) => ({ title: n.label, href: n.href, subtitle: n.hint })),
  { title: "Résumé", href: "/resume", subtitle: "Online résumé" },
  { title: "Term of the Week", href: "/insights/terms", subtitle: "The glossary" },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const index = useMemo(() => buildIndex(pages), []);
  const fuse = useMemo(() => makeFuse(index, ["title", "subtitle", "keywords"]), [index]);

  const results: SearchEntry[] = query.trim()
    ? fuse.search(query).slice(0, 9).map((r) => r.item)
    : index.filter((e) => e.type === "Page" || e.type === "Series").slice(0, 9);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => input.current?.focus());
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const go = (e: SearchEntry | undefined) => {
    if (!e) return;
    onClose();
    navigate(e.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  };

  return (
    <dialog
      ref={dialog}
      className={s.dialog}
      aria-label="Search the site"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialog.current) onClose();
      }}
    >
      <div className={s.panel} onKeyDown={onKeyDown}>
        <div className={s.inputRow}>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            ref={input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search work, series, terms, pages"
            aria-label="Search"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-results"
            aria-activedescendant={results[active] ? `palette-${active}` : undefined}
          />
          <button type="button" className={s.esc} onClick={onClose}>
            Esc
          </button>
        </div>
        <ul id="palette-results" role="listbox" className={s.list}>
          {results.length === 0 && <li className={s.empty}>No matches. Try a company, sector or format — "IPO", "banking", "arbitration".</li>}
          {results.map((r, i) => (
            <li
              key={r.type + r.href + r.title}
              id={`palette-${i}`}
              role="option"
              aria-selected={i === active}
              className={s.item}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(r)}
            >
              <span className={s.type}>{r.type}</span>
              <span className={s.text}>
                <strong>{r.title}</strong>
                <small>{r.subtitle}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}
