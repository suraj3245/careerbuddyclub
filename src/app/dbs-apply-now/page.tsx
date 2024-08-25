"use client"
import React, { useEffect, useState, useRef } from "react";
import { Metadata } from "next";
import Head from "next/head";
import Wrapper from "@/layouts/wrapper";
import ApplyArea from "../components/apply-now/apply-area";
import HeaderTwo from "@/layouts/headers/header-2";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "../components/company-details/college-details-dbs";
import JobListEleven from "../components/jobs/list/job-list-eleven";
import { FaArrowUp } from "react-icons/fa"; // Importing the arrow icon

// export const metadata: Metadata = {
//   title: "Apply now",
// };

const RegisterPage = () => {
  const details = college_details[5];
  const applyFormRef = useRef<HTMLDivElement>(null); // Specify the ref type
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (bottom) {
        applyFormRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16474481389"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16474481389');
          `}
        </script>

        {/* Event snippet for Submit lead form conversion page */}
        <script>
          {`
            gtag('event', 'conversion', {'send_to': 'AW-16474481389/7FjvCJCGqZcZEO3F0q89'});
          `}
        </script>
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}

        {/* Apply Area start */}
        <div ref={applyFormRef}>
          <ApplyArea />
        </div>
        {/* Apply Area end */}
        
        <CollegeDetailsArea details={details} />
        <JobListEleven />

        {/* Arrow button to navigate to top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "24px",
              left: "20px", // Changed from right to left
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              zIndex: 1000,
            }}
          >
            <FaArrowUp size={40} />
          </button>
        )}

        {/* footer start */}
        {/* <FooterOne /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
