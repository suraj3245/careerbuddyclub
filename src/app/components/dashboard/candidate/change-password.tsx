import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePasswordArea = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Password validation
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-left",
        autoClose: 3000,
      });
      return;
    }

    // More validations can be added here (e.g., password length, complexity)

    const token = localStorage.getItem("token");

    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/setpassword",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        new_password: newPassword,
        confirm_password: confirmPassword,
      },
    };

    axios
      .request(options)
      .then((response) => {
        toast.success("Password successfully updated 🚀", {
          position: "top-left",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        toast.error(`Failed to update password: ${errorMessage}`, {
          position: "top-left",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="mt-45">
      <ToastContainer />
      <div className="position-relative">
        <h2 className="main-title">Set Password</h2>

        <div className="bg-white card-box border-20">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label>New Password*</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label>Confirm Password*</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s rounded-3">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordArea;
