const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-07" → "Jul 2026"; "2026" → "2026" */
export function formatMonth(iso?: string | null): string {
  if (!iso) return "";
  const [y, m] = iso.split("-");
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

export function formatPeriod(start?: string, end?: string | null): string {
  if (!start) return "";
  if (end === undefined) return `From ${formatMonth(start)}`;
  if (end === null) return `${formatMonth(start)} – present`;
  const s = formatMonth(start);
  const e = formatMonth(end);
  return s === e ? s : `${s} – ${e}`;
}

export const formatLabel: Record<string, string> = {
  onepager: "One-pager",
  report: "Report",
  deck: "Pitchbook",
  model: "Excel model",
  memo: "Memo",
  newspaper: "E-paper",
};
