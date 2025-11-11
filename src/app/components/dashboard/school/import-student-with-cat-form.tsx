"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaFileUpload } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"; // 👈 Added icon

const ImportStudentsWithCatForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [School_id, setSchool_id] = useState<string | null>(null);
  const [school_name, setSchool_name] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("School_id");
    const name = localStorage.getItem("schoolName");
    if (id) {
      setSchool_id(id);
      setSchool_name(name);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  // ✅ New: Download Test File Function
  const handleDownloadSample = () => {
    const link = document.createElement("a");
    link.href = "/sample_student_import.xlsx"; // 👈 your sample file path in /public folder
    link.download = "Sample_Student_Import_File.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return toast.error("Please select a file.");
    if (!School_id) return toast.error("School ID missing.");

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file, file.name);
      formData.append("School_id", School_id);
      formData.append("school_name", school_name || "");

      const res = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/importwithresults",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success(res.data.message || "Data imported successfully!");
      setTimeout(
        () => router.push("/dashboard/school-dashboard/dashboard"),
        1200
      );
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Failed to import data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="import-wrapper d-flex justify-content-center align-items-center">
      {/* Animated Background */}
      <div className="gradient-bg"></div>

      {/* Import Card */}
      <div className="import-card p-5 text-center">
        <div className="icon-wrapper mx-auto mb-3">
          <FaFileUpload size={42} color="#14adbd" />
        </div>
        <h2 className="import-title mb-2">Import Student Results</h2>
        <p className="text-muted mb-4">
          Upload your Excel or CSV file below to import student data securely.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-start">
            <label htmlFor="file" className="form-label fw-semibold">
              Choose File <span className="text-danger">*</span>
            </label>
            <input
              type="file"
              id="file"
              accept=".xlsx, .csv"
              onChange={handleFileChange}
              className="form-control file-input"
            />
            <small className="text-muted">
              Supported formats: <strong>.xlsx</strong> or <strong>.csv</strong>
            </small>
          </div>

          <button
            type="submit"
            className="btn import-btn w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Importing...
              </>
            ) : (
              "Import Data"
            )}
          </button>

          {/* ✅ Download Test File Button */}
          <button
            type="button"
            className="btn sample-btn w-100 mb-3 mt-3"
            onClick={handleDownloadSample}
          >
            <FiDownload size={18} className="me-2" />
            Download Test File
          </button>

          
        </form>
      </div>

      <style jsx>{`
        /* === Background === */
        .import-wrapper {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #f9ffff;
        }
        .gradient-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(20, 173, 189, 0.35),
              transparent 60%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(0, 180, 255, 0.25),
              transparent 60%
            ),
            radial-gradient(
              circle at 50% 100%,
              rgba(0, 255, 200, 0.2),
              transparent 60%
            );
          animation: moveGradient 20s ease-in-out infinite alternate;
          filter: blur(120px);
          z-index: 1;
        }
        @keyframes moveGradient {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          50% {
            transform: scale(1.1) translate(-60px, -40px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }

        /* === Card === */
        .import-card {
          position: relative;
          z-index: 3;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 28px;
          box-shadow: 0 20px 40px rgba(20, 173, 189, 0.25),
            0 10px 25px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 700px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          animation: floatCard 6s ease-in-out infinite;
        }
        @keyframes floatCard {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* === Buttons === */
        .sample-btn {
          background: linear-gradient(135deg, #e3f9fa, #d1f3f4);
          border: 2px solid #14adbd;
          border-radius: 14px;
          color: #14adbd;
          font-weight: 600;
          font-size: 1rem;
          padding: 12px;
          transition: all 0.3s ease;
        }
        .sample-btn:hover {
          background: linear-gradient(135deg, #d4f8fa, #bdf1f4);
          transform: translateY(-2px);
        }

        .import-btn {
          background: linear-gradient(135deg, #14adbd, #0e97a5);
          border: none;
          border-radius: 14px;
          color: #fff;
          font-weight: 600;
          font-size: 1.15rem;
          padding: 13px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(20, 173, 189, 0.4);
        }
        .import-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(20, 173, 189, 0.55);
        }

        /* === Input === */
        .file-input {
          border: 2px solid #d4f2f4;
          border-radius: 12px;
          padding: 12px;
          background-color: #ffffff;
          transition: all 0.3s ease;
        }
        .file-input:focus {
          border-color: #14adbd;
          box-shadow: 0 0 10px rgba(20, 173, 189, 0.3);
        }
        input[type="file"]::file-selector-button {
          background-color: #14adbd;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          margin-right: 10px;
          transition: 0.3s;
        }
        input[type="file"]::file-selector-button:hover {
          background-color: #0e97a5;
        }

        /* === Title === */
        .import-title {
          color: #14adbd;
          font-weight: 700;
          font-size: 2rem;
          letter-spacing: 0.4px;
        }
      `}</style>
    </div>
  );
};

export default ImportStudentsWithCatForm;
