import React from "react";

interface PersonalityTypeCardProps {
  title: string;
  description: string;
  iconPath: string; // Path to the icon image
}

const PersonalityTypeCard: React.FC<PersonalityTypeCardProps> = ({
  title,
  description,
  iconPath,
}) => {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-sm mx-auto">
      <img className="mx-auto h-16 w-16" src={iconPath} alt={`${title} icon`} />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

export default PersonalityTypeCard;
