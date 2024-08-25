import React from "react";
import { Metadata } from "next";
import Head from "next/head";
import Wrapper from "@/layouts/wrapper";
import ApplyArea from "../components/apply-now/apply-area";
import HeaderTwo from "@/layouts/headers/header-2";
import HeaderFour from "@/layouts/headers/header-4";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "../components/company-details/college-details-dbs";
import JobListEleven from "../components/jobs/list/job-list-eleven";


export const metadata: Metadata = {
  title: "Apply now",
};

const RegisterPage = () => {
    const details = college_details[5];
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

        {/*breadcrumb start */}
        {/*breadcrumb end */}

        {/* register area start */}
        <ApplyArea />
        <CollegeDetailsArea details={details} />
        {/* <FeatureSection /> */}
        <JobListEleven/>

        {/* register area end */}
        {/* <FeatureFour />
        <ExpertsOne />
        <JobListTen />
        <BlogOne /> */}
        {/* <ExpertSectionTwo /> */}
        {/* <FeedbackThree /> */}
        {/* <FeatureSix /> */}

        {/* footer start */}
        {/* <FooterOne /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RegisterPage;