import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Update the form data type to include the timeSlot field
type IFormData = {
  date: string;
  timeSlot: string; // Added timeSlot
};

const ScheduleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token"); // Adjust "token" to the actual key where your token is stored

    if (!token) {
      toast.error("Authorization token is missing. Please log in again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit the function if there is no token
    }

    const headers = {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const formattedData = {
      date: data.date,
      time_slot: data.timeSlot,
    };

    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/counsellorcallschedulecreate",
        formattedData,
        { headers }
      )
      .then((response) => {
        toast.success("Your call has been scheduled!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error(
          "There was an error scheduling your call. Please try again.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="schedule-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div
              className="input-group-meta position-relative mb-25"
              style={{ margin: "10px 0" }}
            >
              <label style={{ fontSize: "14px" }}>Date*</label>
              <input
                type="date"
                {...register("date", { required: true })}
                className="form-control"
                style={{ padding: "8px", fontSize: "14px" }}
                defaultValue={currentDate}
              />
              <div
                className="help-block with-errors"
                style={{ fontSize: "12px" }}
              >
                {errors.date && <span>This field is required</span>}
              </div>
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className="mb-3">
            <label style={{ fontSize: "14px" }}>Time Slot*</label>
            <div
              className="d-flex flex-column pt-10"
              style={{ fontSize: "14px" }}
            >
              {[
                { label: "Morning", value: "morning" },
                { label: "Afternoon", value: "afternoon" },
                { label: "Evening", value: "evening" },
              ].map((slot, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={slot.value}
                    value={slot.label}
                    {...register("timeSlot", {
                      required: "Time slot is required!",
                    })}
                  />
                  <label className="form-check-label" htmlFor={slot.value}>
                    {slot.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.timeSlot && (
              <div className="invalid-feedback d-block">
                {errors.timeSlot.message}
              </div>
            )}
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn-eleven fw-500 tran3s d-block mt-20"
              style={{ padding: "8px 16px", fontSize: "14px" }}
            >
              Schedule
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;
