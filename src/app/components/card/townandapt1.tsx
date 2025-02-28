"use client";
// Import the necessary libraries and components
import React, { useState, useEffect } from "react";
import img2 from "@/assets/images/assets/test.png";
import img1 from "@/assets/images/assets/test3.jpeg";
import img3 from "@/assets/images/assets/test4.webp";
import img4 from "@/assets/images/assets/test-6.png";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Uncomment the line below and replace 'useRouter' with the actual import
// import { useRouter } from 'next/router';

// Interface for card props
interface CardProps {
  flip: boolean;
  frontImage: StaticImageData;
  backImage: StaticImageData;
}

// Card component
const Card: React.FC<CardProps> = ({ flip, frontImage, backImage }) => {
  // Styles for card and images
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
    transform: "rotateY(180deg)",
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

// Main component
const FlipCardone: React.FC = () => {
  // State variables
  const [isFlippedOne, setIsFlippedOne] = useState<boolean>(false);
  const [isFlippedTwo, setIsFlippedTwo] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  
  const router = useRouter();

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to redirect to a specific page
  const redirectToPage = (page: string) => {
    // Uncomment the line below for actual navigation
    router.push(page);
    console.log(`Redirecting to ${page}`);
  };

  // Styles for container and cards
  const containerStyle: React.CSSProperties = {
    perspective: "1500px",
    width: "100%",
    height: "600px",
    cursor: "pointer",
    margin: isMobile ? "20px 0" : "0 40px",
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "1200px" : "100vh",
  };

  // Render the component
  return (
    <div style={cardsContainerStyle}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsFlippedOne(true)}
        onMouseLeave={() => setIsFlippedOne(false)}
        onClick={() => redirectToPage("/#")}
      >
        <Card flip={isFlippedOne} frontImage={img1} backImage={img4} />
      </div>

      <div
        style={containerStyle}
        onMouseEnter={() => setIsFlippedTwo(true)}
        onMouseLeave={() => setIsFlippedTwo(false)}
        onClick={() => redirectToPage("/career-aptitude")}
      >
        <Card flip={isFlippedTwo} frontImage={img2} backImage={img3} />
      </div>
    </div>
  );
};

export default FlipCardone;
