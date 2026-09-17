"use client";
import { useEffect, useRef, useState } from "react";
import { AppLink, usePath } from "@/lib/platform";
import { site } from "@/config/site";
import { navItems } from "./nav";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle } from "./ThemeToggle";
import s from "./Header.module.css";

export function Header() {
  const path = usePath();
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`${s.header} ${condensed ? s.condensed : ""}`}>
        <div className={`container ${s.bar}`}>
          <AppLink href="/" className={s.brand} aria-label={`${site.name}, home`}>
            <span className={s.mark} aria-hidden="true">
              {site.monogram}
            </span>
            <span className={s.name}>{site.name}</span>
          </AppLink>

          <nav aria-label="Primary" className={s.desktopNav}>
            <ul>
              {navItems.map((n) => (
                <li key={n.href}>
                  <AppLink href={n.href} aria-current={isActive(n.href) ? "page" : undefined} className={s.link}>
                    {n.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.actions}>
            <button type="button" className={s.search} onClick={() => setPaletteOpen(true)} aria-label="Search the site">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className={s.searchText}>Search</span>
              <kbd className={s.kbd}>⌘K</kbd>
            </button>
            <ThemeToggle />
            <AppLink href="/resume" className={s.resume} aria-current={isActive("/resume") ? "page" : undefined}>
              Résumé
            </AppLink>
            <button
              ref={menuButton}
              type="button"
              className={s.menuButton}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
              <span className={`${s.burger} ${open ? s.burgerOpen : ""}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`${s.drawer} ${open ? s.drawerOpen : ""}`} hidden={!open}>
        <nav aria-label="Mobile" className="container">
          <ul className={s.drawerList}>
            <li>
              <AppLink href="/" className={s.drawerLink} aria-current={path === "/" ? "page" : undefined}>
                <span>Home</span>
                <small>Start here</small>
              </AppLink>
            </li>
            {navItems.map((n) => (
              <li key={n.href}>
                <AppLink href={n.href} className={s.drawerLink} aria-current={isActive(n.href) ? "page" : undefined}>
                  <span>{n.label}</span>
                  <small>{n.hint}</small>
                </AppLink>
              </li>
            ))}
          </ul>
          <div className={s.drawerFoot}>
            <AppLink href="/resume" className={s.resumeLarge}>
              View résumé
            </AppLink>
            <a href={`mailto:${site.email}`} className={s.drawerMail}>
              {site.email}
            </a>
          </div>
        </nav>
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
