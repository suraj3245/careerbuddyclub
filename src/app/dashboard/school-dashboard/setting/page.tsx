'use client'
import React,{useState} from 'react';
import Wrapper from "@/layouts/wrapper";
import SchoolAside from '@/app/components/dashboard/school/aside';
import DashboardSettingAreaSchool from '@/app/components/dashboard/school/dashboard-setting';

const CandidateDashboardSettingPageSchoool = () => {
  const [isOpenSidebar,setIsOpenSidebar] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* aside start */}
        <SchoolAside isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
        {/* aside end  */}

        {/* setting area start */}
        <DashboardSettingAreaSchool setIsOpenSidebar={setIsOpenSidebar} />
        {/* setting area end */}
      </div>
    </Wrapper>
  );
};
export default CandidateDashboardSettingPageSchoool;
