import React from 'react';
import BannerHome from '../components/hero-banners/fancy-home-banner';
import FancyMid from '../components/features/feature-fancy';
import FooterOne from "@/layouts/footers/footer-one";
import FeatureMid from '../components/features/feature-fancy-two';


const FancyHome = () => {
  return (
    <>
    <BannerHome/>
    <FancyMid/>
    <FeatureMid/>
    <FooterOne/>
    </>
  )
}

export default FancyHome;