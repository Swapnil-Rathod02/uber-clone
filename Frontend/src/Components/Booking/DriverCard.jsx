// Import Tailwind CSS in your React project
import React from "react";

const DriverCard = ({ gotCab }) => {
  return (
    <div
      className={`max-w-sm mx-auto border rounded-lg shadow-md p-4 bg-white
    ${gotCab ? "visible" : "hidden"}
    `}
    >
      <div className="flex items-center mb-4">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.JT5Uipq-bb6bf1VhYtRqNgHaEw&pid=Api&P=0&h=180" // Replace with the driver's image URL
          alt="Driver"
          className="w-12 h-12   rounded-full mr-4"
        />
        <div>
          <h1 className="text-lg font-bold">SANTH</h1>
          <p className="text-sm text-gray-500">KA15AK00-0</p>
          <p className="text-sm text-gray-500">White Suzuki S-Presso LXI</p>
        </div>
        <div className="ml-auto">
          <span className="text-sm bg-yellow-400 text-black py-1 px-2 rounded-full">
            ⭐ 4.9
          </span>
        </div>
      </div>

      {/* Message Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Send a message..."
          className="w-full border rounded-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mb-4">
        <button className="flex flex-col items-center text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm">Safety</span>
        </button>

        <button className="flex flex-col items-center text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <span className="text-sm">Share my trip</span>
        </button>

        <button className="flex flex-col items-center text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12h2m4 0a2 2 0 00-2-2h-2.5a0.5 0.5 0 01-.5-.5V7m0 5.5v6"
            />
          </svg>
          <span className="text-sm">Call driver</span>
        </button>
      </div>

      {/* Address Section */}
      <div className="text-gray-700">
        <p className="text-sm font-semibold">562/11-A</p>
        <p className="text-sm">Kaikondrahalli, Bengaluru, Karnataka</p>
      </div>
    </div>
  );
};

export default DriverCard;
