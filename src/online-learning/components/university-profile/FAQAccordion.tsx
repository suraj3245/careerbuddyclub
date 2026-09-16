"use client";

import React, { useState } from 'react';

interface FAQAccordionProps {
  universityName: string;
  totalPrograms: number;
}

export default function FAQAccordion({ universityName, totalPrograms }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `Is ${universityName} recognized for online education?`,
      answer: `Please verify recognition and accreditation details directly with ${universityName}. We recommend checking UGC and relevant regulatory body listings for the most current information.`
    },
    {
      question: "How many online programs are available?",
      answer: `${universityName} currently offers ${totalPrograms} online programs across multiple disciplines.`
    },
    {
      question: "What are the eligibility requirements?",
      answer: "Eligibility varies by program. Generally, UG programs require 10+2, PG programs require a bachelor's degree. Check individual program requirements for specific criteria."
    },
    {
      question: "What is the fee range?",
      answer: "Fees vary by program. Please check the Programs section above or contact our counsellors for the latest fee details."
    },
    {
      question: "Are instalment plans available?",
      answer: "Many programs offer semester-wise or EMI-based payment options. Contact our advisors for specific payment plans."
    },
    {
      question: "How are classes conducted?",
      answer: "Classes are conducted online through a learning management system. You'll have access to live sessions, recorded lectures, and digital study materials."
    },
    {
      question: "How are examinations conducted?",
      answer: "Examinations are typically conducted online in a proctored format. Some programs may require in-person examination at designated centres."
    },
    {
      question: "Is career support available?",
      answer: "Yes, career services including resume support, interview preparation, and placement assistance are available. Career outcomes depend on individual effort and market conditions."
    },
    {
      question: "What documents are required?",
      answer: "Typically required: mark sheets, degree certificates, ID proof, passport-size photographs, and experience certificates (for programs requiring work experience)."
    },
    {
      question: "Can working professionals apply?",
      answer: "Yes, online programs are designed for working professionals. The flexible schedule allows you to learn at your own pace."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="upFaqs">
      <h2>Frequently Asked Questions</h2>
      <div className="upFaqList">
        {faqs.map((faq, index) => (
          <div key={index} className="upFaqItem">
            <button
              className={`upFaqQuestion ${openIndex === index ? 'upFaqQuestionActive' : ''}`}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className="upFaqToggle">{openIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`upFaqAnswer ${openIndex === index ? 'upFaqAnswerOpen' : ''}`}
            >
              <div style={{ padding: '16px' }}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
