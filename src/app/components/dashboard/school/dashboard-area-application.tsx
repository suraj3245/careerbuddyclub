"use client";
import React from "react";
import DashboardHeader from "./dashboard-header";
import SchoolApplicationForm from "./school-application";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchoolApplication = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div
      className="dashboard-body"
      style={{ backgroundColor: "#f0f5f3", padding: "60px 55px 50px" }}
    >
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}
        <SchoolApplicationForm setIsOpenSidebar={setIsOpenSidebar} />
      </div>
    </div>
  );
};

export default SchoolApplication;
