import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import ErrorPageArea from "../components/error/error-page-area";

export const metadata: Metadata = {
  title: "College",
};

const GettingJob = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start
        {/* hero banner start */}

        <div className="container">
          <ErrorPageArea/>
        </div>




        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default GettingJob;
