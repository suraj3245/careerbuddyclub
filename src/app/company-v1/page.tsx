import React from "react";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyV1Area from "../components/company/company-v1-area";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Companies in India 2026 | Best Companies to Work For | CareerBuddyClub",
  description:
    "Explore top companies in India across IT, startups, MNCs, and government sectors. Discover the best companies to work for, salary insights, hiring trends, and career opportunities.",
  keywords: [
    "top companies in India",
    "best companies to work in India",
    "IT companies in India list",
    "MNC companies in India",
    "top hiring companies India",
    "startup companies in India",
    "high paying companies in India",
    "best tech companies in India",
    "list of companies in India",
    "top employers in India",
    "private companies in India jobs",
    "CareerBuddyClub companies",
    "top companies for freshers India",
    "companies hiring in India 2026"
  ],

  alternates: {
    canonical: "https://careerbuddyclub.com/company-v1",
  },

  openGraph: {
    title: "Top Companies in India 2026 | CareerBuddyClub",
    description:
      "Find the best companies in India including IT giants, startups, and MNCs. Explore job opportunities, salaries, and career growth.",
    url: "https://careerbuddyclub.com/company-v1",
    siteName: "CareerBuddyClub",
    images: [
      {
        url: "https://careerbuddyclub.com/company-v1", // 👉 MUST use real image
        width: 1200,
        height: 630,
        alt: "Top Companies in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const CompanyV1Page = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Company"
          subtitle="Find your desire company and get your dream job"
        />
        {/*breadcrumb end */}

        {/* company v1 area start */}
        <CompanyV1Area />
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default CompanyV1Page;
