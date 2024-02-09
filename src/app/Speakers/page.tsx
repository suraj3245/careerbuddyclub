import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";

import FancyBanner13 from "../components/fancy-banner/fancy-banner-13";
import FancyBanner14 from "../components/fancy-banner/fancy-banner-14";
import FancyBanner15 from "../components/fancy-banner/fancy-banner-15";
import HeroBannerTen from "../components/hero-banners/hero-banner-ten";


export const metadata: Metadata = {
  title: "Speakers",
};

const Speakers = () => {
  return (
    <>
      <HeroBannerTen/>
       <FancyBanner13 />
       <FancyBanner14 />
       <FancyBanner15 />
      <FooterOne />
      {/* footer end */}
    </>
  );
};

export default Speakers;
