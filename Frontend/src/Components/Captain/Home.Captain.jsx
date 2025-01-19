import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";
import CaptainPanel from "./CaptainPanel";
import RideAvailable from "./RidePopup";
import ConfirmRide from "./ConfirmRide";
import RidePopup from "./RidePopup";

const HomeCaptain = () => {
  const [online, setOnline] = useState(true);
  const [newRide, setNewRide] = useState(false);
  const [accept, setAccept] = useState(false);
  return (
    <div className="h-screen w-screen">
      <header className="z-50  bg-white w-full fixed  top-0">
        <div className="w-full p-5 flex items-center justify-between">
          <IoMenu className="size-8" />
          <h1 className="text-2xl font-bold">Offiline</h1>
          <div
            className="border-black border-2 rounded-full w-14"
            onClick={() => {
              setOnline((prev) => !prev);
              setNewRide((prev) => !prev);
            }}
          >
            <div className=" bg-black p-3 rounded-full w-3"></div>
          </div>
        </div>
        <div
          className={`p-3 bg-orange-400 shadow-md flex gap-4 transition-all  transform duration-500 origin-left ${
            online ? "scale-100 opacity-100" : " scale-0 opacity-0 "
          }`}
        >
          <FaSun className={`size-10 ${online ? "rotate-180" : "rotate-0"}`} />
          <div>
            <h1 className="text-xl font-medium">You are Offline!</h1>
            <p className="text-md font-medium">Go Online to get jobs</p>
          </div>
        </div>
      </header>
      <img
        className="h-screen -z-50"
        src="https://www.researchgate.net/profile/Darren_Hayes2/publication/320839993/figure/download/fig3/AS:556713386676224@1509742222719/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
        alt=""
      />
      <CaptainPanel newRide={newRide} accept={accept} />
      <RidePopup newRide={newRide} setAccept={setAccept} />
      <ConfirmRide accept={accept} />
    </div>
  );
};

export default HomeCaptain;
