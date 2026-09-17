import { site } from "@/config/site";
import { featuredWork } from "@/content/work";
import { programmes } from "@/content/mentorship";
import { terms } from "@/content/terms";
import { AppLink } from "@/lib/platform";
import { thumbSrc } from "@/lib/assets";
import { ButtonLink, SectionHead } from "@/components/ui";
import { KpiStrip } from "@/components/KpiStrip";
import { Thread } from "@/components/Thread";
import { WorkCard } from "@/components/WorkCard";
import { SeriesShelf } from "@/components/SeriesShelf";
import { Pipeline } from "@/components/Pipeline";
import { ProgrammeFlow } from "@/components/ProgrammeCard";
import { TermCard } from "@/components/TermCard";
import { SiteMap } from "@/components/SiteMap";
import s from "./Home.module.css";

const kpis = [
  { value: "12", label: "Research formats", note: "From IPO notes to judgment memos" },
  { value: "40+", label: "Pitchbook builds", note: "Across 20 countries" },
  { value: "25+", label: "IPO notes", note: "Across multiple geographies" },
  { value: "4", label: "CFI certifications", note: "FMVA®, CMSA®, BIDA®, CBCA®" },
];

export function HomeView() {
  const [lead, ...rest] = featuredWork;
  return (
    <>
      <section className={s.hero} aria-labelledby="hero-name">
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroText}>
            <p className={s.kicker}>
              {["Finance", "Research", "Strategy", "GenAI"].map((w, i) => (
                <span key={w}>
                  {i > 0 && <span className={s.times} aria-hidden="true">×</span>}
                  {w}
                </span>
              ))}
            </p>
            <h1 id="hero-name" className={s.name}>
              {site.name}
            </h1>
            <p className={s.headline}>{site.headline}</p>
            <ul className={s.support}>
              {site.supportLine.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className={s.ctas}>
              <ButtonLink href="/work">Explore the library</ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                View résumé
              </ButtonLink>
            </div>
          </div>
          <div className={s.desk} aria-hidden="true">
            <img className={`${s.sheet} ${s.sheet1}`} src={thumbSrc("prism")} alt="" />
            <img className={`${s.sheet} ${s.sheet2}`} src={thumbSrc("apple-er")} alt="" />
            <img className={`${s.sheet} ${s.sheet3}`} src={thumbSrc("dealogue-enbd-rbl")} alt="" />
            <img className={`${s.sheet} ${s.sheet4}`} src={thumbSrc("apple-model")} alt="" />
            <span className={s.stamp}>AI drafts. Humans verify.</span>
          </div>
        </div>
        <div className="container">
          <KpiStrip items={kpis} />
        </div>
      </section>

      <section className={`container ${s.section}`} aria-labelledby="map-title">
        <SectionHead
          id="map-title"
          label="Map"
          title="Four ways into the work"
          intro="Experience shows where the method was learned, Thinking is where it gets written up, Building is the library it produces, and Mentorship is where it gets taught."
        />
        <SiteMap />
      </section>

      <section className={s.threadBand} aria-labelledby="thread-title">
        <div className="container">
          <SectionHead
            id="thread-title"
            label="The common thread"
            title="Ten kinds of material. One way of working."
            intro="Each format asks a different question, but every piece is made the same way: gather the evidence, analyse it, structure it, and communicate it so a reader can act on it."
          />
          <Thread />
        </div>
      </section>

      <section className={`container ${s.section}`} aria-labelledby="featured-title">
        <SectionHead
          id="featured-title"
          label="Featured work"
          title="Eight pieces, eight kinds of analysis"
          action={<ButtonLink href="/work" variant="secondary">Browse the full library</ButtonLink>}
        />
        <ul className={s.featured}>
          <li className={s.featuredLead}>
            <WorkCard item={lead} size="large" priority />
          </li>
          {rest.map((w) => (
            <li key={w.slug} className={w.format === "deck" ? s.featuredWide : undefined}>
              <WorkCard item={w} />
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${s.section}`} aria-labelledby="shelf-title">
        <SectionHead
          id="shelf-title"
          label="The shelf"
          title="Twelve recurring publications"
          intro="Each series has its own fixed format, so every new edition is comparable with the last. Most of the archive lives in the full library."
        />
        <SeriesShelf />
      </section>

      <section className={s.labBand} aria-labelledby="lab-title">
        <div className="container">
          <SectionHead
            id="lab-title"
            label="AI Lab"
            title="How GenAI fits into the work"
            intro="Language models draft, scripts check the output, and I verify the numbers and the reasoning before anything is published."
            action={<ButtonLink href="/lab" variant="secondary">Inside the AI Lab</ButtonLink>}
          />
          <Pipeline />
        </div>
      </section>

      <section className={`container ${s.section}`} aria-labelledby="mentor-title">
        <SectionHead
          id="mentor-title"
          label="Mentorship"
          title="Turning concepts into applied work"
          intro="Weekend live-project programmes where participants build real models and reports — graded against model answers I wrote."
          action={<ButtonLink href="/mentorship" variant="secondary">See the programmes</ButtonLink>}
        />
        <ul className={s.programmes}>
          {programmes.map((p) => (
            <li key={p.id}>
              <AppLink href={`/mentorship#${p.id}`} className={s.programme}>
                <span className={s.programmeName}>{p.name}</span>
                <span className={s.programmeFormat}>{p.format}</span>
              </AppLink>
              <ProgrammeFlow flow={p.flow} label={p.name} />
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${s.section} ${s.insights}`} aria-labelledby="insight-title">
        <div>
          <SectionHead
            id="insight-title"
            label="Insights"
            title="A running glossary of the ideas behind the headlines"
            intro="Term of the Week pairs a definition with the news that made it matter — across finance, Islamic finance, infrastructure, corporate law, maritime and motorsport."
          />
          <ButtonLink href="/insights/terms" variant="secondary">
            All terms
          </ButtonLink>
        </div>
        <TermCard term={terms[0]} />
      </section>
    </>
  );
}
