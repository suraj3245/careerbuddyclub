import React from "react";
import ApplyForm from "../../forms/apply-now";

const ApplyModal = () => {
  return (
    <div
      className="modal fade"
      id="ApplyModal"
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
              <h3> Secure Your Career Now !</h3>
            </div>
            <div className="form-wrapper m-auto">
              <ApplyForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
