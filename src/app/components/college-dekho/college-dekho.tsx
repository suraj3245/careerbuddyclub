"use client";
import React from "react";
import styled from "styled-components";
// import { FaBrain, FaRegAddressCard, FaBullseye, FaChalkboardTeacher, FaFileUpload, FaGraduationCap } from "react-icons/fa";

// Styled components with OL-Cards inspired styling
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: #f5f5f5;
`;

const FixedContent = styled.div`
  width: 100%;
  padding: 20px;
  background: #eed30d;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ScrollableCardsContainer = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem 1rem;
  width: min(60rem, calc(100% - 2rem));
  margin-inline: auto;
  padding-block: 1rem;
  list-style: none;
  counter-reset: count;
`;

const Card = styled.li<{ color: string }>`
  --accent-color: ${(props) => props.color};
  --card-border-radius: 0.75rem;
  --card-padding-block: 1.5rem;
  --card-padding-inline: 1rem;
  --number-font-size: 2rem;

  margin: 0.75rem;
  padding: var(--card-padding-block) var(--card-padding-inline);
  background: #ffffff;
  color: #0f0f0f;
  border-radius: var(--card-border-radius);
  position: relative;
  counter-increment: count;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 0;

  &::after {
    content: counter(count, decimal-leading-zero);
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: var(--accent-color);
    
    font-weight: 700;
    font-size: var(--number-font-size);
    line-height: 1;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: var(--card-border-radius);
    background: #ffffff;
    z-index: -2;
    box-shadow: 8px 8px 0 var(--accent-color);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: calc(var(--card-padding-block) * 0.5);
`;

const StepTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: var(--accent-color);
  font-weight: bold;
  margin-bottom: 0.5rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #333;
`;

const EndToEndText = styled.h3`
  color: #14adbd;
  font-size: 24px;
  margin-bottom: 10px;
`;

const steps = [
  {
    // icon: <FaBrain />,
    title: "Take the Career Aptitude Test",
    description: "Discover the best-suited career path through a tech-based aptitude test.",
    color: "#FF6F00",
  },
  {
    // icon: <FaRegAddressCard />,
    title: "Complete Your Profile",
    description: "Add your academic background to receive AI-driven college suggestions.",
    color: "#008DC2",
  },
  {
    // icon: <FaBullseye />,
    title: "Shortlist Colleges",
    description: "Pick your dream colleges and apply to many with one application.",
    color: "#0B456A",
  },
  {
    // icon: <FaChalkboardTeacher />,
    title: "Get Expert Guidance",
    description: "Connect with mentors for advice on courses, colleges, and fees.",
    color: "#6A829A",
  },
  {
    // icon: <FaFileUpload />,
    title: "Upload Documents & Pay Fees",
    description: "Simplify your application by submitting documents and making payments online.",
    color: "#8854d0",
  },
  {
    // icon: <FaGraduationCap />,
    title: "Confirm Admission",
    description: "Secure your seat at the college of your choice.",
    color: "#eb3b5a",
  },
];

const Collegedekhocomp = () => {
  return (
    <LayoutContainer>
      <FixedContent>
        <EndToEndText>End-to-End Admission Process Simplified</EndToEndText>
        <p>Guiding you from search to placement, every step of the way!</p>
      </FixedContent>
      <ScrollableCardsContainer>
        {steps.map((step, index) => (
          <Card key={index} color={step.color}>
            {/* <Icon>{step.icon}</Icon> */}
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Card>
        ))}
      </ScrollableCardsContainer>
    </LayoutContainer>
  );
};

export default Collegedekhocomp;