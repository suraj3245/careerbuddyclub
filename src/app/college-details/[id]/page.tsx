"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import axios from "axios";
import Image from "next/image";
import Slider from "react-slick";
import { IcollegeType } from "@/types/college-details";


const styles: { [key: string]: React.CSSProperties } = {
  pageFont: {
    fontFamily: '"Inter","Segoe UI",Arial,sans-serif',
    fontSize: "1.07rem",
    background: "#fafbfc",
    color: "#222"
  },
  mainPageWrapper: {
    padding: "0 0 2.2rem 0"
  },
  sectionNav: {
    margin: "1.5rem 0 2.5rem 0",
    background: "#fff",
    borderRadius: 7,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
  },
  sectionNavUl: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2.2rem",
    listStyle: "none",
    padding: "1rem 2rem",
    margin: 0
  },
  sectionNavA: {
    color: "#13518a",
    textDecoration: "none",
    fontWeight: 600,
    transition: "color 0.2s",
    fontSize: "1.06rem"
  },
  section: {
    background: "#fff",
    borderRadius: 7,
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
    padding: "2.2rem 2rem",
    marginBottom: "2.5rem"
  },
  card: {
    background: "#fff",
    borderRadius: 7,
    padding: "2rem 1.2rem 1.2rem 1.2rem",
    marginTop: "1rem",
    textAlign: "center"
  },
  logoSection: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "160px",
    marginBottom: "1.2rem"
  },
  logoImg: {
    width: "250px",
    height: "140px",
    objectFit: "contain" as const,
    display: "block"
  },
  schoolName: {
    fontSize: "1.2rem",
    fontWeight: 600,
    margin: "0.3rem 0 0.6rem"
  },
  centered: { textAlign: "center" },
  applyBtn: {
    background: "#13518a",
    color: "#fff",
    padding: "0.6rem 2rem",
    borderRadius: 6,
    fontWeight: 600,
    fontSize: "1rem",
    textDecoration: "none",
    marginBottom: "1.1rem",
    display: "inline-block",
    transition: "background 0.18s"
  },
  metaData: {
    marginTop: "0.7rem",
    fontSize: "1rem"
  },
  metaDataUl: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    fontSize: "1rem"
  },
  metaDataLi: {
    marginBottom: "0.5rem",
    display: "flex",
    gap: "0.3rem",
    alignItems: "center"
  },
  metaDataSpan: {
    fontWeight: 500,
    color: "#333"
  },
  socialLink: {
    fontSize: "1.15rem",
    marginLeft: "0.5rem",
    color: "#1976d2",
    transition: "color 0.16s"
  },
  tableWrapper: {
    overflowX: "auto",
    marginTop: "1.2rem"
  },
  professionalTable: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    fontSize: "1.06rem"
  },
  professionalThTd: {
    border: "2px solid #333",
    padding: "0.85rem 1.1rem",
    textAlign: "left"
  },
  professionalTh: {
    background: "#f1f5f8",
    fontWeight: 700,
    color: "#1b2330"
  },
  professionalTrEven: {
    background: "#f9fafb"
  },
  awardsList: {
    listStyle: "disc",
    margin: "1rem 0 0 2.2rem",
    padding: 0,
    fontSize: "1.08rem"
  },
  reviewItem: {
    padding: "0.8rem"
  },
  feedbackBlock: {
    background: "#f6f8fa",
    borderRadius: 8,
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    padding: "1.5rem 1.1rem",
    minHeight: 180
  },
  rating: {
    color: "#ffc107",
    marginRight: "0.7rem",
    fontSize: "1.1rem",
    padding: 0,
    listStyle: "none",
    display: "flex"
  },
  reviewScore: {
    fontWeight: 600,
    color: "#1976d2",
    marginLeft: "0.5rem"
  },
  reviewerName: {
    fontWeight: 600,
    color: "#222"
  },
  reviewerLocation: {
    fontSize: "0.98rem",
    color: "#666"
  },
  videoCard: {
    borderRadius: 7,
    boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
    background: "#fff",
    marginTop: "1.5rem",
    overflow: "hidden"
  },
  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65vh",
    background: "#f5f7fa"
  }
};

const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

