"use client";
import React from "react";
import DashboardHeader from "./dashboard-header";
import SchoolProfile from "./dashboard-profile";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardProfile = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div className="dashboard-body" style={{ backgroundColor: "#f0f5f3", padding: "60px 55px 50px" }}>
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}
        <SchoolProfile />
      </div>
    </div>
  );
};

export default DashboardProfile;
