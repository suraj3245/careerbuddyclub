import React from "react";
import Wrapper from "@/layouts/wrapper";
import Image from "next/image";
import CollegeBlogSidebar from "@/app/components/college-blogs/blog-sidebar/aside";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyBreadcrumb from "../../components/common/common-breadcrumb";
import Link from "next/link";
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
                      <p>Nursing · 10 July, 2025 · By Career Buddy Club</p>
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
                      Top 5 Nursing Colleges in Dehradun: Courses, Fees,
                      Eligibility & Career Scope (2025 Guide)
                    </h2>
                    <p>
                      Dehradun, nestled in the picturesque hills of Uttarakhand,
                      is increasingly becoming a hub for healthcare and medical
                      education. Among its growing portfolio of professional
                      courses, nursing programs are highly sought after due to
                      rising demand in hospitals, clinics, and global healthcare
                      settings.In this comprehensive 2025 guide by Career Buddy
                      Club, we bring you the Top 5 Nursing Colleges in Dehradun,
                      complete with program details, fees, eligibility, campus
                      highlights, and career scope — with special attention to
                      Guru Nanak College and BFIT Group of Institutions, two of
                      the fastest emerging nursing colleges in the region.
                    </p>
                    <div className="mb-4">
                      <Image
                        src="/assets/images/blog/nursing_blog800.jpg"
                        alt="logo"
                        className="img-fluid rounded shadow-sm"
                        width={800}
                        height={400}
                      />
                    </div>
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
                                  Why Choose Nursing as a Career?{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#top-colleges"
                                  className="text-decoration-none"
                                >
                                  Top Nursing Colleges in Dehradun (2025)
                                </a>

                                <ul
                                  className="ps-3 ms-4"
                                  style={{ listStyleType: "disc" }}
                                >
                                  <li>
                                    <a
                                      href="#gnc"
                                      className="text-decoration-none"
                                    >
                                      Guru Nanak College (GNC), Dehradun
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#bfit"
                                      className="text-decoration-none"
                                    >
                                      BFIT Group of Institutions, Dehradun
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#himalayan"
                                      className="text-decoration-none"
                                    >
                                      SGRRIM&HS
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#himalayan"
                                      className="text-decoration-none"
                                    >
                                      Himalayan College of Nursing, Jolly Grant
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#dims"
                                      className="text-decoration-none"
                                    >
                                      Doon Institute of Medical Sciences (DIMS)
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  href="#career"
                                  className="text-decoration-none"
                                >
                                  Career Opportunities After Nursing
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#conclude"
                                  className="text-decoration-none"
                                >
                                  Conclusion{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#tags"
                                  className="text-decoration-none"
                                >
                                  Tags{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Why Dehradun */}
                        <div className="mt-4">
                          <h2 id="why-nursing" className="mt-5 mb-4 fs-3 mt-4">
                            Why Choose Nursing as a Career?
                          </h2>

                          <p>
                            Nursing is one of the most respected and essential
                            healthcare professions worldwide. With India's
                            growing population and expanding healthcare system,
                            qualified nurses are in high demand across
                            hospitals, clinics, and community health centers.
                            The profession offers not only job stability but
                            also the opportunity to make a direct impact on
                            people’s lives.
                          </p>
                          <ol
                            className="mb-5"
                            style={{ listStyleType: "disc" }}
                          >
                            <h3 id="top-colleges">
                              Benefits of Choosing Nursing:{" "}
                            </h3>
                            <li>
                              Excellent job placement opportunities in India and
                              abroad{" "}
                            </li>
                            <li>
                              Competitive salaries and government job prospects
                            </li>
                            <li>
                              Career progression into specialties or advanced
                              practice nursing
                            </li>
                            <li>
                              Opportunities in administration, teaching, or
                              hospital management{" "}
                            </li>
                            <li>
                              Social respect and lifelong professional growth
                            </li>
                          </ol>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/* Top Colleges */}
                          <h2 className="mt-5 mb-4 fs-2 mt-4" id="gnc">
                            Top Nursing Colleges in Dehradun (2025)
                          </h2>

                          {/* GNC College */}

                          <ul className="mb-5 list-unstyled">
                            <li>
                              <h3 id="">
                                1. Guru Nanak College (GNC), Dehradun
                              </h3>
                              <br />
                              <p>
                                <Link
                                  href="https://careerbuddyclub.com/college-details/GNC?utm_source=CBC-Website&utm_medium=Online&utm_campaign=GNC"
                                  className="text-primary"
                                >
                                  🔗 Visit Website
                                </Link>
                              </p>
                              <p className="mt-5">
                                <strong>Guru Nanak College (GNC)</strong> is one
                                of the most trusted institutions for nursing
                                education in Dehradun, offering a blend of
                                academic excellence, ethical learning, and
                                clinical exposure. What sets GNC apart is its
                                recognition and accreditation by NAAC (National
                                Assessment and Accreditation Council) and
                                approval by the Indian Nursing Council (INC) and
                                the Uttarakhand Nurses & Midwives Council,
                                ensuring students receive education that meets
                                national quality benchmarks.
                              </p>

                              <ul
                                className="mt-3"
                                style={{ listStyleType: "upper-roman" }}
                              >
                                <li className="mt-3">
                                  <strong>Courses Offered: </strong>
                                  <br />
                                  • Auxiliary Nursing and Midwifery (ANM) – 2
                                  Years <br />
                                  • General Nursing and Midwifery (GNM) – 3
                                  Years <br />• Bachelor of Science in Nursing
                                  (B.Sc Nursing) – 4 Years
                                </li>

                                <li className="mt-3">
                                  <strong>Eligibility: </strong>
                                  <br />
                                  • ANM: 10+2 pass in any stream <br />
                                  • GNM: 10+2 in any stream with at least 40%
                                  marks
                                  <br />• B.Sc Nursing: 10+2 with Physics,
                                  Chemistry, Biology & English; minimum 45%
                                  marks for general and 40% for reserved
                                  categories
                                </li>

                                <li className="mt-3">
                                  <strong>Fees (Approximate): </strong>
                                  <br />
                                  • ANM: ₹45,000/year <br />
                                  • GNM: 10+2 in any stream with at least 40%
                                  marks
                                  <br />• B.Sc Nursing: 10+2 with Physics,
                                  Chemistry, Biology & English; minimum 45%
                                  marks for general and 40% for reserved
                                  categories
                                </li>

                                <li className="mt-3">
                                  <strong>
                                    Why Choose Guru Nanak College?
                                  </strong>
                                  <br />
                                  • NAAC Accredited and INC Approved <br />
                                  • Affiliated with Uttarakhand Nurses &
                                  Midwives Council
                                  <br />
                                  • Experienced and qualified faculty with
                                  hospital tie-ups <br />
                                  • Simulation labs, nursing skill labs, and
                                  hands-on training
                                  <br />
                                  • Safe campus with hostels, canteen, and
                                  transport facilities
                                  <br />
                                  • Focus on ethical education and student
                                  mentorship <br />
                                  • Active community health outreach and medical
                                  camps
                                  <br />
                                  <p className="mt-5">
                                    GNC is a perfect choice for students looking
                                    for a high-quality, affordable, and
                                    values-driven nursing education in
                                    Uttarakhand.
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/* BFIT GROUP OF Institutions */}

                          <ul className="mb-5 mt-4 list-unstyled">
                            <li className="mt-5">
                              <h3 id="bfit">
                                2. BFIT Group of Institutions, Dehradun
                              </h3>
                              <br />
                              <p>
                                <Link
                                  href="https://careerbuddyclub.com/college-details/BFIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=BFIT"
                                  className="text-primary"
                                >
                                  🔗 Visit Website
                                </Link>
                              </p>
                              <p className="mt-5">
                                <strong>
                                  BFIT (Baba Farid Institute of Technology)
                                </strong>{" "}
                                is a premier institution in Dehradun known for
                                its state-of the-art infrastructure,
                                multi-disciplinary programs, and modern approach
                                to healthcare education. Its School of Nursing
                                is gaining attention for providing
                                career-focused nursing programs with excellent
                                student support.
                              </p>

                              <ul
                                className="mt-3"
                                style={{ listStyleType: "upper-roman" }}
                              >
                                <li className="mt-3">
                                  <strong>Courses Offered: </strong>
                                  <br />
                                  • General Nursing and Midwifery (GNM) – 3
                                  Years <br />• B.Sc Nursing – 4 Years
                                </li>

                                <li className="mt-3">
                                  <strong>Eligibility: </strong>
                                  <br />
                                  • GNM: 10+2 in any stream, preferably science,
                                  with 40% marks <br />• B.Sc Nursing: 10+2 with
                                  PCB and English; minimum 45% marks (Gen), 40%
                                  (Reserved categories)
                                </li>

                                <li className="mt-3">
                                  <strong>Fees (Approx): </strong>
                                  <br />
                                  • GNM: ₹60,000/year <br />• B.Sc Nursing:
                                  ₹90,000/year
                                </li>

                                <li className="mt-3">
                                  <h5>Why Choose BFIT?</h5>
                                  • Affiliated with HNB Garhwal University and
                                  approved by INC
                                  <br />
                                  • Simulation labs and well-equipped clinical
                                  training centers
                                  <br />
                                  • Modern campus with Wi-Fi, libraries, digital
                                  classrooms, and hostels
                                  <br />
                                  • Placement support with links to hospitals
                                  across India
                                  <br />• Workshops, seminars, and soft skills
                                  training for holistic development
                                </li>
                                <p className="mt-5">
                                  With a focus on skill-building,
                                  professionalism, and international exposure,
                                  BFIT is an ideal choice for students who
                                  aspire to build a successful nursing career
                                  nationally and internationally.{" "}
                                </p>
                              </ul>
                            </li>
                          </ul>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/* Shri Guru Ram Rai Institute of Medical & Health Sciences (SGRRIM&HS) */}

                          <ul className="mb-4 list-unstyled">
                            <li>
                              <h3 id="himalayan">
                                3. Shri Guru Ram Rai Institute of Medical &
                                Health Sciences (SGRRIM&HS){" "}
                              </h3>
                              <br />
                              <p>
                                <Link
                                  href="https://careerbuddyclub.com/college-details/SGRRIM"
                                  className="text-primary"
                                >
                                  🔗 Visit Website
                                </Link>
                              </p>
                              <p>
                                <strong>
                                  Shri Guru Ram Rai Institute of Medical &
                                  Health Sciences (SGRRIM&HS)
                                </strong>
                                One of Dehradun’s oldest and most reputed health
                                science institutions, SGRRIM&HS offers B.Sc,
                                Post Basic, and M.Sc Nursing programs. Backed by
                                a 1000+ bedded hospital, the college provides
                                real time clinical training and comprehensive
                                learning.
                              </p>

                              <ul
                                className="mt-3"
                                style={{ listStyleType: "upper-roman" }}
                              >
                                <li>
                                  <strong>Fees:</strong>
                                  <br />
                                  • ₹90,000 to ₹1.2 lakhs/year <br />
                                </li>

                                <li>
                                  <strong>Campus Perks:</strong>
                                  <br />• NABH-accredited hospital, full-time
                                  hostel, modern labs
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/*  Himalayan College of Nursing, Jolly Grant    */}

                          <ul className="mb-4 list-unstyled">
                            <li>
                              <h3 id="dims">
                                4. Himalayan College of Nursing, Jolly Grant{" "}
                              </h3>
                              <br />
                              <p>
                                <Link
                                  href="https://careerbuddyclub.com/college-details/HCN"
                                  className="text-primary"
                                >
                                  🔗 Visit Website
                                </Link>
                              </p>
                              <p className="mt-5">
                                Affiliated with SRHU, this nursing college is
                                known for simulation-based learning, clinical
                                exposure at Himalayan Hospital, and globally
                                relevant education practices.
                              </p>

                              <ul
                                className="mt-3"
                                style={{ listStyleType: "upper-roman" }}
                              >
                                <li>
                                  <strong>Fees:</strong>
                                  <br />
                                  • ₹1.2 to ₹1.3 lakhs/year
                                  <br />
                                </li>

                                <li>
                                  <strong>Campus Perks:</strong>
                                  <br />• Interdisciplinary learning, advanced
                                  labs, research-driven teaching
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/*  Doon Institute of Medical Sciences (DIMS)    */}

                          <ul className="mt-4 list-unstyled">
                            <li id="career">
                              <h3>
                                5. Doon Institute of Medical Sciences (DIMS){" "}
                              </h3>
                              <br />
                              <p>
                                <Link
                                  href="https://careerbuddyclub.com/college-details/DIMS"
                                  className="text-primary"
                                >
                                  🔗 Visit Website
                                </Link>
                              </p>
                              <p className="mt-5">
                                DIMS offers value-for-money nursing education
                                with GNM, ANM, and B.Sc Nursing
                                programs.Emphasizing rural outreach and clinical
                                application, DIMS is suitable for students from
                                both urban and semi-urban backgrounds.
                              </p>

                              <ul
                                className="mt-3"
                                style={{ listStyleType: "upper-roman" }}
                              >
                                <li>
                                  <strong>Fees:</strong>
                                  <br />
                                  • ₹45,000 to ₹85,000/year <br />
                                </li>

                                <li>
                                  <strong>Campus Perks:</strong>
                                  <br />• Real-world training, skill development
                                  workshops, job placement support
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/* Career Prospects */}
                          <h2 id="conclude" className="mt-4 mb-3 fs-2">
                            Career Opportunities After Nursing
                          </h2>

                          <p>
                            Nursing graduates from Dehradun can pursue careers
                            in hospitals, clinics, government health missions,
                            or private organizations. They can also apply for
                            licensure exams for countries like USA (NCLEX-RN),
                            UAE, UK, and Australia.{" "}
                          </p>

                          <ul>
                            <li>
                              <strong>Career Roles: </strong>
                              <br />
                              • Staff Nurse
                              <br />
                              • ICU/Pediatric/NICU Nurse <br />
                              • Community Health Nurse
                              <br />
                              • Clinical Instructor or Nurse Educator <br />
                              • Government Nurse through AIIMS, UPPSC, ESIC,
                              etc.
                              <br />• Nursing Abroad with IELTS + Licensure
                            </li>
                          </ul>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/* Final Thoughts */}
                          <h2 id="tags" className="mt-4 mb-3 fs-2">
                            Conclusion
                          </h2>
                          <p className="mb-5">
                            Dehradun is home to several leading nursing colleges
                            that combine clinical training, affordability, and
                            global readiness. Whether you're aiming for
                            government service, private hospitals, or global
                            careers, institutions like Guru Nanak College and
                            BFIT Group of Institutions offer strong platforms
                            for success. <br />
                            If you’re ready to take the next step in your
                            nursing journey, Career Buddy Club is here to
                            support you with free counselling, admission
                            guidance, and application assistance across top
                            nursing colleges in Uttarakhand.
                          </p>

                          <hr className="mt-10 border-bottom border-3 border-dark mt-4" />

                          {/* Tags */}
                          <h2 className="mt-4 mb-3 fs-2">Tags</h2>
                          <p>
                            <strong>
                              Top Nursing Colleges in Dehradun, Best B.Sc
                              Nursing Dehradun, GNM College Dehradun 2025,
                              Nursing Admission Guide Uttarakhand, Guru Nanak
                              College Nursing, BFIT Nursing Dehradun, Nursing
                              Jobs India, ANM GNM BSc Nursing Courses
                            </strong>
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
