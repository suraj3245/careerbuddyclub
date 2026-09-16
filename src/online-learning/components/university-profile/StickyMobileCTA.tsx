"use client";

import React, { useState, useEffect } from "react";

interface StickyMobileCTAProps {
  onEnquiryOpen: () => void;
}

export function StickyMobileCTA({ onEnquiryOpen }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`upStickyMobile ${isVisible ? "upStickyMobileVisible" : ""}`}>
      <button className="upStickyMobileBtn" onClick={onEnquiryOpen}>
        Get Free Counselling →
      </button>
    </div>
  );
}
