import React from "react";

const TripSection = () => {
  return (
    <div className="p-2 space-y-5 ">
      <h1 className="text-2xl font-medium ml-3">Suggetions</h1>
      <div className="flex justify-center gap-4 p-2 bg-gray-100 w-full">
        {/* Box 1 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white shadow-sm ">
          <div className="text-4xl text-blue-500">
            <i className="fas fa-plane"></i> {/* Example icon */}
          </div>
          <div className="mt-4 text-lg font-semibold text-gray-700">Trip</div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white shadow-sm rounded-lg">
          <div className="text-4xl text-green-500">
            <i className="fas fa-map-marked-alt"></i> {/* Example icon */}
          </div>
          <div className="mt-4 text-lg font-semibold text-gray-700">Trip</div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white shadow-sm rounded-lg">
          <div className="text-4xl text-red-500">
            <i className="fas fa-hotel"></i> {/* Example icon */}
          </div>
          <div className="mt-4 text-lg font-semibold text-gray-700">Trip</div>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-white shadow-sm rounded-lg">
          <div className="text-4xl text-purple-500">
            <i className="fas fa-car"></i> {/* Example icon */}
          </div>
          <div className="mt-4 text-lg font-semibold text-gray-700">Trip</div>
        </div>
      </div>
    </div>
  );
};

export default TripSection;
