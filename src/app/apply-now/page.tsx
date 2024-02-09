import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import RegisterArea from "../components/register/register-area";
import ApplyArea from "../components/apply-now/apply-area";

export const metadata: Metadata = {
  title: "Apply now",
};

const RegisterPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        {/*breadcrumb end */}

        {/* register area start */}
        <ApplyArea />
        {/* register area end */}

        {/* footer start */}
        {/* <FooterOne /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
