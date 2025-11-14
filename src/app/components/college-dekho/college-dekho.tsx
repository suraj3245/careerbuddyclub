"use client";
import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: #f9fafb; /* A light grey background */
`;

const HeaderContent = styled.header`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #111827; /* Dark gray */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    color: #4b5563; /* Medium gray */
    line-height: 1.6;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.article`
  padding: 2rem 1.5rem;
  background: #f3f1ee;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;

  &::after {
    content: attr(data-number);
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    color: #e5e7eb; /* Light gray for the number */
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    z-index: 0;
  }
`;

const Icon = styled.div`
  margin-bottom: 1.5rem;
  color: #14adbd; /* Accent color for icon */
  z-index: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
  z-index: 1;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  flex-grow: 1; /* Pushes the badge to the bottom */
  z-index: 1;
`;

const CardCTA = styled.div`
  margin-top: 1.5rem;
  z-index: 1;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #e0f2f1; /* Light teal background */
  color: #00796b; /* Dark teal text */
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const steps = [
    {
        icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
        title: "Take the Career Aptitude Test",
        description: "Discover the best-suited career path through a tech-based aptitude test.",
        badge: "CAT Test",
    },
    {
        icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>,
        title: "Complete Your Profile",
        description: "Add your academic background to receive AI-driven college suggestions.",
        badge: "Complete Profile",
    },
    {
        icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
        title: "Shortlist Colleges",
        description: "Pick your dream colleges and apply to many with one application.",
        badge: "Shortlist Colleges",
    },
    {
        icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/><path d="M21 21l-6-6"/><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/></svg>,
        title: "Get Expert Guidance",
        description: "Connect with mentors for advice on courses, colleges, and fees.",
        badge: "Expert Guidance",
    },
    {
        icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>,
        title: "Upload Documents & Pay Fees",
        description: "Simplify your application by submitting documents and making payments online.",
        badge: "Documentation",
    },
    {
        icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
        title: "Confirm Admission",
        description: "Secure your seat at the college of your choice.",
        badge: "Admission",
    },
];

const Collegedekhocomp:any = () => {
  return (
    <LayoutContainer>
      <HeaderContent>
        <h2>End-to-End Admission Process Simplified</h2>
        <p>Guiding you from search to placement, every step of the way!</p>
      </HeaderContent>
      <CardsGrid role="list">
        {steps.map((step, index) => (
          <Card key={index} role="listitem" data-number={(index + 1).toString().padStart(2, '0')}>
            <Icon aria-hidden="true">{step.icon}</Icon>
            <CardTitle>{step.title}</CardTitle>
            <CardDescription>{step.description}</CardDescription>
            {step.badge && (
              <CardCTA>
                <Badge>{step.badge}</Badge>
              </CardCTA>
            )}
          </Card>
        ))}
      </CardsGrid>
    </LayoutContainer>
  );
};

export default Collegedekhocomp;