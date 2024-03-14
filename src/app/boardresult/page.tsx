import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import Termone from "../components/contact/term & condition";
import HeroBannerEleven from "../components/hero-banners/hero-banner-eleven";
export const metadata: Metadata = {
  title: "Board Result",
};

const Privacy = () => {
  return (
    <>
      <div className="main-page-wrapper">
        <HeroBannerEleven />

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </>
  );
};

export default Privacy;
