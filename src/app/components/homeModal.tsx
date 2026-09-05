"use client";
import React, { useState, useEffect } from "react";
import ApplyModal from "./common/popup/apply-modal";
import PhoneForm from "./forms/phone-form";
import StudentLoginForm2 from "./forms/studentLoginForm";
import LoginPopup from "@/careerwise/components/LoginPopup";
import "@/careerwise/styles/careerwise.scss";

interface ModalForHeaderProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: string | null;
  onSuccess?: () => void; // <-- Add this prop to allow parent-driven redirect
}

const ModalForHeader: React.FC<ModalForHeaderProps> = ({
  isOpen,
  onClose,
  modalType,
  onSuccess,
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

  return (
    <div className="cw-root">
      <LoginPopup isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ModalForHeader;
