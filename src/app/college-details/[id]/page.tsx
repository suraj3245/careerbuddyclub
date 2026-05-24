import { Metadata } from "next";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import CollegeDetailsClient from "@/app/components/college-details/CollegeDetailsClientPage";
import FooterOne from "@/layouts/footers/footer-one";
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    alternates: { canonical: `https://careerbuddyclub.com/college-details/${params.id}` },
  };
}
const CollegeDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CollegeDetailsClient id={params.id} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CollegeDetailsPage;