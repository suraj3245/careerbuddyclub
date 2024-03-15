import React from "react";
import DashboardHeader from "./dashboard-header";
import ChangePasswordArea from "./change-password";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardSettingArea = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        {/* change password area */}
        <ChangePasswordArea />
        {/* change password area */}
      </div>
    </div>
  );
};

export default DashboardSettingArea;
