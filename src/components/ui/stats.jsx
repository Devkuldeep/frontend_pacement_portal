import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Gateway to Career Success
          </h2>
          <p className="text-gray-500 mt-2">
            Connecting talented students with leading employers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stat Item 1 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600 mt-2">Students Placed</p>
          </div>

          {/* Stat Item 2 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600 mt-2">Partner Companies</p>
          </div>

          {/* Stat Item 3 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">85%</h3>
            <p className="text-gray-600 mt-2">Placement Rate</p>
          </div>

          {/* Stat Item 4 */}
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">4.2L</h3>
            <p className="text-gray-600 mt-2">Average Package</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
