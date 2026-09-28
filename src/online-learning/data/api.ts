import { cache } from "react";
import { getCourseSlug } from "./courseSlugs";

export interface College {
  id: number;
  college_full_name: string;
  college_short_name?: string;
  type?: string;
  about?: string;
}

export interface Course {
  id: number;
  name: string;
  stream_id: string;
  duration?: string;
}

export interface Stream {
  id: number;
  title: string;
  colleges: College[];
  courses: Course[];
}

export interface FilterationData {
  streams: Stream[];
}

const API_BASE = "https://test.careerbuddyclub.com:8080/api/students";
const REVALIDATE_SECONDS = 3600; // refresh API data at most once an hour

/**
 * Raw `getfilterationdata` response (all streams).
 *
 * Wrapped in React `cache()` so it is requested ONCE per server render.
 * These are POST requests, which Next.js does not de-duplicate on its own —
 * without this, a single university page (layout + generateMetadata + page)
 * hit the API 3× for this endpoint.
 */
const fetchFilterationStreams = cache(async (): Promise<Stream[]> => {
  const res = await fetch(`${API_BASE}/getfilterationdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch filtration data: ${res.statusText}`);
  }

  const data: FilterationData = await res.json();
  return data.streams || [];
});

export const fetchOnlineStreams = cache(async (): Promise<Stream[]> => {
  try {
    // Both requests run in parallel (they used to run one after the other).
    const [allStreams, allColleges] = await Promise.all([
      fetchFilterationStreams(),
      fetchAllCollegesDetails(),
    ]);

    // Course durations live on the colleges endpoint
    const durationMap = new Map<number, string>();
    allColleges.forEach((col) =>
      col.courses?.forEach((c) => {
        if (c.duration) durationMap.set(c.id, c.duration);
      })
    );

    // Keep only "Online" streams, clean their titles "(Online)" → "",
    // and attach durations (copies — the cached raw data is never mutated)
    return allStreams
      .filter((stream) => (stream.title || "").includes("Online"))
      .map((stream) => ({
        ...stream,
        title: (stream.title || "").replace(/\s*\(?Online\)?/gi, "").trim(),
        courses: (stream.courses || []).map((course) =>
          durationMap.has(course.id)
            ? { ...course, duration: durationMap.get(course.id) }
            : course
        ),
      }));
  } catch (error) {
    console.error("Error fetching online streams:", error);
    return [];
  }
});

export interface CollegeDetailCourse {
  id: number;
  name: string;
  level_id?: string | number | null;
  duration?: string | null;
  description?: string | null;
  syllabus?: string | null;
  pivot?: {
    college_id: number;
    course_id: string | number;
    fee: string;
    description?: string | null;
    specialization?: string | null;
    selection_criteria?: string | null;
    eligibility_criteria?: string | null;
  };
}

export interface CollegeDetail {
  id: number;
  college_full_name: string;
  about?: string;
  approved_by?: string | null;
  recognised_by?: string | null;
  established_year?: string | null;
  courses: CollegeDetailCourse[];
}

export const fetchAllCollegesDetails = cache(async (): Promise<CollegeDetail[]> => {
  try {
    const res = await fetch(`${API_BASE}/getallcollegesdetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch college details: ${res.statusText}`);
    }

    const data = await res.json();
    return data.colleges || [];
  } catch (error) {
    console.error("Error fetching college details:", error);
    return [];
  }
});

// ── University Profile helpers ──────────────────────────────────────────

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** A course enriched with stream category info */
export interface UniversityCourse {
  id: number;
  name: string;
  duration?: string;
  fee?: string;
  streamCategory?: string;
  degreeLevel: string;
}

export interface UniversityProfile {
  id: number;
  slug: string;
  name: string;
  about?: string;
  courses: UniversityCourse[];
  streamCategories: string[];
  totalPrograms: number;
  feeRange: { min: number; max: number } | null;
}

function inferDegreeLevel(name: string): string {
  const n = name.toLowerCase();
  if (/\bph\.?d\b|\bdoctoral\b/.test(n)) return "PhD";
  if (/\bdiploma\b/.test(n)) return "Diploma";
  if (/\bcertificate\b/.test(n)) return "Certificate";
  if (
    /\b(m\.?a|m\.?b\.?a|m\.?s\.?c|m\.?com|m\.?tech|m\.?c\.?a|pgdm|pgpm|pgp|executive|mhrm|mib)\b/.test(n) ||
    /\bp\.?g\.?\s/.test(n)
  )
    return "PG";
  if (
    /\b(b\.?a|b\.?b\.?a|b\.?s\.?c|b\.?com|b\.?tech|b\.?c\.?a|b\.?m\.?s|b\.?h\.?m|b\.?p\.?t)\b/.test(n)
  )
    return "UG";
  return "Other";
}

