import React from 'react';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface IconCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-md mx-auto text-center bg-white"
      style={{
        maxWidth: '220px',
        width: '100%',
        background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

interface LoanData {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const LoanContainer: React.FC = () => {
  const loanData: LoanData[] = [
    {
      id: 1,
      title: "Life",
      description: "Explore options for life insurance.",
      icon: <FavoriteIcon style={{ fontSize: 48, color: 'blue' }} />,
    },
    {
      id: 2,
      title: "Health",
      description: "Find the right health insurance for you.",
      icon: <LocalHospitalIcon style={{ fontSize: 48, color: 'blue' }} />,
    },
    {
      id: 3,
      title: "General",
      description: "Cover your general insurance needs.",
      icon: <LocalOfferIcon style={{ fontSize: 48, color: 'blue' }} />,
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center md:h-1/4 lg:h-1/3 xl:h-1/2 mt-10">
        <h2 className="text-gray-500 text-3xl font-semibold mb-4">
          Insurances 
        </h2>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        {loanData.map((loan) => (
          <div key={loan.id} className="flex items-center w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
            <IconCard
              icon={loan.icon}
              title={loan.title}
              description={loan.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanContainer;