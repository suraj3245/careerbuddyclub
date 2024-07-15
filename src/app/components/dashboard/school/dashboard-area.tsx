"use client";
import React from "react";
import DashboardHeader from "./dashboard-header";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardArea = ({ setIsOpenSidebar}: IProps) => {
  return (
       <>
        {/* header start */}
         <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}
         <div className="dashboard-body outer-cont" style={{ backgroundColor: "#f0f5f3", padding: "60px 55px 50px" }}>
         <div className="position-relative">
       </div>
       </div>
      </> 
  );
};

export default  DashboardArea;