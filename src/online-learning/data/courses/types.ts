/**
 * Types for the course detail pages (/online-course/<slug>).
 *
 * Two sources feed every page:
 *   1. API (data/api.ts → fetchCourseBySlug): name, stream, level, duration,
 *      fees, universities, approvals, and — once filled in the admin —
 *      specialisations, eligibility and selection criteria per university.
 *   2. Static content (data/courses/<slug>.ts): everything the API doesn't
 *      have — overview, benefits, syllabus, careers, FAQs, banner, etc.
 *
 * API values always win. Static fields marked "fallback" are only shown
 * when the API has nothing for that field.
 */

export type CourseLevel = "UG" | "PG" | "Diploma" | "Doctorate" | "Executive" | "Certificate";

export interface CourseBenefit {
  title: string;
  desc: string;
}

export interface SyllabusTerm {
  term: string; // "Semester 1", "Year 1", "Module 1" …
  subjects: string[];
}

export interface CareerRole {
  role: string;
  desc: string;
  salary: string; // indicative, e.g. "₹6 – 12 LPA"
}

export interface CourseFAQ {
  q: string;
  a: string;
}

/** One static content file per course. */
export interface CourseContent {
  /** URL slug — must match getCourseSlug() in data/courseSlugs.ts */
  slug: string;
  /** Display name, e.g. "Online MBA" (the API name can be inconsistent, e.g. "Online MEd.") */
  shortName: string;
  fullName: string;
  /**
   * Optional. The API's level (UG / PG / Doctorate) is used when this is
   * empty. Set it only to show a more specific label such as "Executive"
   * or "Certificate".
   */
  level?: CourseLevel;
  /** Fallback — shown only when no university in the API has a duration. */
  fallbackDuration?: string;

  tagline: string;
  /** Paragraphs for "About". If empty, the API course description is used. */
  overview: string[];
  /** Highlighted note under "About" — e.g. recognition caveats. */
  notice?: string;
  /** "Why choose" cards. If empty, the shared online-learning benefits are used. */
  benefits?: CourseBenefit[];
  /** Fallback — replaced by eligibility entered in the admin, when present. */
  eligibility: string[];
  entranceNote?: string;
  /** Fallback — replaced by specialisations entered in the admin, when present. */
  specializations: string[];
  syllabusIntro?: string;
  syllabus: SyllabusTerm[];
  careers: CareerRole[];
  /** Course-specific FAQs. Shared FAQs are added after these automatically. */
  faqs: CourseFAQ[];
  /** Slugs of related courses */
  related: string[];

  /** Photo used in the hero card and banner */
  image: string;
  /** Banner beside "About". Default title splits "Online MBA" → ["Online", "MBA"]. */
  bannerTitle?: string[];
  /** Default: "Gateway to a Brighter Future" */
  bannerTagline?: string;
  /** A designed banner image — replaces the coded banner when set. */
  bannerImage?: string;
}
