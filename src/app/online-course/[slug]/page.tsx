import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  fetchCourseBySlug,
  fetchAllOnlineCourses,
} from "@/online-learning/data/api";
import { getAllCourseContent, getCourseContent, resolveCourse } from "@/online-learning/data/courses";
import { COURSE_BASE_PATH } from "@/online-learning/data/courseSlugs";
import CourseDetailPage from "@/online-learning/components/course-page/CourseDetailPage";

interface PageProps {
  params: { slug: string };
}

const SITE_NAME = "Career Buddy Club";
const YEAR = new Date().getFullYear();

/** Page data: API first (fees, duration, universities …), static course file as fallback. */
async function loadCourse(slug: string) {
  const api = await fetchCourseBySlug(slug);
  return resolveCourse(slug, api);
}

export async function generateStaticParams() {
  // Every course in the API, plus every course we have content for
  // (so pages still build if the API is briefly unavailable)
  const apiCourses = await fetchAllOnlineCourses();
  const slugs = new Set<string>([
    ...apiCourses.map((c) => c.slug),
    ...getAllCourseContent().map((c) => c.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = await loadCourse(params.slug);
  if (!course) return { title: `Course Not Found | ${SITE_NAME}` };

  const count = course.offerings.length;
  const title = `${course.name} ${YEAR}: Fees, Eligibility, Syllabus & Top Universities | ${SITE_NAME}`;
  const description = `${course.name} (${course.fullName})${course.duration ? ` — ${course.duration}` : ""}, 100% online.${
    count ? ` Compare ${count} ${count === 1 ? "university" : "universities"} by fees,` : " Check fees,"
  } eligibility, syllabus, specialisations and career scope. Get free counselling.`;

  return {
    title,
    description,
    alternates: { canonical: `${COURSE_BASE_PATH}/${course.slug}` },
    openGraph: {
      title: `${course.name} — Fees, Eligibility & Top Universities`,
      description,
      type: "website",
      siteName: SITE_NAME,
    },
  };
}

export default async function OnlineCoursePage({ params }: PageProps) {
  const course = await loadCourse(params.slug);
  if (!course) notFound();

  // Related courses: only ones with a static file (so the page has content);
  // their duration also comes from the API when available.
  const related = await Promise.all(
    course.related
      .filter((slug) => getCourseContent(slug))
      .map(async (slug) => {
        const r = resolveCourse(slug, await fetchCourseBySlug(slug));
        return { slug, name: r?.name || slug, duration: r?.duration };
      })
  );

  // Structured data — Course, FAQPage and BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.fullName,
      description: course.overview[0] || course.tagline,
      educationalCredentialAwarded: course.fullName,
      provider: { "@type": "Organization", name: SITE_NAME },
      ...(course.offerings.length
        ? {
            hasCourseInstance: course.offerings.map((o) => ({
              "@type": "CourseInstance",
              courseMode: "Online",
              name: `${course.name} — ${o.collegeName}`,
              ...(o.feeValue
                ? { offers: { "@type": "Offer", price: o.feeValue, priceCurrency: "INR", category: "Paid" } }
                : {}),
            })),
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: course.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Online Courses", item: COURSE_BASE_PATH },
        { "@type": "ListItem", position: 3, name: course.name, item: `${COURSE_BASE_PATH}/${course.slug}` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <CourseDetailPage course={course} related={related} />
    </>
  );
}
