"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ResolvedCourse } from "@/online-learning/data/courses";
import { COURSE_BASE_PATH } from "@/online-learning/data/courseSlugs";
import { universitiesData } from "@/online-learning/components/universities/universityData";
import { openExpertModal } from "@/online-learning/components/ExpertCallbackModal";
import { StickyMobileCTA } from "@/online-learning/components/university-profile/StickyMobileCTA";

export interface RelatedCourse {
  slug: string;
  name: string;
  duration?: string;
}

interface Props {
  /** Already merged: API data first, static content (data/courses/<slug>.ts) as fallback */
  course: ResolvedCourse;
  related: RelatedCourse[];
}

// ── helpers ────────────────────────────────────────────────────────────

const inr = new Intl.NumberFormat("en-IN");

export function formatINR(value: number | null | undefined): string {
  if (value == null) return "—";
  return `₹${inr.format(value)}`;
}

function getUniversityLogo(name: string, slug: string): string | undefined {
  const lower = name.toLowerCase();
  return universitiesData.find(
    (u) =>
      u.name.toLowerCase() === lower ||
      u.id === slug ||
      slug.includes(u.id) ||
      u.id.includes(slug)
  )?.logo;
}


// Small inline icons — no icon library needed
const Icon = {
  check: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  ),
  id: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 10h3M15 14h3" />
    </svg>
  ),
  photo: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="3.5" /><path d="M5 20c1-3.5 3.8-5 7-5s6 1.5 7 5" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />
    </svg>
  ),
};

/** "University Grants Commission (UGC)" → "UGC Approved"; other text is shown as-is. */
function approvalLabel(text: string): string {
  const abbr = text.match(/\(([A-Z][A-Z0-9-]{1,10})\)/);
  return abbr ? `${abbr[1]} Approved` : text;
}

const DOC_ICONS = [Icon.doc, Icon.id, Icon.photo, Icon.briefcase];

// ── Course banner (replaces the old Course Summary card) ─────────────────

