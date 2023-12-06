import React from "react";
import Link from "next/link";
import AccordionItem from "../accordion/accordion-item";

// faq data
const faq_data: {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
  parent: string;
}[] = [
    {
      id: "One",
      title: "What is CBC?",
      desc: "CBC stands for Career Buddy Club. It is an end-to-end career services management solution that provides personalized career development plans, networking opportunities, training and mentorship programs, job and internship opportunities, and resources for budding entrepreneurs.",
      isShow: true,
      parent: "accordionTwo",
    },
    {
      id: "Two",
      title: "Who can benefit from CBC?",
      desc: "CBC services are designed for educational institutions, students, job seekers, and entrepreneurs.",
      parent: "accordionTwo",
    },
    {
      id: "Three",
      title: "How can CBC help me?",
      desc: "CBC can help job seekers by providing personalized career development plans, job and internship opportunities, mentoring and training programs, and networking opportunities to achive career goals.",
      parent: "accordionTwo",
    },
    {
      id: "Four",
      title: "How can be part of CBC?",
      desc: "CBC has launched Jobs Guarantee Program for students looking for jobs in more than 30+ industries. You too can be a part of this program.",
      parent: "accordionTwo",
    },
    {
      id: "Five",
      title: "How can I contact CBC for support?",
      desc: "You can contact us by emailing us at contact@careerbuddy.com or Call 7456000100.",
      parent: "accordionTwo",
    },
  ];

export function FaqItems() {
  return (
    <div className="accordion accordion-style-two" id="accordionTwo">
      {faq_data.map((f) => (
        <AccordionItem
          key={f.id}
          id={f.id}
          isShow={f.isShow}
          title={f.title}
          desc={f.desc}
          parent={f.parent}
        />
      ))}
    </div>
  )
}
const FaqOne = () => {
  return (
    <>
      <section className="faq-section position-relative mt-180 xl-mt-150 lg-mt-100 mb-150 lg-mb-100">
        <div className="container">
          <div className="title-one text-center">
            <h2 className="text-dark wow fadeInUp" data-wow-delay="0.3s">Questions & Answers</h2>
          </div>
          <div className="bg-wrapper mt-60 lg-mt-40">
            <FaqItems/>
          </div>
          <div className="text-center mt-50 sm-mt-40 wow fadeInUp">
            <div className="btn-eight style-two fw-500">
              Don’t find the answer? We can help.{" "}
              <Link href="/faq">Click here</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
