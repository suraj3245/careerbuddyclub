"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import CandidateAside from "@/app/components/dashboard/candidate/aside";
import DashboardprofileArea from "@/app/components/dashboard/candidate/dashboard-profie";
import DashboardDocument from "@/app/components/dashboard/candidate/dashboard-document";

const DashboardPage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* aside start */}
        <CandidateAside
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        {/* aside end  */}

        {/* profile area start */}
        {/* <DashboardArea setIsOpenSidebar={setIsOpenSidebar} /> */}
        <DashboardDocument setIsOpenSidebar={setIsOpenSidebar} />

        {/* profile area end */}
      </div>
    </Wrapper>
  );
};

export default DashboardPage;
