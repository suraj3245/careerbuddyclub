import type { Metadata } from "next";
import { SITE_LOGO, SITE_NAME, SITE_URL } from "@/config/site";
import type { FaqEntry, Guide } from "./types";

const DESCRIPTION_MAX = 155;

/** Trim to `max` characters on a word boundary, adding an ellipsis if cut. */
export function truncate(text: string, max = DESCRIPTION_MAX): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:–-]+$/, "")}…`;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Resolved SEO fields for a guide, each with a fallback. */
export function resolveGuideSeo(guide: Guide) {
  const headline = guide.headline?.trim() || guide.title?.trim() || guide.slug;
  const title = guide.title?.trim() || headline;
  const description =
    guide.description?.trim() ||
    (guide.excerpt ? truncate(guide.excerpt) : truncate(headline));
  const canonical = guide.canonical?.trim() || `${SITE_URL}/college-blogs/${guide.slug}`;
  const image = guide.image ? absoluteUrl(guide.image) : undefined;
  return { headline, title, description, canonical, image };
}

export function buildGuideMetadata(guide: Guide): Metadata {
  const { title, description, canonical, image, headline } = resolveGuideSeo(guide);
  const ogTitle = guide.ogTitle || title;
  const ogDescription = guide.ogDescription || description;
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: guide.imageAlt || headline }]
    : undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: guide.keywords,
    authors: [{ name: SITE_NAME }],
    category: "Education",
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      locale: "en_IN",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: image ? [image] : undefined,
    },
  };
}

export function articleSchema(guide: Guide) {
  const { headline, description, canonical, image } = resolveGuideSeo(guide);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: truncate(headline, 110),
    description,
    image: image ? [image] : undefined,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    keywords: guide.keywords?.join(", "),
  };
}

export function breadcrumbSchema(guide: Guide) {
  const { headline, canonical } = resolveGuideSeo(guide);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "College Guides", item: `${SITE_URL}/college-blogs` },
      { "@type": "ListItem", position: 3, name: headline, item: canonical },
    ],
  };
}

/** Plain-text answer used in the schema — the same words shown on the page. */
export function faqAnswerText(entry: FaqEntry): string {
  return [entry.answer, ...(entry.points ?? [])].filter(Boolean).join(" ").trim();
}

export function faqSchema(items: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
    })),
  };
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-10-12" → "12 October 2026" (no locale/timezone dependence). */
export function formatGuideDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** Safe JSON for a <script type="application/ld+json"> block. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
