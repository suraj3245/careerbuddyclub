import React from "react";
import { Metadata } from "next";
import MainBanner from "../components/hero-banners/main-banner";

export const metadata: Metadata = {
  title: "main",
};

const main = () => {
  return (
    <>
      <MainBanner />
    </>
  );
};

export default main;
