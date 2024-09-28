import React from "react";
import Link from "next/link";
import AccordionItem from "../accordion/accordion-item";

const FaqArea = () => {
  return (
    <section className="faq-section position-relative pt-100 lg-pt-80">
      <div className="container">
        {/* Align the heading for Career Buddy Club FAQ */}
        <div className="row">
          <div className="col-12">
            <h3
              style={{
                fontSize: "1.75rem",  // Slightly larger size
                fontWeight: "normal",  // No bold
                textAlign: "left",     // Align to start of the card
                marginBottom: "0",     // No margin, directly attached to the card
                paddingBottom: "0"     // Ensure no extra padding either
              }}
            >
              Commonly Asked Questions about Career Buddy Club
            </h3>
          </div>
        </div>

        <div className="bg-wrapper mt-0 lg-mt-0">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" role="tabpanel" id="fc1">
              <div className="accordion accordion-style-two" id="accordionTwo">
                <AccordionItem
                  isShow={true}
                  id="one"
                  title="What is CBC?"
                  desc="CBC stands for Career Buddy Club. It is an end-to-end career services management solution that provides personalized career development plans, admissions in best colleges/universities, networking opportunities, training and mentorship programs, job and internship opportunities, and resources for budding entrepreneurs."
                  parent="accordionTwo"
                />
                <AccordionItem
                  id="two"
                  title="Who can benefit from CBC?"
                  desc="CBC services are divided into four student categories..."
                  parent="accordionTwo"
                />
                <AccordionItem
                  id="four"
                  title="How can I be part of CBC?"
                  desc='For Career Aptitude Test, <a href="/career-aptitude" style="color: blue;">click here.</a> For Admissions in Colleges/Universities, <a href="/admission" style="color: blue;">click here.</a> For Jobs, <a href="https://jobs.careerbuddyclub.com" style="color: blue;">click here.</a>.'
                  parent="accordionTwo"
                />
                <AccordionItem
                  id="five"
                  title="How can I contact CBC for support?"
                  desc="You can contact us by emailing us at help@careerbuddyclub.com or Call 7456000100."
                  parent="accordionTwo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Align the heading for Students FAQ */}
        <div className="row mt-4">
          <div className="col-12">
            <h3
              style={{
                fontSize: "1.75rem",  // Slightly larger size
                fontWeight: "normal",  // No bold
                textAlign: "left",     // Align to start of the card
                marginBottom: "0",     // No margin, directly attached to the card
                paddingBottom: "0",
                marginTop: "2rem",     // Ensure no extra padding either
              }}
            >
              Commonly Asked Questions By Students
            </h3>
          </div>
        </div>

        <div className="bg-wrapper mt-0 lg-mt-0">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" role="tabpanel" id="fc1">
              <div className="accordion accordion-style-two" id="accordionTwo">
                <AccordionItem
                  isShow={true}
                  id="one"
                  title="Science, Arts, Commerce ke baad konsa course karun?"
                  desc="Contact us by emailing us at help@careerbuddyclub.com or Call 7456000100."
                  parent="accordionTwo"
                />
                <AccordionItem
                  id="two"
                  title="Konse industry mein easily successful ho skte hain?"
                  desc="Contact us by emailing us at help@careerbuddyclub.com or Call 7456000100."
                  parent="accordionTwo"
                />
                <AccordionItem
                  id="four"
                  title="Kis College Mein Placement Sabse Achhi Hai?"
                  desc="Contact us by emailing us at help@careerbuddyclub.com or Call 7456000100."
                  parent="accordionTwo"
                />
                <AccordionItem
                  id="five"
                  title="Top MNCs ke liye kaise taiyari karen?"
                  desc="Contact us by emailing us at help@careerbuddyclub.com or Call 7456000100."
                  parent="accordionTwo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center border-bottom pb-150 lg-pb-50 mt-60 lg-mt-40 wow fadeInUp">
          <div className="title-three mb-30">
            <h2 className="fw-normal">Didn’t get your answer?</h2>
          </div>
          <Link href="/contact" className="btn-one">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
