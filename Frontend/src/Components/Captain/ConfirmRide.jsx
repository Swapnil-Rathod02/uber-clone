import React from "react";

const ConfirmRide = ({ accept }) => {
  return (
    <div
      className={`z-50 text-black w-full h-screen
p-3 bg-white shadow-lg rounded-t-sm absolute bottom-0 space-y-3  transform transition-all duration-500 origin-bottom ${
        accept ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <h1 className="text-gray-800 text-2xl font-bold    mt-2"> accepted</h1>
      <div className="p-4 flex justify-between items-center rounded-lg bg-yellow-300">
        <div className="flex gap-3  items-center">
          <img
            className="size-14 object-cover rounded-full"
            src="https://tse3.mm.bing.net/th?id=OIP.Od4m4w455EEToOQDKESqvgHaFJ&pid=Api&P=0&h=180"
            alt=""
          />
          <h1 className="text-lg font-semibold">Harsh Patil</h1>
        </div>
        <h1 className="text-lg font-bold">3.3KM</h1>
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
      <div>
        <h1 className="text-xl font-medium text-gray-700">Enter Otp</h1>
        <div
          id="opt"
          className="flex bg-black gap-4 p-2  h-16  shadow-sm justify-center"
        >
          <input
            type="text"
            className="w-1/6 focus:border-none text-4xl font-medium text-center"
          />
          <input
            type="text"
            className="w-1/6 focus:border-none text-4xl font-medium text-center"
          />
          <input
            type="text"
            className="w-1/6 focus:border-none text-4xl font-medium text-center"
          />
          <input
            type="text"
            className="w-1/6 focus:border-none text-4xl font-medium text-center"
          />
        </div>
      </div>

      <button className="bg-green-500 p-3 text-xl font-bold w-full rounded-md shadow-md mt-10">
        Confirm
      </button>
      <button className="bg-red-600 p-3 text-xl font-bold w-full rounded-md shadow-md mt-4 ">
        Cancel
      </button>
    </div>
  );
};

export default ConfirmRide;
