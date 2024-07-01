import React from 'react';
import FinancialConsultation from '../../../public/assets/financialConsult.jpg';
import FinancialComparison from '../../../public/assets/comparison.jpg';
import FinancialApproval from '../../../public/assets/approval.jpg';
import Image from 'next/image';

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">How does it work?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
        <div className="text-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="mb-4">
            <Image src={FinancialConsultation} alt="Customer Engagement" className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800 h-16">Customer Engagement</h3>
          <p className="text-gray-700">Investopay begins by engaging customers to understand their financial needs and goals. Through detailed assessments, they identify suitable loan or insurance products based on the customer's profile, financial situation, and preferences.</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="mb-4">
            <Image src={FinancialComparison} alt="Facilitation of Competitive Offers" className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800 h-16">Facilitation of Competitive Offers</h3>
          <p className="text-gray-700">Acting as a mediator, Investopay solicits competitive offers from multiple banks and insurance providers. They negotiate terms and conditions on behalf of the customer, ensuring they receive the best possible rates and coverage options tailored to their needs.</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="mb-4">
            <Image src={FinancialApproval} alt="Streamlined Application and Approval Process" className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800 h-16">Streamlined Application and Approval Process</h3>
          <p className="text-gray-700">Investopay simplifies the application and approval process by handling documentation, submission, and communication between the customer and financial institutions. They streamline the process, reducing paperwork and improving efficiency, thus expediting loan disbursal or insurance coverage initiation for the customer.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
