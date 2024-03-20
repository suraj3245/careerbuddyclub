import React from "react";
import ScheduleForm from "../../forms/schedule";

const LanguageModal = () => {
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
              <h2>Career Buddy Club In Your Language</h2>
              <p>Choose your Language</p>
            </div>
            <div
              id="google_translate_element"
              className="form-wrapper m-auto"
            ></div>
            <div className="form-wrapper m-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
