// IconCard.tsx
import React from 'react';

interface IconCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;