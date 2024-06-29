"use client";
import React, { useState } from "react";
import DashboardProfile from "./dashboard-area-profile";
import SchoolAside from "./aside";

const ProfileDashboard = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  return (
    <div className="main-page-wrapper">
      {/* aside start */}
      <SchoolAside
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      {/* aside end  */}

      {/* dashboard area start */}
      <DashboardProfile setIsOpenSidebar={setIsOpenSidebar} />
      {/* dashboard area end */}
    </div>
  );
};

export default ProfileDashboard;
