"use client";
import React from "react";
import styled from "styled-components";

// Styled components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto; /* Adjust height for mobile */
  }
`;

const FixedContent = styled.div`
  width: 100%;
  padding: 20px;
  background: #eed30d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ScrollableCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 6 cards in a row */
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  width: 90%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 card per row on mobile */
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StepText = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const StepTitle = styled.h4`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: #14adbd;
`;

const StepDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

const EndToEndText = styled.h3`
  color: #14adbd;
`;

// React Component
const steps = [
  { step: "Step 1", title: "Take the Career Aptitude Test", description: "Take the intuitive technology-based Career Aptitude test to assess the right career choice for you." },
  { step: "Step 2", title: "Complete Profile to Get College Recommendations", description: "Build your profile with your education history and preferences so that our AI tool can recommend the best colleges for you." },
  { step: "Step 3", title: "Shortlist Colleges", description: "Shortlist your dream colleges and apply with a single application to multiple colleges." },
  { step: "Step 4", title: "Get Expert Help", description: "A personal Education Mentor will assist you at every step. Get all your queries and doubts regarding course, college, fees answered by the experts." },
  { step: "Step 5", title: "Upload Documents & Pay Fee", description: "Expedite your college application process by uploading your documents & paying the college fees." },
  { step: "Step 6", title: "Confirm Admission", description: "Confirm your seat at the selected college." },
];

const Collegedekhocomp = () => {
  return (
    <LayoutContainer>
      <FixedContent>
        <EndToEndText>End-to-end Admission Process Simplified</EndToEndText>
        <p>Get help for your search, shortlist, application, preparation, admission and placement requirements!</p>
      </FixedContent>
      <ScrollableCardsContainer>
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