// Cached per render: generateMetadata() and the page share one lookup
export const fetchUniversityBySlug = cache(async (
  slug: string
): Promise<UniversityProfile | null> => {
  try {
    const [streams, allColleges] = await Promise.all([
      fetchOnlineStreams(),
      fetchAllCollegesDetails(),
    ]);

    const onlineCollegeIds = new Set<number>();
    streams.forEach((s) => s.colleges?.forEach((c) => onlineCollegeIds.add(c.id)));

    const college = allColleges.find(
      (c) => onlineCollegeIds.has(c.id) && slugify(c.college_full_name) === slug
    );
    if (!college) return null;

    const courseStreamMap = new Map<number, string>();
    streams.forEach((s) =>
      s.courses?.forEach((c) => courseStreamMap.set(c.id, s.title))
    );

    const courses: UniversityCourse[] = (college.courses || []).map((c) => ({
      id: c.id,
      name: c.name,
      duration: c.duration ?? undefined,
      fee: c.pivot?.fee,
      streamCategory: courseStreamMap.get(c.id),
      degreeLevel: inferDegreeLevel(c.name),
    }));

    const fees = courses
      .map((c) => parseFloat(c.fee || ""))
      .filter((f) => !isNaN(f) && f > 0);
    const feeRange =
      fees.length > 0
        ? { min: Math.min(...fees), max: Math.max(...fees) }
        : null;

    const streamCategories = [
      ...new Set(courses.map((c) => c.streamCategory).filter(Boolean)),
    ] as string[];

    return {
      id: college.id,
      slug,
      name: college.college_full_name,
      about: college.about,
      courses,
      streamCategories,
      totalPrograms: courses.length,
      feeRange,
    };
  } catch (error) {
    console.error("Error fetching university profile:", error);
    return null;
  }
});

export async function fetchAllOnlineUniversitySlugs(): Promise<
  { slug: string; name: string }[]
> {
  try {
    const streams = await fetchOnlineStreams();
    const seen = new Map<number, string>();
    streams.forEach((s) =>
      s.colleges?.forEach((c) => {
        if (!seen.has(c.id)) seen.set(c.id, c.college_full_name);
      })
    );
    return Array.from(seen.values()).map((name) => ({
      slug: slugify(name),
      name,
    }));
  } catch (error) {
    console.error("Error fetching university slugs:", error);
    return [];
  }
}

// ── Course detail page helpers (/online-course/<slug>) ─────────────────
//
// Everything here comes from the API. Editorial content (overview, syllabus,
// careers, FAQs …) lives in data/courses/<slug>.ts and is merged with this
// data in data/courses/index.ts → resolveCourse().

/** Level ids used by the admin (course.level_id). */
export type ApiCourseLevel = "UG" | "PG" | "Diploma" | "Doctorate";
const API_LEVELS: Record<string, ApiCourseLevel> = {
  "1": "UG",
  "2": "PG",
  "3": "Diploma",
  "4": "Doctorate",
};

/** Admin placeholders that mean "no value". */
function clean(value?: string | null): string | undefined {
  const v = (value ?? "").trim();
  if (!v || /^(n\/?a|na|null|none|-|—)$/i.test(v)) return undefined;
  return v;
}

/** One university offering a course — all fields from the API. */
export interface CourseOffering {
  collegeId: number;
  collegeName: string;
  collegeSlug: string;
  fee?: string; // raw text, e.g. "1.20L", "80K", "80200"
  feeValue: number | null; // parsed rupees, for sorting / ranges
  duration?: string;
  approvedBy?: string;
  establishedYear?: string;
  specializations: string[];
  eligibility?: string;
  selectionCriteria?: string;
  notes?: string; // pivot.description
}

export interface CourseDetail {
  slug: string;
  /** Every API course id that maps to this slug (e.g. "Online Msc" + "Online M.SC") */
  courseIds: number[];
  name: string;
  streamTitle?: string;
  level?: ApiCourseLevel;
  description?: string;
  syllabus?: string;
  /** Most common duration across universities */
  duration?: string;
  offerings: CourseOffering[];
  feeRange: { min: number; max: number } | null;
  /** Union of every university's specialisations */
  specializations: string[];
  /** Distinct eligibility texts entered for this course */
  eligibility: string[];
  approvals: string[];
}

