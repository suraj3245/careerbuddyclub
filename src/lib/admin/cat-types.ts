// Shared types and helpers for the Admin CAT Results dashboard.
// Safe to import from both server routes and client components (no secrets here).

export type RiasecKey = "R" | "I" | "A" | "S" | "E" | "C";

/** Order matters: it matches the backend's column order, which decides ties. */
export const RIASEC_ORDER: { key: RiasecKey; label: string; field: string }[] = [
  { key: "R", label: "Realistic", field: "realistic_score" },
  { key: "I", label: "Investigative", field: "investigative_score" },
  { key: "A", label: "Artistic", field: "artistic_score" },
  { key: "S", label: "Social", field: "social_score" },
  { key: "E", label: "Enterprising", field: "enterprising_score" },
  { key: "C", label: "Conventional", field: "conventional_score" },
];

export type RiasecScores = Record<RiasecKey, number>;

export type DateFilterBy = "test" | "created";

export interface AdminCatRow {
  id: number;
  name: string;
  email: string | null;
  mobile: string | null;
  className: string | null;
  school: string | null;
  /** Student registration time (students.created_at), ISO string in UTC. */
  createdAt: string | null;
  /** Latest CAT submission time (career_test_results.updated_at), ISO string in UTC. */
  testAt: string | null;
  scores: RiasecScores | null;
  /** 3-letter code, e.g. "RIA". Empty when the student has no result. */
  code: string;
  magicLink: string | null;
}

export interface AdminCatResultsResponse {
  date: string;
  by: DateFilterBy;
  rows: AdminCatRow[];
  /** Most recent test dates (IST) with the number of students tested that day. */
  recentTestDates: { date: string; count: number }[];
  totalStudentsScanned: number;
  /** How many of the scanned students have a CAT result at all. */
  totalWithResults: number;
  /** Latest CAT submission across all students (UTC ISO) - helps spot "no data" quickly. */
  latestTestAt: string | null;
  /** "Now" according to the backend server's clock (UTC ISO), not this computer's clock. */
  serverNow: string;
  /** Today's date in India time according to the backend server's clock. */
  serverToday: string;
  fetchedAt: string;
  /** When the student list was last loaded from the backend (server clock, UTC ISO). */
  dataAsOf: string;
  /** True while a newer copy of the student list is loading in the background. */
  refreshing: boolean;
}

export interface AdminLoadStatus {
  running: boolean;
  pagesDone: number;
  totalPages: number;
}

/**
 * Top-3 code exactly as the backend computes it: sort the six scores high→low
 * (stable, so ties keep R-I-A-S-E-C order) and take the first letters.
 */
export function computeCode(scores: RiasecScores): string {
  return RIASEC_ORDER.map((r, index) => ({ key: r.key, score: scores[r.key], index }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 3)
    .map((r) => r.key)
    .join("");
}

const IST_OFFSET_MS = 330 * 60 * 1000; // UTC+5:30

/** Parses Laravel timestamps ("2026-10-11T05:12:33.000000Z" or "2026-10-11 05:12:33", both UTC). */
export function parseBackendTimestamp(value: unknown): number | null {
  if (typeof value !== "string") return null;
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})/);
  if (!m) return null;
  const [, y, mo, d, h, mi, s] = m.map(Number);
  return Date.UTC(y, mo - 1, d, h, mi, s);
}

/** "YYYY-MM-DD" of a UTC epoch in India time. */
export function istDateKey(epochMs: number): string {
  return new Date(epochMs + IST_OFFSET_MS).toISOString().slice(0, 10);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "11 Oct 2026, 10:42 am" in India time. */
export function formatIst(iso: string | null, withTime = true): string {
  const t = parseBackendTimestamp(iso);
  if (t === null) return "N/A";
  const d = new Date(t + IST_OFFSET_MS);
  const day = `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  if (!withTime) return day;
  let h = d.getUTCHours();
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${day}, ${h}:${String(d.getUTCMinutes()).padStart(2, "0")} ${ampm}`;
}

/** "2026-10-11" -> "11-10-2026" (used in file names). */
export function dateKeyToDmy(key: string): string {
  const [y, m, d] = key.split("-");
  return `${d}-${m}-${y}`;
}

export function isValidDateKey(key: unknown): key is string {
  if (typeof key !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(key)) return false;
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}