function CourseBanner({ course, onKnowMore }: { course: ResolvedCourse; onKnowMore: () => void }) {
  const lines = course.bannerTitle;
  const longest = Math.max(...lines.map((l) => l.length));
  const sizeClass = longest > 16 ? "cdBanner--xs" : longest > 11 ? "cdBanner--sm" : "";
  const tagline = course.bannerTagline;

  // A designed banner image, if one has been added for this course
  if (course.bannerImage) {
    return (
      <button type="button" className="cdBannerImgBtn" onClick={onKnowMore} aria-label={`${course.name} — know more`}>
        <img src={course.bannerImage} alt={`${course.name} — ${tagline}`} className="cdBannerImg" />
      </button>
    );
  }

  return (
    <aside className={`cdBanner ${sizeClass}`} aria-label={`${course.name} banner`}>
      <svg className="cdBannerWaves" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M ${150 + i * 9} 300 C ${220 + i * 6} ${210 - i * 4}, ${260 + i * 5} ${120 - i * 3}, ${420} ${40 + i * 7}`}
          />
        ))}
      </svg>
      <span className="cdBannerBlob cdBannerBlob--1" aria-hidden="true" />
      <span className="cdBannerBlob cdBannerBlob--2" aria-hidden="true" />

      <div className="cdBannerPhoto" aria-hidden="true">
        <img src={course.image} alt="" />
      </div>

      <div className="cdBannerCopy">
        <p className="cdBannerTitle">
          {lines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <p className="cdBannerTagline">{tagline}</p>
        <button type="button" className="cdBannerBtn" onClick={onKnowMore}>
          Know More
        </button>
      </div>
    </aside>
  );
}

// ── component ──────────────────────────────────────────────────────────

export default function CourseDetailPage({ course, related }: Props) {
  const { offerings, feeRange, faqs, documents } = course;
  const duration = course.duration || "—";

  const feeText = feeRange
    ? feeRange.min === feeRange.max
      ? formatINR(feeRange.min)
      : `${formatINR(feeRange.min)} – ${formatINR(feeRange.max)}`
    : "Varies by university";

  // Sections shown in the sticky nav (hidden when there is nothing to show)
  const sections = useMemo(
    () =>
      [
        { id: "overview", label: "Overview", show: true },
        { id: "benefits", label: "Benefits", show: course.benefits.length > 0 },
        { id: "eligibility", label: "Eligibility", show: true },
        { id: "admission", label: "Admission", show: true },
        { id: "fees", label: "Fees", show: true },
        { id: "universities", label: "Universities", show: offerings.length > 0 },
        { id: "specialisations", label: "Specialisations", show: course.specializations.length > 0 },
        { id: "syllabus", label: "Syllabus", show: course.syllabus.length > 0 },
        { id: "careers", label: "Careers & Salary", show: course.careers.length > 0 },
        { id: "faqs", label: "FAQs", show: faqs.length > 0 },
      ].filter((s) => s.show),
    [course, offerings.length, faqs.length]
  );

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openEnquiry = useCallback(
    (university?: string) =>
      openExpertModal({ university: university || "", program: course.name }),
    [course.name]
  );

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      const offset = 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(sections[i].id);
          return;
        }
      }
      setActiveSection(sections[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="cdPage">
      {/* ───────────── HERO ───────────── */}
      <section className="cdHero">
        <div className="cdHeroInner">
          <div className="cdHeroCopy">
            <nav className="cdBreadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={COURSE_BASE_PATH}>Online Courses</Link>
              <span aria-hidden="true">/</span>
              <span className="cdBreadcrumbCurrent">{course.name}</span>
            </nav>

            <span className="cdEyebrow">
              <span className="cdEyebrowDot" /> {course.levelLabel}
              {course.streamTitle ? ` · ${course.streamTitle}` : ""}
            </span>

            <h1 className="cdHeroTitle">{course.name}</h1>
            {course.fullName !== course.name && (
              <p className="cdHeroFullName">{course.fullName}</p>
            )}
            <p className="cdHeroTagline">{course.tagline}</p>
          </div>

          <aside className="cdHeroCard" aria-label={`${course.name} at a glance`}>
            <div className="cdHeroImgWrap">
              <img src={course.image} alt={`${course.name} course`} className="cdHeroImg" />
            </div>
            <dl className="cdGlance">
              <div className="cdGlanceRow"><dt>Duration</dt><dd>{duration}</dd></div>
              <div className="cdGlanceRow"><dt>Mode</dt><dd>Online</dd></div>
              <div className="cdGlanceRow"><dt>Level</dt><dd>{course.levelLabel}</dd></div>
              <div className="cdGlanceRow"><dt>Fees</dt><dd>{feeText}</dd></div>
              <div className="cdGlanceRow"><dt>Eligibility</dt><dd>{course.eligibility[0]}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ───────────── STICKY SECTION NAV ───────────── */}
      <nav className="cdSectionNav" aria-label="On this page">
        <ul className="cdNavList">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`cdNavItem ${activeSection === s.id ? "cdNavActive" : ""}`}
                onClick={(e) => scrollTo(e, s.id)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ───────────── OVERVIEW ───────────── */}
      <section id="overview" className="cdBand cdBand--white">
        <div className="cdSection cdOverview">
          <div className="cdOverviewText">
            <h2 className="cdSectionTitle">About {course.name}</h2>
            {course.overview.map((p, i) => (
              <p key={i} className="cdPara">{p}</p>
            ))}
            {course.notice && (
              <div className="cdNotice" role="note">
                <span className="cdNoticeIcon">{Icon.info}</span>
                <p>{course.notice}</p>
              </div>
            )}
          </div>

          <CourseBanner course={course} onKnowMore={() => openEnquiry()} />
        </div>
      </section>

      {/* ───────────── BENEFITS ───────────── */}
      {course.benefits.length > 0 && (
        <section id="benefits" className="cdBand cdBand--light">
          <div className="cdSection">
            <h2 className="cdSectionTitle">Why Choose {course.name}?</h2>
            <div className="cdBenefitGrid">
              {course.benefits.map((b, i) => (
                <div key={b.title} className="cdBenefitCard">
                  <span className="cdBenefitNum">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────── ELIGIBILITY + DOCUMENTS ───────────── */}
      <section id="eligibility" className="cdBand cdBand--white">
        <div className="cdSection">
          <h2 className="cdSectionTitle">{course.name} Eligibility</h2>
          <div className="cdEligibility">
            <ul className="cdCheckList">
              {course.eligibility.map((e) => (
                <li key={e}><span className="cdCheckIcon">{Icon.check}</span>{e}</li>
              ))}
            </ul>
            {course.entranceNote && (
              <div className="cdEntranceNote">
                <h3>Entrance Exams</h3>
                <p>{course.entranceNote}</p>
              </div>
            )}
          </div>

          <h3 className="cdSubTitle">Documents Required</h3>
          <div className="cdDocGrid">
            {documents.map((d, i) => (
              <div key={d.title} className="cdDocCard">
                <span className="cdDocIcon">{DOC_ICONS[i % DOC_ICONS.length]}</span>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── ADMISSION PROCESS ───────────── */}
      <section id="admission" className="cdBand cdBand--light">
        <div className="cdSection">
          <h2 className="cdSectionTitle">{course.name} Admission Process</h2>
          <ol className="cdSteps">
            {course.admissionSteps.map((s, i) => (
              <li key={s.title} className="cdStep">
                <span className="cdStepNum">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── COUNSELLING CTA ───────────── */}
      <section className="cdBand cdBand--white">
        <div className="cdSection cdSection--tight">
          <div className="cdCtaBand">
            <div>
              <h2>Not sure which university is right for you?</h2>
              <p>Get a free 1:1 session with a Career Buddy Club counsellor — compare fees, approvals and EMI options for {course.name}.</p>
            </div>
            <button type="button" className="cdBtnYellow" onClick={() => openEnquiry()}>
              Talk to an Expert <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ───────────── FEES ───────────── */}
      <section id="fees" className="cdBand cdBand--white">
        <div className="cdSection">
          <h2 className="cdSectionTitle">{course.name} Fees</h2>
          <div className="cdFeeStats">
            <div className="cdFeeStat">
              <span className="cdFeeStatLabel">Fee Range</span>
              <span className="cdFeeStatValue">{feeText}</span>
            </div>
            <div className="cdFeeStat">
              <span className="cdFeeStatLabel">Duration</span>
              <span className="cdFeeStatValue">{duration}</span>
            </div>
            <div className="cdFeeStat">
              <span className="cdFeeStatLabel">Payment Options</span>
              <span className="cdFeeStatValue">Semester / Annual / EMI</span>
            </div>
          </div>

          {offerings.length > 0 ? (
            <>
              <div className="cdTableWrap">
                <table className="cdTable">
                  <thead>
                    <tr>
                      <th scope="col">University</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Programme Fee*</th>
                      <th scope="col"><span className="cdSrOnly">Action</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {offerings.map((o) => (
                      <tr key={o.collegeId}>
                        <td>
                          <Link href={`/online-university/${o.collegeSlug}`} className="cdTableLink">
                            {o.collegeName}
                          </Link>
                        </td>
                        <td>{o.duration || duration}</td>
                        <td className="cdTableFee">{o.feeValue ? formatINR(o.feeValue) : o.fee || "On request"}</td>
                        <td>
                          <button type="button" className="cdTableBtn" onClick={() => openEnquiry(o.collegeName)}>
                            Enquire
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="cdFootnote">
                *Indicative programme fees as listed by the universities. Fees can change — confirm the latest fee, scholarships and EMI plans with a counsellor.
              </p>
            </>
          ) : (
            <p className="cdPara">
              Fees for {course.name} vary by university and specialisation. Most universities let you pay semester-wise or through EMI.{" "}
              <button type="button" className="cdInlineLink" onClick={() => openEnquiry()}>
                Ask a counsellor for the latest fees →
              </button>
            </p>
          )}
        </div>
      </section>

      {/* ───────────── UNIVERSITIES ───────────── */}
      {offerings.length > 0 && (
        <section id="universities" className="cdBand cdBand--light">
          <div className="cdSection">
            <h2 className="cdSectionTitle">Top Universities Offering {course.name}</h2>
            <div className="cdUniGrid">
              {offerings.map((o) => {
                const logo = getUniversityLogo(o.collegeName, o.collegeSlug);
                return (
                  <article key={o.collegeId} className="cdUniCard">
                    <div className="cdUniLogo">
                      {logo ? <img src={logo} alt={`${o.collegeName} logo`} /> : <span>{o.collegeName.charAt(0)}</span>}
                    </div>
                    <h3 className="cdUniName">{o.collegeName}</h3>
                    {(o.approvedBy || o.establishedYear) && (
                      <p className="cdUniTags">
                        {o.approvedBy && <span className="cdUniTag" title={o.approvedBy}>✓ {approvalLabel(o.approvedBy)}</span>}
                        {o.establishedYear && <span className="cdUniTag cdUniTag--muted">Est. {o.establishedYear}</span>}
                      </p>
                    )}
                    <dl className="cdUniMeta">
                      <div><dt>Duration</dt><dd>{o.duration || duration}</dd></div>
                      <div><dt>Fee</dt><dd>{o.feeValue ? formatINR(o.feeValue) : o.fee || "On request"}</dd></div>
                    </dl>
                    {o.selectionCriteria && (
                      <p className="cdUniNote"><strong>Admission:</strong> {o.selectionCriteria}</p>
                    )}
                    {o.specializations.length > 0 && (
                      <p className="cdUniNote"><strong>Specialisations:</strong> {o.specializations.join(", ")}</p>
                    )}
                    <div className="cdUniActions">
                      <Link href={`/online-university/${o.collegeSlug}`} className="cdUniView">
                        View University
                      </Link>
                      <button type="button" className="cdUniEnquire" onClick={() => openEnquiry(o.collegeName)}>
                        Enquire Now
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────────── SPECIALISATIONS ───────────── */}
      {course.specializations.length > 0 && (
        <section id="specialisations" className="cdBand cdBand--white">
          <div className="cdSection">
            <h2 className="cdSectionTitle">{course.name} Specialisations</h2>
            <p className="cdPara cdPara--muted">
              Popular specialisations offered across universities. Availability differs by university — check with a counsellor before you apply.
            </p>
            <ul className="cdSpecGrid">
              {course.specializations.map((s) => (
                <li key={s} className="cdSpecChip">{s}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────────── SYLLABUS ───────────── */}
      {course.syllabus.length > 0 && (
        <section id="syllabus" className="cdBand cdBand--light">
          <div className="cdSection">
            <h2 className="cdSectionTitle">{course.name} Syllabus</h2>
            <p className="cdPara cdPara--muted">
              {course.syllabusIntro ||
                "An indicative syllabus — exact subjects vary from university to university."}
            </p>
            <div className="cdSyllabusGrid">
              {course.syllabus.map((t) => (
                <div key={t.term} className="cdSyllabusCard">
                  <h3>{t.term}</h3>
                  <ul>
                    {t.subjects.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────── CAREERS & SALARY ───────────── */}
      {course.careers.length > 0 && (
        <section id="careers" className="cdBand cdBand--white">
          <div className="cdSection">
            <h2 className="cdSectionTitle">Career Scope & Salary After {course.name}</h2>
            <div className="cdTableWrap">
              <table className="cdTable cdTable--careers">
                <thead>
                  <tr>
                    <th scope="col">Job Role</th>
                    <th scope="col">What You&apos;ll Do</th>
                    <th scope="col">Avg. Salary*</th>
                  </tr>
                </thead>
                <tbody>
                  {course.careers.map((c) => (
                    <tr key={c.role}>
                      <td className="cdTableRole">{c.role}</td>
                      <td>{c.desc}</td>
                      <td className="cdTableFee">{c.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="cdFootnote">
              *Indicative annual salary ranges in India. Actual pay depends on your experience, skills, city and employer.
            </p>
          </div>
        </section>
      )}

      {/* ───────────── FAQS ───────────── */}
      {faqs.length > 0 && (
        <section id="faqs" className="cdBand cdBand--light">
          <div className="cdSection">
            <h2 className="cdSectionTitle">{course.name} FAQs</h2>
            <div className="cdFaqList">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className={`cdFaqItem ${open ? "cdFaqItem--open" : ""}`}>
                    <button
                      type="button"
                      className="cdFaqQ"
                      aria-expanded={open}
                      aria-controls={`cd-faq-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span>{f.q}</span>
                      <span className="cdFaqToggle" aria-hidden="true">{open ? "−" : "+"}</span>
                    </button>
                    <div id={`cd-faq-${i}`} className="cdFaqA" hidden={!open}>
                      <p>{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────────── RELATED COURSES ───────────── */}
      {related.length > 0 && (
        <section className="cdBand cdBand--white">
          <div className="cdSection">
            <h2 className="cdSectionTitle">Related Online Courses</h2>
            <div className="cdRelatedGrid">
              {related.map((r) => (
                <Link key={r.slug} href={`${COURSE_BASE_PATH}/${r.slug}`} className="cdRelatedCard">
                  <span className="cdRelatedName">{r.name}</span>
                  <span className="cdRelatedMeta">{r.duration}</span>
                  <span className="cdRelatedMore">View Course →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyMobileCTA onEnquiryOpen={() => openEnquiry()} />
    </div>
  );
}
