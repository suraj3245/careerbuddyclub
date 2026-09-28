/**
 * Course URL slugs — client-safe (no server imports, no big content).
 *
 * The API returns course names like "Online MBA", "1 Year MBA Online" or
 * "Master of Arts (Political Science)". Each one is mapped to a stable,
 * SEO-friendly slug so every course gets its own page at
 * /online-course/<slug>. Names that don't match a rule fall back to a
 * plain slugified name, so a course added in the admin later still gets a
 * working page (with generic content) without a code change.
 *
 * ORDER MATTERS: more specific rules first ("1 Year MBA" before "MBA").
 */

export const COURSE_BASE_PATH = "/online-course";

const SLUG_RULES: [RegExp, string][] = [
  [/\b1\s*year\s*mba\b|\bone\s*year\s*mba\b/i, "one-year-online-mba"],
  [/\bdual\s*mba\b/i, "dual-mba-online"],
  [/\bmba\s*(&|and)\s*doctorate\b/i, "mba-and-doctorate-combo"],
  [/\bexecutive\s*mba\b|\bemba\b/i, "executive-mba-online"],
  [/\bexec(utive)?\.?\s*pg\s*(in\s*)?management\b/i, "executive-pg-management-online"],
  [/\bsenior\s*(mgmt|management)\b/i, "senior-management-programme"],
  [/\bph\.?\s*d\.?\s*in\s*management\b/i, "phd-in-management"],
  [/\bph\.?\s*d\.?\s*in\s*education\b/i, "phd-in-education"],
  [/\bph\.?\s*d\.?\s*in\s*(cs|computer\s*science)\b/i, "phd-in-computer-science"],
  [/\bm\.?\s*ed\.?\s*(&|and)\s*ed\.?\s*d\b/i, "med-and-edd-combo"],
  [/\bm\.?\s*ed\b\.?/i, "online-med"],
  [/\bpg\s*in\s*ai\b|\bartificial\s*intelligence\b/i, "pg-in-ai-online"],
  [/\bdata\s*science\b/i, "pg-in-data-science-online"],
  [/\bmaster\s*of\s*arts\s*\(?\s*economics/i, "online-ma-economics"],
  [/\bmaster\s*of\s*arts\s*\(?\s*political\s*science/i, "online-ma-political-science"],
  [/\bmaster\s*of\s*arts\s*\(?\s*english/i, "online-ma-english"],
  [/\bm\.?\s*sc\b\.?/i, "online-msc"],
  [/\bm\.?\s*com\b\.?/i, "online-mcom"],
  [/\bmca\b/i, "online-mca"],
  [/\bmba\b/i, "online-mba"],
  [/\bonline\s*ma\b|\bmaster\s*of\s*arts\b/i, "online-ma"],
  [/\bb\.?\s*com\b\.?/i, "online-bcom"],
  [/\bbba\b/i, "online-bba"],
  [/\bbca\b/i, "online-bca"],
  [/\bb\.\s*a\b\.?|\bonline\s*ba\b|\bbachelor\s*of\s*arts\b/i, "online-ba"],
];

export function slugifyCourseName(name: string): string {
  return String(name || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Stable slug for a course name coming from the API. */
export function getCourseSlug(name?: string): string {
  const n = String(name || "").trim();
  for (const [re, slug] of SLUG_RULES) {
    if (re.test(n)) return slug;
  }
  return slugifyCourseName(n);
}

/** Full href for a course detail page. */
export function getCourseHref(name?: string): string {
  return `${COURSE_BASE_PATH}/${getCourseSlug(name)}`;
}
