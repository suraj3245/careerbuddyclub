"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ImportStudentsWithOutCatForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [School_id, setSchool_id] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchool = async () => {
      const School_id = localStorage.getItem("School_id");
      if (School_id) {
        setSchool_id(School_id);
      }
    };
    fetchSchool();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("School_id", School_id!);

    try {
      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/importwithoutresults",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success(
          response?.data?.message || "Data imported successfully!",
          {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setTimeout(() => {
          window.location.href = "/dashboard/school-dashboard/dashboard";
        }, 1000);
      } else {
        toast.error(
          response?.data?.message || "An error occurred during the import."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to import data.");
    }
  };

  return (
    <div className="container mt-5">
      <h1
        className="display-4 mt-40 text-center text-decoration-underline heading-1"
        style={{ color: "#14adbd", letterSpacing: "0.0375em" }}
      >
        Import Student Data without CAT Result
      </h1>

      <form onSubmit={handleSubmit} className="mt-40">
        <div className="row">
          <div className="form-group mb-3 col-md-6">
            <label htmlFor="file">Choose Excel File:</label>
            <input
              type="file"
              id="file"
              accept=".xlsx, .csv"
              onChange={handleFileChange}
              className="form-control mt-2"
            />
          </div>
          <div className="col-md-12 mt-4">
            <button
              type="submit"
              className="btn btn-primary btn-lg mt-4 buttn-save"
            >
              Import Data
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        .buttn-save {
          background-color: #14adbd;
          border-color: #14adbd;
          color: white;
          float: right;
        }
      `}</style>
    </div>
  );
};

export default ImportStudentsWithOutCatForm;