/** Parses API fee text ("1.20L", "80K", "90k", "2L", "80200") into rupees. */
export function parseFeeToRupees(fee?: string): number | null {
  if (!fee) return null;
  const s = String(fee).replace(/,/g, "").replace(/rs\.?|₹/gi, "").trim();
  const m = s.match(/(\d+(?:\.\d+)?)\s*(l|lac|lakh|lakhs|k)?/i);
  if (!m) return null;
  let n = parseFloat(m[1]);
  const unit = (m[2] || "").toLowerCase();
  if (unit.startsWith("l")) n *= 100000;
  else if (unit === "k") n *= 1000;
  return isNaN(n) || n <= 0 ? null : Math.round(n);
}

function splitList(value?: string): string[] {
  return (value || "")
    .split(/[,;|\n]/)
    .map((v) => v.trim())
    .filter(Boolean);
}

function mostCommon(values: (string | undefined)[]): string | undefined {
  const counts = new Map<string, number>();
  values.forEach((v) => v && counts.set(v, (counts.get(v) || 0) + 1));
  let best: string | undefined;
  let bestCount = 0;
  counts.forEach((count, v) => {
    if (count > bestCount) {
      best = v;
      bestCount = count;
    }
  });
  return best;
}

const unique = (values: (string | undefined)[]) =>
  Array.from(new Set(values.filter((v): v is string => Boolean(v))));

export const fetchCourseBySlug = cache(async (slug: string): Promise<CourseDetail | null> => {
  try {
    const [streams, allColleges] = await Promise.all([
      fetchOnlineStreams(),
      fetchAllCollegesDetails(),
    ]);

    // Online courses whose name maps to this slug
    const matches = streams.flatMap((s) =>
      (s.courses || [])
        .filter((c) => getCourseSlug(c.name) === slug)
        .map((c) => ({ course: c, streamTitle: s.title }))
    );
    if (matches.length === 0) return null;

    const ids = new Set(matches.map((m) => m.course.id));
    const onlineCollegeIds = new Set<number>();
    streams.forEach((s) => s.colleges?.forEach((c) => onlineCollegeIds.add(c.id)));

    const records: CollegeDetailCourse[] = [];
    const offeringMap = new Map<number, CourseOffering>();
    allColleges.forEach((college) => {
      if (!onlineCollegeIds.has(college.id)) return;
      (college.courses || []).forEach((c) => {
        if (!ids.has(c.id)) return;
        records.push(c);
        if (offeringMap.has(college.id)) return; // de-duplicate
        const p = c.pivot;
        offeringMap.set(college.id, {
          collegeId: college.id,
          collegeName: college.college_full_name,
          collegeSlug: slugify(college.college_full_name),
          fee: clean(p?.fee),
          feeValue: parseFeeToRupees(clean(p?.fee)),
          duration: clean(c.duration),
          approvedBy: clean(college.approved_by),
          establishedYear: clean(college.established_year),
          specializations: splitList(clean(p?.specialization)),
          eligibility: clean(p?.eligibility_criteria),
          selectionCriteria: clean(p?.selection_criteria),
          notes: clean(p?.description),
        });
      });
    });

    const offerings = Array.from(offeringMap.values()).sort(
      (a, b) => (a.feeValue ?? Infinity) - (b.feeValue ?? Infinity)
    );
    const fees = offerings.map((o) => o.feeValue).filter((f): f is number => f != null);

    return {
      slug,
      courseIds: Array.from(ids),
      name: matches[0].course.name,
      streamTitle: matches[0].streamTitle,
      level: API_LEVELS[String(records.find((r) => r.level_id)?.level_id ?? "")],
      description: records.map((r) => clean(r.description)).find(Boolean),
      syllabus: records.map((r) => clean(r.syllabus)).find(Boolean),
      duration:
        mostCommon(offerings.map((o) => o.duration)) ||
        clean(matches[0].course.duration),
      offerings,
      feeRange: fees.length ? { min: Math.min(...fees), max: Math.max(...fees) } : null,
      specializations: unique(offerings.flatMap((o) => o.specializations)),
      eligibility: unique(offerings.map((o) => o.eligibility)),
      approvals: unique(offerings.map((o) => o.approvedBy)),
    };
  } catch (error) {
    console.error("Error fetching course detail:", error);
    return null;
  }
});

/** Every online course slug with its stream — for static params and the index page. */
export async function fetchAllOnlineCourses(): Promise<
  { slug: string; name: string; streamTitle: string; duration?: string }[]
> {
  try {
    const streams = await fetchOnlineStreams();
    const seen = new Map<string, { slug: string; name: string; streamTitle: string; duration?: string }>();
    streams.forEach((s) =>
      (s.courses || []).forEach((c) => {
        const slug = getCourseSlug(c.name);
        if (!seen.has(slug)) seen.set(slug, { slug, name: c.name, streamTitle: s.title, duration: c.duration });
      })
    );
    return Array.from(seen.values());
  } catch (error) {
    console.error("Error fetching course slugs:", error);
    return [];
  }
}
