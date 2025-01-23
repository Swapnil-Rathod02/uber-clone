import React, { useCallback, useContext, useState } from "react";
import axios from "axios";

const ConfirmRide = ({ newRideData, accept, started, setStarted }) => {
  const [otp, setOtp] = useState();
  const [errors, setErrors] = useState("");
  const token = localStorage.getItem("token");

  const startRide = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
        {
          params: {
            otp,
            rideId: newRideData._doc?._id,
          },
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        setStarted(true);
      }
    } catch (error) {
      setErrors(error.response.data.message);
    }
  });
  return (
    <div
      className={`z-50 text-black w-full h-screen
p-3 bg-white shadow-lg rounded-t-sm absolute bottom-0 space-y-3  transform transition-all duration-500 origin-bottom ${
        accept && !started ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }
    
      `}
    >
      <h1 className="text-gray-800 text-2xl font-bold    mt-2"> accepted</h1>
      <div className="p-4 flex justify-between items-center rounded-lg bg-yellow-300">
        <div className="flex gap-3  items-center">
          <img
            className="size-14 object-cover rounded-full"
            src="https://tse3.mm.bing.net/th?id=OIP.Od4m4w455EEToOQDKESqvgHaFJ&pid=Api&P=0&h=180"
            alt=""
          />
          <h1 className="text-lg font-semibold">{newRideData?.passanger}</h1>
        </div>
        <h1 className="text-lg font-bold">3.3KM</h1>
      </div>

      {/* pickup Location */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-xl font-semibold">Third Wave Coffee</h3>
        <p className="text-md text-gray-500">{newRideData._doc?.pickup}</p>
      </div>
      {/* drop  */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-xl font-semibold">Third Wave Coffee</h3>
        <p className="text-md text-gray-500">{newRideData._doc?.destination}</p>
      </div>

      {/* Price and Payment Method */}
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">&#8377;{newRideData._doc?.fare}</p>
        <p className="text-lg text-gray-600">Cash</p>
      </div>
      <div>
        <input
          type="text"
          value={otp}
          placeholder="enter otp"
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 placeholder:text-gray-700 "
        />

        {errors && (
          <p className="text-red-600 text-sm text-center ">{errors}</p>
        )}
      </div>

      <button
        className="bg-green-500 p-3 text-xl font-bold w-full rounded-md shadow-md mt-10"
        onClick={() => {
          startRide();
        }}
      >
        Confirm
      </button>
      <button className="bg-red-600 p-3 text-xl font-bold w-full rounded-md shadow-md mt-4 ">
        Cancel
      </button>
    </div>
  );
};

export default ConfirmRide;
