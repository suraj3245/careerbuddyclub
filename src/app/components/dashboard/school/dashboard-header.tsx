"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { useMediaQuery } from "react-responsive";
import ScheduleModal from "../../common/popup/schedule";
// notification item

type IProps = {
  setIsOpenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};
const DashboardHeader = ({ setIsOpenSidebar }: IProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const handleOpen = () => {
    if (setIsOpenSidebar) {
      setIsOpenSidebar(true);
    }
  };
  if (!isMobile) {
    return null;
  }
  return (
    <>
      <header className="dashboard-header" style={{ paddingTop: "35px" }}>
        <div className="d-flex align-items-center justify-content-end">
          <button
            onClick={handleOpen}
            className="dash-mobile-nav-toggler d-block d-md-none me-auto"
          >
            <span></span>
          </button>
          <div></div>
        </div>
      </header>
      <ScheduleModal />
    </>
  );
};

export default DashboardHeader;
