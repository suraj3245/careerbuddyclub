"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "./dashboard-header";
import NiceSelect from "@/ui/nice-select-two";
import { OnChangeArgument } from "@/ui/nice-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import CompanyDashboardArea from "../../company/company-dashboard-area";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const PartnerCompany = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        <h2 className="main-title">Our Partner Companies</h2>
        <CompanyDashboardArea />

        {/* <div className="button-group d-inline-flex align-items-center mt-30">
          <Link
            type="submit"
            className="dash-btn-two tran3s me-3"
            href="/dashboard/candidate-dashboard/education"
          >
            Next
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PartnerCompany;
