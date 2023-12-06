import React from 'react';
import Link from 'next/link';
import AccordionItem from '../accordion/accordion-item';

const FaqArea = () => {
  return (
    <section className="faq-section position-relative pt-100 lg-pt-80">
      <div className="container">
        <ul className="nav nav-tabs border-0 justify-content-center" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab">All</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab">Marketing</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc3" role="tab">Buying</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc4" role="tab">User Manual</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc5" role="tab">Payments</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc6" role="tab"> Terms & Conditions</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc7" role="tab">Account</button>
          </li>
        </ul>
        <div className="bg-wrapper mt-60 lg-mt-40">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" role="tabpanel" id="fc1">
              <div className="accordion accordion-style-two" id="accordionTwo">
                <AccordionItem id='one' title='What is CBC?' desc='CBC stands for Career Buddy Club. It is an end-to-end career services management solution that provides personalized career development plans, networking opportunities, training and mentorship programs, job and internship opportunities, and resources for budding entrepreneurs.' parent='accordionTwo' />
                <AccordionItem isShow={true} id='two' title='Who can benefit from CBC?' desc='CBC services are designed for educational institutions, students, job seekers, and entrepreneurs.' parent='accordionTwo' />
                <AccordionItem id='three' title='How can CBC help me?' desc='CBC can help job seekers by providing personalized career development plans, job and internship opportunities, mentoring and training programs, and networking opportunities to achive career goals.' parent='accordionTwo' />
                <AccordionItem id='four' title='How can be part of CBC?' desc='CBC has launched "Jobs Guarantee Program" for students looking for jobs in more than 30+ industries. You too can be a part of this program.' parent='accordionTwo' />
                <AccordionItem id='five' title='How can I contact CBC for support?' desc='You can contact us by emailing us at contact@careerbuddy.com or Call 7456000100.' parent='accordionTwo' />
              </div>
            </div>

            <div className="tab-pane fade" role="tabpanel" id="fc2">
              <div className="accordion accordion-style-two" id="accordionThree">
                <AccordionItem id='six' title='What is this program about?' desc='This program will help you get the right job with an average of Rs. 5 LPA CTC.It will help you become employable and increase your chances of selection. Not only Jobs, this program will also help you figure out your career path by laying out a step by step career plan for you to become successful. Furthermore, It will also help your inner entrepreneur to understand the basics of building a business or use your entrepreneurial traits for jobs. Students who wish to go abroad will also be able to understand the nuances of living abroad and how can one get jobs abroad.' parent='accordionThree' />
                <AccordionItem id='seven' title='Why should I take this program now?' desc='India is the only country where recession is not coming. But with the advent of AI, jobs will become a lot tougher for those who dont keep up Also,among companies, it is widely known that COVID batch hasnt studied well enough because of the nature of online classes, hence cracking interviews and getting good jobs is tougher now.' parent='accordionThree' />
              </div>
            </div>

            <div className="tab-pane fade" role="tabpanel" id="fc3">
              <div className="accordion accordion-style-two" id="accordionFour">
                <AccordionItem id='eight' title='Can I upgrade my plan later?' desc='Yes, you can upgrade your plan later if you feel that you need more services. You can contact CBC customer support for assistance with upgrading your plan.' parent='accordionFour' />
                <AccordionItem id='nine' title='Can I cancel my plan and get a refund?' desc='Please contact CBC customer support for assistance with cancellation of plans.' parent='accordionFour' />
              </div>
            </div>

            <div className="tab-pane fade" role="tabpanel" id="fc4">
              <div className="accordion accordion-style-two" id="accordionFive">
                <AccordionItem id='ten' title='Why should I take this Job Training now?' desc='The job market is highly competitive, and preparing for the selection process is crucial. By joining Manzil now, you gain a significant advantage and increase your chances of securing your dream job.' parent='accordionFive' />
                <AccordionItem id='eleven' title='Couldnt I find this material online for free?' desc='While you may find some information and resources online, this program offers a curated and comprehensive curriculum tailored specifically to LinkedIn profile building. Our expert mentors provide in-depth knowledge, practical strategies, and personalized guidance, ensuring that you gain the expertise needed to create an exceptional LinkedIn profile that sets you apart from the competition.' parent='accordionFive' />
              </div>
            </div>

            <div className="tab-pane fade" role="tabpanel" id="fc5">
              <div className="accordion accordion-style-two" id="accordionSix">
                <AccordionItem id='twelve' title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSix' />
                <AccordionItem id='thirteen' title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSix' />
              </div>
            </div>

            <div className="tab-pane fade" role="tabpanel" id="fc6">
              <div className="accordion accordion-style-two" id="accordionSeven">
                <AccordionItem id='fourteen' title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSeven' />
                <AccordionItem id='fifteen' title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSeven' />
              </div>
            </div>

            <div className="tab-pane fade" role="tabpanel" id="fc7">
              <div className="accordion accordion-style-two" id="accordionEight">
                <AccordionItem id='sixteen' title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionEight' />
                <AccordionItem id='seventeen' title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionEight' />
              </div>
            </div>

          </div>
        </div>

        <div className="text-center border-bottom pb-150 lg-pb-50 mt-60 lg-mt-40 wow fadeInUp">
          <div className="title-three mb-30">
            <h2 className="fw-normal">Don’t get your answer?</h2>
          </div>
          <Link href='/contact' className="btn-one">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;