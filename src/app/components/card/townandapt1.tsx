"use client";

import React, { useState, useEffect } from "react";
import img2 from "@/assets/images/assets/test.png";
import img1 from "@/assets/images/assets/test3.jpeg";
import img3 from "@/assets/images/assets/test4.webp";
import img4 from "@/assets/images/assets/test5.png";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  flip: boolean;
  frontImage: StaticImageData;
  backImage: StaticImageData;
  
}

const Card: React.FC<CardProps> = ({
  flip,
  frontImage,
  backImage,
}) => {
  const cardStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    position: "relative",
    transition: "transform 1.5s",
    transformStyle: "preserve-3d",
    transform: flip ? "rotateY(180deg)" : "none",
  };

  const frontBackCommonStyles: React.CSSProperties = {
    borderRadius: "20px",
    boxShadow: "0 0 5px 2px rgba(50, 50, 50, 0.25)",
    position: "absolute",
    backfaceVisibility: "visible",
    height: "100%",
    width: "100%",
  };
  const backBackCommonStyles: React.CSSProperties = {
    borderRadius: "20px",
    boxShadow: "0 0 5px 2px rgba(50, 50, 50, 0.25)",
    position: "absolute",
    backfaceVisibility: "hidden",
    height: "100%",
    width: "100%",
  };
  const frontStyle: React.CSSProperties = {
    ...frontBackCommonStyles,
    backgroundImage: `url(${frontImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const backStyle: React.CSSProperties = {
    ...backBackCommonStyles,
    backgroundImage: `url(${backImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={cardStyle}>
      <div style={frontStyle} />
      <div style={backStyle} />
    
      
    </div>
  );
};

const FlipCardone: React.FC = () => {
  const [isFlippedOne, setIsFlippedOne] = useState<boolean>(false);
  const [isFlippedTwo, setIsFlippedTwo] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // This function is now inside useEffect and will only run on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the function to set the initial state
    handleResize();

    // Set up event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    perspective: "1500px",
    width: "100%", // Changed to 100% for responsiveness
    height: "600px",
    cursor: "pointer",
    margin: isMobile ? "20px 0" : "0 40px", // Add vertical margin for mobile
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Stack cards vertically on mobile
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "1200px" : "100vh", // Increase height to accommodate stacked cards
    margin: isMobile ? "0" : "0", // Optional: Adjust margin for mobile if needed
  };



  
  return (
    <div style={cardsContainerStyle}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsFlippedOne(true)}
        onMouseLeave={() => setIsFlippedOne(false)}
      >
        <Card
          flip={isFlippedOne}
          frontImage={img4}
          backImage={img1}
        />
        
      </div>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsFlippedTwo(true)}
        onMouseLeave={() => setIsFlippedTwo(false)}
      >
        <Card
       
          flip={isFlippedTwo}
          frontImage={img3}
          backImage={img2}
          
        />
       
      </div>
    </div>
  );
};

export default FlipCardone;
