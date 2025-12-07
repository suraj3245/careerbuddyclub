"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ImportStudentsWithOutCatForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [School_id, setSchool_id] = useState<string | null>(null);
  const [school_name, setSchool_name] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 Loader state added
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("School_id");
    const name = localStorage.getItem("schoolName");

    if (id) setSchool_id(id);
    if (name) setSchool_name(name);

    const obs = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (wrapperRef.current) obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return toast.error("Please select a file!");
    if (!School_id) return toast.error("School ID not found!");

    setLoading(true); // 👈 Start loader

    const fd = new FormData();
    fd.append("file", file);
    fd.append("School_id", School_id);
    fd.append("school_name", school_name ?? "");

    try {
      const res = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/importwithoutresults",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success(res.data.message || "Data imported successfully!");
      setTimeout(() => {
        router.push("/dashboard/school-dashboard/dashboard");
      }, 1200);
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Failed to import data. Please try again."
      );
    } finally {
      setLoading(false); // 👈 Stop loader
      console.log("Import attempt finished.");
    }
  };

  return (
    <div className="import-wrapper" ref={wrapperRef}>
      <div className="particles"></div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

      <div className={`header ${visible ? "fadeIn" : "hiddenFade"}`}>
        <h1>
          Student Data Upload <span>Without CAT Result</span>
        </h1>
        <p>Bulk upload students with an elegant & intuitive import system.</p>
      </div>

      <div className={`upload-card ${visible ? "popIn" : "popHidden"}`}>
        <h2 className="card-title">📤 Upload Excel Sheet</h2>
        <p className="subtitle">Allowed formats: .xlsx, .csv</p>

        <form onSubmit={handleSubmit}>
          <div className="file-input-box">
            <label>Choose File</label>
            <div className="input-container">
              <span className="icon">📁</span>
              <input
                type="file"
                accept=".xlsx, .csv"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>
          </div>

          <div className="button-row">
            <a
              href="/sample-files/test-file.xlsx"
              download
              className="btn sample-btn"
            >
              📥 Download Sample File
            </a>

            {/* 🚀 IMPORT BUTTON WITH LOADER */}
            <button
              className="btn import-btn"
              type="submit"
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
                "🚀 Import Now"
              )}
            </button>
          </div>
        </form>
      </div>
     {/* STYLES */}
      <style jsx>{`
        /*************************************************
        🔥 BACKGROUND — Animated Waves + Glowing Particles
        *************************************************/
        .import-wrapper {
          min-height: 100vh;
          position: relative;
          padding: 60px 20px;
          overflow: hidden;
          background: linear-gradient(125deg, #d6f5ff, #fdffff, #c4eef5);
        }

        .wave {
          position: absolute;
          width: 180%;
          height: 220px;
          left: -20%;
          background: radial-gradient(circle, #14b7c7 0%, transparent 70%);
          opacity: 0.18;
          border-radius: 50%;
          animation: waveMove 8s ease-in-out infinite;
        }
        .wave1 {
          top: 10%;
          animation-delay: 0s;
        }
        .wave2 {
          top: 35%;
          animation-delay: 2s;
          background: radial-gradient(circle, #0ea8bc 0%, transparent 70%);
        }
        .wave3 {
          top: 60%;
          animation-delay: 4s;
          background: radial-gradient(circle, #9ff3ff 0%, transparent 70%);
        }
        @keyframes waveMove {
          0% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(-50px) scale(1.15);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }

        /* Floating Glow Particles */
        .particles::before,
        .particles::after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          background: #14adbd;
          border-radius: 50%;
          top: 20%;
          left: 50%;
          filter: blur(2px);
          animation: floatUp 5s infinite ease-in-out;
        }
        .particles::after {
          left: 30%;
          top: 70%;
          width: 10px;
          height: 10px;
          animation-duration: 7s;
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
        }

        /*************************************************
        🔥 HEADER
        *************************************************/
        .header {
          text-align: center;
          color: #065c66;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 2.7rem;
          font-weight: 800;
        }
        .header h1 span {
          color: #14adbd;
          text-decoration: underline;
        }
        .header p {
          font-size: 1rem;
          margin-top: 10px;
          opacity: 0.8;
        }

        /*************************************************
        🔥 MAIN CARD — NEON GLASS UI
        *************************************************/
        .upload-card {
          max-width: 780px;
          margin: 0 auto;
          padding: 40px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(15px);
          border-radius: 22px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15),
            0 0 20px rgba(20, 173, 189, 0.4);
          transition: 0.4s ease;
          position: relative;
        }
        .upload-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 35px 95px rgba(0, 0, 0, 0.2),
            0 0 26px rgba(20, 173, 189, 0.5);
        }

        .card-title {
          font-size: 1.8rem;
          color: #0b7882;
          font-weight: 700;
        }
        .subtitle {
          color: #3d7077;
          margin-bottom: 25px;
        }

        /*************************************************
        🔥 FILE INPUT
        *************************************************/
        .file-input-box label {
          font-size: 1rem;
          font-weight: 700;
          color: #075d68;
        }
        .input-container {
          margin-top: 8px;
          position: relative;
        }

        .input-container .icon {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 1.2rem;
          color: #0d9ab0;
        }
        .input-container input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border-radius: 14px;
          border: 1px solid #bdd7da;
          background: #f7feff;
          transition: 0.3s;
        }
        .input-container input:focus {
          border-color: #14adbd;
          box-shadow: 0 0 12px rgba(20, 173, 189, 0.4);
        }

        /*************************************************
        🔥 BUTTONS
        *************************************************/
        .button-row {
          margin-top: 30px;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn {
          flex: 1;
          padding: 14px;
          border-radius: 14px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          transition: 0.3s ease;
        }

        .sample-btn {
          border: 2px solid #14adbd;
          background: #e2fbff;
          color: #066974;
        }
        .sample-btn:hover {
          background: #14adbd;
          color: white;
          box-shadow: 0px 10px 25px rgba(20, 173, 189, 0.5);
          transform: translateY(-3px);
        }

        .import-btn {
          background: #14adbd;
          color: white;
          box-shadow: 0px 10px 25px rgba(20, 173, 189, 0.55);
        }
        .import-btn:hover {
          background: #0e8ea0;
          transform: translateY(-3px);
          box-shadow: 0px 14px 33px rgba(14, 157, 172, 0.65);
        }

        /*************************************************
        🔥 SCROLL ANIMATIONS
        *************************************************/
        .hiddenFade {
          opacity: 0;
          transform: translateY(30px);
        }
        .fadeIn {
          opacity: 1;
          transform: translateY(0);
          transition: 1s;
        }

        .popHidden {
          opacity: 0;
          transform: scale(0.92);
        }
        .popIn {
          opacity: 1;
          transform: scale(1);
          transition: 0.9s;
        }
      `}</style>
    </div>
  );
};

export default ImportStudentsWithOutCatForm;
