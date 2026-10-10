import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin/session";
import {
  backendNow,
  getAllStudents,
  isRefreshing,
  refreshStudentsInBackground,
  studentsCachedAt,
} from "@/lib/admin/cat-backend";
import {
  AdminCatResultsResponse,
  AdminCatRow,
  DateFilterBy,
  isValidDateKey,
  istDateKey,
  parseBackendTimestamp,
} from "@/lib/admin/cat-types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  // Every request is checked on the server; the page guard alone is not relied on.
  const session = verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }

  // No date given (first page load) -> the most recent day on which a CAT was taken.
  const requestedDate = request.nextUrl.searchParams.get("date");
  const by: DateFilterBy = request.nextUrl.searchParams.get("by") === "created" ? "created" : "test";
  const refresh = request.nextUrl.searchParams.get("refresh") === "1";
  if (requestedDate && !isValidDateKey(requestedDate)) {
    return NextResponse.json({ error: "Please choose a valid date" }, { status: 400 });
  }

  let students: AdminCatRow[];
  try {
    // "Refresh" never makes the admin wait: the current list is shown while a fresh copy
    // loads in the background (the dashboard reloads itself when it is ready).
    if (refresh) refreshStudentsInBackground();
    students = await getAllStudents();
  } catch (err) {
    console.error("[admin/cat-results] backend fetch failed", err);
    return NextResponse.json(
      { error: `Could not load students from the backend: ${(err as Error)?.message || err}` },
      { status: 502 }
    );
  }

  const dateCounts = new Map<string, number>();
  let totalWithResults = 0;
  let latestTestMs = -1;
  let latestTestAt: string | null = null;
  for (const s of students) {
    const testMs = parseBackendTimestamp(s.testAt);
    if (testMs === null) continue;
    totalWithResults += 1;
    const key = istDateKey(testMs);
    dateCounts.set(key, (dateCounts.get(key) || 0) + 1);
    if (testMs > latestTestMs) {
      latestTestMs = testMs;
      latestTestAt = s.testAt;
    }
  }

  const serverNowMs = backendNow();
  const serverToday = istDateKey(serverNowMs);
  const date = requestedDate || (latestTestMs >= 0 ? istDateKey(latestTestMs) : serverToday);

  const rows: AdminCatRow[] = [];
  for (const s of students) {
    const ms = parseBackendTimestamp(by === "test" ? s.testAt : s.createdAt);
    if (ms !== null && istDateKey(ms) === date) rows.push(s);
  }

  // Newest first by the chosen date.
  rows.sort((a, b) => {
    const ta = parseBackendTimestamp(by === "test" ? a.testAt : a.createdAt) || 0;
    const tb = parseBackendTimestamp(by === "test" ? b.testAt : b.createdAt) || 0;
    return tb - ta;
  });


  const recentTestDates = Array.from(dateCounts.entries())
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .slice(0, 10)
    .map(([d, count]) => ({ date: d, count }));

  const body: AdminCatResultsResponse = {
    date,
    by,
    rows,
    recentTestDates,
    totalStudentsScanned: students.length,
    totalWithResults,
    latestTestAt,
    serverNow: new Date(serverNowMs).toISOString(),
    serverToday,
    fetchedAt: new Date(serverNowMs).toISOString(),
    dataAsOf: new Date(studentsCachedAt() ?? serverNowMs).toISOString(),
    refreshing: isRefreshing(),
  };
  return NextResponse.json(body, { headers: { "Cache-Control": "no-store" } });
}
