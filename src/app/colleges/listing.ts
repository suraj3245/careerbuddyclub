// Server-side helpers for /colleges and /colleges/<category>[/colleges-in-<city>].
// Filtering and pagination happen here so each page only ships the 20 colleges it shows.
import type { Metadata } from "next";
import { COLLEGES_PER_PAGE, RANKING_YEAR, SITE_NAME, SITE_URL } from "@/config/site";
import { findStreamByPath, toCitySlug, toStreamPath } from "@/utils/streamPath";
import type { FiltersObject } from "@/utils/filters.utils";

export type SearchParams = { [key: string]: string | string[] | undefined };

/** The only college fields the listing cards need. */
export interface CollegeCardData {
  id: number;
  college_full_name: string;
  college_short_name: string;
  city: string | null;
  type: string | null;
  approved_by: string | null;
  established_year: string | number | null;
}

export interface StreamLink {
  id: number;
  title: string;
  slug: string;
}

export interface ListingResult {
  /** True when the URL names a category/city that doesn't exist. */
  notFound: boolean;
  /** Canonical path for this category/city (no query string), e.g. /colleges/nursing. */
  basePath: string;
  /** Set when the requested path is a non-canonical variant (old "-and-" slug). */
  redirectTo?: string;
  streamId: number | null;
  streamName: string | null;
  streamDescription: string | null;
  city: string | null;
  filters: FiltersObject;
  filterOptions: Record<string, { name: string; id?: string; count?: number }[]>;
  streams: StreamLink[];
  colleges: CollegeCardData[];
  total: number;
  page: number;
  pageCount: number;
  h1: string;
  title: string;
  description: string;
  canonical: string;
  /** Query string (without page) to keep on pagination links, e.g. "Type=Private". */
  extraQuery: string;
}

const LISTING_KEYS = ["Location", "Type", "ApprovedBy", "Courses"] as const;

function toArray(v: string | string[] | undefined): string[] {
  if (v == null) return [];
  return (Array.isArray(v) ? v : [v]).map((s) => s.trim()).filter(Boolean);
}

