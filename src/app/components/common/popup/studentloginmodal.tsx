"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneModal from "./phone-modal";
import PhoneForm from "../../forms/phone-form";
import SchoolPhoneForm from "../../forms/schoolphoneform";
const StudentFormModal = () => {

  return (
    <div
      className="modal fade"
      id="StudentModalForm"
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
              <h2 className="text-center" style={{ color: "rgb(20, 173, 189)", fontSize: '45px' }}>Hi, Welcome Back!ss</h2>
            </div>
            <div className="row">
              <div className="col-lg-11" style={{margin: 'auto'}}>
                <div className="tab-content mt-3">
                      <div className="form-wrapper m-auto mt-2">
                        <PhoneForm />
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFormModal;