type VideoCardProps = {
  videoId: string;
};
const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowWidth !== undefined && windowWidth < 768;
  const videoWrapperStyle: React.CSSProperties = isSmallScreen
    ? { position: "relative", paddingTop: "56.25%", paddingLeft: "10px" }
    : { position: "relative", width: "806px", height: "442px", margin: "0 auto" };

  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: "10px",
    right: "10px",
    width: "calc(100% - 20px)",
    height: "100%",
    border: "0",
  };

  return (
    <div style={{ ...styles.videoCard, ...videoWrapperStyle }}>
      <iframe
        style={iframeStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const CollegeDetailsPage = ({ params }: { params: { id: string } }) => {
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    axios.post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails")
      .then((res) => {
        const colleges = res?.data?.colleges || [];
        const matchedCollege = colleges.find(
          (college: any) => college.college_short_name == params.id
        );
        setDetails(matchedCollege);
      })
      .catch((error) => {
        console.error("Error fetching college data:", error);
      });
  }, [params.id]);

  return (
    <Wrapper>
      <div style={styles.pageFont}>
      {details ? (
        <div style={styles.mainPageWrapper}>
          <CompanyBreadcrumbjob
            title={details.college_full_name || ""}
            subtitle={details.address || ""}
          />
          <div className="container">
            {/* Section Nav */}
            <nav style={styles.sectionNav}>
              <ul style={styles.sectionNavUl}>
                <li><a href="#overview" style={styles.sectionNavA}>Overview</a></li>
                <li><a href="#courses" style={styles.sectionNavA}>Courses & Fees</a></li>
                <li><a href="#placement" style={styles.sectionNavA}>Placement</a></li>
                <li><a href="#awards" style={styles.sectionNavA}>Awards</a></li>
                <li><a href="#ranking" style={styles.sectionNavA}>Ranking</a></li>
                <li><a href="#alumni" style={styles.sectionNavA}>Alumni Reviews</a></li>
              </ul>
            </nav>
            {/* Overview */}
            <section id="overview" style={styles.section}>
              <div className="row">
                <div className="col-lg-8">
                  <h3>Overview</h3>
                  <p>{details.about}</p>
                  <div className="col-lg-7 pb-80">
                    <VideoCard videoId={details.video_id} />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={styles.card} className="shadow-sm">
                    {/* LOGO SECTION - No border, no bg, large and uniform */}
                    <div style={styles.logoSection}>
                      <Image
                        src={`https://test.careerbuddyclub.com:8080/storage/${details.logo}`}
                        alt={`${details?.college_short_name} logo`}
                        width={250}
                        height={140}
                        style={styles.logoImg}
                        priority
                      />
                    </div>
                    <div style={styles.schoolName}>{details.college_full_name}</div>
                    <div style={styles.centered}>
                      <a
                        href={details.website}
                        style={styles.applyBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >Visit Website</a>
                    </div>
                    <div style={styles.metaData}>
                      <ul style={styles.metaDataUl}>
                        <li style={styles.metaDataLi}><span style={styles.metaDataSpan}>Location:</span> {details.address}</li>
                        <li style={styles.metaDataLi}><span style={styles.metaDataSpan}>Email:</span> <a href={`mailto:${details.email}`}>{details.email}</a></li>
                        <li style={styles.metaDataLi}><span style={styles.metaDataSpan}>Admission Enquiry:</span> +91{details.phone}</li>
                        <li style={styles.metaDataLi}>
                          <span style={styles.metaDataSpan}>Social:</span>
                          <a href={details.facebook} style={styles.socialLink} target="_blank"><i className="bi bi-facebook"></i></a>
                          <a href={details.instagram} style={styles.socialLink} target="_blank"><i className="bi bi-instagram"></i></a>
                          <a href={details.twitter} style={styles.socialLink} target="_blank"><i className="bi bi-twitter"></i></a>
                          <a href={details.linkedin} style={styles.socialLink} target="_blank"><i className="bi bi-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* College Info Table */}
            <section style={styles.section}>
              <div className="row">
                <div className="col-lg-12">
                  <div style={styles.tableWrapper}>
                    <table style={styles.professionalTable}>
                      <thead>
                        <tr>
                          <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Institute Name</th>
                          <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>{details.college_full_name}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td style={styles.professionalThTd}>Short Name</td><td style={styles.professionalThTd}>{details.college_short_name}</td></tr>
                        <tr style={styles.professionalTrEven}><td style={styles.professionalThTd}>Institute Type</td><td style={styles.professionalThTd}>{details.type}</td></tr>
                        <tr><td style={styles.professionalThTd}>State</td><td style={styles.professionalThTd}>{details.state}</td></tr>
                        <tr style={styles.professionalTrEven}><td style={styles.professionalThTd}>City</td><td style={styles.professionalThTd}>{details.city}</td></tr>
                        <tr><td style={styles.professionalThTd}>Location/Address</td><td style={styles.professionalThTd}>{details.address}</td></tr>
                        <tr style={styles.professionalTrEven}><td style={styles.professionalThTd}>Phone Number</td><td style={styles.professionalThTd}>{details.phone}</td></tr>
                        <tr>
                          <td style={styles.professionalThTd}>Website</td>
                          <td style={styles.professionalThTd}>
                            <a href={details.website} target="_blank" rel="noopener noreferrer">
                              {details.website}
                            </a>
                          </td>
                        </tr>
                        <tr style={styles.professionalTrEven}><td style={styles.professionalThTd}>Email Address</td><td style={styles.professionalThTd}>{details.email}</td></tr>
                        <tr><td style={styles.professionalThTd}>University Affiliation</td><td style={styles.professionalThTd}>{details.recognised_by}</td></tr>
                        <tr style={styles.professionalTrEven}><td style={styles.professionalThTd}>Approval</td><td style={styles.professionalThTd}>{details.approved_by}</td></tr>
                        <tr><td style={styles.professionalThTd}>Area</td><td style={styles.professionalThTd}>Education</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            {/* Courses and Fees */}
            <section id="courses" style={styles.section}>
              <h3>Courses and Fees</h3>
              <p>{details.courses_text}</p>
              <div style={styles.tableWrapper}>
                <table style={styles.professionalTable}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Courses</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Duration</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Total Fees (Rs.)</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Selection Criteria</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Eligibility Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.courses.map((course: any, idx: number) => (
                      <tr key={course.name} style={idx % 2 === 1 ? styles.professionalTrEven : {}}>
                        <td style={styles.professionalThTd}>{course.name}</td>
                        <td style={styles.professionalThTd}>{course.duration}</td>
                        <td style={styles.professionalThTd}>{course.pivot.fee}</td>
                        <td style={styles.professionalThTd}>{course.pivot.selection_criteria}</td>
                        <td style={styles.professionalThTd}>{course.pivot.eligibility_criteria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            {/* Placement */}
            <section id="placement" style={styles.section}>
              <h3>Placements</h3>
              <p>{details.placement_text}</p>
              <div style={styles.tableWrapper}>
                <table style={styles.professionalTable}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Placement Information</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.placement_infos.map((p: any, idx: number) => (
                      <tr key={p.label} style={idx % 2 === 1 ? styles.professionalTrEven : {}}>
                        <td style={styles.professionalThTd}>{p.label}</td>
                        <td style={styles.professionalThTd}>{p.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            {/* Campus */}
            <section style={styles.section}>
              <h3>About Campus</h3>
              <p>{details.campus_text}</p>
              <div style={styles.tableWrapper}>
                <table style={styles.professionalTable}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Campus</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.campus_infos.map((c: any, idx: number) => (
                      <tr key={c.label} style={idx % 2 === 1 ? styles.professionalTrEven : {}}>
                        <td style={styles.professionalThTd}>{c.label}</td>
                        <td style={styles.professionalThTd}>{c.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            {/* Awards */}
            <section id="awards" style={styles.section}>
              <h3>Awards</h3>
              <p>{details.awards_text}</p>
              <ul style={styles.awardsList}>
                {details.awards.map((a: any) => (
                  <li key={a.id}>{a.award}</li>
                ))}
              </ul>
            </section>
            {/* Ranking */}
            <section id="ranking" style={styles.section}>
              <h3>Ranking</h3>
              <p>{details.ranking_text}</p>
              <div style={styles.tableWrapper}>
                <table style={styles.professionalTable}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Ranking</th>
                      <th style={{ ...styles.professionalThTd, ...styles.professionalTh }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.rankings.map((c: any, idx: number) => (
                      <tr key={c.label} style={idx % 2 === 1 ? styles.professionalTrEven : {}}>
                        <td style={styles.professionalThTd}>{c.label}</td>
                        <td style={styles.professionalThTd}>{c.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            {/* Alumni Reviews */}
            <section id="alumni" style={styles.section}>
              <h3>Alumni Reviews</h3>
              <Slider {...slider_setting}>
                {details.reviews.map((item: any) => (
                  <div key={item.id} style={styles.reviewItem}>
                    <div style={styles.feedbackBlock}>
                      <div className="d-flex align-items-center">
                        <ul style={styles.rating}>
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="bi bi-star-fill"></i>
                            </li>
                          ))}
                        </ul>
                        <div style={styles.reviewScore}>
                          <span>{item.rating}</span> out of 5
                        </div>
                      </div>
                      <blockquote>{item.description}</blockquote>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <div style={styles.reviewerName}>{item.user_name}</div>
                          <span style={styles.reviewerLocation}>{item.user_location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </section>
          </div>
          <FooterOne />
        </div>
      ) : (
        <div style={styles.loaderWrapper}>
          <iframe
            src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
            style={{ width: "300px", height: "300px" }}
          ></iframe>
        </div>
      )}
      </div>
    </Wrapper>
  );
};

export default CollegeDetailsPage;