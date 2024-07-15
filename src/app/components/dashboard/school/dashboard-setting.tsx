import React from "react";
import DashboardHeader from "./dashboard-header";
import ChangePasswordAreaSchool from "./change-password";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardSettingAreaSchool = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        {/* change password area */}
        <ChangePasswordAreaSchool />
        {/* change password area */}
      </div>
    </div>
  );
};

export default DashboardSettingAreaSchool;
