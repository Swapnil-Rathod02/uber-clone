import axios from "axios";
import React, { useCallback, useContext } from "react";
import { RideContext } from "../../Context/RideContex";

const RideStarted = ({ statred, finished, setFinished, newRideData }) => {
  const token = localStorage.getItem("token");
  const handleFinish = useCallback(async () => {
    console.log(newRideData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/ride-end`,
        {
          status: "completed",
          rideId: newRideData._doc._id,
        },

        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 200) {
        setFinished(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token, newRideData]);
  return (
    <div
      className={`w-full p-3 flex justify-between items-center transform transition-all duration-500  bg-green-400 rounded-t-md z-50 absolute bottom-0 text-black/80 font-medium text-xl origin-bottom-right ${
        statred && !finished
          ? "scale-100 opacity-100 z-50"
          : "scale-0 opacity-0 -z-50"
      }`}
    >
      <div>
        <h1>Ride started</h1>
        <h1>15 min Aways</h1>
      </div>
      <button
        className="p-2 bg-yellow-300 rounded-md w-32"
        onClick={handleFinish}
      >
        Finish
      </button>
    </div>
  );
};

export default RideStarted;
