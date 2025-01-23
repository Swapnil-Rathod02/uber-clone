import React from "react";

const FindingRide = ({ cabDetails }) => {
  return (
    <>
      <div
        className={`z-50 text-black w-full p-3 bg-white shadow-lg rounded-t-sm absolute bottom-0 space-y-3 transform transition-all duration-200 ${
          cabDetails.rideAccepted
            ? "scale-0 opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <h1 className="text-gray-800 text-2xl font-bold  text-center mt-2">
          {" "}
          Looking For Driver
        </h1>
        <div className="flex justify-center">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" // Replace with actual car image
            alt="Car"
            className="size-80 mt-0"
          />
        </div>
        {/* Pickup Location */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold">562/11-A</h3>
          <p className="text-md text-gray-500">{cabDetails.origin}</p>
        </div>

        {/* Drop-off Location */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold">Third Wave Coffee</h3>
          <p className="text-md text-gray-500">{cabDetails.destination}</p>
        </div>

        {/* Price and Payment Method */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">&#8377;{cabDetails.fare}</p>
          <p className="text-lg text-gray-600">Cash</p>
        </div>
      </div>
    </>
  );
};

export default FindingRide;
