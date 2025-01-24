import React, { useCallback, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
const VehicalType = ({ fare, setChooseVehicle, setVehichleType }) => {
  return (
    <>
      <div
        className={`w-full absolute bottom-0 z-10 bg-white p-2 box-border transition-all transform duration-300
        `}
      >
        <div className="flex p-2 justify-between">
          <h1 className="text-xl text-black/90 font-medium">Choose Cab</h1>
          <FaAngleDown className="size-8" />
        </div>
        <div
          className=" flex items-center justify-between active:border-black border-4 rounded-lg p-4 shadow-sm  box-border"
          onClick={() => {
            setVehichleType("car"), setChooseVehicle(true);
          }}
        >
          <div className="flex items-center gap-1">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png"
              alt=""
              className="size-20 object-cover  mr-4"
            />
            <div>
              <div className="flex gap-2 justify-center items-center">
                {" "}
                <h3 className="text-xl font-medium">UberGo</h3>
                <div className="flex gap-1 justify-center items-center font-medium">
                  <IoPerson className="size-5" />
                  <p className="text-xl text-gray-900 ">4</p>
                </div>{" "}
              </div>

              <p className="text-md font-medium text-gray-800">3 min away</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-center">Prices </p>
            <p className="text-lg font-medium text-center">
              &#8377;{fare?.car}
            </p>
          </div>
        </div>
        <div
          className=" flex items-center justify-between active:border-black border-4 rounded-lg p-4 shadow-sm  box-border"
          onClick={() => {
            setChooseVehicle(true), setVehichleType("auto");
          }}
        >
          <div className="flex items-center gap-1">
            <img
              alt=""
              src="https://tse4.mm.bing.net/th?id=OIP.3sbKqKZc9-3xoGMxG3GAYwHaF4&pid=Api&P=0&h=180"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <div className="flex gap-2 justify-center items-center">
                {" "}
                <h3 className="text-xl font-medium">UberAuto</h3>
                <div className="flex gap-1 justify-center items-center font-medium">
                  <IoPerson className="size-5" />
                  <p className="text-xl text-gray-900 ">4</p>
                </div>{" "}
              </div>
              <p className="text-md text-gray-800 font-medium">5 min away</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-center">Prices </p>
            <p className="text-lg font-medium text-center">
              &#8377;{fare?.auto}
            </p>
          </div>
        </div>
        <div
          className=" flex items-center justify-between active:border-black border-4 rounded-lg p-4 shadow-sm  box-border"
          onClick={() => {
            setChooseVehicle(true), setVehichleType("bike");
          }}
        >
          <div className="flex items-center gap-1">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.d8sjRxRwAEeRsKreP3uuNgHaHa&pid=Api&P=0&h=180"
              alt=""
              className="size-20 object-cover mr-4 bg-cover inset-0 bg-opacity-50"
            />
            <div>
              <div className="flex gap-2 justify-center items-center">
                {" "}
                <h3 className="text-xl font-medium">Moto</h3>
                <div className="flex gap-1 justify-center items-center font-medium">
                  <IoPerson className="size-5" />
                  <p className="text-xl text-gray-900 ">4</p>
                </div>{" "}
              </div>
              <p className="text-md text-gray-800 font-medium">8 min away</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-center">Prices </p>
            <p className="text-lg font-medium text-center">
              &#8377;{fare?.bike}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicalType;
