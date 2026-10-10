// SERVER-ONLY. Admin login + signed session cookie for the Admin CAT Results dashboard.
// Never import this file from a "use client" component.
import crypto from "crypto";

export const ADMIN_COOKIE = "cbc_admin_session";
export const SESSION_TTL_SECONDS = 8 * 60 * 60; // 8 hours

export interface AdminSession {
  email: string;
  exp: number; // unix seconds
}

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret && secret.length >= 32 ? secret : null;
}

/** True when the required environment variables are present. */
export function isAdminAuthConfigured(): boolean {
  return Boolean(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD && getSecret());
}

function sha256(value: string): Buffer {
  return crypto.createHash("sha256").update(value, "utf8").digest();
}

/** Constant-time comparison (hashing first gives equal lengths). */
function safeEqual(a: string, b: string): boolean {
  return crypto.timingSafeEqual(sha256(a), sha256(b));
}

export function checkAdminCredentials(email: string, password: string): boolean {
  const expectedEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const expectedPassword = process.env.ADMIN_PASSWORD || "";
  if (!expectedEmail || !expectedPassword) return false;
  // Evaluate both so timing does not reveal which one was wrong.
  const emailOk = safeEqual(email.trim().toLowerCase(), expectedEmail);
  const passwordOk = safeEqual(password, expectedPassword);
  return emailOk && passwordOk;
}

function sign(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createSessionToken(email: string): string {
  const secret = getSecret();
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is missing or shorter than 32 characters");
  const session: AdminSession = {
    email,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const payload = Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
  return `${payload}.${sign(payload, secret)}`;
}

export function verifySessionToken(token: string | undefined | null): AdminSession | null {
  const secret = getSecret();
  if (!secret || !token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload, secret);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AdminSession;
    if (typeof session.email !== "string" || typeof session.exp !== "number") return null;
    if (session.exp * 1000 < Date.now()) return null;
    // Sessions end as soon as the configured admin email changes.
    if (session.email !== (process.env.ADMIN_EMAIL || "").trim().toLowerCase()) return null;
    return session;
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_TTL_SECONDS,
};

// ---- Simple in-memory brute-force protection (per server instance) ----
const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60 * 1000;
const failures = new Map<string, { count: number; lockedUntil: number }>();

export function isLoginLocked(ip: string): number {
  const entry = failures.get(ip);
  if (!entry) return 0;
  if (entry.lockedUntil > Date.now()) return entry.lockedUntil - Date.now();
  if (entry.lockedUntil) failures.delete(ip);
  return 0;
}

export function recordLoginFailure(ip: string): void {
  const entry = failures.get(ip) || { count: 0, lockedUntil: 0 };
  entry.count += 1;
  if (entry.count >= MAX_FAILURES) {
    entry.lockedUntil = Date.now() + LOCK_MS;
    entry.count = 0;
  }
  failures.set(ip, entry);
  if (failures.size > 5000) failures.clear(); // keep memory bounded
}

export function clearLoginFailures(ip: string): void {
  failures.delete(ip);
}

export function clientIp(headers: Headers): string {
  return (headers.get("x-forwarded-for") || "").split(",")[0].trim() || headers.get("x-real-ip") || "unknown";
}
