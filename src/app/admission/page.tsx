import React from "react";
import { Metadata } from "next";
import Admissioncomp from "../components/admission/admissioncomp";

export const metadata: Metadata = {
  title: "Admission",
};

const admission = () => {
  return (
    <>
      <Admissioncomp />
    </>
  );
};

export default admission;
