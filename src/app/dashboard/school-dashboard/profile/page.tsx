"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import SchoolAside from "@/app/components/dashboard/school/aside";
import SchoolProfile from "@/app/components/dashboard/school/dashboard-profile";

const SchoolProfilePage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <Wrapper>
      <div className="main-page-wrapper d-flex">
        <SchoolAside
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2">
            </div>
            <div className="col-md-9 col-lg-10">
              <div className="content-wrapper p-4">
                <SchoolProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SchoolProfilePage;
