import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  checkAdminCredentials,
  clearLoginFailures,
  clientIp,
  createSessionToken,
  isAdminAuthConfigured,
  isLoginLocked,
  recordLoginFailure,
  sessionCookieOptions,
} from "@/lib/admin/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      { error: "Admin login is not configured on the server (ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_SESSION_SECRET)." },
      { status: 500 }
    );
  }

  const ip = clientIp(request.headers);
  const lockedForMs = isLoginLocked(ip);
  if (lockedForMs > 0) {
    return NextResponse.json(
      { error: `Too many failed attempts. Try again in ${Math.ceil(lockedForMs / 60000)} minutes.` },
      { status: 429 }
    );
  }

  let email = "";
  let password = "";
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email : "";
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!email || !password || !checkAdminCredentials(email, password)) {
    recordLoginFailure(ip);
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  clearLoginFailures(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, createSessionToken(email.trim().toLowerCase()), sessionCookieOptions);
  return res;
}
