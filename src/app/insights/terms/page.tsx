import { TermsView } from "@/views/TermsView";
export const metadata = {
  title: "Term of the Week",
  description: "A glossary of finance, corporate and infrastructure terms, each tied to a real example.",
};
export default function Page() {
  return <TermsView />;
}
