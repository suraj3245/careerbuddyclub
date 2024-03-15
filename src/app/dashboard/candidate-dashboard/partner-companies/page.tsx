"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import CandidateAside from "@/app/components/dashboard/candidate/aside";
import PartnerCompany from "@/app/components/dashboard/candidate/partner-company";

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
        <PartnerCompany setIsOpenSidebar={setIsOpenSidebar} />
        {/* profile area end */}
      </div>
    </Wrapper>
  );
};

export default CandidateProfilePage;
