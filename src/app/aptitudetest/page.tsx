import React, { useState, useEffect } from "react";
import QuizForm from "../components/aptitudeSurvey/aptitudeform";
import AptitudeTestcomp from "../components/aptitude-test/aptitude-test";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aptitude Test",
};

const AptitudeTest = () => {
  return (
    <>
      <AptitudeTestcomp />
    </>
  );
};

export default AptitudeTest;
