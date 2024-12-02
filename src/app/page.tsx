import React from "react";
import { Metadata } from "next";
import MainBanner from "./components/hero-banners/main-banner";

import HomeTwo from "./home-2/page";

interface HeaderProps {
  pageTitle: string;
  metaDescription: string;
}
export const metadata: Metadata = {
  title: "Career Buddy Club | Career Counselling | Career Guidance",
  description:
    "Empowering students with knowledge, resources, and guidance, Career Buddy Club (CBC) offers India’s 1st end-to-end career services. Take our Career Aptitude Test, explore admission and placement services, and secure job-guaranteed degrees.",
};

const main = () => {
  return (
    <>
      <HomeTwo />
      <script src="https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/cbclub/ee-form-widget/form-6/widget.js"></script>
    </>
  );
};

export default main;
