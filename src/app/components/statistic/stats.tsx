"use client";
import React, { useState, useEffect } from "react";

// Define the props interface
interface Statistic {
  icon: JSX.Element;
  number: string;
  label: string;
}

interface StatisticsCardProps {
  statistics: Statistic[];
}

// Statistic Item component with inline styling
const StatisticItem: React.FC<Statistic> = ({ icon, number, label }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update the state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const iconStyle = {
    fontSize: isMobile ? "1.5rem" : "2rem", // Smaller icon on mobile
    marginBottom: "8px",
  };

  const numberStyle = {
    fontSize: isMobile ? "0.8rem" : "1.5rem", // Smaller font size on mobile
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const labelStyle = {
    fontSize: isMobile ? "0.8rem" : "1rem", // Smaller font size on mobile
    color: "#666",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={iconStyle}>{icon}</div>
      <div style={numberStyle}>{number}</div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

// Main component with inline styling
const StatisticsCard: React.FC<StatisticsCardProps> = ({ statistics }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#F5F5F5",
        padding: "20px",
      }}
    >
      {statistics.map((stat, index) => (
        <StatisticItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatisticsCard;
