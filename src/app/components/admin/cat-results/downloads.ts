// File-name and download helpers for the Admin CAT Results dashboard.
import type { AdminCatRow } from "@/lib/admin/cat-types";

/** "Rahul Sharma" -> "Rahul_Sharma". Falls back to Student_<id> when nothing usable is left. */
export function safeFileBase(name: string, id: number): string {
  const base = name
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
  return base || `Student_${id}`;
}

/** Unique "<Name>_CAT_Result.pdf" per student; repeated names get _2, _3 ... */
export function pdfFileNames(rows: AdminCatRow[]): Map<number, string> {
  const used = new Map<string, number>();
  const out = new Map<number, string>();
  for (const r of rows) {
    const base = safeFileBase(r.name, r.id);
    const key = base.toLowerCase();
    const n = (used.get(key) || 0) + 1;
    used.set(key, n);
    out.set(r.id, `${n === 1 ? base : `${base}_${n}`}_CAT_Result.pdf`);
  }
  return out;
}

export function downloadBlob(data: BlobPart, filename: string, type: string): void {
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
