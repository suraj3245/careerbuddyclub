import React from "react";
import Wrapper from "@/layouts/wrapper";
import Image from "next/image";
import CollegeBlogSidebar from "@/app/components/college-blogs/blog-sidebar/aside";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyBreadcrumb from "../../components/common/common-breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Top Nursing Colleges in Dehradun (2026) | B.Sc Nursing, GNM, ANM, Fees & Admission",
  description:
    "Discover the top and government-recognized nursing colleges in Dehradun and Uttarakhand for 2026 admissions. Compare B.Sc Nursing, GNM and ANM courses, fees structure, eligibility criteria, admission process, hospital training, placements, and career scope in India. Get free expert counselling from Career Buddy Club.",
  keywords: [
    "top nursing colleges in dehradun",
    "best nursing colleges in dehradun",
    "best nursing colleges in dehradun 2026",
    "nursing colleges dehradun 2026",
    "bsc nursing colleges dehradun",
    "gnm nursing college dehradun",
    "anm nursing colleges uttarakhand",
    "nursing admission dehradun",
    "nursing fees structure dehradun",
    "best nursing college in uttarakhand",
    "nursing placement colleges india",
    "career after nursing",
  ],

  alternates: {
    canonical:
      "https://careerbuddyclub.com/college-blogs/top-7-nursing-colleges-in-dehradun",
  },

  openGraph: {
    title:
      "Top 7 Nursing Colleges in Dehradun (2026) | Fees, Admission & Placements",
    description:
      "Looking for the best nursing colleges in Dehradun? Compare B.Sc Nursing, GNM and ANM colleges with updated 2026 fees, eligibility, admission process, hospital training and placement opportunities.",
    url: "https://careerbuddyclub.com/college-blogs/top-7-nursing-colleges-in-dehradun",
    siteName: "Career Buddy Club",
    type: "article",
    images: [
      {
        url: "https://careerbuddyclub.com/images/nursing-dehradun-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Top Nursing Colleges in Dehradun 2026",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const bptDescription = () => {
  const contactDetails = {
    email: "admission@careerbuddyclub.com",
    phone: "+917456000100",
    socials: {
      facebook: "https://facebook.com/careerbuddyclub",
      instagram: "https://instagram.com/careerbuddyclub",
      twitter: "https://twitter.com/careerbuddyclub",
      linkedin: "https://linkedin.com/company/careerbuddyclub",
    },
  };
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* ✅ Hero Section */}
        <CompanyBreadcrumb
          title="Insights"
          subtitle="Read our blog from top talents"
        />
        <div
          className="container-fluid"
          style={{
            background: "linear-gradient(90deg, #ffeaf1 0%, #74c0fc 100%)",
          }}
        >
          <section className="" style={{ background: "#ebebebff" }}>
            <div className="container">
              <div className="row gy-5">
                {/* Main Content */}
                <div className="col-lg-8">
                  <div className="pe-lg-4">
                    <div className="mb-2 text-muted small mt-5">
                      <p>By Career Buddy Club</p>
                    </div>
                    {/* Title */}
                    <h2
                      className="fw-semibold mb-3 mt-5 leading-none"
                      style={{
                        marginTop: "2rem",
                        lineHeight: "3.5rem",
                        fontSize: "2rem",
                      }}
                    >
                      Top Nursing Colleges in Dehradun (2026): Courses, Fees,
                      Eligibility, Placement & Career Scope
                    </h2>
                    <p>
                      Dehradun has evolved into a major hub for healthcare and
                      paramedical education in North India. With rising demand
                      for qualified nurses in hospitals, tele-health,
                      rehabilitation centers, government programs, elder-care
                      services, and global healthcare systems, nursing has
                      become one of the most stable and future-proof career
                      options.
                    </p>
                    <p>
                      In this 2026 guide by Career Buddy Club, we present the
                      Top Nursing Colleges in Dehradun, including details on
                      courses offered, eligibility, fees, clinical exposure,
                      approvals, placements, and career prospects. Special
                      emphasis is given to emerging institutions such as Guru
                      Nanak College (GNC), BFIT Group of Institutions, and Maya
                      Devi University, along with leading universities like
                      Uttaranchal University and DBUU.
                    </p>
                    <hr />
                    <div className="mb-4">
                      <Image
                        src="/assets/images/blog/nursing_blog.webp"
                        alt="logo"
                        className="img-fluid rounded shadow-sm"
                        width={800}
                        height={400}
                      />
                    </div>
                    <hr />
                    <h4>QUICK SUMMARY (For 2026 Admissions)</h4>
                    <p>
                      Best For: B.Sc Nursing, GNM, ANM admissions in Uttarakhand
                    </p>
                    <p>
                      Placement Scope: India + Gulf + UK + Australia + Canada
                    </p>
                    <p>
                      Regulatory Bodies: INC, State Nursing Council, UGC/NAAC,
                      University Affiliations
                    </p>
                    <p>
                      Admission Window: March–September (Varies by Institution)
                    </p>
                    <p>Loan & Scholarships: Available in most institutions</p>
                    <p>
                      Study Mode: Full-time with mandatory clinical exposure
                    </p>
                    <div className="container-fluid description">
                      <section className="container py-5 lh-lg">
                        {/* Table of Contents */}
                        <div
                          className="card mb-5 mx-auto"
                          style={{ maxWidth: "800px" }}
                        >
                          <div className="card-body">
                            <h2 className="card-title text-success fs-2">
                              Table of Contents
                            </h2>
                            <ul className="list-unstyled mt-3 mb-0 text-primary lh-lg">
                              <li>
                                <a
                                  href="#why-nursing"
                                  className="text-decoration-none"
                                >
                                  1. Why Choose Nursing in 2026?
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#top-colleges"
                                  className="text-decoration-none"
                                >
                                  2. Types of Nursing Courses in India
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#career"
                                  className="text-decoration-none"
                                >
                                  3. Nursing Admission Process (2026)
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#conclude"
                                  className="text-decoration-none"
                                >
                                  4. Entrance Exams for Nursing
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  5. Top 7 Nursing Colleges in Dehradun (2026)
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  6. Comparison Table
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  7. Career Scope & Salary (India + Abroad)
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  8. Scholarships & Education Loans
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  9. FAQs
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  10. Conclusion & Counselling Support
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Why Dehradun */}
                        <div className="mt-4">
                          <h2 id="why-nursing" className="mt-5 mb-4 fs-3 mt-4">
                            1. WHY CHOOSE NURSING IN 2026?
                          </h2>
                          <p>
                            Nursing remains one of the most reliable healthcare
                            professions globally. With increased investment in
                            public health, hospital infrastructure, and medical
                            tourism, trained nurses are in consistent demand.
                          </p>
                          <ol
                            className="mb-5"
                            style={{ listStyleType: "disc" }}
                          >
                            <h4 id="top-colleges">Key advantages include:</h4>
                            <li>High employability in India and abroad</li>
                            <li>
                              Opportunity to work in government and private
                              sectors
                            </li>
                            <li>
                              Strong career and academic progression pathways
                            </li>
                            <li>
                              International migration potential (Gulf, UK,
                              Canada, Australia)
                            </li>
                            <li>Job security + social respect</li>
                            <li>
                              Opportunities in research, teaching, and clinical
                              specialization
                            </li>
                          </ol>
                          <hr />

                          {/* Top Colleges */}
                          <h3 className="mt-5 mb-4 fs-2 mt-4" id="gnc">
                            2. TYPES OF NURSING COURSES IN INDIA
                          </h3>
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Minimum Qualification</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>ANM</th>
                                <td>2 Years</td>
                                <td>10+2 in any stream</td>
                              </tr>
                              <tr>
                                <th>GNM</th>
                                <td>3 Years</td>
                                <td>10+2 (Science/Commerce/Arts)</td>
                              </tr>
                              <tr>
                                <td>B.Sc Nursing</td>
                                <td>4 Years</td>
                                <td>10+2 with PCB & English</td>
                              </tr>
                              <tr>
                                <td>Post Basic B.Sc</td>
                                <td>2 Years</td>
                                <td>GNM Diploma</td>
                              </tr>
                              <tr>
                                <td>M.Sc Nursing</td>
                                <td>2 Years</td>
                                <td>B.Sc/Post Basic</td>
                              </tr>
                              <tr>
                                <td>PhD Nursing</td>
                                <td>3-5 Years</td>
                                <td>M.Sc Nursing</td>
                              </tr>
                            </tbody>
                          </table>
                          <hr />

                          <ul className="mb-5 mt-4 list-unstyled">
                            <li className="mt-5">
                              <h3>3. NURSING ADMISSION PROCESS (2026)</h3>
                              <h4>The standard admission flow involves:</h4>
                              <ol>
                                <li>
                                  Eligibility check (10+2 PCB for B.Sc Nursing)
                                </li>
                                <li>College/University application</li>
                                <li>Entrance exam or merit screening</li>
                                <li>Document verification</li>
                                <li>Seat allotment + fee payment</li>
                                <li>
                                  Medical fitness & registration with State
                                  Council
                                </li>
                              </ol>
                            </li>
                          </ul>
                          <h5>Admission Window:</h5>
                          <h5>March to September 2026 (peak period)</h5>
                          <hr />
                          <h3>4. ENTRANCE EXAMS FOR NURSING (2026)</h3>
                          <h5>Common exams include:</h5>
                          <ul>
                            <li>HNBUMU Nursing Entrance</li>
                            <li>AIIMS B.Sc Nursing Entrance</li>
                            <li>State Nursing Council Merit Lists</li>
                            <li>
                              Institutional/University-based entrance tests
                            </li>
                          </ul>
                          <hr />
                          <h3>5. TOP 7 NURSING COLLEGES IN DEHRADUN (2026)</h3>
                          <h5>Below are the featured institutions:</h5>
                          <h3>1. GURU NANAK COLLEGE (GNC), DEHRADUN</h3>
                          <p>
                            GNC is one of the fastest-growing nursing
                            institutions in Dehradun, recognized for ethical
                            education, clinical exposure, and affordability.
                            Approved by the Indian Nursing Council (INC) and the
                            Uttarakhand Nurses & Midwives Council, GNC provides
                            a conducive environment for professional training
                            and value-oriented education.
                          </p>
                          <h5>Courses Offered:</h5>
                          <ul>
                            <li>ANM — 2 Years</li>
                            <li>GNM — 3 Years</li>
                            <li>B.Sc Nursing — 4 Years</li>
                          </ul>
                          <h5>Eligibility:</h5>
                          <ul>
                            <li>ANM: 10+2 in any stream</li>
                            <li>GNM: 10+2 with minimum 40%</li>
                            <li>
                              B.Sc Nursing: 10+2 with PCB + English, 45%
                              (General) / 40% (Reserved)
                            </li>
                          </ul>
                          <h5>Fees (Approx per year):</h5>
                          <ul>
                            <li>ANM: ₹40,000 – ₹50,000</li>
                            <li>GNM: ₹60,000 – ₹70,000</li>
                            <li>B.Sc Nursing: ₹70,000 – ₹85,000</li>
                          </ul>
                          <h5>Approvals & Affiliation:</h5>
                          <ul>
                            <li>INC Approved</li>
                            <li>State Nursing Council Approved</li>
                            <li>NAAC Accredited</li>
                          </ul>
                          <h5>Campus Highlights:</h5>
                          <ul>
                            <li>Nursing Skill & Simulation Labs</li>
                            <li>Qualified Faculty with Hospital Linkages</li>
                            <li>Affordable Hostel & Transport</li>
                            <li>Ethical Mentorship & Field Outreach</li>
                          </ul>
                          <h5>Suitable For:</h5>
                          <p>
                            Students looking for an ethical, affordable, and
                            clinically grounded nursing education in
                            Uttarakhand.
                          </p>
                          <hr />
                          <h3>2. BFIT GROUP OF INSTITUTIONS, DEHRADUN</h3>
                          <p>
                            BFIT is known for modern infrastructure and
                            multi-disciplinary programs. The nursing wing
                            provides experiential learning with strong student
                            support systems.
                          </p>
                          <h5>Courses Offered:</h5>
                          <ul>
                            <li>GNM — 3 Years</li>
                            <li>B.Sc Nursing — 4 Years</li>
                          </ul>
                          <h5>Fees (Approx per year):</h5>
                          <ul>
                            <li>GNM: ₹60,000 – ₹75,000</li>
                            <li>B.Sc Nursing: ₹85,000 – ₹95,000</li>
                          </ul>
                          <h5>Approvals:</h5>
                          <ul>
                            <li>INC Approved</li>
                            <li>Affiliated with HNB Garhwal University</li>
                          </ul>
                          <h5>Why Consider BFIT:</h5>
                          <ul>
                            <li>Simulation Lab + Digital Classrooms</li>
                            <li>
                              Seminars, Soft Skills & Competitive Training
                            </li>
                            <li>Placement Cell with Pan-India Links</li>
                            <li>Transport, Hostel, and Library Facilities</li>
                          </ul>
                          <hr />

                          <h2 id="conclude" className="mt-4 mb-3 fs-2">
                            3. SGRRIM & HS, DEHRADUN
                          </h2>
                          <p>
                            Backed by a 1,000+ bed hospital, SGRR offers one of
                            the most clinical immersion-driven nursing training
                            environments.
                          </p>
                          <h5>Courses:</h5>
                          <ul>
                            <li>B.Sc Nursing</li>
                            <li>Post Basic B.Sc</li>
                            <li>M.Sc Nursing</li>
                          </ul>
                          <h5>Fees:</h5>
                          <ul>
                            <li>₹90,000 – ₹1,20,000 per year</li>
                          </ul>
                          <h5>Highlights:</h5>
                          <ul>
                            <li>NABH Hospital Exposure</li>
                            <li>Full Residential Facilities</li>
                            <li>
                              Long-standing Reputation in Medical Sciences
                            </li>
                          </ul>
                          <hr />

                          <h2 id="tags" className="mt-4 mb-3 fs-2">
                            4. HIMALAYAN COLLEGE OF NURSING (SRHU), JOLLY GRANT
                          </h2>
                          <p className="mb-5">
                            Affiliated with SRHU (HIHT), Himalayan College
                            focuses on simulation-based training and
                            research-oriented learning.
                          </p>
                          <h5>Programs:</h5>
                          <ul>
                            <li>B.Sc Nursing</li>
                            <li>M.Sc Nursing</li>
                            <li>Post Basic B.Sc Nursing</li>
                          </ul>
                          <h5>Fees:</h5>
                          <ul>
                            <li>₹1,20,000 – ₹1,35,000 per year</li>
                          </ul>
                          <h5>Strengths:</h5>
                          <ul>
                            <li>
                              Access to Himalayan Hospital (Tertiary Care)
                            </li>
                            <li>Research & Interdisciplinary Exposure</li>
                            <li>University Teaching Hospital Model</li>
                          </ul>
                          <hr />

                          <h3 className="mt-4 mb-3 fs-2">
                            UTTARANCHAL UNIVERSITY, DEHRADUN
                          </h3>
                          <p>
                            Uttaranchal University has recently expanded into
                            health sciences with a progressive nursing education
                            framework.
                          </p>
                          <h5>Courses:</h5>
                          <ul>
                            <li>B.Sc Nursing</li>
                          </ul>
                          <h5>Fees:</h5>
                          <ul>
                            <li>₹1,20,000 – ₹1,50,000 per year</li>
                          </ul>
                          <h5>Value Proposition:</h5>
                          <ul>
                            <li>Modern University Environment</li>
                            <li>
                              NAAC A+ Status (Strong Academic Credibility)
                            </li>
                            <li>Hostel + International Student Ecosystem</li>
                          </ul>
                          <h3>
                            6. DEV BHOOMI UTTARAKHAND UNIVERSITY (DBUU),
                            DEHRADUN
                          </h3>
                          <p>
                            DBUU stands out for branding, placements, and
                            well-marketed medical programs.
                          </p>
                          <h5>Programs:</h5>
                          <ul>
                            <li>GNM</li>
                            <li>B.Sc Nursing</li>
                            <li>Post Basic B.Sc</li>
                            <li>M.Sc Nursing</li>
                          </ul>
                          <h5>Fees:</h5>
                          <ul>
                            <li>₹1,00,000 – ₹1,40,000 per year</li>
                          </ul>
                          <h5>Key Points:</h5>
                          <ul>
                            <li>University Campus Culture</li>
                            <li>Strong Industry-Academia Integration</li>
                            <li>Digital Learning Support</li>
                          </ul>
                          <hr />
                          <h3>7. MAYA DEVI UNIVERSITY, DEHRADUN</h3>
                          <p>
                            Maya Devi University is an emerging private
                            university offering professional programs with
                            structured placement support and affordable fee
                            options.
                          </p>
                          <h5>Programs (Projected for 2026):</h5>
                          <ul>
                            <li>B.Sc Nursing</li>
                            <li>GNM</li>
                            <li>ANM (Pending Launch Schedule)</li>
                          </ul>
                          <h5>Fees (Approx):</h5>
                          <ul>
                            <li>₹70,000 – ₹95,000 per year</li>
                          </ul>
                          <h5>Student Value:</h5>
                          <ul>
                            <li>Affordable + Accessible Education</li>
                            <li>Personalized Guidance</li>
                            <li>
                              Suitable for Uttarakhand-based students seeking
                              lower cost migration
                            </li>
                          </ul>
                          <hr />
                          <h5>6. COMPARISON SNAPSHOT (2026)</h5>
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">College</th>
                                <th scope="col">Courses</th>
                                <th scope="col">Fees (Annual)</th>
                                <th scope="col">Hospital Tie-Up</th>
                                <th scope="col">Ideal For</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>GNC</td>
                                <td>ANM, GNM, B.Sc</td>
                                <td>Low–Moderate</td>
                                <td>Yes</td>
                                <td>Affordability + Values</td>
                              </tr>
                              <tr>
                                <td>BFIT</td>
                                <td>GNM, B.Sc</td>
                                <td>Moderate</td>
                                <td>Yes</td>
                                <td>Skill-focused</td>
                              </tr>
                              <tr>
                                <td>SGRR</td>
                                <td>B.Sc, PB, M.Sc</td>
                                <td>Moderate–High</td>
                                <td>Yes</td>
                                <td>Medical campus</td>
                              </tr>
                              <tr>
                                <td>SRHU</td>
                                <td>B.Sc, PB, M.Sc</td>
                                <td>High</td>
                                <td>Yes</td>
                                <td>Research + Clinical</td>
                              </tr>
                              <tr>
                                <td>Uttaranchal</td>
                                <td>B.Sc</td>
                                <td>High</td>
                                <td>Indirect</td>
                                <td>University ecosystem</td>
                              </tr>
                              <tr>
                                <td>DBUU</td>
                                <td>GNM–M.Sc</td>
                                <td>Moderate–High</td>
                                <td>Yes</td>
                                <td>Placements</td>
                              </tr>
                              <tr>
                                <td>MDU</td>
                                <td>ANM–B.Sc</td>
                                <td>Low–Moderate</td>
                                <td>Yes</td>
                                <td>Cost + Local intake</td>
                              </tr>
                            </tbody>
                          </table>
                          <hr />
                          <h3>7. NURSING CAREER PATHWAYS & SALARY (2026)</h3>
                          <h5>Immediate Roles:</h5>
                          <ul>
                            <li>Staff Nurse</li>
                            <li>ICU/CCU/NICU Nurse</li>
                            <li>Ward Nurse</li>
                            <li>Community Health Nurse</li>
                            <li>OPD Nurse</li>
                            <li>Infection Control Nurse</li>
                          </ul>
                          <h5>Advanced Roles:</h5>
                          <ul>
                            <li>Nurse Educator</li>
                            <li>Nurse Administrator</li>
                            <li>Public Health Officer</li>
                            <li>Tele-health Nurse</li>
                            <li>Clinical Nurse Specialist</li>
                          </ul>
                          <h5>Salary Range (India):</h5>
                          <ul>
                            <li>Freshers: ₹18,000 – ₹32,000/month</li>
                            <li>Experienced: ₹35,000 – ₹60,000/month</li>
                            <li>Government Jobs: ₹45,000 – ₹70,000/month</li>
                          </ul>
                          <h5>International Demand:</h5>
                          <ul>
                            <li>UAE, Oman, Qatar</li>
                            <li>UK (NMC Route)</li>
                            <li>Australia</li>
                            <li>Canada</li>
                            <li>Ireland</li>
                          </ul>
                          <p>
                            Abroad earnings post-licensure can reach ₹1.5L –
                            ₹4L/month.
                          </p>
                          <hr />
                          <h3>8. SCHOLARSHIPS & EDUCATION LOANS</h3>
                          <h5>Most colleges support:</h5>
                          <ul>
                            <li>State Scholarships</li>
                            <li>SC/ST/OBC Fee Concessions</li>
                            <li>Kanya Dhan (Applicable in Uttarakhand)</li>
                            <li>Merit Scholarships</li>
                            <li>Education Loans via Nationalized Banks</li>
                          </ul>
                          <hr />
                          <h3>9. FREQUENTLY ASKED QUESTIONS (FAQs)</h3>
                          <h5>Q1: Is B.Sc Nursing better than GNM in 2026?</h5>
                          <p>
                            B.Sc Nursing is preferred for long-term growth and
                            overseas migration. GNM suits applicants seeking
                            quicker hospital entry.
                          </p>
                          <h5>
                            Q2: Do nursing colleges in Dehradun provide
                            placements?
                          </h5>
                          <p>
                            Yes. Placement support is offered by most private
                            institutions and university campuses.
                          </p>
                          <h5>
                            Q3: Can male candidates apply for nursing in
                            Uttarakhand?
                          </h5>
                          <p>
                            Yes. There is no gender restriction for ANM, GNM, or
                            B.Sc Nursing.
                          </p>
                          <h5>Q4: Is NEET required for B.Sc Nursing?</h5>
                          <p>
                            NEET is not mandatory for most Uttarakhand nursing
                            colleges.
                          </p>

                          <hr />
                          <h3>10. CONCLUSION & COUNSELLING SUPPORT</h3>
                          <p>
                            Dehradun has positioned itself as one of North
                            India's most promising centers for nursing education
                            due to its hospitals, medical universities, and
                            competitive fee ecosystem. Whether your goal is
                            government service, private healthcare, or
                            international migration, institutions such as Guru
                            Nanak College, BFIT, Uttaranchal University, DBUU,
                            and Maya Devi University offer strong platforms for
                            career growth.
                          </p>
                          <p>
                            If you need assistance with 2026 admissions, Career
                            Buddy Club offers free counselling and college
                            selection support for B.Sc Nursing, ANM, and GNM
                            programs across Uttarakhand.
                          </p>
                        </div>
                      </section>
                    </div>
                    <blockquote className="blockquote bg-light p-4 rounded mt-4 mb-4">
                      <p className="mb-0">
                        "You don’t have to see the whole staircase, just take
                        the first step."
                      </p>
                      <footer className="blockquote-footer mt-2"></footer>
                    </blockquote>

                    {/* CTA */}
                    <h4 className="mt-4">Why Career Buddy Club Matters</h4>
                    <p>
                      We help students unlock their academic journey with
                      curated college insights, placement stats, and detailed
                      comparisons — so you don’t miss out on opportunities that
                      fit your dream path.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <CollegeBlogSidebar />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterOne />
    </Wrapper>
  );
};

export default bptDescription;
