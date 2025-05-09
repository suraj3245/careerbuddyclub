"use client";
import { useState } from "react";
import { Box, Typography, Button, Paper, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Best Pharmacy Colleges in Dehradun, Uttarakhand | Best Pharmacy colleges in Dehradun Courses, Fees, Admissions 2025",
  description:
    "Discover the best pharmacy colleges in Dehradun, Uttarakhand for B.Pharm, D.Pharm, and M.Pharm programs. Compare colleges by rankings, placements, fees, and admission details for 2025.",
  keywords:
    "Top Pharmacy Colleges in Dehradun, Best Pharmacy Colleges in Uttarakhand, B.Pharm Colleges in Dehradun, D.Pharm Colleges, Pharmacy Admission 2025, Pharmacy Colleges Fees, Pharmacy Placement Dehradun",
  alternates: {
    canonical: "https://careerbuddyclub.com/top-pharmacy-colleges-inDehradun-Uttarakhand",
  },
  openGraph: {
    title: "Top Pharmacy Colleges in Dehradun, Uttarakhand | Career Buddy Club",
    description:
      "Explore top-ranked pharmacy colleges in Dehradun, Uttarakhand with high-quality education in B.Pharm, D.Pharm, and M.Pharm. Get details on fees, placements, rankings, and admissions.",
    url: "https://careerbuddyclub.com/top-pharmacy-colleges-inDehradun-Uttarakhand",
    type: "website",
    locale: "en_US",
    siteName: "Career Buddy Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pharmacy Colleges in Dehradun, Uttarakhand",
    description:
      "Explore the best pharmacy colleges in Dehradun with expert reviews on placements, fees, infrastructure, and academic excellence in B.Pharm, D.Pharm, and M.Pharm.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function BlogSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "transparent",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Best Pharmacy Colleges in Dehradun (2025 Guide) <br></br>
        Explore top institutions, course details, fees, and career scope in
        pharmacy.
      </Typography>
      
      <Box sx={{ position: "relative" }}>
        <Collapse in={expanded} collapsedSize={100}>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Dehradun, often hailed as the educational hub of Uttarakhand, has
            emerged as a hotspot for pharmacy education. The city is home to
            several reputed institutions offering pharmacy courses, ranging from
            diploma to bachelor's level, with excellent infrastructure and
            industry connections. With the Indian pharmaceutical sector poised
            for robust growth, pursuing a career in pharmacy offers both
            stability and a multitude of career options. In this comprehensive
            2025 guide by Career Buddy Club — your trusted education partner —
            we explore the top pharmacy colleges in Dehradun. This guide covers
            essential details such as courses offered, fees, eligibility
            criteria, campus highlights, and career scope to help students and
            parents make informed decisions.
            {expanded && (
              <>
                <br />
                <br />
                <div className="main-page-wrapper">
                  <div className="container py-5">
                    <div className="mb-5">
                      <h3 className="text-success">
                        Why Choose Pharmacy as a Career?
                      </h3>
                      <p>
                        Pharmacy is a multidisciplinary and application-oriented
                        field that combines elements of healthcare, biology, and
                        chemical sciences. Pharmacists play a vital role in
                        patient care by ensuring the safe and effective use of
                        medications. With expanding roles in clinical and
                        industrial sectors, the profession offers rewarding
                        career opportunities globally.
                      </p>
                      <h5 className="text-decoration-underline">
                        Key Benefits of Pursuing Pharmacy
                      </h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Integral role in the healthcare system{" "}
                        </li>
                        <li className="list-group-item">
                          Career options in hospitals, research labs,
                          pharmaceutical manufacturing, quality control, and
                          retail pharmacy{" "}
                        </li>
                        <li className="list-group-item">
                          High demand in public health institutions and private
                          pharmaceutical firms{" "}
                        </li>
                        <li className="list-group-item">
                          Lucrative sectors such as clinical research, drug
                          regulation, and pharmacovigilance
                        </li>
                        <li className="list-group-item">
                          Stepping stone to advanced studies like M.Pharm,
                          Pharm.D, or MBA in Healthcare Management{" "}
                        </li>
                      </ul>
                    </div>

                    {/* Colleges Section */}
                    <div className="mb-5">
                      <h3 className="mb-4 text-primary">
                        Top Pharmacy Colleges in Dehradun
                      </h3>

                      {/* College Card */}
                      <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                          <h4 className="card-title text-center">
                            Guru Nanak College (GNC), Dehradun
                          </h4>

                          <div className="text-center">
                            Website :
                            <a
                              href="https://www.gnc.edu.in/Pharmacy-College-in-Dehradun-Uttarakhand"
                              className="text-decoration-underline text-primary"
                              target="_blank"
                            >
                              https://www.gnc.edu.in/Pharmacy-College-in-Dehradun-Uttarakhand
                            </a>
                          </div>

                          <p>
                            {" "}
                            Guru Nanak College is a reputed name in the academic
                            landscape of Dehradun. The college emphasizes
                            ethical education, hands-on learning, and
                            industry-ready skill development in the field of
                            pharmacy.
                          </p>
                          <h6>Courses Offered:</h6>
                          <ul>
                            <li>Diploma in Pharmacy (D.Pharm)</li>
                            <li>Bachelor of Pharmacy (B.Pharm) </li>
                          </ul>
                          <h6>Eligibility</h6>
                          <ul>
                            <li>
                              D.Pharm: 10+2 with Physics, Chemistry, and
                              Biology/Mathematics
                            </li>
                            <li>
                              B.Pharm: 10+2 with PCB/PCM; Minimum 45% marks
                              (General category)
                            </li>
                          </ul>
                          <h6>Fees</h6>
                          <ul>
                            <li>D.Pharm: INR 45,000 - 60,000 per year</li>
                            <li>B.Pharm: INR 70,000 - 85,000 per year</li>
                          </ul>
                          <h6>Key Benefits</h6>
                          <ul>
                            <li>
                              Approved by Pharmacy Council of India (PCI) and
                              AICTE{" "}
                            </li>
                            <li>
                              Modern laboratories and well-stocked library{" "}
                            </li>
                            <li>Regular industry visits and internships</li>
                            <li>
                              Active placement cell and student mentorship
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /////////////////BFIT GROUP OF INSTITUTIONS////////////// */}

                      <div className="card mb-4 shadow-sm ">
                        <div className="card-body">
                          <h4 className="card-title text-center">
                            {" "}
                            BFIT Group of Institutions, Dehradun
                          </h4>

                          <div className="text-center">
                            Website :
                            <a
                              href="https://bfit.edu.in/pharmacy.php"
                              className="text-decoration-underline text-primary"
                              target="_blank"
                            >
                              https://bfit.edu.in/pharmacy.php
                            </a>
                          </div>
                          <p>
                            {" "}
                            BFIT (Baba Farid Institute of Technology) is a
                            multi-disciplinary institution known for excellence
                            in science and technology education. Its School of
                            Pharmacy integrates modern pedagogy, research
                            exposure, and skill-based training.
                          </p>
                          <h6>Courses Offered:</h6>
                          <ul>
                            <li>Diploma in Pharmacy (D.Pharm) </li>
                            <li>Bachelor of Pharmacy (B.Pharm)</li>
                          </ul>
                          <h6>Eligibility:</h6>
                          <ul>
                            <li>10+2 with PCB or PCM</li>
                            <li>
                              Minimum 45% marks for General category, 40% for
                              SC/ST{" "}
                            </li>
                          </ul>
                          <h6>Fees:</h6>
                          <ul>
                            <li>D.Pharm: INR 50,000 per year</li>
                            <li>B.Pharm: INR 80,000 per year </li>
                          </ul>
                          <h6>Key Benefits</h6>
                          <ul>
                            <li>
                              Well-equipped pharmaceutical labs and virtual
                              simulation rooms{" "}
                            </li>
                            <li>International collaborations and MOUs</li>
                            <li>Guest lectures by pharma industry leaders</li>
                            <li>
                              Personalized career counselling and mock placement
                              drives.
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* //////////////////////////////////// Doon PG College of Agriculture and Allied Sciences ////////////////////// */}

                      <div className="card mb-4 shadow-sm ">
                        <div className="card-body">
                          <h4 className="card-title text-center">
                            Doon PG College of Agriculture and Allied Sciences
                          </h4>
                          <p>
                            Part of the prestigious Doon Group of Colleges, this
                            institution stands out for its skill-oriented and
                            research-based approach to pharmacy education. The
                            college is known for strong alumni engagement and
                            dynamic teaching methods.
                          </p>
                          <h6>Courses Offered:</h6>
                          <ul>
                            <li>Diploma in Pharmacy (D.Pharm) </li>
                            <li>Bachelor of Pharmacy (B.Pharm)</li>
                          </ul>
                          <h6>Eligibility:</h6>
                          <ul>
                            <li>10+2 with PCB/PCM from a recognized board</li>
                          </ul>
                          <h6>Fees:</h6>
                          <ul>
                            <li>D.Pharm: INR 45,000 per year </li>
                            <li>B.Pharm: INR 75,000 - 85,000 per year </li>
                          </ul>
                          <h6>Distinctive Features</h6>
                          <ul>
                            <li>
                              Focus on experiential and lab-based learning
                            </li>
                            <li>
                              Frequent academic seminars and pharmaceutical
                              workshops{" "}
                            </li>
                            <li>
                              Collaboration with healthcare professionals and
                              industry trainers
                            </li>
                            <li>
                              Active involvement in community health programs{" "}
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* //////// JB Institute of Technology (JBIT), Dehradun /////*/}

                      <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                          <h4 className="card-title text-center">
                            JB Institute of Technology (JBIT), Dehradun
                          </h4>
                          <p>
                            JBIT has quickly gained recognition for its
                            engineering and professional education programs. The
                            Pharmacy Department at JBIT provides a comprehensive
                            curriculum combining theory with real world
                            applications.
                          </p>
                          <h6>Courses Offered:</h6>
                          <ul>
                            <li>Diploma in Pharmacy (D.Pharm) </li>
                            <li>Bachelor of Pharmacy (B.Pharm)</li>
                          </ul>
                          <h6>Eligibility:</h6>
                          <ul>
                            <li>
                              10+2 with Physics, Chemistry, and
                              Biology/Mathematics{" "}
                            </li>
                            <li>Minimum 45% aggregate marks </li>
                          </ul>
                          <h6>Fees:</h6>
                          <ul>
                            <li>D.Pharm: INR 40,000 - 50,000 per year</li>
                            <li>B.Pharm: INR 75,000 per year</li>
                          </ul>
                          <h6>Unique Advantages:</h6>
                          <ul>
                            <li>
                              Strong industry partnerships for internships and
                              placements
                            </li>
                            <li>
                              Regular training in soft skills and personality
                              development{" "}
                            </li>
                            <li>
                              {" "}
                              Emphasis on pharmaceutical innovation and research
                            </li>
                            <li>
                              Green, Wi-Fi enabled campus with hostel facilities
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Career Scope */}
                    <div className="mb-5">
                      <h3 className="text-success">
                        Career Opportunities After Pharmacy
                      </h3>
                      <p>
                        A diploma or degree in pharmacy opens the door to a wide
                        range of career paths in both clinical and industrial
                        settings.{" "}
                      </p>
                      <h6 className="fw-bold">After D.Pharm:</h6>
                      <ul>
                        <li>
                          Registered Pharmacist (Hospital or Retail Pharmacy)
                        </li>
                        <li>Medical Sales Representative </li>
                        <li>
                          Assistant in drug manufacturing or quality control{" "}
                        </li>
                        <li>Pathway to lateral entry into B.Pharm </li>
                      </ul>

                      <h6 className="fw-bold mt-3">After B.Pharm:</h6>
                      <ul>
                        <li> Drug Inspector (Government sector) </li>
                        <li>Clinical Research Associate (CRA) </li>
                        <li>Pharmaceutical Marketing Executive</li>
                        <li>
                          Production Chemist or Quality Assurance Analyst{" "}
                        </li>
                        <li>
                          Opportunities in Regulatory Affairs and
                          Pharmacovigilance{" "}
                        </li>
                        <li>
                          Pursue higher education: M.Pharm, Pharm.D, MBA in
                          Healthcare Management
                        </li>
                      </ul>

                      <h6 className="fw-bold mt-3">Emerging Sectors:</h6>
                      <ul>
                        <li>Biotech and Genomic Research </li>
                        <li>Medical Coding and Health Insurance </li>
                        <li>E-Pharmacy and Telemedicine</li>
                        <li>Healthcare Analytics and Medical Writing </li>
                      </ul>
                    </div>

                    {/* Conclusion */}
                    <div className="alert alert-info" role="alert">
                      <h5 className="fw-bold">Conclusion </h5>
                      <p>
                        Dehradun offers a unique blend of high-quality
                        education, a serene environment, and affordable living —
                        making it an ideal destination for pharmacy aspirants.
                        Institutions like Guru Nanak College, BFIT, Doon PG
                        College, and JBIT not only provide academic excellence
                        but also industry exposure and career readiness.
                      </p>
                      <p>
                        Choosing the right pharmacy college is a pivotal
                        decision. Consider factors like regulatory approvals
                        (PCI/AICTE), faculty experience, infrastructure,
                        placement support, and alumni network before making your
                        choice.
                      </p>
                      <p>
                        Need guidance on admission, course selection, or
                        scholarships? Get in touch with Career Buddy Club for
                        free counselling, admission assistance, and step-by-step
                        support on your journey to a successful pharmacy career.
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="text-muted mt-4">
                      <h6>Tags:</h6>
                      <p>
                        Pharmacy Colleges in Dehradun, Best D.Pharm Colleges
                        Dehradun, Top B.Pharm Institutes Uttarakhand, Pharmacy
                        Admission 2025, Career in Pharmacy India
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Typography>
        </Collapse>

        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50px",
              background: "linear-gradient(transparent, white)",
            }}
          />
        )}
      </Box>

      <Button
        onClick={() => setExpanded(!expanded)}
        endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
        sx={{
          textTransform: "none",
          color: "primary.main",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </Button>
    </Paper>
  );
}
