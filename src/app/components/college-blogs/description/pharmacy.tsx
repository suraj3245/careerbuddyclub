"use client"
import React from "react";
import Link from "next/link";


const PharmacyDescription = () => {
  return (
    <section className="container py-5" style={{ lineHeight: "2rem" }}>
      {/* Table of Contents */}
      <div
        className="card mb-5"
        style={{ borderRight: "3px solid #007bff", maxWidth: "800px" }}
      >
        <div className="card-body">
          <h2 className="card-title text-success" style={{ fontSize: "1.25rem" }}>
            Table of Contents
          </h2>
          <ul className="list-unstyled mt-3 mb-0 text-primary" style={{ lineHeight: "2.4rem" }}>
            <li><a href="#why-pharmacy" className="text-decoration-none">Why Choose Pharmacy as a Career?</a></li>
            <li><a href="#top-colleges" className="text-decoration-none">Top Pharmacy Colleges in Dehradun (2025) </a>

                   <ul className="ps-3" style={{ listStyleType: "disc", marginLeft:"1.5rem" }}>
                    <li><a href="#gnc" className="text-decoration-none">Guru Nanak College (GNC), Dehradun</a></li>
                    <li><a href="#bfit" className="text-decoration-none">BFIT Group of Institutions, Dehradun</a></li>
                    <li><a href="#dpc" className="text-decoration-none">Doon PG College of Agriculture and Allied Sciences </a></li>
                    <li><a href="#jbit" className="text-decoration-none">JB Institute of Technology (JBIT), Dehradun</a></li>

                    </ul>




            </li>
            <li><a href="#career" className="text-decoration-none">Career Opportunities After Pharmacy</a></li>
            <li><a href="#conclude" className="text-decoration-none">Conclusion </a></li>
            <li><a href="#tags" className="text-decoration-none">Tags </a></li>

          </ul>
        </div>
      </div>
      {/* Why Dehradun */}
      <div className="" style={{ marginTop: '3rem !important' }} id="why-pharmacy">
        <h2 id="top-colleges" className="mt-5 mb-4" style={{ fontSize: "1.75rem", marginTop: '4rem' }}>
          Why Choose Pharmacy as a Career?
        </h2>

        <p>
          Pharmacy is a dynamic and vital part of the healthcare sector. It’s not just about dispensing
          medicines — it's a science that involves the development, production, and safe use of
          pharmaceutical drugs. As a pharmacist, you become a key player in improving public health and
          ensuring patients receive the right medications and dosages.
          With India's pharmaceutical industry growing at a rapid pace, there is a strong demand for skilled
          pharmacy professionals across hospitals, manufacturing units, biotech labs, research organizations,
          and regulatory bodies. Pharmacy also provides a flexible career path, offering roles in clinical
          practice, industry, research, and even entrepreneurship.
        </p>
        <ol className="mb-5">
          <h3>Key Benefits of a Career in Pharmacy: </h3><br/>
          <li><strong>Critical Role in Healthcare:</strong>Pharmacists bridge the gap between doctors and patients.</li>
          <li><strong>Wide Career Options:</strong>  Ranging from hospitals and drug manufacturing to regulatory affairs and research.</li>
          <li><strong>Global Demand:</strong> Pharmacy professionals are needed both in India and abroad.
          </li>
          <li><strong>Higher Studies:</strong>After B.Pharm, you can pursue M.Pharm, Pharm.D, or an MBA in Healthcare. </li>
          <li><strong>Job Security & Salary Growth:</strong>Especially in clinical research, pharmacovigilance, and regulatory services.</li>
        </ol>

        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />

        {/* Top Colleges */}
        <h2 id="gnc" className="mt-5 mb-4" style={{ fontSize: '1.75rem', marginTop: '2rem !important' }}>
          Top Pharmacy Colleges in Dehradun (2025)
        </h2>

        <p>Here is a detailed look at some of the <strong>best PCI and AICTE-approved pharmacy colleges in Dehradun, </strong>
          offering <strong>D.Pharm and B.Pharm courses </strong>with excellent infrastructure and placement support. </p>


        {/* GNC College */}

        <ul className="mb-5" style={{ listStyleType: "none" }}>
          <li>
            <h3 id="bfit">1. Guru Nanak College (GNC), Dehradun</h3><br />
            <p>
              <strong>Guru Nanak College (GNC)</strong>is one of Dehradun’s premier institutes for pharmacy education. Known for its focus on ethical learning and professional development, GNC blends academic knowledge with real-world skills to prepare students for the evolving pharmaceutical industry.
              The college offers <strong> Diploma in Pharmacy (D.Pharm) </strong>and <strong>Bachelor of Pharmacy (B.Pharm)</strong> programs, both of which are approved by the <strong>Pharmacy Council of India (PCI) and AICTE. </strong>
            </p>

            <ul className="mt-3">
              <li>
                <strong>Eligibility Criteria:</strong><br />
                • For D.Pharm: 10+2 with Physics, Chemistry, and Biology/Mathematics. <br />
                • For B.Pharm: 10+2 with PCB/PCM; Minimum 45% marks (General category).
              </li>

              <li className="mt-3">
                <strong>Fee Structure (Approximate): </strong><br />
                •  D.Pharm: ₹45,000 – ₹60,000 per year <br />
                • B.Pharm: ₹70,000 – ₹85,000 per year
              </li>

              <li className="mt-3">
                <strong>Campus Highlights:</strong><br />
                • State-of-the-art pharmaceutical laboratories<br />
                • Well-stocked library and e-learning facilities<br />
                • Regular industry visits, seminars, and internships <br />
                • Active placement and mentorship cell
              </li>

              <li className="mt-3">
                <strong>Why Choose GNC?</strong>
                <p>
                  The institute emphasizes value-based learning and offers affordable education with strong placement
                  support, making it an ideal choice for pharmacy aspirants in Uttarakhand.
                </p>
              </li>
            </ul>
          </li>
        </ul>



        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />

        {/* BFIT GROUP OF Institutions */}


        <ul className="mb-5" style={{ listStyleType: "none" }}>
          <li>
            <h3 id="dpc">2. BFIT Group of Institutions, Dehradun</h3><br />
            <p>
              <strong>BFIT (Baba Farid Institute of Technology)</strong> is a multi-disciplinary institute that has made a significant
              mark in science and technology education. Its School of Pharmacy is known for advanced teaching
              methodologies, international collaborations, and hands-on lab training.

              BFIT offers both<strong> D.Pharm and B.Pharm </strong> , with modern labs and a focus on career readiness through
              skill development and industry exposure.
            </p>

            <ul className="mt-3" style={{ listStyleType: "upper-roman" }}>
              <li>
                <strong>Eligibility Criteria:</strong><br />
                • 10+2 with PCB or PCM. <br />
                • Minimum 45% marks for General category 40% for SC/ST .
              </li>

              <li className="mt-3">
                <strong>Fee Structure (Approximate): </strong><br />
                • D.Pharm: ₹50,000 per year <br />
                • B.Pharm: ₹80,000 per year
              </li>

              <li className="mt-3">
                <strong>Campus Highlights:</strong><br />
                • Fully-equipped pharma labs and simulation rooms <br />
                • Guest lectures from industry experts <br />
                • MOUs with global universities  <br />
                • Career counselling, aptitude training, and mock interviews
              </li>

              <li className="mt-3">
                <strong>Why Choose BFIT? </strong>
                <p>
                  BFIT stands out for its research orientation, practical learning, and strong industry interface — ideal
                  for students looking for a career-focused education.
                </p>
              </li>
            </ul>
          </li>
        </ul>



        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />


        {/* Doon Pg College Of Agriculture and  Allied Sciences */}


        <ul className="mb-5" style={{ listStyleType: "none" }}>
          <li>
            <h3 id="jbit">3. Doon PG College of Agriculture and Allied Sciences</h3><br />
            <p>
              <strong>Doon PG College</strong>Doon PG College, part of the prestigious Doon Group of Colleges, offers pharmacy education with a research and community-based learning approach. The college focuses on skill-based education and fosters real-world exposure through pharmaceutical workshops and seminars.

              BFIT offers both<strong>D.Pharm and B.Pharm</strong> , with modern labs and a focus on career readiness through
              skill development and industry exposure.
            </p>

            <ul className="mt-3">


              <li>
                <strong>Courses Offered:</strong><br />
                • Diploma in Pharmacy (D.Pharm) <br />
                • Bachelor of Pharmacy (B.Pharm)
              </li>


              <li>
                <strong>Eligibility Criteria:</strong><br />
                • 10+2 with PCB/PCM from a recognized board

              </li>

              <li className="mt-3">
                <strong>Fee Structure (Approximate): </strong><br />
                • D.Pharm: ₹45,000 per year<br />
                • B.Pharm: ₹75,000 – ₹85,000 per year
              </li>

              <li className="mt-3">
                <strong>Campus Highlights:</strong><br />
                • Focus on experiential and lab-based learning <br />
                • Active alumni engagement and career guidance  <br />
                • Health camps, seminars, and pharma industry exposure <br />
                • Access to community health initiatives
              </li>

              <li className="mt-3">
                <strong>Why Choose Doon PG College? </strong>
                <p>
                  The college combines academic rigor with social responsibility and is ideal for students who wish to
                  explore the broader impact of pharmacy on society.
                </p>
              </li>
            </ul>
          </li>
        </ul>



        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />


        {/*  JB Institute of Technology (JBIT), Dehradun   */}

        <ul className="mb-5" style={{ listStyleType: "none" }}>
          <li>
            <h3 id="">4. JB Institute of Technology (JBIT), Dehradun</h3><br />
            <p>
              <strong>JB Institute of Technology (JBIT)</strong> is one of the fastest-growing technical colleges in Dehradun. Known for its engineering and management programs, JBIT has expanded into pharmacy with a strong emphasis on innovation and real-world applicability.


            </p>

            <ul className="mt-3">


              <li>
                <strong>Courses Offered:</strong><br />
                • Diploma in Pharmacy (D.Pharm)  <br />
                • Bachelor of Pharmacy (B.Pharm)
              </li>


              <li>
                <strong>Eligibility Criteria:</strong><br />
                • 10+2 with Physics, Chemistry, and Biology/Mathematics <br/>
                • Minimum 45% aggregate marks

              </li>

              <li className="mt-3">
                <strong>Fee Structure (Approximate): </strong><br />
                • D.Pharm: ₹40,000 – ₹50,000 per year <br />
                • B.Pharm: ₹75,000 per year
              </li>

              <li className="mt-3">
                <strong>Campus Highlights:</strong><br />
                • Green, Wi-Fi-enabled campus with modern facilities <br />
                • Industry tie-ups and internship programs  <br />
                • Emphasis on research, innovation, and soft skills<br />
                • Hostel and transportation facilities available
              </li>

              <li className="mt-3">
                <h3 id="career">Why Choose JBIT? </h3>
                <p>
                  JBIT provides a balanced mix of academic excellence and modern infrastructure, preparing students
                  for both higher education and job placements.
                </p>
              </li>
            </ul>
          </li>
        </ul>



        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />





        {/* Career Prospects */}
        <h2 id="" className="mt-5 mb-3" style={{ fontSize: '1.75rem', marginTop: "2rem !important" }}>
          Career Opportunities After Pharmacy
        </h2>

        <p>With a Diploma (D.Pharm) or Bachelor's degree (B.Pharm) in pharmacy, students are eligible for a
          wide range of career opportunities in India and abroad.</p>



        <ul>
          <li><strong>Career Options After D.Pharm:</strong><br />
            • Registered Pharmacist in retail stores or hospitals<br />
            • Medical Sales Representative<br />
            • Drug Manufacturing Assistant<br />
            • Quality Control Executive<br />
            • Lateral Entry to B.Pharm (2nd Year)

          </li>
          <li><strong>Career Options After B.Pharm:</strong><br />
            • Drug Inspector (State & Central Government jobs)<br />
            • Clinical Research Associate (CRA)<br />
            • Pharmaceutical Marketing Executive<br />
            • Production Chemist / QA Analyst<br />
            • Regulatory Affairs or Pharmacovigilance Officer<br />
            • Medical Underwriting / Medical Coding<br />
            • Higher Studies: M.Pharm, Pharm.D, or MBA in Healthcare
          </li>
          <li><strong id="conclude">Emerging Sectors:</strong><br />
            • E-Pharmacy Platforms (like 1mg, NetMeds)<br />
            • Telemedicine & Healthcare Analytics<br />
            • Biotechnology & Genomics<br />
            • Medical Writing & Scientific Journalism
          </li>
        </ul>

        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />

        {/* Conclusion*/}
        <h2 id="tags" className="mt-5 mb-3" style={{ fontSize: '1.75rem', marginTop: "2rem !important" }}>
          Conclusion
        </h2>
        <p className="mb-5">
          Choosing the right pharmacy college is a life-changing decision, and Dehradun offers some of the
          best options in North India. With colleges like Guru Nanak College, BFIT, Doon PG College, and JBIT,
          students get access to quality education, state-of-the-art labs, internship support, and a nurturing
          campus environment. <br />

          Whether you’re aiming for a diploma or a degree in pharmacy, these institutions will provide you
          with the skills, knowledge, and opportunities to excel in the ever-expanding pharmaceutical industry.<br />

          <strong>Need help with admissions or career counselling? </strong>
          Get in touch with <strong>Career Buddy Club</strong> for <strong>free expert guidance, college shortlisting, and end-to-end
            support</strong> on your academic journey.
        </p>

        <hr
          className="mt-10"
          style={{ borderBottom: "2px solid black", borderWidth: "3px", borderStyle: "solid", "marginTop": "2rem !important" }}
        />

        {/* Tags*/}
        <h2 id="" className="mt-5 mb-3" style={{ fontSize: '1.75rem', marginTop: "3rem !important" }}>
          Tags
        </h2>
        <p><strong>Pharmacy Colleges in Dehradun, Best D.Pharm Colleges Dehradun, Top B.Pharm Colleges
          Uttarakhand, Pharmacy Admission 2025, PCI Approved Colleges Dehradun, Career After Pharmacy,
          Best Pharmacy Courses in India, Dehradun Pharmacy Colleges List, Pharmacy Career Opportunities</strong></p>


      </div>
      


    {/* Table for Colleges */}

      

      {/* <div className="table-responsive mt-4">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>College</th>
              <th>Courses</th>
              <th>Short Description</th>
              <th>Key Benefits</th>
              <th>Eligibility</th>
              <th>Fees</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Graphic Era (Deemed to be University)</td>
              <td>Finance, HR, Marketing, Digital Marketing, International Business</td>
              <td>A+ NAAC, UGC Approved, Industry-focused curriculum</td>
              <td>Strong industry interface, Excellent infrastructure, International collaborations</td>
              <td>10+2 (any stream), min. 50%</td>
              <td>₹1,15,000/year (approx.)</td>
              <td><Link href="https://careerbuddyclub.com/college-details/GEU" className="text-primary">Visit</Link></td>
            </tr>
            <tr>
              <td>UPES</td>
              <td>Oil & Gas Marketing, Logistics, Finance, Marketing, HR</td>
              <td>Unique industry-aligned specializations, A NAAC</td>
              <td>Industry-integrated curriculum, 94% placement rate</td>
              <td>10+2 (any stream), min. 50%</td>
              <td>₹2,60,000/year (approx.)</td>
              <td><Link href="https://careerbuddyclub.com/college-details/UPES?utm_source=CBC-Website&utm_medium=Online&utm_campaign=UPES" className="text-primary">Visit</Link></td>
            </tr>
            <tr>
              <td>DIT University</td>
              <td>HR, Finance, Digital Business, Data Analytics</td>
              <td>Modern pedagogy, internships, strong placements</td>
              <td>Case-based learning, Excellent placement & internship support</td>
              <td>10+2 (any stream),min. 50%</td>
              <td>₹1,10,000/year (approx.)</td>
              <td><Link href="http://careerbuddyclub.com/college-details/DIT" className="text-primary">Visit</Link></td>
            </tr>
            <tr>
              <td>IMS Unison University</td>
              <td>HR, Finance, Marketing, International Business</td>
              <td>Good student-faculty ratio, B+ NAAC</td>
              <td>Skill development workshops</td>
              <td>10+2 (any stream), min. 45%</td>
              <td>₹1,05,000/year (approx.)</td>
              <td><Link href="https://careerbuddyclub.com/college-details/IMSUU" className="text-primary">Visit</Link></td>
            </tr>
            <tr>
              <td>Guru Nanak College</td>
              <td>General BBA</td>
              <td>Affordable private college, holistic development</td>
              <td>Personalized academic attention, Affordable fees, Student activities</td>
              <td>10+2 (any stream), min. 45%</td>
              <td>₹50,000–₹60,000/year (approx.)</td>
              <td><Link href="https://careerbuddyclub.com/college-details/GNC?utm_source=CBC-Website&utm_medium=Online&utm_campaign=GNC" className="text-primary">Visit</Link></td>
            </tr>
            <tr>
              <td>JBIT</td>
              <td>HR, Marketing, Finance</td>
              <td>ERP-integrated learning, industry connect</td>
              <td>Strong placement & career support, Industrial visits, Guest lectures</td>
              <td>10+2 (any stream), min. 45%</td>
              <td>₹70,000–₹85,000/year (approx.)</td>
              <td><Link href="https://careerbuddyclub.com/college-details/JBIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=JBIT" className="text-primary">Visit</Link></td>
            </tr>
            <tr>
              <td>BFIT Group of Institutions</td>
              <td>General BBA, Entrepreneurship</td>
              <td>Oldest & largest group, startup support</td>
              <td>Affordable, Practical learning, Startup incubation</td>
              <td>10+2 (any stream), min. 45%</td>
              <td>₹60,000–₹75,000/year (approx.)</td>
              <td><Link href="https://careerbuddyclub.com/college-details/BFIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=BFIT" className="text-primary">Visit</Link></td>
            </tr>
          </tbody>
        </table>
      </div> */}


     
    </section>
  );
};

export default PharmacyDescription;