function humanize(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Clean display name for a stream ("Health & Medicine"). */
export function streamDisplayName(title: string): string {
  return title.replace(/\s+/g, " ").trim();
}

export function resolveListing(
  slugParam: string | string[] | undefined,
  searchParams: SearchParams | undefined,
  data: { colleges: any[]; streams: any[] }
): ListingResult {
  const segments = (Array.isArray(slugParam) ? slugParam : slugParam ? [slugParam] : []).map((s) =>
    decodeURIComponent(s).toLowerCase()
  );
  const { colleges: allColleges, streams: rawStreams } = data;
  const hasData = allColleges.length > 0 && rawStreams.length > 0;

  // ---- Path: /colleges/<stream>/colleges-in-<city> (either part optional)
  let streamSeg = "";
  let citySeg = "";
  let unknownSegments = 0;
  for (const seg of segments) {
    if (seg.startsWith("colleges-in-") && !citySeg) citySeg = seg.slice("colleges-in-".length);
    else if (!streamSeg && !citySeg) streamSeg = seg;
    else unknownSegments++;
  }

  // Old URLs carried the stream as ?Streams=<id>; resolve it so we can redirect to the clean path.
  const queryStreamId = toArray(searchParams?.Streams)[0];
  const stream = streamSeg
    ? findStreamByPath(streamSeg, rawStreams)
    : queryStreamId
    ? rawStreams.find((s: any) => String(s.id) === queryStreamId)
    : undefined;
  const cities = Array.from(new Set(allColleges.map((c: any) => c.city).filter(Boolean))) as string[];
  const city = citySeg ? cities.find((c) => toCitySlug(c) === citySeg) ?? null : null;

  const notFound =
    hasData && (unknownSegments > 0 || (!!streamSeg && !stream) || (!!citySeg && !city));

  const streamName = stream ? streamDisplayName(stream.title) : streamSeg ? humanize(streamSeg) : null;
  const cityName = city ?? (citySeg ? humanize(citySeg) : null);

  const streamSlug = stream ? toStreamPath(stream.title) : streamSeg;
  const basePath =
    "/colleges" + (streamSlug ? `/${streamSlug}` : "") + (citySeg ? `/colleges-in-${city ? toCitySlug(city) : citySeg}` : "");
  const requestedPath = "/colleges" + segments.map((s) => `/${s}`).join("");
  const hasLegacyParams = searchParams?.Streams !== undefined || (!!city && toArray(searchParams?.Location).includes(city));
  const redirectTo =
    !notFound && hasData && (requestedPath !== basePath || hasLegacyParams) ? basePath : undefined;

  // ---- Filters: path gives stream + first city; the rest come from the query string.
  const filters: FiltersObject = {};
  if (stream) filters.Streams = [String(stream.id)];
  for (const key of LISTING_KEYS) {
    const vals = toArray(searchParams?.[key]);
    if (vals.length) filters[key] = Array.from(new Set(vals));
  }
  if (city) filters.Location = Array.from(new Set([city, ...(filters.Location ?? [])]));

  // ---- Filtering
  let filtered = allColleges;
  if (stream) {
    const ids = new Set((stream.colleges ?? []).map((c: any) => c.id));
    filtered = filtered.filter((c: any) => ids.has(c.id));
  }
  if (filters.Location?.length) filtered = filtered.filter((c: any) => filters.Location!.includes(c.city));
  if (filters.Type?.length) filtered = filtered.filter((c: any) => filters.Type!.includes(c.type));
  if (filters.ApprovedBy?.length) filtered = filtered.filter((c: any) => filters.ApprovedBy!.includes(c.approved_by));
  if (filters.Courses?.length)
    filtered = filtered.filter((c: any) => c.courses?.some((course: any) => filters.Courses!.includes(course.name)));

  // ---- Filter options (computed over all colleges, as before)
  const filterOptions: ListingResult["filterOptions"] = {};
  if (!stream) {
    filterOptions.Streams = rawStreams.map((s: any) => ({ name: streamDisplayName(s.title), id: String(s.id) }));
  } else if (stream.courses?.length) {
    filterOptions.Courses = stream.courses.map((c: any) => ({ name: c.name }));
  }
  const countBy = (field: string, limit: number) => {
    const m = new Map<string, number>();
    allColleges.forEach((c: any) => c[field] && m.set(c[field], (m.get(c[field]) || 0) + 1));
    return Array.from(m, ([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  };
  filterOptions.Location = countBy("city", 50);
  filterOptions.Type = countBy("type", 20);
  filterOptions.ApprovedBy = countBy("approved_by", 20);

  // ---- Pagination
  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / COLLEGES_PER_PAGE));
  const requestedPage = parseInt(toArray(searchParams?.page)[0] ?? "1", 10);
  const page = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), pageCount) : 1;
  const colleges: CollegeCardData[] = filtered
    .slice((page - 1) * COLLEGES_PER_PAGE, page * COLLEGES_PER_PAGE)
    .map((c: any) => ({
      id: c.id,
      college_full_name: c.college_full_name,
      college_short_name: c.college_short_name,
      city: c.city ?? null,
      type: c.type ?? null,
      approved_by: c.approved_by ?? null,
      established_year: c.established_year ?? null,
    }));

  // Query params other than page/path-derived ones, kept on pagination links.
  const extra = new URLSearchParams();
  for (const key of LISTING_KEYS) {
    for (const v of filters[key] ?? []) {
      if (key === "Location" && v === city) continue;
      extra.append(key, v);
    }
  }
  const extraQuery = extra.toString();

  // ---- Copy
  const place = cityName ?? "India";
  const year = RANKING_YEAR;
  const h1 = streamName
    ? `Best ${streamName} Colleges in ${place} ${year}: Admissions, Courses, Fees & Placements`
    : cityName
    ? `Best Colleges in ${place} ${year}: Admissions, Courses, Fees & Placements`
    : `Best Colleges in India ${year}: Rankings, Admissions, Courses, Fees & Placements`;

  const baseTitle = streamName
    ? `Best ${streamName} Colleges in ${place} ${year} – Fees & Admission`
    : cityName
    ? `Best Colleges in ${place} ${year} – Fees, Courses & Admission`
    : `Top Colleges in India ${year} – Fees, Courses & Placements`;
  const title = page > 1 ? `${baseTitle} – Page ${page}` : baseTitle;

  const countText = total > 0 ? `${total} ` : "";
  const description = streamName
    ? `Compare ${countText}${streamName} colleges in ${place} for ${year}: courses, fees, approvals, placements and admission details. Free counselling from ${SITE_NAME}.`
    : cityName
    ? `Compare ${countText}colleges in ${place} for ${year} by stream, courses, fees, approvals and placements. Free admission counselling from ${SITE_NAME}.`
    : `Compare ${countText}colleges across India for ${year} by stream, city, fees, approvals and placements. Free admission counselling from ${SITE_NAME}.`;

  const canonical = `${SITE_URL}${basePath}${page > 1 ? `?page=${page}` : ""}`;

  return {
    notFound,
    basePath,
    redirectTo,
    streamId: stream ? stream.id : null,
    streamName,
    streamDescription: stream?.description ?? null,
    city,
    filters,
    filterOptions,
    streams: rawStreams.map((s: any) => ({ id: s.id, title: streamDisplayName(s.title), slug: toStreamPath(s.title) })),
    colleges,
    total,
    page,
    pageCount,
    h1,
    title,
    description,
    canonical,
    extraQuery,
  };
}

export function listingMetadata(listing: ListingResult): Metadata {
  return {
    title: listing.title,
    description: listing.description,
    alternates: { canonical: listing.canonical },
    // Extra filter combinations (Type, ApprovedBy, …) point their canonical at the
    // clean category URL, so they don't compete with it.
    openGraph: {
      title: listing.title,
      description: listing.description,
      url: listing.canonical,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}
