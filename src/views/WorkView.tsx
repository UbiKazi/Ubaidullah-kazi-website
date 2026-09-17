import { featuredWork } from "@/content/work";
import { SectionHead, PageIntro } from "@/components/ui";
import { Thread } from "@/components/Thread";
import { WorkCard } from "@/components/WorkCard";
import { SeriesShelf } from "@/components/SeriesShelf";
import { LibraryExplorer } from "@/components/LibraryExplorer";
import s from "./Pages.module.css";

export function WorkView() {
  return (
    <>
      <PageIntro label="Work library" title="A library of structured analysis">
        <p>
          Equity research, models, IPO notes, pitchbooks, sector primers, macro snapshots, legal memos, restructuring
          trackers and brand cases. Different material, the same discipline: take something complex, analyse it,
          structure it and make it readable.
        </p>
      </PageIntro>

      <section className={`container ${s.block}`} aria-labelledby="thread-h">
        <h2 id="thread-h" className="visually-hidden">
          The common thread
        </h2>
        <Thread />
      </section>

      <section id="featured" className={`container ${s.block}`} aria-labelledby="feat-h">
        <SectionHead id="feat-h" label="Featured" title="Start with these" intro="Each has a full breakdown: context, approach, analytical areas and what the analysis found." />
        <ul className={s.cardGrid}>
          {featuredWork.map((w) => (
            <li key={w.slug} className={w.thumbnail.orientation === "landscape" ? s.wide : undefined}>
              <WorkCard item={w} />
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${s.block}`} aria-labelledby="series-h">
        <SectionHead
          id="series-h"
          label="Series"
          title="Browse by publication"
          intro="Every series has a fixed format and its own archive. The site shows representative editions; complete archives sit in the document library."
        />
        <SeriesShelf layout="grid" />
      </section>

      <section id="library" className={`container ${s.block}`} aria-labelledby="lib-h">
        <SectionHead id="lib-h" label="Library" title="Search and filter everything on the site" />
        <LibraryExplorer />
      </section>
    </>
  );
}
