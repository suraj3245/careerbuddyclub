import React from "react";
import SchoolLoginForm from "../../forms/schoollogin-form";
const SchoolPhoneFormModal = () => {
  return (
    <div
      className="modal fade"
      id="SchoolPhoneFormModal"
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
            <div className="text-center p-2">
              <h2 style={{color: "rgb(20, 173, 189)"}}>Hi, Welcome Back!</h2>
            </div>
            <div className="form-wrapper m-auto">
              <SchoolLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolPhoneFormModal;
