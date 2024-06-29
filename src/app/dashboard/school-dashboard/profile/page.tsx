"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import ProfileDashboard from "@/app/components/dashboard/school/profile";

const SchoolProfilePage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <Wrapper>
      <ProfileDashboard/>
    </Wrapper>
  );
};

export default SchoolProfilePage;
