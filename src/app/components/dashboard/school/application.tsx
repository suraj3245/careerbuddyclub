"use client";
import React, { useState } from "react";
import SchoolApplication from "./dashboard-area-application";
import SchoolAside from "./aside";

const ApplicationDashboard = () => {
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
      <SchoolApplication setIsOpenSidebar={setIsOpenSidebar} />
      {/* dashboard area end */}
    </div>
  );
};

export default ApplicationDashboard;
