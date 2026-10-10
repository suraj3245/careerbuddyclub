import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin/session";
import { getAllStudents, getResultDataForCodes } from "@/lib/admin/cat-backend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Career data (backend "resultData") for 3-letter codes: { codes: ["RIA", ...] } -> { resultDataByCode: { RIA: [...] } } */
export async function POST(request: NextRequest) {
  if (!verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }
  let codes: string[] = [];
  try {
    const body = await request.json();
    codes = Array.isArray(body?.codes) ? body.codes.filter((c: unknown) => typeof c === "string") : [];
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const wanted = new Set(codes.filter((c) => /^[RIASEC]{3}$/.test(c)).slice(0, 120));

  // getcatresultbyid needs a student id, so use any (cached) student who has each code.
  const students = await getAllStudents();
  const repByCode = new Map<string, number>();
  for (const s of students) {
    if (s.code && wanted.has(s.code) && !repByCode.has(s.code)) repByCode.set(s.code, s.id);
  }
  const resultDataByCode = await getResultDataForCodes(repByCode);
  return NextResponse.json({ resultDataByCode }, { headers: { "Cache-Control": "no-store" } });
}
