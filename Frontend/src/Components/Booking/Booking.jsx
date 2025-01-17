import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import DriverConfirm from "./DriverConfirm";
import VehicalType from "./VehicleDetails";
import VehiclePanel from "./VehiclePanel";

const Booking = () => {
  const [focus, setFocus] = useState(true);
  const [cab, setCab] = useState(false);
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className=" h-screen w-screen absolute top-0 overflow-hidden -z-50">
        <img
          className="h-full w-full -z-50"
          src="https://www.researchgate.net/profile/Darren_Hayes2/publication/320839993/figure/download/fig3/AS:556713386676224@1509742222719/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
          alt=""
          onClick={() => {
            setCab(false);
            setFocus(true);
          }}
        />
      </div>
      <div
        className={`  z-50 bg-white w-full   ${
          focus ? "absolute bottom-0 " : "relative"
        } ${cab ? "hidden" : "visible"}`}
      >
        <div
          className={` p-2 z-50 bg-white   ${
            focus ? "absolute bottom-0 " : "relative"
          }`}
        >
          <div className="flex justify-between p-2">
            <h1 className="text-xl font-semibold ">Find Trip</h1>
            <FaAngleDown
              className={`size-8  focus:rotate-180 ${
                focus ? "rotate-180" : null
              }`}
              onClick={() => setFocus((prev) => !prev)}
            />
          </div>
          <form action="" className="p-2">
            <input
              type="text"
              className="p-2 focus:border-none w-full placeholder:text-black/55 font-medium items-center"
              placeholder="Enter pickup location "
              onFocus={() => setFocus(false)}
            />

            <input
              type="text"
              className="p-2 focus:border-none w-full placeholder:text-black/55 font-medium items-center"
              placeholder="choose current location "
            />
          </form>
        </div>
        <div
          className={`bg-red-600 px-2 rounded-b-md  ${focus ? "hidden" : null}`}
          onClick={() => setCab(true)}
        >
          red
        </div>
      </div>
      <VehicalType cab={cab} />

      <DriverConfirm confirm={confirm} />
    </>
  );
};

export default Booking;
