"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./admin.module.scss";
import {
  AdminCatResultsResponse,
  AdminLoadStatus,
  AdminCatRow,
  DateFilterBy,
  RIASEC_ORDER,
  dateKeyToDmy,
  formatIst,
} from "@/lib/admin/cat-types";
import { downloadBlob, pdfFileNames } from "./downloads";

const PAGE_SIZE = 25;

interface Props {
  adminEmail: string;
}

export default function CatResultsDashboard({ adminEmail }: Props) {
  // Empty until the server answers: the first load picks the latest test date using the
  // backend server's clock, never this computer's date.
  const [date, setDate] = useState<string>("");
  const [by, setBy] = useState<DateFilterBy>("test");
  const [data, setData] = useState<AdminCatResultsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState<{ done: number; total: number; secondsLeft?: number } | null>(
    null
  );
  const [busyRowId, setBusyRowId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [loadStatus, setLoadStatus] = useState<AdminLoadStatus | null>(null);
  const [careersLoading, setCareersLoading] = useState(false);
  // Backend "resultData" (career cards) per 3-letter code, as used by the website report.
  const careersRef = useRef<Record<string, unknown[]>>({});
  const careersInFlight = useRef<Promise<void> | null>(null);
  const requestId = useRef(0);

  const load = useCallback(async (d: string, b: DateFilterBy, refresh = false, silent = false) => {
    const id = ++requestId.current; // ignore answers to older requests
    if (!silent) setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/admin/cat-results?by=${b}${d ? `&date=${encodeURIComponent(d)}` : ""}${refresh ? "&refresh=1" : ""}`,
        { cache: "no-store" }
      );
      if (id !== requestId.current) return;
      if (res.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      const json = await res.json().catch(() => ({}));
      if (id !== requestId.current) return;
      if (!res.ok) throw new Error(json?.error || `Could not load results (error ${res.status})`);
      const result = json as AdminCatResultsResponse;
      setData(result);
      setDate(result.date);
      setBy(result.by);
      if (!silent) setPage(1);
    } catch (e: any) {
      if (id !== requestId.current) return;
      setError(e?.message || "Could not load results");
      if (!silent) setData(null);
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  }, []);

  // Seconds counter + server progress while the student list is being collected.
  useEffect(() => {
    if (!loading) return;
    setElapsed(0);
    setLoadStatus(null);
    const started = Date.now();
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - started) / 1000)), 1000);
    const poll = setInterval(async () => {
      try {
        const res = await fetch("/api/admin/cat-results/status", { cache: "no-store" });
        if (res.ok) setLoadStatus((await res.json()) as AdminLoadStatus);
      } catch {
        /* ignore */
      }
    }, 2000);
    return () => {
      clearInterval(t);
      clearInterval(poll);
    };
  }, [loading]);

  // While the server refreshes the student list in the background, show its progress and
  // quietly reload the table when the new copy is ready (the current table stays usable).
  useEffect(() => {
    if (!data?.refreshing) return;
    let stopped = false;
    const poll = setInterval(async () => {
      try {
        const res = await fetch("/api/admin/cat-results/status", { cache: "no-store" });
        if (!res.ok || stopped) return;
        const st = (await res.json()) as AdminLoadStatus;
        setLoadStatus(st);
        if (!st.running) {
          stopped = true;
          clearInterval(poll);
          load(data.date, data.by, false, true);
        }
      } catch {
        /* ignore */
      }
    }, 3000);
    return () => {
      stopped = true;
      clearInterval(poll);
    };
  }, [data, load]);

  /** Loads career suggestions for any codes not loaded yet. */
  const ensureCareers = useCallback(async (codes: string[]) => {
    while (careersInFlight.current) await careersInFlight.current;
    const missing = Array.from(new Set(codes.filter((c) => c && !(c in careersRef.current))));
    if (!missing.length) return;
    const job = (async () => {
      setCareersLoading(true);
      try {
        const res = await fetch("/api/admin/cat-careers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ codes: missing }),
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json?.resultDataByCode) {
          careersRef.current = { ...careersRef.current, ...json.resultDataByCode };
        }
      } finally {
        setCareersLoading(false);
      }
    })();
    careersInFlight.current = job;
    try {
      await job;
    } finally {
      careersInFlight.current = null;
    }
  }, []);

  // Fetch career suggestions in the background as soon as a date's students are shown.
  useEffect(() => {
    if (data?.rows.length) ensureCareers(data.rows.map((r) => r.code)).catch(() => undefined);
  }, [data, ensureCareers]);

  useEffect(() => {
    load("", "test");
  }, [load]);

  const pickDate = (d: string, b: DateFilterBy) => {
    setDate(d);
    setBy(b);
    load(d, b);
  };

  const rows = useMemo(() => data?.rows ?? [], [data]);
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      [r.name, r.email, r.mobile, r.school, r.className, r.code]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [rows, search]);
  const withResults = useMemo(() => filtered.filter((r) => r.scores), [filtered]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const busy = loading || progress !== null;

  const downloadOne = async (r: AdminCatRow) => {
    if (!r.scores) return;
    setBusyRowId(r.id);
    try {
      await ensureCareers([r.code]);
      const { renderCatReportPdf } = await import("./CatResultReport");
      const pdf = await renderCatReportPdf(r, careersRef.current[r.code] ?? []);
      downloadBlob(pdf, pdfFileNames([r]).get(r.id)!, "application/pdf");
    } catch (e) {
      console.error(e);
      setError("Could not create the PDF for " + r.name);
    } finally {
      setBusyRowId(null);
    }
  };

  const downloadAll = async () => {
    if (!withResults.length || !data) return;
    setError("");
    setProgress({ done: 0, total: withResults.length });
    try {
      await ensureCareers(withResults.map((r) => r.code));
      const [{ createBulkReportRenderer }, { zipSync }] = await Promise.all([
        import("./CatResultReport"),
        import("fflate"),
      ]);
      const names = pdfFileNames(withResults);
      // Students with the same code share the trait/career pages, which are captured once.
      const ordered = [...withResults].sort((a, b) => (a.code < b.code ? -1 : a.code > b.code ? 1 : 0));
      const render = createBulkReportRenderer();
      const files: Record<string, Uint8Array> = {};
      const started = Date.now();
      for (let i = 0; i < ordered.length; i++) {
        const r = ordered[i];
        files[names.get(r.id)!] = new Uint8Array(await render(r, careersRef.current[r.code] ?? []));
        const perReport = (Date.now() - started) / (i + 1);
        setProgress({
          done: i + 1,
          total: ordered.length,
          secondsLeft: Math.round((perReport * (ordered.length - i - 1)) / 1000),
        });
      }
      // PDFs are already compressed images, so store them without re-compressing.
      const zipped = zipSync(files, { level: 0 });
      const label = data.by === "test" ? "CAT_Results" : "CAT_Results_Registered";
      downloadBlob(zipped as unknown as BlobPart, `${label}_${dateKeyToDmy(data.date)}.zip`, "application/zip");
    } catch (e) {
      console.error(e);
      setError("Could not create the ZIP file. Please try again.");
    } finally {
      setProgress(null);
    }
  };

  const exportExcel = async () => {
    if (!filtered.length || !data) return;
    const XLSX = await import("xlsx");
    const sheetRows = filtered.map((r, i) => {
      const out: Record<string, string | number> = {
        No: i + 1,
        Name: r.name,
        Email: r.email || "",
        Mobile: r.mobile || "",
        Class: r.className || "",
        "School Name": r.school || "",
      };
      for (const k of RIASEC_ORDER) out[`${k.label} Score`] = r.scores ? r.scores[k.key] : "N/A";
      out["3-Point Code"] = r.code || "N/A";
      out["Test Date"] = formatIst(r.testAt);
      out["Created Date"] = formatIst(r.createdAt);
      out["Magic Link"] = r.magicLink || "";
      return out;
    });
    const ws = XLSX.utils.json_to_sheet(sheetRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "CAT Results");
    XLSX.writeFile(wb, `CAT_Results_${dateKeyToDmy(data.date)}.xlsx`);
  };

  const copyLink = async (r: AdminCatRow) => {
    if (!r.magicLink) return;
    try {
      await navigator.clipboard.writeText(r.magicLink);
      setCopiedId(r.id);
      setTimeout(() => setCopiedId((id) => (id === r.id ? null : id)), 1500);
    } catch {
      window.prompt("Copy the magic link:", r.magicLink);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => undefined);
    window.location.href = "/admin/login";
  };

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <h1>
          Career Buddy Club · <span>CAT Results</span>
        </h1>
        <div className={styles.who}>
          <span>{adminEmail}</span>
          <button type="button" className={`${styles.btn} ${styles.ghost} ${styles.small}`} onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      <div className={styles.container}>
        {/* Filters */}
        <section className={styles.card}>
          <div className={styles.filters}>
            <div className={styles.field}>
              <label htmlFor="cat-date">Date</label>
              <input
                id="cat-date"
                type="date"
                value={date}
                max={data?.serverToday}
                onChange={(e) => e.target.value && pickDate(e.target.value, by)}
                disabled={busy}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="cat-by">Filter by</label>
              <select
                id="cat-by"
                value={by}
                onChange={(e) => pickDate(date, e.target.value as DateFilterBy)}
                disabled={busy}
              >
                <option value="test">Test date (CAT taken)</option>
                <option value="created">Created date (registered)</option>
              </select>
            </div>
            <div className={`${styles.field} ${styles.grow}`}>
              <label htmlFor="cat-search">Search</label>
              <input
                id="cat-search"
                type="search"
                placeholder="Name, email, mobile, school or code"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <button
              type="button"
              className={`${styles.btn} ${styles.ghost}`}
              onClick={() => load(date, by, true)}
              disabled={busy}
              title="Reload the latest data from the server"
            >
              {loading ? "Loading…" : "Refresh"}
            </button>
          </div>

          {data && data.recentTestDates.length > 0 && (
            <div className={styles.chips}>
              <span>Recent test dates:</span>
              {data.recentTestDates.map((d) => (
                <button
                  key={d.date}
                  type="button"
                  className={`${styles.chip} ${by === "test" && d.date === date ? styles.chipActive : ""}`}
                  onClick={() => pickDate(d.date, "test")}
                  disabled={busy}
                >
                  {formatIst(`${d.date} 12:00:00`, false)} · {d.count}
                </button>
              ))}
            </div>
          )}
        </section>

        {error && <div className={styles.error}>{error}</div>}

        {data && (
          <p className={styles.note} style={{ marginTop: -8, marginBottom: 16 }}>
            Checked {data.totalStudentsScanned} students · {data.totalWithResults} have a CAT result · latest
            test: {formatIst(data.latestTestAt)} · student data as of {formatIst(data.dataAsOf)} (IST, server
            time)
            {data.refreshing &&
              ` · updating in background${
                loadStatus?.running && loadStatus.totalPages
                  ? ` (${loadStatus.pagesDone}/${loadStatus.totalPages})`
                  : "…"
              }`}
            {careersLoading && " · loading career suggestions…"}
          </p>
        )}

        {/* Summary */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.label}>{by === "test" ? "Tests taken on" : "Registered on"}</div>
            <div className={styles.value} style={{ fontSize: 20 }}>
              {date ? formatIst(`${date} 12:00:00`, false) : "…"}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.label}>Students shown</div>
            <div className={styles.value}>{loading ? "…" : filtered.length}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.label}>With CAT result (in ZIP)</div>
            <div className={styles.value}>{loading ? "…" : withResults.length}</div>
          </div>
        </div>

        {/* Table */}
        <section className={styles.card}>
          <div className={styles.toolbar}>
            <h2>Students</h2>
            <div className={styles.actions}>
              <button
                type="button"
                className={`${styles.btn} ${styles.outline}`}
                onClick={exportExcel}
                disabled={busy || !filtered.length}
              >
                Export Excel
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.primary}`}
                onClick={downloadAll}
                disabled={busy || !withResults.length}
              >
                Download all ({withResults.length}) as ZIP
              </button>
            </div>
          </div>

          {progress && (
            <div className={styles.progress} aria-live="polite">
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${Math.round((progress.done / Math.max(progress.total, 1)) * 100)}%` }}
                />
              </div>
              <div className={styles.text}>
                {careersLoading && progress.done === 0
                  ? "Loading career suggestions…"
                  : `Creating PDFs… ${progress.done} of ${progress.total}${
                      progress.secondsLeft !== undefined && progress.done >= 3
                        ? ` · about ${
                            progress.secondsLeft >= 90
                              ? `${Math.ceil(progress.secondsLeft / 60)} min`
                              : `${Math.max(1, progress.secondsLeft)} s`
                          } left`
                        : ""
                    }. Please keep this tab open.`}
              </div>
            </div>
          )}

          {loading ? (
            <div className={styles.empty}>
              {loadStatus?.running && loadStatus.totalPages > 0
                ? `Collecting students from the server… ${loadStatus.pagesDone} of ${loadStatus.totalPages} parts (${elapsed}s)`
                : `Loading students… ${elapsed > 0 ? `${elapsed}s` : ""}`}
              {loadStatus?.running && loadStatus.totalPages > 0 && (
                <div className={styles.progress} style={{ maxWidth: 420, margin: "14px auto 0" }}>
                  <div className={styles.bar}>
                    <div
                      className={styles.fill}
                      style={{ width: `${Math.round((loadStatus.pagesDone / loadStatus.totalPages) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
              {elapsed >= 5 && (
                <div className={styles.note}>
                  The first load collects all students from the server (about 2-3 minutes). After that,
                  changing the date is instant.
                </div>
              )}
            </div>
          ) : !filtered.length ? (
            <div className={styles.empty}>
              {rows.length
                ? "No students match your search."
                : by === "test"
                ? "No student took the CAT on this date."
                : "No student registered on this date."}
            </div>
          ) : (
            <>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Class</th>
                      <th>School Name</th>
                      {RIASEC_ORDER.map((r) => (
                        <th key={r.key} className={styles.num} title={`${r.label} score`}>
                          {r.label}
                        </th>
                      ))}
                      <th>Code</th>
                      <th>Test Date</th>
                      <th>Created Date</th>
                      <th>Magic Link</th>
                      <th>Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageRows.map((r, i) => (
                      <tr key={r.id}>
                        <td>{(page - 1) * PAGE_SIZE + i + 1}</td>
                        <td>{r.name}</td>
                        <td>{r.email || <span className={styles.na}>N/A</span>}</td>
                        <td>{r.mobile || <span className={styles.na}>N/A</span>}</td>
                        <td>{r.className || <span className={styles.na}>N/A</span>}</td>
                        <td>{r.school || <span className={styles.na}>N/A</span>}</td>
                        {RIASEC_ORDER.map((k) => (
                          <td key={k.key} className={styles.num}>
                            {r.scores ? r.scores[k.key] : <span className={styles.na}>N/A</span>}
                          </td>
                        ))}
                        <td>{r.code ? <span className={styles.code}>{r.code}</span> : <span className={styles.na}>N/A</span>}</td>
                        <td>{formatIst(r.testAt)}</td>
                        <td>{formatIst(r.createdAt, false)}</td>
                        <td>
                          {r.magicLink ? (
                            <button type="button" className={styles.linkBtn} onClick={() => copyLink(r)}>
                              {copiedId === r.id ? "Copied" : "Copy link"}
                            </button>
                          ) : (
                            <span className={styles.na}>N/A</span>
                          )}
                        </td>
                        <td>
                          <button
                            type="button"
                            className={`${styles.btn} ${styles.outline} ${styles.small}`}
                            onClick={() => downloadOne(r)}
                            disabled={!r.scores || busy || busyRowId === r.id}
                          >
                            {busyRowId === r.id ? "…" : "PDF"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.pager}>
                <span>
                  Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
                  {filtered.length}
                </span>
                <div className={styles.actions}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.ghost} ${styles.small}`}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.ghost} ${styles.small}`}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page >= totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
          {data && (
            <p className={styles.note}>
              Dates are in India time. A student who retook the test appears under their latest test date.
              {by === "created" && " Students without a CAT result are listed but not included in the ZIP."}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
