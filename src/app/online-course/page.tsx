import Link from "next/link";
import type { Metadata } from "next";
import { fetchAllOnlineCourses } from "@/online-learning/data/api";
import { getAllCourseContent, getCourseContent } from "@/online-learning/data/courses";
import { COURSE_BASE_PATH } from "@/online-learning/data/courseSlugs";

export const metadata: Metadata = {
  title: "Online Courses: UG, PG, Executive & Doctorate Programmes | Career Buddy Club",
  description:
    "Explore online MBA, MCA, BBA, BCA, M.Com, MA, M.Sc., executive and doctorate programmes. Compare fees, eligibility, syllabus and top universities.",
  alternates: { canonical: COURSE_BASE_PATH },
};

export default async function OnlineCoursesIndex() {
  const apiCourses = await fetchAllOnlineCourses();

  // Group by stream (API order). Fall back to our own content if the API is down.
  const groups = new Map<string, { slug: string; name: string; duration: string; tagline: string }[]>();
  const source =
    apiCourses.length > 0
      ? apiCourses
      : getAllCourseContent().map((c) => ({ slug: c.slug, name: c.shortName, streamTitle: "Online Courses", duration: c.fallbackDuration }));

  source.forEach((c) => {
    const content = getCourseContent(c.slug);
    const list = groups.get(c.streamTitle) || [];
    list.push({
      slug: c.slug,
      name: content?.shortName || c.name,
      duration: c.duration || content?.fallbackDuration || "",
      tagline: content?.tagline || "",
    });
    groups.set(c.streamTitle, list);
  });

  return (
    <div className="cdPage">
      <section className="cdHero cdHero--compact">
        <div className="cdHeroInner">
          <div className="cdHeroCopy">
            <nav className="cdBreadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="cdBreadcrumbCurrent">Online Courses</span>
            </nav>
            <h1 className="cdHeroTitle">Explore Online Courses</h1>
            <p className="cdHeroTagline">
              Compare UG, PG, executive and doctorate programmes from leading universities — fees, eligibility, syllabus and careers in one place.
            </p>
          </div>
        </div>
      </section>

      {Array.from(groups.entries()).map(([stream, courses], i) => (
        <section key={stream} className={`cdBand ${i % 2 ? "cdBand--light" : "cdBand--white"}`}>
          <div className="cdSection">
            <h2 className="cdSectionTitle">{stream}</h2>
            <div className="cdRelatedGrid">
              {courses.map((c) => (
                <Link key={c.slug} href={`${COURSE_BASE_PATH}/${c.slug}`} className="cdRelatedCard">
                  <span className="cdRelatedName">{c.name}</span>
                  {c.duration && <span className="cdRelatedMeta">{c.duration}</span>}
                  {c.tagline && <span className="cdRelatedDesc">{c.tagline}</span>}
                  <span className="cdRelatedMore">View Course →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
