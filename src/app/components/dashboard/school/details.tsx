"use client";
import React, { useState,useEffect } from "react";
import SchoolAside from "./aside";
import DashboardStudent from "./dashboard-area-table";

const StudentDetails = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="main-page-wrapper">
      {/* aside start */}
      <SchoolAside
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      {/* aside end  */}

      {/* dashboard area start */}
      <DashboardStudent setIsOpenSidebar={setIsOpenSidebar} />
      {/* dashboard area end */}
    </div>
  );
};

export default StudentDetails;
