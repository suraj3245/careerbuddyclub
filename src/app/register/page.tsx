import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import RegisterArea from "../components/register/register-area";
import HeroBannerThree from "../components/hero-banners/hero-banner-three";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <HeroBannerThree />
        {/*breadcrumb end */}

        {/* register area start */}
        <RegisterArea />
        {/* register area end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
