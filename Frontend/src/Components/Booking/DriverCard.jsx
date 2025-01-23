// Import Tailwind CSS in your React project
import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { RideContext } from "../../Context/RideContex";

const DriverCard = ({ started }) => {
  const { driver, rideData } = useContext(RideContext);
  console.log(rideData);
  console.log(rideData.ride.destination);
  console.log(driver);
  return (
    <div
      className={`p-2 w-full transition-all transform duration-500 before:0 scale-100 absolute bottom-0 bg-gray-100 
  `}
    >
      <div className="w-full flex justify-between px-2 items-center">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png"
          alt=""
          className="size-20 object-cover"
        />
        <div className="font-medium">
          <h1 className="text-2xl font-medium">{driver.name}</h1>
          <h2 className="text-lg">{driver.vehicleDetail.vehicleNumber}</h2>
          <p className="">car name</p>
          <p className="text-xl text-gray-700 font-medium">
            {rideData.ride.otp}
          </p>
        </div>
      </div>

      {/* Header */}

      {/* Pickup Address */}
      <div className="m-4 flex gap-5  items-center ">
        <MdOutlineLocationOn className="size-7 shrink-0" />
        <div>
          <h2 className="text-md font-semibold text-gray-700">
            Pickup Address
          </h2>
          <p className="text-gray-800 text-xl font-semibold">
            {rideData.ride.pickup}
          </p>
        </div>
      </div>

      {/* Drop Address */}
      <div className="m-4 flex gap-5  items-center ">
        <FaLocationDot className="size-6 shrink-0 " />
        <div>
          <h2 className="text-md font-semibold text-gray-700">
            Drop-Off Address
          </h2>
          <p className="text-gray-800 text-xl font-semibold">
            {rideData.ride.destination}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg ">
        <span className="text-xl font-bold text-gray-700 ">Price</span>
        <span className="text-xl font-bold text-green-500">
          ₹{rideData.ride.fare}
        </span>
      </div>
      <button
        className={`bg-green-400 font-bold text-xl p-4 rounded-md w-full border-2 active:border-black/60 text-black/75 transition-all transform duration-200 ${
          started ? "scale-100 opacity-100 " : "scale-0 opacity-0"
        }`}
      >
        Make Payment
      </button>
    </div>
  );
};

export default DriverCard;
