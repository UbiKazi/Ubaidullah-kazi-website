import { ButtonLink } from "@/components/ui";
import s from "./Pages.module.css";

export function NotFoundView() {
  return (
    <div className={`container ${s.notFound}`}>
      <p className="label">404</p>
      <h1>This page isn&apos;t in the library.</h1>
      <p>The link may be old, or the piece may have moved. Search from the top bar, or start from the work library.</p>
      <div className={s.nfActions}>
        <ButtonLink href="/work">Open the work library</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Go to the home page
        </ButtonLink>
      </div>
    </div>
  );
}
