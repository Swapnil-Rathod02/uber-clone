import React, { useState } from "react";
import DriverConfirm from "./DriverConfirm";

const VehiclePanel = ({ select }) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div
        className={`z-50 text-black w-full scale-100 translate-y-0 ${
          select ? "visible" : "hidden"
        } 
      ${confirm ? "hidden" : "visible"}
      p-3 bg-white shadow-lg rounded-t-sm absolute bottom-0 space-y-3`}
      >
        <h1 className="text-gray-800 text-2xl font-bold  text-center mt-2">
          {" "}
          Ride confirmed!
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
          <p className="text-md text-gray-500">
            Kaikondrahalli, Bengaluru, Karnataka
          </p>
        </div>

        {/* Drop-off Location */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold">Third Wave Coffee</h3>
          <p className="text-md text-gray-500">
            17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
            Karnataka
          </p>
        </div>

        {/* Price and Payment Method */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">&#8377;193.20</p>
          <p className="text-lg text-gray-600">Cash</p>
        </div>
        <button
          className="bg-green-500 p-3 text-lg font-medium w-full rounded-md shadow-md mt-4"
          onClick={() => setConfirm(true)}
        >
          Confirm
        </button>
      </div>
      <DriverConfirm confirm={confirm} />
    </>
  );
};

export default VehiclePanel;
