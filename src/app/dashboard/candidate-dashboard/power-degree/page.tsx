"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import CandidateAside from "@/app/components/dashboard/candidate/aside";

import PowerDegree from "@/app/components/dashboard/candidate/power-degree";
import JobFees from "@/app/components/dashboard/candidate/job-fees";

const coursesData = [
  { id: 1, courseName: "B.Sc. Biotechnology", stream: "SCIENCE", fees: 218099 },
  { id: 2, courseName: "B.Sc. Microbiology", stream: "SCIENCE", fees: 218099 },
];

const CandidateProfilePage = () => {
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

        <PowerDegree
          setIsOpenSidebar={setIsOpenSidebar}
          courses={coursesData}
        />
        {/* profile area end */}
      </div>
    </Wrapper>
  );
};

export default CandidateProfilePage;
