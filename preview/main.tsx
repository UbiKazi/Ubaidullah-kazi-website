import { StrictMode, useEffect, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts.css";
import "@/styles/globals.css";
import { useRoute } from "./platform";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeView } from "@/views/HomeView";
import { WorkView } from "@/views/WorkView";
import { SeriesView } from "@/views/SeriesView";
import { ProjectView } from "@/views/ProjectView";
import { LabView } from "@/views/LabView";
import { ExperienceView } from "@/views/ExperienceView";
import { MentorshipView } from "@/views/MentorshipView";
import { InsightsView } from "@/views/InsightsView";
import { TermsView } from "@/views/TermsView";
import { TermView } from "@/views/TermView";
import { AboutView } from "@/views/AboutView";
import { ResumeView } from "@/views/ResumeView";
import { NotFoundView } from "@/views/NotFoundView";
import { workBySlug } from "@/content/work";
import { seriesFromSlug } from "@/content/series";
import { termBySlug } from "@/content/terms";
import { site } from "@/config/site";

function resolve(path: string): { title: string; node: ReactNode } {
  const seg = path.split("/").filter(Boolean);
  const nf = { title: "Page not found", node: <NotFoundView /> };
  if (seg.length === 0) return { title: "", node: <HomeView /> };
  switch (seg[0]) {
    case "work": {
      if (seg.length === 1) return { title: "Work library", node: <WorkView /> };
      if (seg[1] === "series" && seg[2]) {
        const s = seriesFromSlug(seg[2]);
        return s ? { title: s.name, node: <SeriesView key={s.id} series={s} /> } : nf;
      }
      const w = workBySlug(seg[1]);
      return w?.detail ? { title: w.title, node: <ProjectView key={w.slug} item={w} /> } : nf;
    }
    case "lab":
      return { title: "AI Lab", node: <LabView /> };
    case "experience":
      return { title: "Experience", node: <ExperienceView /> };
    case "mentorship":
      return { title: "Mentorship", node: <MentorshipView /> };
    case "insights": {
      if (seg.length === 1) return { title: "Insights", node: <InsightsView /> };
      if (seg[1] === "terms" && !seg[2]) return { title: "Term of the Week", node: <TermsView /> };
      const t = seg[2] && termBySlug(seg[2]);
      return t ? { title: t.term, node: <TermView key={t.slug} term={t} /> } : nf;
    }
    case "about":
      return { title: "About", node: <AboutView /> };
    case "resume":
      return { title: "Résumé", node: <ResumeView /> };
    default:
      return nf;
  }
}

function App() {
  const { path } = useRoute();
  const { title, node } = resolve(path);
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — Finance, research, strategy and GenAI`;
  }, [title]);
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        {node}
      </main>
      <Footer />
    </>
  );
}

try {
  const t = localStorage.getItem("uk-theme");
  if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
} catch {
  /* storage unavailable */
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
