// components/InsuranceSection.tsx
import React from 'react';

const ParagraphSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          What makes InvestoPay different ?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Over 9 million</h3>
            <p className="mt-2 text-gray-600">
              customers trust us & have bought their insurance on Policybazaar.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">50+ insurers</h3>
            <p className="mt-2 text-gray-600">
              partnered with us so that you can compare easily & transparently.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Great Price</h3>
            <p className="mt-2 text-gray-600">
              for all kinds of insurance plans available online.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Claims</h3>
            <p className="mt-2 text-gray-600">
              support built in with every policy for help, when you need it the most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParagraphSection;