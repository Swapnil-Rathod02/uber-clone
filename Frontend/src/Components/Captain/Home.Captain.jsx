import React, { useContext, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";
import CaptainPanel from "./CaptainPanel";
import ConfirmRide from "./ConfirmRide";
import RidePopup from "./RidePopup";
import { useSocket } from "../../Context/SocketContext";
import { CaptainContex } from "../../Context/CaptainContext";
import RideStarted from "./RideStarted";
import Maps from "../../Services/Maps.Services";

const HomeCaptain = () => {
  const [online, setOnline] = useState(true);
  const [newRide, setNewRide] = useState(false);
  const [accept, setAccept] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [newRideData, setNewRideData] = useState({});
  const { captain } = useContext(CaptainContex);
  const socket = useSocket();
  useEffect(() => {
    socket.emit("join", { userId: captain._id, userType: "captain" });
    socket.on(
      "new-ride",
      (data) => {
        console.log("got ride");
        setNewRideData(data);
        setNewRide(true);
      },
      [socket, captain]
    );
    const currentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        socket.emit("update-captain-location", {
          userId: captain._id,
          location: { lat: latitude, lng: longitude },
        });
        socket.on("error", (data) => {
          console.log(data);
        });
      });
    };

    const locationUpdate = setInterval(currentLocation, 15000);
    return () => {
      clearInterval(locationUpdate);
    };
  }, [socket, captain]);

  return (
    <div className="h-screen w-screen">
      <header className="z-50  bg-white w-full fixed  top-0">
        <div className="w-full p-5 flex items-center justify-between">
          <IoMenu className="size-8" />
          <h1 className="text-2xl font-bold">
            {online ? "Oniline" : "Offline"}
          </h1>
          <div
            className="border-black border-2 rounded-full w-14 "
            onClick={() => {
              setOnline((prev) => !prev);
            }}
          >
            <div
              className={` bg-black p-3 rounded-full w-3 transition-all transform duration-300  ${
                online && "scale-100 translate-x-7"
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`p-3 bg-orange-400 shadow-md flex gap-4 transition-all  transform duration-500 origin-left 
            after:scale-100 after:opacity-100  "
          `}
        >
          <FaSun className={`size-10 ${online ? "rotate-180" : "rotate-0"}`} />
          <div>
            <h1
              className={`text-xl font-medium transition-all transform duration-500 before:scale-0 scale-100`}
            >
              {online ? "Searching Ride For You!" : "You Are Offline"}
            </h1>
            <p className="text-md font-medium">
              {online ? "searching..." : "Go Online to get jobs"}
            </p>
          </div>
        </div>
      </header>
      <Maps />
      <CaptainPanel newRide={newRide} accept={accept} finished={finished} />
      <RidePopup
        newRide={newRide}
        newRideData={newRideData}
        accept={accept}
        setAccept={setAccept}
        captain={captain}
      />
      <ConfirmRide
        newRideData={newRideData}
        setAccept={setAccept}
        accept={accept}
        started={started}
        setStarted={setStarted}
      />
      <RideStarted
        statred={started}
        finished={finished}
        setFinished={setFinished}
        newRideData={newRideData}
      />
    </div>
  );
};

export default HomeCaptain;
