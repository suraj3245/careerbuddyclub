"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ImportStudentsWithCatForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [School_id, setSchool_id] = useState<string | null>(null);
  const [school_name, setSchool_name] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // ✅ Load School ID from localStorage
  useEffect(() => {
    const id = localStorage.getItem("School_id");
    const name = localStorage.getItem("schoolName");
    if (id){
     setSchool_id(id);
     setSchool_name(name);
    }  
  }, []);

  // ✅ Handle File Input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // ✅ Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please select a file.");
      return;
    }

    if (!School_id) {
      toast.error("School ID missing.");
      return;
    }

    setLoading(true);

    try {
      // ✅ Create a new FormData object properly
      const formData = new FormData();
      formData.append("file", file, file.name);
      formData.append("School_id", School_id);
      formData.append("school_name", school_name || "");  

      // ✅ Debug check — log what is inside FormData
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await axios({
        method: "post",
        url: "https://test.careerbuddyclub.com:8080/api/students/importwithresults",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );
          console.log(`Upload progress: ${percentCompleted}%`);
        },
      });

      toast.success(response.data.message || "Data imported successfully!");
      setTimeout(
        () => router.push("/dashboard/school-dashboard/dashboard"),
        1000
      );
    } catch (error: any) {
      console.error("Upload Error:", error.response?.data || error);
      toast.error(
        error.response?.data?.message || "Failed to import data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1
        className="display-4 mt-40 text-center text-decoration-underline heading-1"
        style={{ color: "#14adbd", letterSpacing: "0.0375em" }}
      >
        Import Student Data with CAT Result
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
              disabled={loading}
            >
              {loading ? "Importing..." : "Import Data"}
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

export default ImportStudentsWithCatForm;
