import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Update the form data type to include the timeSlot field
type IFormData = {
  dateOfBirth: string;
  timeSlot: string; // Added timeSlot
};

const ScheduleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    console.log(data);

    axios
      .post("https://your-endpoint.com/api/schedule", data)
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
        toast.error("There was an error scheduling your call.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
              <label style={{ fontSize: "14px" }}>Date of Birth*</label>
              <input
                type="date"
                {...register("dateOfBirth", { required: true })}
                className="form-control"
                style={{ padding: "8px", fontSize: "14px" }}
                defaultValue={currentDate}
              />
              <div
                className="help-block with-errors"
                style={{ fontSize: "12px" }}
              >
                {errors.dateOfBirth && <span>This field is required</span>}
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
