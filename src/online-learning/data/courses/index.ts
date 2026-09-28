/**
 * Course registry + merge logic for /online-course/<slug>.
 *
 * ADDING A COURSE
 *   1. Copy any file in this folder (e.g. online-mba.ts) to <new-slug>.ts
 *      — the slug must match getCourseSlug() in ../courseSlugs.ts.
 *   2. Edit its content, then add it to the imports and COURSES list below.
 *   A course that is in the API but has no file here still gets a basic
 *   page (API data + buildFallbackContent()).
 *
 * WHERE DATA COMES FROM  (see resolveCourse below)
 *   API:    fees, duration, universities, approvals, level, stream —
 *           plus specialisations / eligibility / description when they
 *           are filled in the admin (they then replace the static ones).
 *   Static: everything else, from the course's own file.
 */
import type { CourseDetail, CourseOffering } from "../api";
import type {
  CourseBenefit,
  CourseContent,
  CourseFAQ,
  CourseLevel,
  CareerRole,
  SyllabusTerm,
} from "./types";
import {
  ADMISSION_STEPS,
  COMMON_FAQS,
  DEFAULT_BANNER_TAGLINE,
  DEFAULT_BENEFITS,
  LEVEL_LABEL,
  buildFallbackContent,
  getRequiredDocuments,
} from "./shared";

import dualMbaOnline from "./dual-mba-online";
import executiveMbaOnline from "./executive-mba-online";
import executivePgManagementOnline from "./executive-pg-management-online";
import mbaAndDoctorateCombo from "./mba-and-doctorate-combo";
import medAndEddCombo from "./med-and-edd-combo";
import oneYearOnlineMba from "./one-year-online-mba";
import onlineBa from "./online-ba";
import onlineBba from "./online-bba";
import onlineBca from "./online-bca";
import onlineBcom from "./online-bcom";
import onlineMa from "./online-ma";
import onlineMaEconomics from "./online-ma-economics";
import onlineMaEnglish from "./online-ma-english";
import onlineMaPoliticalScience from "./online-ma-political-science";
import onlineMba from "./online-mba";
import onlineMca from "./online-mca";
import onlineMcom from "./online-mcom";
import onlineMed from "./online-med";
import onlineMsc from "./online-msc";
import pgInAiOnline from "./pg-in-ai-online";
import pgInDataScienceOnline from "./pg-in-data-science-online";
import phdInComputerScience from "./phd-in-computer-science";
import phdInEducation from "./phd-in-education";
import phdInManagement from "./phd-in-management";
import seniorManagementProgramme from "./senior-management-programme";

export * from "./types";
export { ADMISSION_STEPS, LEVEL_LABEL } from "./shared";

const COURSES: CourseContent[] = [
  dualMbaOnline,
  executiveMbaOnline,
  executivePgManagementOnline,
  mbaAndDoctorateCombo,
  medAndEddCombo,
  oneYearOnlineMba,
  onlineBa,
  onlineBba,
  onlineBca,
  onlineBcom,
  onlineMa,
  onlineMaEconomics,
  onlineMaEnglish,
  onlineMaPoliticalScience,
  onlineMba,
  onlineMca,
  onlineMcom,
  onlineMed,
  onlineMsc,
  pgInAiOnline,
  pgInDataScienceOnline,
  phdInComputerScience,
  phdInEducation,
  phdInManagement,
  seniorManagementProgramme,
];

const BY_SLUG = new Map(COURSES.map((c) => [c.slug, c]));

export function getCourseContent(slug: string): CourseContent | undefined {
  return BY_SLUG.get(slug);
}

export function getAllCourseContent(): CourseContent[] {
  return COURSES;
}

// ── Merge: API first, static content as fallback ────────────────────────

export type DataSource = "api" | "static";

/** Everything a course page renders, already merged. */
export interface ResolvedCourse {
  slug: string;
  name: string;
  fullName: string;
  streamTitle?: string;
  level: CourseLevel;
  levelLabel: string;
  duration?: string;
  durationSource?: DataSource;
  feeRange: { min: number; max: number } | null;
  offerings: CourseOffering[];
  approvals: string[];
  tagline: string;
  overview: string[];
  notice?: string;
  benefits: CourseBenefit[];
  eligibility: string[];
  eligibilitySource: DataSource;
  entranceNote?: string;
  documents: CourseBenefit[];
  admissionSteps: CourseBenefit[];
  specializations: string[];
  specializationsSource: DataSource;
  syllabusIntro?: string;
  syllabus: SyllabusTerm[];
  careers: CareerRole[];
  faqs: CourseFAQ[];
  related: string[];
  image: string;
  bannerTitle: string[];
  bannerTagline: string;
  bannerImage?: string;
}

function inferLevel(name: string): CourseLevel {
  const n = name.toLowerCase();
  if (/ph\.?d|doctor|ed\.?d/.test(n)) return "Doctorate";
  if (/executive|senior/.test(n)) return "Executive";
  if (/^b|bachelor|online\s*b/.test(n)) return "UG";
  return "PG";
}

function defaultBannerTitle(name: string): string[] {
  const m = name.trim().match(/^online\s+(.+)$/i);
  return m ? ["Online", m[1]] : [name.trim()];
}

/**
 * Builds the page data for a slug. Returns null when the course is in
 * neither the API nor data/courses.
 */
export function resolveCourse(slug: string, api: CourseDetail | null): ResolvedCourse | null {
  const content = getCourseContent(slug) ?? (api ? buildFallbackContent(slug, api.name) : undefined);
  if (!content) return null;

  const level: CourseLevel = content.level ?? api?.level ?? inferLevel(content.shortName);
  const duration = api?.duration || content.fallbackDuration;
  const apiEligibility = api?.eligibility ?? [];
  const apiSpecs = api?.specializations ?? [];

  return {
    slug,
    name: content.shortName,
    fullName: content.fullName,
    streamTitle: api?.streamTitle,
    level,
    levelLabel: LEVEL_LABEL[level],
    duration,
    durationSource: api?.duration ? "api" : content.fallbackDuration ? "static" : undefined,
    feeRange: api?.feeRange ?? null,
    offerings: api?.offerings ?? [],
    approvals: api?.approvals ?? [],
    tagline: content.tagline,
    overview: content.overview.length ? content.overview : api?.description ? [api.description] : [],
    notice: content.notice,
    benefits: content.benefits?.length ? content.benefits : DEFAULT_BENEFITS,
    eligibility: apiEligibility.length ? apiEligibility : content.eligibility,
    eligibilitySource: apiEligibility.length ? "api" : "static",
    entranceNote: content.entranceNote,
    documents: getRequiredDocuments(level),
    admissionSteps: ADMISSION_STEPS,
    specializations: apiSpecs.length ? apiSpecs : content.specializations,
    specializationsSource: apiSpecs.length ? "api" : "static",
    syllabusIntro: content.syllabusIntro,
    syllabus: content.syllabus,
    careers: content.careers,
    faqs: [...content.faqs, ...COMMON_FAQS(content.shortName)],
    related: content.related,
    image: content.image,
    bannerTitle: content.bannerTitle?.length ? content.bannerTitle : defaultBannerTitle(content.shortName),
    bannerTagline: content.bannerTagline || DEFAULT_BANNER_TAGLINE,
    bannerImage: content.bannerImage,
  };
}
