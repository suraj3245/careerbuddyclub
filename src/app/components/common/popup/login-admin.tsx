import React from "react";

import AdminForm from "../../forms/admin-form";

const LoginAdmin = () => {
  return (
    <div
      className="modal fade show"
      id="loginModal"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <div className="p-2">
              <h2 className="text-center" style={{color: "rgb(20, 173, 189)", fontSize: '45px'}}>Hi, Welcome Back!</h2>
            </div>
            <div className="form-wrapper m-auto">
              <AdminForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
