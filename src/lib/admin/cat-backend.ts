// SERVER-ONLY. Reads CAT data from the existing Laravel backend APIs and returns
// only the fields the admin dashboard needs (passwords, api tokens etc. are dropped here
// and never reach the browser).
import fs from "fs";
import path from "path";
import {
  AdminCatRow,
  RIASEC_ORDER,
  RiasecScores,
  computeCode,
  parseBackendTimestamp,
} from "./cat-types";

const API_BASE = (process.env.CBC_API_BASE || "https://test.careerbuddyclub.com:8080/api/students").replace(/\/+$/, "");
const MAGIC_LINK_BASE = "https://careerbuddyclub.com/redirect/";
const PAGE_SIZE = 500;
const MAX_PAGES = 400; // safety stop (200,000 students)
// Loading all ~40k students takes the backend 2-3 minutes, so the list is kept in memory
// and refreshed in the background once it is older than this. "Refresh" forces a reload.
const STUDENTS_STALE_MS = 10 * 60 * 1000;
// Career suggestions per code rarely change.
const CAREERS_CACHE_MS = 24 * 60 * 60 * 1000;

// Diagnostics: every backend call is also written to .next/admin-cat-results.log
// (.next is git-ignored) so problems can be investigated without the terminal.
const LOG_FILE = path.join(process.cwd(), ".next", "admin-cat-results.log");
function debugLog(message: string): void {
  const line = `${new Date().toISOString()} ${message}`;
  console.log(`[admin/cat-results] ${message}`);
  try {
    fs.appendFileSync(LOG_FILE, line + "\n");
  } catch {
    /* logging must never break the request */
  }
}

function backendHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // Sent only when configured. Lets the backend lock these APIs to this server later
  // (see "Fix 2") without any further frontend change.
  if (process.env.INTERNAL_API_KEY) headers["X-Internal-Key"] = process.env.INTERNAL_API_KEY;
  return headers;
}

const REQUEST_TIMEOUT_MS = 60 * 1000;

// Clock offset between the backend server and this server, taken from the backend's
// HTTP "Date" header. Lets the dashboard use the real server time instead of the
// time set on whichever computer runs this app.
let backendClockOffsetMs = 0;

/** Current time according to the backend server (falls back to this machine's clock). */
export function backendNow(): number {
  return Date.now() + backendClockOffsetMs;
}

async function postJson(path: string, body: unknown): Promise<any> {
  const started = Date.now();
  debugLog(`-> ${path} ${JSON.stringify(body)}`);
  try {
    const json = await postJsonInner(path, body);
    debugLog(`<- ${path} ok in ${Date.now() - started} ms`);
    return json;
  } catch (err: any) {
    debugLog(`<- ${path} FAILED in ${Date.now() - started} ms: ${err?.message || err}`);
    throw err;
  }
}

