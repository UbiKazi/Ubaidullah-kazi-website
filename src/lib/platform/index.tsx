"use client";
/**
 * Platform adapter (Next.js). The in-chat preview build swaps this file for
 * preview/platform.tsx via a bundler alias, so every component stays identical.
 */
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode };

export function AppLink({ href, children, ...rest }: LinkProps) {
  if (/^(https?:|mailto:)/.test(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
}

export function usePath(): string {
  return usePathname() || "/";
}

export function navigate(href: string) {
  window.location.assign(href);
}

/** Query string helpers for shareable filter state. */
export function readQuery(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

export function writeQuery(params: URLSearchParams) {
  const qs = params.toString();
  const url = window.location.pathname + (qs ? `?${qs}` : "");
  window.history.replaceState(null, "", url);
}
