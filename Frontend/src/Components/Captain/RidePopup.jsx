import React from "react";
import { useSocket } from "../../Context/SocketContext";

const RidePopup = ({ newRide, newRideData, accept, setAccept, captain }) => {
  const socket = useSocket();

  const handleAccept = async () => {
    console.log("called");
    await socket.emit("accepted", {
      captainId: captain._id,
      passangerId: newRideData._doc.user,
      tripId: newRideData._doc._id,
      request: true,
    });
  };
  return (
    <div
      className={`z-50 text-black w-full 
  p-3 bg-white shadow-lg rounded-t-sm absolute bottom-0 space-y-3  transform transition-all duration-500 origin-bottom ${
    newRide && !accept ? "scale-100 opacity-100" : "scale-0 opacity-0"
  }
  `}
    >
      <h1 className="text-gray-800 text-2xl font-bold    mt-2">
        {" "}
        New Ride Alert!!
      </h1>
      <div className="p-4 flex justify-between items-center rounded-lg bg-yellow-300">
        <div className="flex gap-3  items-center">
          <img
            className="size-14 object-cover rounded-full"
            src="https://tse3.mm.bing.net/th?id=OIP.Od4m4w455EEToOQDKESqvgHaFJ&pid=Api&P=0&h=180"
            alt=""
          />
          <h1 className="text-lg font-semibold">{newRideData.passanger}</h1>
        </div>
        <h1 className="text-lg font-bold">3.3KM</h1>
      </div>

      {/* Drop-off Location */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-xl font-semibold">Third Wave Coffee</h3>
        <p className="text-md text-gray-500">{newRideData._doc?.destination}</p>
      </div>

      {/* Price and Payment Method */}
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">{newRideData._doc?.fare}</p>
        <p className="text-lg text-gray-600">Cash</p>
      </div>
      <button
        className="bg-green-500 p-3 text-xl font-bold w-full rounded-md shadow-md mt-10"
        onClick={() => {
          setAccept(true), handleAccept();
        }}
      >
        Accept
      </button>
      <button
        className="bg-red-600 p-3 text-xl font-bold w-full rounded-md shadow-md mt-4 "
        onClick={() => setAccept(true)}
      >
        Ignore
      </button>
    </div>
  );
};

export default RidePopup;
