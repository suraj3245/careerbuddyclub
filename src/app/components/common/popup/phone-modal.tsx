import React from "react";
import PhoneForm from "../../forms/phone-form";

const PhoneModal = () => {
  return (
    <div
      className="modal fade"
      id="PhoneModal"
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
            <div className="text-center">
              <h2>Hi, Welcome Back!</h2>
            </div>
            <div className="form-wrapper m-auto">
              <PhoneForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
