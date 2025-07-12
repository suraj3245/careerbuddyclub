"use client"
import React from "react";
import Link from "next/link";
import { listStyleType } from "html2canvas/dist/types/css/property-descriptors/list-style-type";

const BBAColleges = () => {
  return (
    <section className="container py-5 lh-lg">
      {/* Table of Contents */}
      <div
        className="card mb-5 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <h2 className="card-title text-success fs-2">
            Table of Contents
          </h2>
          <ul className="list-unstyled mt-3 mb-0 text-primary lh-lg">
            <li><a href="#why-dehradun" className="text-decoration-none">Why Choose Dehradun for BBA?</a></li>
            <li><a href="#top-colleges" className="text-decoration-none">Top BBA Colleges in Dehradun</a></li>
            <li><a href="#advantages" className="text-decoration-none">Key Advantages of Doing BBA</a></li>
            <li><a href="#curriculum" className="text-decoration-none">Curriculum Overview</a></li>
            <li><a href="#careers" className="text-decoration-none">Career Prospects</a></li>
            <li><a href="#final-thoughts" className="text-decoration-none">Final Thoughts</a></li>
            <li><a href="#faq" className="text-decoration-none">FAQs</a></li>
            <li><a href="#cbc" className="text-decoration-none">Career Buddy Club</a></li>
          </ul>
        </div>
      </div>
      {/* Why Dehradun */}
      <div className="mt-3" id="why-dehradun">
      <h2 id="top-colleges" className="mb-4 fs-2 mt-4">
        Why Choose Dehradun for a BBA?
      </h2>
      <ol className="mb-5">
        <li><strong>Educational Hub with Quality Institutions</strong> Dehradun is home to several reputable universities and colleges that offer top-rated BBA programs recognized by UGC and accredited bodies like NAAC and AICTE.</li>
        <li><strong>Strategic Location:</strong> Located in Uttarakhand, Dehradun is well-connected to major cities like Delhi, Haridwar, and Chandigarh. It also provides a peaceful learning environment and proximity to industrial hubs for practical exposure.</li>
        <li><strong>Affordable Living & Education</strong> Compared to metro cities, Dehradun offers affordable tuition fees and cost of living, making it ideal for students from across India.
        </li>
      </ol>

        <hr
          className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* Top Colleges */}
      <h2 id="" className="mb-3 fs-3 mt-4">
        Top BBA Colleges in Dehradun
      </h2>

      <ul className="mb-5 list-unstyled">
        <li>
          <h3 id="">1. Graphic Era (Deemed to be University)</h3><br/>
             <p>
                  <Link href="https://careerbuddyclub.com/college-details/GEU" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: UGC-approved Deemed University<br/>
          • NAAC: A+<br />
          • Fees: ₹1,15,000/year<br/>
          • Specializations: Finance, HR, Marketing, Digital Marketing, International Business<br />
          • Placement: Amazon, Wipro, Deloitte, HCL, Infosys<br />
          <strong>Highlights:</strong> Strong industry interface, excellent infrastructure, international collaborations
        </li>
        <li className="mt-4">
          <h3>2. UPES (University of Petroleum and Energy Studies)</h3><br />
           <p>
                  <Link href="https://careerbuddyclub.com/college-details/UPES?utm_source=CBC-Website&utm_medium=Online&utm_campaign=UPES" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: UGC, AIU<br/>
          • NAAC: A<br/>
          • Fees: ₹2,60,000/year<br />
          • Specializations: Oil & Gas Marketing, Logistics, Finance, Marketing, HR<br />
          • Recruiters: Schlumberger, Reliance, ONGC, Accenture<br />
          <strong>Highlights:</strong> Unique industry-aligned BBA programs, 94% placement rate
        </li>
        <li className="mt-4">
          <h3>3. DIT University</h3><br />
          <p>
                  <Link href="http://careerbuddyclub.com/college-details/DIT" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: UGC-approved Private University<br />
          • NAAC: In process<br />
          • Fees: ₹1,10,000/year<br />
          • Specializations: HR, Finance, Digital Business, Data Analytics<br />
          • Recruiters: TCS, Infosys, Deloitte, HDFC<br />
          <strong>Highlights:</strong> Case-based pedagogy, strong internships & placements
        </li>
        <li className="mt-4">
          <h3>4. IMS Unison University</h3><br />
            <p>
                  <Link href="https://careerbuddyclub.com/college-details/IMSUU" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: UGC-recognized Private University<br />
          • NAAC: B+<br />
          • Fees: ₹1,05,000/year<br />
          • Specializations: HR, Finance, Marketing, International Business<br />
          • Recruiters: Axis Bank, Byju's, Justdial, Decathlon<br />
          <strong>Highlights:</strong> Good faculty-student ratio, skill-building workshops
        </li>
        <li className="mt-4">
          <h3>5. Guru Nanak College, Dehradun</h3><br />
           <p>
                  <Link href="https://careerbuddyclub.com/college-details/GNC?utm_source=CBC-Website&utm_medium=Online&utm_campaign=GNC" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: Sri Dev Suman Uttarakhand University<br />
          • Fees: ₹50,000–₹60,000/year<br />
          • Specializations: General BBA<br />
          <strong>Highlights:</strong> Affordable, individual academic focus, Wi-Fi & digital campus
        </li>
        <li className="mt-4">
          <h3>6. JBIT (JB Institute of Technology)</h3><br />
          <p>
                  <Link href="https://careerbuddyclub.com/college-details/JBIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=JBIT" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: Sri Dev Suman Uttarakhand University<br />
          • Fees: ₹70,000–₹85,000/year<br />
          • Specializations: HR, Marketing, Finance<br />
          • Recruiters: Byju’s, Infosys, ICICI Bank, Wipro<br />
          <strong>Highlights:</strong> ERP-integrated learning, strong placements, regular industry visits
        </li>
        <li className="mt-4">
          <h3 id="advantages">7. BFIT Group of Institutions</h3><br />
          <p>
                  <Link href="https://careerbuddyclub.com/college-details/BFIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=BFIT" className="text-primary">
                     🔗 Visit Website
                  </Link>
            </p>
          • Affiliation: HNB Garhwal Central University<br />
          • Fees: ₹60,000–₹75,000/year<br />
          • Specializations: General BBA, Entrepreneurship<br />
          • Recruiters: PolicyBazaar, Tech Mahindra, HDFC, Reliance<br />
          <strong>Highlights:</strong> Largest education group in Doon, startup incubation, hands-on learning
        </li>
      </ul>

       <hr
          className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* Key Advantages */}
      <h2 id="curriculum" className="mb-3 fs-3 mt-4">
        Key Advantages of Doing BBA in Dehradun
      </h2>
      <ul className="mb-5">
        <li><strong>Industry Exposure:</strong> Thanks to proximity to industrial cities like Haridwar and Roorkee, students get ample internship and live project opportunities.</li>
        <li><strong>Strong Placement Support</strong> Colleges in Dehradun maintain active placement cells with strong connections in the corporate
          world.</li>
        <li><strong>Ideal for Competitive Exam Preparation</strong> The peaceful learning environment is perfect for those preparing for MBA entrance exams like CAT,
          XAT, or government exams alongside their BBA.
        </li>
        <li><strong>Modern Infrastructure</strong> Most colleges are equipped with smart classrooms, libraries, entrepreneurship cells, and incubation
          centers.</li>
      </ul>


      <hr
          className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* Curriculum Overview */}
      <h2 id="" className="mb-3 fs-3 mt-4">
        Curriculum Overview of BBA Programs
      </h2>
      <p>A typical BBA program in Dehradun includes:</p>

      <h5 className="mt-4">Core Subjects</h5>
      <ul>
        <li>Principles of Management</li>
        <li>Financial Accounting</li>
        <li>Business Economics</li>
        <li>Organizational Behavior</li>
        <li>Business Communication</li>
        <li>Marketing Management</li>
        <li>Human Resource Management</li>
      </ul>

      <h5 className="mt-4">Electives & Specializations</h5>
      <ul>
        <li>Digital Marketing</li>
        <li>Financial Modeling</li>
        <li>Entrepreneurship</li>
        <li>Supply Chain Management</li>
        <li>International Business</li>
      </ul>

      <h5 className="mt-4" id="careers">Skill Enhancement Courses</h5>
      <ul>
        <li>Excel & Data Tools</li>
        <li>Presentation & Soft Skills</li>
        <li>Business Analytics Basics</li>
        <li>Case Study Analysis</li>
      </ul>

      <p className="mb-5"><strong>Internships:</strong> 6–8 weeks mandatory after 4th or 5th semester</p>

       <hr
          className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* Career Prospects */}
      <h2 id="" className="mb-3 fs-3 mt-4">
        Career Prospects After BBA
      </h2>

      <h5 className="mt-3">Higher Education</h5>
      <ul>
        <li>MBA/PGDM (IIMs, XLRI, FMS, etc.)</li>
        <li>Specialized Masters (Finance, Analytics, etc.)</li>
        <li>International programs (MS, MBA abroad)</li>
      </ul>

      <h5 className="mt-4">Job Opportunities</h5>
      <ul>
        <li>Business Analyst</li>
        <li>HR Executive</li>
        <li>Digital Marketing Associate</li>
        <li>Sales Manager</li>
        <li>Operations Executive</li>
        <li>Banking & Finance Associate</li>
      </ul>

      <h5 className="mt-4" id="final-thoughts">Entrepreneurship</h5>
      <p className="mb-5">Incubation centers and mentorship in Dehradun help students launch startups.</p>

       <hr
          className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* Final Thoughts */}
      <h2 id="faq" className="mb-3 fs-3 mt-4">
        Final Thoughts
      </h2>
      <p className="mb-5">
        Pursuing a BBA in Dehradun is more than earning a degree—it's about building leadership skills, corporate readiness, and entrepreneurial mindset. Affordable costs, serene learning environments, and strong industry links make Dehradun a top choice for BBA aspirants.
      </p>

       <hr
          className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* FAQs */}
      <h2 id="cbc" className="mb-3 fs-3 mt-4" >
        Frequently Asked Questions (FAQs)
      </h2>
      <p><strong>Q1. What is the average fee for BBA in Dehradun?</strong><br />A: Fees range from ₹85,000 to ₹2.6 Lakhs per year, depending on the university.</p>
      <p><strong>Q2. Is hostel accommodation available?</strong><br />A: Yes, most colleges offer on-campus or partnered hostel facilities.</p>
      <p><strong>Q3. Are BBA programs UGC approved?</strong><br />A: Yes, all the colleges mentioned above are UGC-recognized and follow NEP-aligned curriculums.</p>

       <hr className="mt-10 border-bottom border-3 border-dark mt-4"
          
        />

      {/* Career Buddy Club */}
      <h2 id="" className="mb-3 fs-3 mt-4">
        Explore More with Career Buddy Club
      </h2>
      <p>
        
        Want personalized guidance to select the best BBA college for you? Contact Career Buddy Club for free counseling, college comparison, and career advice.
      </p>

      </div>

       <hr className="mt-10 border-bottom border-3 border-dark mt-4"/>

      {/* Table  */}

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
              <td>10+2 (any stream), min. 50%</td>
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

export default BBAColleges;
