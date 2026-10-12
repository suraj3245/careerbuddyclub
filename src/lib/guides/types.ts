/**
 * Content model for college guides (/college-blogs/*).
 *
 * This is the guides "CMS": every guide has one entry in src/data/guides.ts and
 * its page reads title, description, headline, dates, FAQs and comparison table
 * from that entry. `title`, `description` and `headline` are required — the
 * build fails type-checking if a guide is added without them.
 */

export interface FaqEntry {
  question: string;
  /** Plain-text answer. Printed on the page and in the FAQPage schema. */
  answer: string;
  /** Optional bullet points shown under the answer (also added to the schema text). */
  points?: string[];
}

/** One row of the comparison block. Every column except `college` is optional. */
export interface ComparisonRow {
  college: string;
  /** Optional link for the college name (internal paths like /college-details/BFIT or full URLs). */
  collegeHref?: string;
  location?: string;
  courses?: string;
  approval?: string;
  fee?: string;
  seats?: string;
  placements?: string;
}

export interface ComparisonTableData {
  /** Optional H2 shown above the table. */
  heading?: string;
  /** Optional short note under the table (e.g. "Fees are approximate"). */
  note?: string;
  rows: ComparisonRow[];
}

export interface Guide {
  /** URL slug under /college-blogs/. */
  slug: string;

  // ---- Required fields -------------------------------------------------
  /** <title> tag (aim for ≤ 60 characters). */
  title: string;
  /** Meta description (aim for ≤ 155 characters). */
  description: string;
  /** Visible headline — always rendered as the page's single <h1>. */
  headline: string;

  // ---- Optional fields (sensible fallbacks exist) ----------------------
  /** Short summary; used as the description fallback (first 155 chars). */
  excerpt?: string;
  /** Overrides the default canonical (https://careerbuddyclub.com/college-blogs/<slug>). */
  canonical?: string;
  /** Category label shown in the byline, e.g. "Pharmacy". */
  category?: string;
  /** Banner image path under /public, used for the page and for Article / OG images. */
  image?: string;
  imageAlt?: string;
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  faqs?: FaqEntry[];
  comparison?: ComparisonTableData;
}
