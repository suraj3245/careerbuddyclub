"use client";
import React from "react";
import styled from "styled-components";

// Styled components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh; // Set to the full height of the viewport

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack fixed content above scrollable cards
  }
`;

const FixedContent = styled.div`
  flex: 0 0 35%;
  padding: 20px;
  background: #eed30d;
  height: 100%; // Full height
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center the content vertically and horizontally */
  align-items: center; /* Center the content horizontally */

  @media (max-width: 768px) {
    width: 100%;
    flex: none;
    height: auto; // Adjust height for mobile
  }
`;

const ScrollableCardsContainer = styled.div`
  flex: 1; // Adjusted to take half of the screen
  overflow-y: auto;
  padding: 20px;
  height: 100%; // Full height

  @media (max-width: 768px) {
    width: 100%;
    height: auto; // Adjust height for mobile
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  justify-content: center; /* Center the content vertically */
  margin-bottom: 20px;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StepText = styled.h3`
  font-size: 18px; /* Adjust font size for step text */
  margin-bottom: 5px; /* Add some margin bottom for separation */
`;

const StepTitle = styled.h4`
  font-size: 20px; /* Adjust font size for step title */
  margin-bottom: 10px; /* Add some margin bottom for separation */
  color: #14adbd; /* Set the color to #14adbd */
`;

const StepDescription = styled.p`
  font-size: 16px; /* Adjust font size for step description */
  text-align: center; /* Center the text horizontally */
`;
const EndToEndText = styled.h3`
  color: #14adbd; /* Set the color to #14adbd */
`;

// React Component
const steps = [
  {
    step: "Step 1",
    title: "Take the Career Aptitude Test",
    description:
      "Take the intuitive technology-based Career Aptitude test to assess the right career choice for you.",
  },
  {
    step: "Step 2",
    title: "Complete Profile to Get College Recommendations",
    description:
      "Build your profile with your education history and preferences so that our AI tool can recommend the best colleges for you.",
  },
  {
    step: "Step 3",
    title: "Shortlist Colleges",
    description:
      "Shortlist your dream colleges and apply with a single application to multiple colleges.",
  },
  {
    step: "Step 4",
    title: "Get Expert Help",
    description:
      "A personal Education Mentor will assist you at every step. Get all your queries and doubts regarding course, college, fees answered by the experts.",
  },
  {
    step: "Step 5",
    title: "Upload Documents & Pay Fee",
    description:
      "Expedite your college application process by uploading your documents & paying the college fees.",
  },
  {
    step: "Step 6",
    title: "Confirm Admission",
    description: "Confirm your seat at the selected college",
  },
];

const Collegedekhocomp = () => {
  return (
    <LayoutContainer>
      <FixedContent >
        {/* Fixed content goes here */}
        <div style={{ textAlign: "center" }}>
          {/* Centered content */}
          <EndToEndText>End-to-end Admission Process Simplified</EndToEndText>
          <p>
            Get help for your search, shortlist, application, preparation,
            admission and placement requirements!
          </p>
        </div>
      </FixedContent>
      <ScrollableCardsContainer>
        {/* Scrollable cards go here */}
        {steps.map((step, index) => (
          <Card key={index}>
            <StepText>{step.step}</StepText>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Card>
        ))}
      </ScrollableCardsContainer>
    </LayoutContainer>
  );
};

export default Collegedekhocomp;
