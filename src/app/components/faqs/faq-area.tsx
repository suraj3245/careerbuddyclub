import React from "react";
import Link from "next/link";
import AccordionItem from "../accordion/accordion-item";

const FaqArea = () => {
  return (
    <section className="faq-section position-relative pt-100 lg-pt-80">
      <div className="container">
        <ul
          className="nav nav-tabs border-0 justify-content-center"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#fc1"
              role="tab"
            >
              All
            </button>
          </li>
        </ul>
        <div className="bg-wrapper mt-60 lg-mt-40">
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
                  desc='CBC services are divided into four student categories. For Class 11th and 12th Students, CBC offers state of the art - <a href="/career-aptitude" style="color: blue;">Career Aptitude Test</a> to guide students about best career options and course options based on their personalities, strengths and interests. For Class XII students, CBC offers personalised admission services that helps students in getting into the best college based on their academic score, financial capability and college rankings. Apart from admissions, CBC also runs Job Guaranteed Degrees with some colleges where a student will have a guaranteed job after thier graduation. For Final Year Students, CBC organises several placement drives throughout the year and helps students get placed in their dream companies. For  educational institutions, schools can check our services here, colleges/universities can check our services here, employers can check our services here.'
                  parent="accordionTwo"
                />

                <AccordionItem
                  id="four"
                  title="How can I be part of CBC?"
                  desc='For Career Aptitude Test, <a href="/career-aptitude" style="color: blue;">click here.</a> For Admissions in Colleges/Universities, <a href="/admission" style="color: blue;">click here.</a> For Jobs, <a href="https://jobs.careerbuddyclub.com" style="color: blue;">click here.</a>. '
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

        <div className="text-center border-bottom pb-150 lg-pb-50 mt-60 lg-mt-40 wow fadeInUp">
          <div className="title-three mb-30">
            <h2 className="fw-normal">Don’t get your answer?</h2>
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
