/**
 * Stream (category) slugs for /colleges/<slug>.
 *
 * Canonical form matches the sitemap: lower-case, every run of non-alphanumeric
 * characters becomes "-" ("Health & Medicine" → "health-medicine").
 * The older "-and-" form ("health-and-medicine") is still recognised so old
 * links resolve (and are redirected to the canonical slug).
 */
export function normalizeForPath(text: string): string {
  return (text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Legacy form that spelled "&" as "and". */
function legacyPath(text: string): string {
  return (text || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function toStreamPath(title: string, _id?: number): string {
  return normalizeForPath(title || "stream");
}

export function findStreamByPath<T extends { id: number; title: string }>(
  pathTitle: string,
  streams: T[]
): T | undefined {
  const target = (pathTitle || "").toLowerCase();
  if (!target) return undefined;
  return streams.find((s) => normalizeForPath(s.title) === target || legacyPath(s.title) === target);
}

export function findStreamIdByPathTitle(pathTitle: string, streams: { id: number; title: string }[]): number | null {
  return findStreamByPath(pathTitle, streams)?.id ?? null;
}

export function toCitySlug(city: string): string {
  return normalizeForPath(city);
}
