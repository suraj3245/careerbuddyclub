import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import MapArea from "../components/contact/map-area";
import ContactArea from "../components/contact/contact-area";
import HeaderFour from "@/layouts/headers/header-4";
import PricingOne from "../components/pricing/pricing-one";
import Privacyone from "../components/contact/Privacy-area";
import Termone from "../components/contact/term & condition";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const Privacy = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*MapArea start */}

        {/* contact area end */}
        <Privacyone />

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Privacy;
