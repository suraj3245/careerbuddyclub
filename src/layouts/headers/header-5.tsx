"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo/logo_04.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";

const HeaderFive = () => {
  const { sticky } = useSticky();
  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${
          sticky ? "fixed" : ""
        }`}
        style={{ top: sticky ? "80px" : "0px" }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center">
              <nav className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                ></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" width="100" />
                        </Link>
                      </div>
                    </li>
                    {/* menus start */}
                    <li className="nav-item">
                      <Link className="nav-link" href="#" role="button">
                        overview
                      </Link>
                    </li>
                    {/* menus end */}
                    <li className="d-md-none mt-5">
                      <Link href="/register" className="btn-five w-100">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
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

export default HeaderFive;
