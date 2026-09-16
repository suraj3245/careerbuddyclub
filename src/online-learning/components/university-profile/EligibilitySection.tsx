import React from 'react';

interface EligibilitySectionProps {
  universityName: string;
}

export default function EligibilitySection({ universityName }: EligibilitySectionProps) {
  return (
    <section id="eligibility" className="upEligibility">
      <h2>Eligibility & Admission Process</h2>
      
      <div>
        {/*<h3>Eligibility Requirements</h3> */}
        <div className="upEligibilityCard">
          <ul className="upEligibilityList">
            <li className="upEligibilityItem">
              <strong>UG Programs:</strong> 10+2 or equivalent from a recognized board
            </li>
            <li className="upEligibilityItem">
              <strong>PG Programs:</strong> Bachelor's degree from a recognized university
            </li>
            <li className="upEligibilityItem">
              <strong>PhD Programs:</strong> Master's degree in a relevant discipline
            </li>
            <li className="upEligibilityItem">
              <strong>Documents:</strong> Mark sheets, ID proof, photographs, experience certificates (if applicable)
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}