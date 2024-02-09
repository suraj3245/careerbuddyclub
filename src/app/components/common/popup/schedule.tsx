import React from "react";
import ScheduleForm from "../../forms/schedule";

const ScheduleModal = () => {
  return (
    <div
      className="modal fade"
      id="ScheduleModal"
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
              <h2>Schedule a Call</h2>
              <p>our expert counsellors will get back to you soon.</p>
            </div>
            <div className="form-wrapper m-auto">
              <ScheduleForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
