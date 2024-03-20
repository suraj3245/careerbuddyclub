"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import AptiBanner from "../components/hero-banners/apti-banner";
import AptiFeature from "../components/features/feature-apti";
import {
  FaUserGraduate,
  FaChartLine,
  FaUserTie,
  FaSchool,
} from "react-icons/fa";
import StatisticsCard from "../components/statistic/stats";
import FeatureSection from "../components/videoprop/featureprop";
import HowItWorksThree from "../components/how-it-works/how-it-works-3";
import Component from "../components/how-it-works/how-it-works-4";
// export const metadata: Metadata = {
//   title: "Career Aptitude Test",
// };

const statistics = [
  { icon: <FaUserGraduate />, number: "1,00,000+", label: "Students taken Test" },
  { icon: <FaChartLine />, number: "10,000+", label: "Students Counseled" },
  { icon: <FaUserTie />, number: "100+", label: "Expert Counsellors" },
  { icon: <FaSchool />, number: "5,000+", label: "Admissions taken" },
];

const campus = () => {
  const router = useRouter();

  useEffect(() => {
    // Extract the 'from' parameter from the URL query

    const searchParams = new URLSearchParams(window.location.search);

    const gpslocation = searchParams.get("from");

    // Check if the location exists and save it to local storage
    if (gpslocation) {
      localStorage.setItem("location", gpslocation);
    }
  });
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}
        {/* hero banner start */}
        <AptiBanner />
        {/* hero banner end */}
        <StatisticsCard statistics={statistics} />
        <FeatureSection />
        <HowItWorksThree />
        <Component />

        <AptiFeature />
        {/* how it works start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default campus;
