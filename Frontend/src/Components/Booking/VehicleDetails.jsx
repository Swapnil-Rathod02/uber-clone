import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import VehiclePanel from "./VehiclePanel";

const VehicalType = ({ cab }) => {
  const [select, setSelect] = useState(false);
  return (
    <>
      <div
        className={`w-full absolute bottom-0 z-10 bg-white p-2 box-border ${
          cab ? "visible" : "hidden"
        }
        ${select ? "hidden" : "visible"}
        `}
      >
        <div className="flex p-2 justify-between">
          <h1 className="text-xl text-black/90 font-medium">Choose Cab</h1>
          <FaAngleDown className="size-8" />
        </div>
        <div
          className=" flex items-center justify-between active:border-black border-4 rounded-lg p-4 shadow-sm  box-border"
          onClick={() => setSelect(true)}
        >
          <div className="flex items-center">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png"
              alt=""
              className="w-16 h-16 object-contain mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">Tittle</h3>
              <p className="text-sm text-gray-500">capacity</p>
              <p className="text-sm text-gray-400">decription</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">price</p>
          </div>
        </div>
      </div>
      {select ? <VehiclePanel select={select} /> : null}
    </>
  );
};

export default VehicalType;