async function postJsonInner(path: string, body: unknown): Promise<any> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/${path}`, {
      method: "POST",
      headers: backendHeaders(),
      body: JSON.stringify(body),
      cache: "no-store",
      signal: controller.signal,
    });
    const serverDate = Date.parse(res.headers.get("date") || "");
    if (Number.isFinite(serverDate)) backendClockOffsetMs = serverDate - Date.now();
    const text = await res.text();
    if (!res.ok) throw new Error(`Backend ${path} responded ${res.status}: ${text.slice(0, 200)}`);
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`Backend ${path} did not return JSON: ${text.slice(0, 200)}`);
    }
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new Error(`Backend ${path} did not answer within ${REQUEST_TIMEOUT_MS / 1000}s`);
    }
    const cause = err?.cause?.code || err?.cause?.message;
    throw new Error(`${err?.message || "Request failed"}${cause ? ` (${cause})` : ""} [${API_BASE}/${path}]`);
  } finally {
    clearTimeout(timer);
  }
}

function toStr(v: unknown): string | null {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s ? s : null;
}

function toNum(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

/** Keeps only the safe, needed fields of one student from fetchcareertestresult. */
export function toAdminRow(student: any): AdminCatRow | null {
  if (!student || typeof student !== "object" || student.id === undefined) return null;
  const result = student.career_test_result ?? student.CareerTestResult ?? student.careerTestResult ?? null;
  const hasResult = result && typeof result === "object" && result.user_id !== undefined;

  let scores: RiasecScores | null = null;
  if (hasResult) {
    scores = {} as RiasecScores;
    for (const r of RIASEC_ORDER) scores[r.key] = toNum(result[r.field]);
  }

  const token = toStr(student.magic_link_token);
  return {
    id: Number(student.id),
    name: toStr(student.name) || "Unnamed student",
    email: toStr(student.email),
    mobile: toStr(student.mobile) || toStr(student.phone),
    className: toStr(student.class),
    school: toStr(student.from),
    createdAt: toStr(student.created_at),
    testAt: hasResult ? toStr(result.updated_at) || toStr(result.created_at) : null,
    scores,
    code: scores ? computeCode(scores) : "",
    magicLink: token ? MAGIC_LINK_BASE + token : null,
  };
}

// ---------------- All students ----------------
// Loading all ~40k students takes the backend 2-3 minutes. To keep the dashboard fast:
//  * the list lives in memory on globalThis (survives dev hot-reloads),
//  * it is also saved to .next/cache/admin-cat/ (server-only, git-ignored) so a restart
//    or deploy does not mean another long wait,
//  * stale data is served instantly while a fresh copy loads in the background,
//  * career data for every 3-letter code is pre-loaded in the background as well.
export interface StudentsLoadStatus {
  running: boolean;
  pagesDone: number;
  totalPages: number;
  startedAt: number | null;
  /** Backend-clock time the cached list was loaded (ms), or null if nothing cached yet. */
  cachedAt: number | null;
  lastError: string | null;
}

interface AdminCatState {
  studentsCache: { at: number; rows: AdminCatRow[] } | null;
  studentsInFlight: Promise<AdminCatRow[]> | null;
  status: StudentsLoadStatus;
  resultDataCache: Map<string, { at: number; resultData: unknown[] }>;
  resultDataInFlight: Map<string, Promise<unknown[]>>;
  diskLoaded: boolean;
  warmingCareers: boolean;
}

const G = globalThis as unknown as { __cbcAdminCat?: AdminCatState };
const state: AdminCatState = (G.__cbcAdminCat ||= {
  studentsCache: null,
  studentsInFlight: null,
  status: { running: false, pagesDone: 0, totalPages: 0, startedAt: null, cachedAt: null, lastError: null },
  resultDataCache: new Map(),
  resultDataInFlight: new Map(),
  diskLoaded: false,
  warmingCareers: false,
});

const CACHE_DIR = path.join(process.cwd(), ".next", "cache", "admin-cat");
const STUDENTS_FILE = path.join(CACHE_DIR, "students.json");
const CAREERS_FILE = path.join(CACHE_DIR, "career-data.json");

function writeJsonFile(file: string, data: unknown): void {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    const tmp = `${file}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(data), { mode: 0o600 });
    fs.renameSync(tmp, file);
  } catch (err: any) {
    debugLog(`could not save cache ${path.basename(file)}: ${err?.message || err}`);
  }
}

function loadFromDiskOnce(): void {
  if (state.diskLoaded) return;
  state.diskLoaded = true;
  try {
    const saved = JSON.parse(fs.readFileSync(STUDENTS_FILE, "utf8"));
    if (!state.studentsCache && Array.isArray(saved?.rows) && typeof saved?.at === "number") {
      state.studentsCache = { at: saved.at, rows: saved.rows };
      debugLog(`restored ${saved.rows.length} students from disk cache`);
    }
  } catch {
    /* no cache yet */
  }
  try {
    const saved = JSON.parse(fs.readFileSync(CAREERS_FILE, "utf8"));
    for (const [code, v] of Object.entries<any>(saved || {})) {
      if (!state.resultDataCache.has(code) && Array.isArray(v?.resultData)) state.resultDataCache.set(code, v);
    }
  } catch {
    /* no cache yet */
  }
}

export function getStudentsLoadStatus(): StudentsLoadStatus {
  return { ...state.status, cachedAt: state.studentsCache?.at ?? null };
}

const PAGE_CONCURRENCY = 6;
const PAGE_RETRIES = 3;

