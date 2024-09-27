import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../../forms/login-form";

const LoginModal = () => {
  return (
    <div
      className="modal fade"
      id="loginModalstudent"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="p-2">
              <h2 className="text-center" style={{color: "rgb(20, 173, 189)", fontSize: '45px'}}>Hi, Welcome Back!</h2>
            </div>
            <div className="form-wrapper m-auto">
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
