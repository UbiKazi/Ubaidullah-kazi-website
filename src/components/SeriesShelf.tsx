import { series, seriesSlug } from "@/content/series";
import type { Series } from "@/content/types";
import { AppLink } from "@/lib/platform";
import s from "./SeriesShelf.module.css";

export function Masthead({ series: x }: { series: Series }) {
  return <span className={`${s.mast} ${s["mast_" + x.mastheadStyle]}`}>{x.name}</span>;
}

/** Publication spines: each series rendered in its own identity. */
export function SeriesShelf({ layout = "row" }: { layout?: "row" | "grid" }) {
  return (
    <ul className={`${s.shelf} ${layout === "grid" ? s.grid : ""}`}>
      {series.map((x) => (
        <li key={x.id} className={`${s.item} ${s["id_" + x.identity]}`}>
          <AppLink href={`/work/series/${seriesSlug(x.id)}`} className={s.link}>
            <Masthead series={x} />
            <span className={s.kind}>{x.kind}</span>
            <span className={s.count}>{x.countLabel ?? x.method}</span>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
