import React from "react";
import { Metadata } from "next";
import MainBanner from "./components/hero-banners/main-banner";

import HomeTwo from "./home-2/page";
import HeaderTwo from "@/layouts/headers/header-2";
import HeaderTop from "@/layouts/headers/header-top";

export const metadata: Metadata = {
  title: "Career Buddy Club",
};

const main = () => {
  return (
    <>
      <HomeTwo />
    </>
  );
};

export default main;
