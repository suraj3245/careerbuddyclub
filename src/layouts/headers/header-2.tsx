"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menus from "./component/menus";
import logo from "@/assets/images/logo/logo4.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${
          sticky ? "fixed" : ""
        }`}
        style={{ paddingTop: "35px" }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width="125"
                    height="75"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderTwo;
