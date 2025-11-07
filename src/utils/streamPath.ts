export function normalizeForPath(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

export function toStreamPath(title: string, id: number): string {
  const norm = normalizeForPath(title || "stream");
  return `${norm}`;
}

export function findStreamIdByPathTitle(pathTitle: string, streams: { id: number; title: string }[]): number | null {
  const normTarget = normalizeForPath(pathTitle || "");
  const match = streams.find(s => normalizeForPath(s.title) === normTarget);
  return match ? match.id : null;
}


