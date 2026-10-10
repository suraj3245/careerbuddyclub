import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin/session";
import { getStudentsLoadStatus } from "@/lib/admin/cat-backend";
import type { AdminLoadStatus } from "@/lib/admin/cat-types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Progress of the (slow) student list load, polled by the dashboard while it waits. */
export async function GET(request: NextRequest) {
  if (!verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }
  const s = getStudentsLoadStatus();
  const body: AdminLoadStatus = { running: s.running, pagesDone: s.pagesDone, totalPages: s.totalPages };
  return NextResponse.json(body, { headers: { "Cache-Control": "no-store" } });
}
