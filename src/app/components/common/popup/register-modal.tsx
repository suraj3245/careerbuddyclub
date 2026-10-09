import React from "react";
import Image from "next/image";
import Link from "next/link";

import RegisterForm from "../../forms/register-form";

const RegisterModal = () => {
  return (
    <div
      className="modal fade"
      id="RegisterModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="text-center">
              <div className="h2">Hi, Welcome Back!</div>
            </div>
            <div className="form-wrapper m-auto">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
