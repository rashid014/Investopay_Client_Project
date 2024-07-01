// IconCard.tsx
import React from 'react';

interface IconCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className=" p-4 rounded-md  flex items-center !bg-white">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold !text-slate-800">{title}</h3>
        <p className="text-slate-800">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;