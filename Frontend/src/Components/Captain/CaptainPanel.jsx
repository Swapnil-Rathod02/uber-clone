import React, { useContext, useState } from "react";
import { SlClock } from "react-icons/sl";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";
import { RiArrowDownWideFill } from "react-icons/ri";
import { CaptainContex } from "../../Context/CaptainContext";

function CaptainPanel({ newRide, accept, finished }) {
  const [focus, setFocus] = useState(false);
  const { captain } = useContext(CaptainContex);

  return (
    <div
      className={`w-full mx-auto p-3 bg-white shadow-lg rounded-lg overflow-hidden absolute bottom-0 z-50 transform transition-all duration-500 origin-top ${
        newRide && accept && !finished
          ? "scale-0 opacity-0"
          : "scale-100 opacity-100"
      }
   
      `}
    >
      <RiArrowDownWideFill
        className="justify-self-center size-8"
        onClick={() => setFocus((prev) => !prev)}
      />
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center ">
          <img
            className="size-14 rounded-full object-cover"
            src="https://tse3.mm.bing.net/th?id=OIP.Od4m4w455EEToOQDKESqvgHaFJ&pid=Api&P=0&h=180" // Replace with actual image URL
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{captain.name}</h2>
            <p className="text-sm text-gray-500">Basic Level</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-gray-800">325.00</p>
          <p className="text-sm text-gray-500">Earned</p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`bg-yellow-400 text-white grid grid-cols-3 gap-4 p-6 rounded-md transform transition-all duration-500 origin-top 
        ${focus ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex flex-col items-center">
          <SlClock className="size-8 mb-2 text-red-400" />
          <span className="text-2xl font-bold">10.2</span>
          <p className="text-sm">Hours Online</p>
        </div>
        <div className="flex flex-col items-center">
          <BsSpeedometer2 className="size-8 mb-2 text-red-400" />
          <span className="text-2xl font-bold">30 KM</span>
          <p className="text-sm">Total Distance</p>
        </div>
        <div className="flex flex-col items-center">
          <BiSpreadsheet className="size-8 mb-2 text-red-400" />
          <span className="text-2xl font-bold">20</span>
          <p className="text-sm">Total Jobs</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainPanel;
