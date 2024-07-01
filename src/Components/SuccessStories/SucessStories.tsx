import React from 'react';

const SuccessStories: React.FC = () => {
  return (
    <div className="bg-white mt-20">
      <div className="bg-cover bg-center h-72" style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/04/21/08/44/360_F_421084477_KWVxDg2pM028DgCjMJlzj8ZGJ5jmiOvs.jpg')` }}>
        {/* Background Image */}
      </div>
      <div className="container mx-auto py-8 px-12">
        <h2 className="text-center text-2xl font-semibold mb-8 text-slate-800">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                S
              </div>
              <h3 className="ml-2 md:ml-4 text-lg font-medium">Sadiq</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              I am very happy with your service from start till end. The way you communicated was excellent. Thanks for suggesting a good product for SIP.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                A
              </div>
              <h3 className="ml-2 md:ml-4 text-lg font-medium">Anitha H</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              I am happy and thankful for the support I have received from you people. Without you guys I can’t imagine such a fast & smooth process for my personal loan application. A Big Thank you for all the services.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                A
              </div>
              <h3 className="ml-2 md:ml-4 text-lg font-medium">Anitha H</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Investopay made getting a loan so easy! They understood my financial needs and found me the perfect loan with competitive rates. Their streamlined process saved me a lot of time and hassle. Highly recommend.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                A
              </div>
              <h3 className="ml-2 md:ml-4 text-lg font-medium">Anitha H</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              I was skeptical about insurance until I used Investopay. They explained everything clearly and helped me choose the right coverage for my family. Their personalized service and attention to detail were impressive. Thank you, Investopay!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
