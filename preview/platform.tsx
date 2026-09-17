/**
 * Platform adapter for the single-file preview (hash routing).
 * Swapped in for src/lib/platform via a Vite alias; components are unchanged.
 */
import { useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type Route = { path: string; query: string };
let current: Route = parse(window.location.hash, { path: "/", query: "" });
let pendingAnchor: string | null = null;
const listeners = new Set<() => void>();

function parse(hash: string, fallback?: Route): Route {
  if (!hash.startsWith("#/")) return fallback ?? current;
  const raw = hash.slice(1);
  const [p, q = ""] = raw.split("?");
  const path = p.length > 1 ? p.replace(/\/$/, "") : "/";
  return { path, query: q };
}

window.addEventListener("hashchange", () => {
  const h = window.location.hash;
  if (!h.startsWith("#/")) {
    // in-page anchor such as #main: keep the route, move focus/scroll
    const el = document.getElementById(decodeURIComponent(h.slice(1)));
    el?.scrollIntoView();
    if (el instanceof HTMLElement) el.focus({ preventScroll: true });
    history.replaceState(null, "", `#${current.path}${current.query ? "?" + current.query : ""}`);
    return;
  }
  const next = parse(h);
  const changedPath = next.path !== current.path;
  current = next;
  if (changedPath) {
    listeners.forEach((l) => l());
    requestAnimationFrame(() => {
      if (pendingAnchor) {
        document.getElementById(pendingAnchor)?.scrollIntoView();
        pendingAnchor = null;
      } else window.scrollTo(0, 0);
    });
  }
});

export function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}
export function useRoute(): Route {
  return useSyncExternalStore(subscribe, () => current);
}
export function usePath(): string {
  return useRoute().path;
}

function toHash(href: string) {
  const [pathAndQuery, anchor] = href.split("#");
  return { hash: "#" + (pathAndQuery || "/"), anchor };
}

export function navigate(href: string) {
  if (/^(https?:|mailto:)/.test(href)) {
    window.open(href, "_blank", "noopener");
    return;
  }
  const { hash, anchor } = toHash(href);
  const samePath = parse(hash).path === current.path;
  if (anchor) pendingAnchor = anchor;
  if (samePath && anchor) {
    document.getElementById(anchor)?.scrollIntoView();
    pendingAnchor = null;
    return;
  }
  window.location.hash = hash.slice(1);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode };

export function AppLink({ href, children, onClick, ...rest }: LinkProps) {
  if (/^(https?:|mailto:)/.test(href)) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  const { hash } = toHash(href);
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <a href={hash} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

export function readQuery(): URLSearchParams {
  return new URLSearchParams(current.query);
}
export function writeQuery(params: URLSearchParams) {
  const q = params.toString();
  current = { ...current, query: q };
  history.replaceState(null, "", `#${current.path}${q ? "?" + q : ""}`);
}
