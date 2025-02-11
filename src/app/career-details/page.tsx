"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import FilterPage from "../components/filters/filterpage";

const CareerDetailsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <FilterPage />
      </div>
    </Wrapper>
  );
};

export default CareerDetailsPage;
