import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LoanImage from '../../../public/assets/loaning.jpg';

interface IconCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-md mx-auto text-center bg-white h-40"
      style={{
        maxWidth: '220px',
        width: '100%',
        background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
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
    <div className="container mx-auto  mt-8 bg-white h-screen "
    style={{
      backgroundImage: `url(${LoanImage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="flex justify-center mt-4">
        <h2 className="text-gray-500 text-3xl font-semibold mt-4 ">
          Insurances
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 place-items-center">
        {loanData.map((loan) => (
          <div key={loan.id} className="flex items-center">
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
