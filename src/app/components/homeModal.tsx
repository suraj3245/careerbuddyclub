"use client";
import React, { useState, useEffect } from "react";
import ApplyModal from "./common/popup/apply-modal";
import PhoneForm from "./forms/phone-form";
import StudentLoginForm2 from "./forms/studentLoginForm";

const ModalForHeader = ({
  isOpen,
  onClose,
  modalType,
}: {
  isOpen: boolean;
  onClose: () => void;
  modalType: string | null;
}) => {
  const [currentModalType, setCurrentModalType] = useState("student");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getModalWidth = () => {
    if (isMobile) return "100%";
    switch (currentModalType) {
      case "student":
        return "50vw";
      case "emailLogin":
        return "40vw";
      case "schoolForm":
        return "35vw";
      default:
        return "50vw";
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setCurrentModalType("student");
    } else {
      setCurrentModalType(modalType || "student");
    }
  }, [isOpen, modalType]);

  if (!isOpen) return null;

  const getModalContent = () => {
    switch (currentModalType) {
      case "schoolForm":
        return <PhoneForm />;
      case "student":
        return <ApplyModal />;
      case "emailLogin":
        return <StudentLoginForm2 />;
      default:
        return <ApplyModal />;
    }
  };

  return (
    <>
      {/* Background Blur Effect */}
      <div
        className="modal-backdrop"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Light dark overlay
          backdropFilter: "blur(4px)", // ✅ Apply blur effect
          zIndex: 1049,
        }}
        onClick={onClose} // Click outside to close modal
      ></div>
      {/* Modal Box */}
      <div
        className="p-4 shadow position-fixed top-50 start-50 translate-middle popupmodalbox"
        style={{
          zIndex: 1050,
          width: "90%",
          maxWidth: getModalWidth(),
          maxHeight: "90vh",
          overflow: 'auto',
          scrollbarWidth: 'none', 
          display: "flex",
          flexDirection: "column",
          border: "1px solid yellow",
          borderRadius: "20px",
          backgroundColor: "white",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="container">
          <div
            className="p-2"
            style={{
              background: "white",
              zIndex: 2,
              paddingBottom: "10px",
              paddingTop: "14px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "30px", color: "rgb(20, 173, 189)" }}>
              {currentModalType === "student"
                ? "Take Control Of Your Career!"
                : "Hi, Welcome Back!"}
            </h2>
            <button
              onClick={onClose}
              className="btn-close position-absolute top-0 end-0 m-3"
              style={{ zIndex: 1051 }}
            />
          </div>
          <div
            className="flex-grow-1"
            style={{ maxHeight: "74vh" }}
          >
            <div className="container">{getModalContent()}</div>
            <div className="container">
              {currentModalType === "student" && (
                <button
                  className="btn col-lg-12 mt-3 text-center btnoflogin w-100"
                  style={{
                    backgroundColor: "rgb(20, 173, 189)",
                    color: "white",
                  }}
                  onClick={() => setCurrentModalType("schoolForm")}
                >
                  Already a User? Login
                </button>
              )}
              {currentModalType === "emailLogin" && (
                <>
                  <button
                    className="btn mt-3 w-100"
                    style={{
                      backgroundColor: "rgb(20, 173, 189)",
                      color: "white",
                    }}
                    onClick={() => setCurrentModalType("schoolForm")}
                  >
                    Login using Phone Number!
                  </button>
                  <button
                    className="btn mt-3 w-100"
                    style={{
                      backgroundColor: "rgb(20, 173, 189)",
                      color: "white",
                    }}
                    onClick={() => setCurrentModalType("student")}
                  >
                    Not a User? Apply
                  </button>
                </>
              )}
              {currentModalType === "schoolForm" && (
                <>
                  <button
                    className="btn w-100 mt-3"
                    style={{
                      backgroundColor: "rgb(20, 173, 189)",
                      color: "white",
                    }}
                    onClick={() => setCurrentModalType("emailLogin")}
                  >
                    Login using Email!
                  </button>
                  <button
                    className="btn w-100 mt-3"
                    style={{
                      backgroundColor: "rgb(20, 173, 189)",
                      color: "white",
                    }}
                    onClick={() => setCurrentModalType("student")}
                  >
                    Not a User? Apply
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Mobile Full-Width */}
      <style jsx>{`
        @media (max-width: 768px) {
          .modal-container {
            width: 88% !important;
            border-radius: 0 !important;
          }
            .btnoflogin{
              margin-bottom: 20px !important;
            }
        }
      `}</style>
    </>
  );
};

export default ModalForHeader;
