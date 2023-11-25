import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";

import LoginAdmin from "../components/common/popup/login-admin";

export const metadata: Metadata = {
  title: "AdminLogin",
};

const AdminLogin = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <LoginAdmin />
      </div>
    </Wrapper>
  );
};

export default AdminLogin;
