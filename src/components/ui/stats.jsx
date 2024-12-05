import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by creators worldwide
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing possimus.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stat Item 1 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">8,000+</h3>
            <p className="text-gray-600 mt-2">Creators on the platform</p>
          </div>

          {/* Stat Item 2 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">3%</h3>
            <p className="text-gray-600 mt-2">Flat platform fee</p>
          </div>

          {/* Stat Item 3 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
            <p className="text-gray-600 mt-2">Uptime guarantee</p>
          </div>

          {/* Stat Item 4 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">$70M</h3>
            <p className="text-gray-600 mt-2">Paid out to creators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
