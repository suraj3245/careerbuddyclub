import React from "react";
import PersonalityTypeCard from "./personalityTypeCard";

const personalityTypes = [
  {
    title: "Realistic",
    description:
      "Jobs that require the use of hands, tools, machines, animals, plants etc.",
    iconPath: "/icons/realistic.png",
  },
  // ... add other personality types here
];

const PersonalityGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {personalityTypes.map((type) => (
        <PersonalityTypeCard
          key={type.title}
          title={type.title}
          description={type.description}
          iconPath={type.iconPath}
        />
      ))}
    </div>
  );
};

export default PersonalityGrid;
