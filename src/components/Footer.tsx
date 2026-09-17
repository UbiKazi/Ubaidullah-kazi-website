import { site } from "@/config/site";
import { AppLink } from "@/lib/platform";
import { navItems } from "./nav";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>
        <div className={s.lead}>
          <p className={s.title}>Have a question about a piece of work, or a role to discuss?</p>
          <a className={s.mail} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className={s.li} href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        </div>
        <nav aria-label="Footer" className={s.nav}>
          <ul>
            {navItems.map((n) => (
              <li key={n.href}>
                <AppLink href={n.href}>{n.label}</AppLink>
              </li>
            ))}
            <li>
              <AppLink href="/resume">Résumé</AppLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`container ${s.base}`}>
        <p>
          © {new Date().getFullYear()} {site.name}. Research on this site is personal and educational work built from
          public information; it is not investment, legal or financial advice. Pitchbooks under the Ubi&apos;s Bank name
          are simulations — the bank is fictitious.
        </p>
      </div>
    </footer>
  );
}