async function fetchStudentsPage(page: number): Promise<any> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= PAGE_RETRIES; attempt++) {
    try {
      return await postJson("fetchcareertestresult", { search: "", page, limit: PAGE_SIZE });
    } catch (err) {
      lastErr = err;
      if (attempt < PAGE_RETRIES) await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
  throw lastErr;
}

async function loadAllStudents(): Promise<AdminCatRow[]> {
  const started = Date.now();
  const status = state.status;
  status.pagesDone = 0;
  status.totalPages = 0;
  const fetchPage = async (page: number) => {
    const t = Date.now();
    const json = await fetchStudentsPage(page);
    const data: any[] = Array.isArray(json?.data) ? json.data : [];
    status.pagesDone += 1;
    debugLog(`page ${page} -> ${data.length} students in ${Date.now() - t} ms`);
    return { json, data };
  };

  // First page tells us how many pages there are; the rest are fetched in parallel.
  const first = await fetchPage(1);
  const totalPages = Math.min(Number(first.json?.total_pages) || 1, MAX_PAGES);
  status.totalPages = totalPages;
  debugLog(`backend reports ${first.json?.total_items ?? "?"} students in ${totalPages} pages`);
  const pages: any[][] = new Array(totalPages);
  pages[0] = first.data;

  let next = 2;
  const worker = async () => {
    while (next <= totalPages) {
      const page = next++;
      pages[page - 1] = (await fetchPage(page)).data;
    }
  };
  await Promise.all(Array.from({ length: Math.min(PAGE_CONCURRENCY, totalPages - 1) }, worker));

  const rows: AdminCatRow[] = [];
  const seen = new Set<number>();
  for (const data of pages) {
    for (const s of data || []) {
      const row = toAdminRow(s);
      if (row && !seen.has(row.id)) {
        seen.add(row.id);
        rows.push(row);
      }
    }
  }
  debugLog(`loaded ${rows.length} students in ${Date.now() - started} ms`);
  return rows;
}

function startLoad(): Promise<AdminCatRow[]> {
  if (!state.studentsInFlight) {
    state.status.running = true;
    state.status.startedAt = Date.now();
    state.status.lastError = null;
    state.studentsInFlight = loadAllStudents()
      .then((rows) => {
        state.studentsCache = { at: backendNow(), rows };
        writeJsonFile(STUDENTS_FILE, state.studentsCache);
        warmCareerData(rows);
        return rows;
      })
      .catch((err) => {
        state.status.lastError = err?.message || String(err);
        throw err;
      })
      .finally(() => {
        state.status.running = false;
        state.studentsInFlight = null;
      });
  }
  return state.studentsInFlight;
}

/** Starts a background reload (if one is not already running). */
export function refreshStudentsInBackground(): void {
  startLoad().catch(() => undefined);
}

/**
 * Returns the student list. Uses the saved copy when there is one (refreshing it in the
 * background when it is older than STUDENTS_STALE_MS); waits for the backend only when
 * nothing has ever been loaded.
 */
export async function getAllStudents(): Promise<AdminCatRow[]> {
  loadFromDiskOnce();
  const cache = state.studentsCache;
  if (cache) {
    if (backendNow() - cache.at > STUDENTS_STALE_MS) refreshStudentsInBackground();
    return cache.rows;
  }
  return startLoad();
}

/** Backend-clock time (ms) of the copy getAllStudents() last returned. */
export function studentsCachedAt(): number | null {
  return state.studentsCache?.at ?? null;
}

export function isRefreshing(): boolean {
  return state.status.running;
}

// ---------------- Career data per 3-letter code ----------------
// The raw "resultData" from getcatresultbyid is kept as-is, because the report reuses the
// website's own <YourCareer> component, which expects exactly that shape.

/** Fetches resultData once per code, using any student who has that code. */
export async function getResultDataForCodes(
  representativeIdByCode: Map<string, number>
): Promise<Record<string, unknown[]>> {
  loadFromDiskOnce();
  const out: Record<string, unknown[]> = {};
  const pending: [string, number][] = [];
  for (const [code, id] of Array.from(representativeIdByCode.entries())) {
    const cached = state.resultDataCache.get(code);
    if (cached && Date.now() - cached.at < CAREERS_CACHE_MS) out[code] = cached.resultData;
    else pending.push([code, id]);
  }
  if (!pending.length) return out;

  const CONCURRENCY = 4;
  let next = 0;
  let fetched = 0;
  const fetchOne = (code: string, id: number): Promise<unknown[]> => {
    // Share an in-progress request for the same code (e.g. background warm-up + a download).
    const existing = state.resultDataInFlight.get(code);
    if (existing) return existing;
    const p = postJson("getcatresultbyid", { studentId: id })
      .then((json) => {
        const resultData = Array.isArray(json?.resultData) ? json.resultData : [];
        state.resultDataCache.set(code, { at: Date.now(), resultData });
        fetched++;
        return resultData as unknown[];
      })
      .finally(() => state.resultDataInFlight.delete(code));
    state.resultDataInFlight.set(code, p);
    return p;
  };
  async function worker() {
    while (next < pending.length) {
      const [code, id] = pending[next++];
      try {
        out[code] = await fetchOne(code, id);
      } catch {
        out[code] = []; // report will show no career cards; do not fail the whole request
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, pending.length) }, worker));
  if (fetched) writeJsonFile(CAREERS_FILE, Object.fromEntries(state.resultDataCache));
  return out;
}

/** Pre-loads career data for every code students have, so ZIP downloads never wait for it. */
function warmCareerData(rows: AdminCatRow[]): void {
  if (state.warmingCareers) return;
  const rep = new Map<string, number>();
  for (const r of rows) if (r.code && !rep.has(r.code)) rep.set(r.code, r.id);
  state.warmingCareers = true;
  const started = Date.now();
  getResultDataForCodes(rep)
    .then(() => debugLog(`career data ready for ${rep.size} codes in ${Date.now() - started} ms`))
    .catch(() => undefined)
    .finally(() => {
      state.warmingCareers = false;
    });
}

export { parseBackendTimestamp };
