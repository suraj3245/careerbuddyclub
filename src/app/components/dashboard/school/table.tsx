"use client";
import React, { useState } from "react";
import DashboardArea from "./dashboard-area";
import SchoolAside from "./aside";

const StudentTableDashboard = () => {
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
      <DashboardArea setIsOpenSidebar={setIsOpenSidebar} />
      {/* dashboard area end */}
    </div>
  );
};

export default StudentTableDashboard;
