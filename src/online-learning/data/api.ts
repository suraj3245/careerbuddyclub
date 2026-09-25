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

export async function fetchOnlineStreams(): Promise<Stream[]> {
  try {
    const res = await fetch("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 } // cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch filtration data: ${res.statusText}`);
    }

    const data: FilterationData = await res.json();

    // Filter streams that contain "Online"
    const onlineStreams = (data.streams || []).filter(stream => (stream.title || "").includes("Online"));

    // Clean up titles (remove "(Online)" or " (Online)")
    const cleanedStreams = onlineStreams.map(stream => ({
      ...stream,
      title: (stream.title || "").replace(/\s*\(?Online\)?/gi, "").trim(),
    }));

    try {
      const collegeRes = await fetch("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (collegeRes.ok) {
        const collegeData = await collegeRes.json();
        const durationMap = new Map<number, string>();
        
        if (collegeData.colleges) {
          collegeData.colleges.forEach((col: any) => {
            if (col.courses) {
              col.courses.forEach((c: any) => {
                if (c.duration) durationMap.set(c.id, c.duration);
              });
            }
          });
        }

        cleanedStreams.forEach(stream => {
          if (stream.courses) {
            stream.courses.forEach(course => {
              if (durationMap.has(course.id)) {
                course.duration = durationMap.get(course.id);
              }
            });
          }
        });
      }
    } catch (err) {
      console.error("Error fetching durations:", err);
    }

    return cleanedStreams;
  } catch (error) {
    console.error("Error fetching online streams:", error);
    return [];
  }
}

export interface CollegeDetailCourse {
  id: number;
  name: string;
  duration?: string;
  pivot?: {
    college_id: number;
    course_id: string | number;
    fee: string;
  };
}

export interface CollegeDetail {
  id: number;
  college_full_name: string;
  about?: string;
  courses: CollegeDetailCourse[];
}

export async function fetchAllCollegesDetails(): Promise<CollegeDetail[]> {
  try {
    const res = await fetch("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }
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
}

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

export async function fetchUniversityBySlug(
  slug: string
): Promise<UniversityProfile | null> {
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
      duration: c.duration,
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
}

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
