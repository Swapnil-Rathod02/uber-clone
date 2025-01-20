import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import VehicalType from "./VehicleType";
import VehiclePanel from "./VehiclePanel";
import axios from "axios";
import getFarers from "../../Services/Fares.Services";
import { RideContext } from "../../Context/RideContex";
import FindingRide from "./FindingRide";

const Booking = () => {
  const [focus, setFocus] = useState(true);
  const [cab, setCab] = useState(false);
  const [chooseVehicle, setChooseVehicle] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [searching, setSearching] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [vehichleType, setVehichleType] = useState("");
  const [focusOrigin, setFocusOrigin] = useState(true);
  const [fare, setFare] = useState({});

  const { rideData, setRideData } = useContext(RideContext);

  const getLocations = (e) => {
    setTimeout(() => {
      setSearching(e.target.value);
    }, 500);
  };

  const getSuggtions = useCallback(async () => {
    console.log("called");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/getsuggestions`,
        {
          params: {
            input: searching,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuggestions(response.data.response);
    } catch (error) {
      console.log(error);
    }
  }, [searching]);

  const Fares = useCallback(async () => {
    if (origin && destination) {
      const fares = await getFarers(origin, destination); //will get fare for each vehicle
      setFare(fares);
    }
  }, [origin, destination]);

  //create ride
  const createRide = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup: origin,
        destination: destination,
        vehichleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      setRideData(response.data);
    }
  };
  useEffect(() => {
    getSuggtions();
    Fares();
  }, [searching, getSuggtions, origin, destination]);

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
        className={`  z-50 bg-white w-full  
        ${focus ? "absolute bottom-0  " : "relative "} ${
          cab ? "hidden" : "visible"
        }`}
      >
        <div className={` p-4 z-50 bg-white/75  `}>
          <div className="flex justify-between p-2">
            <h1 className="text-3xl font-bold ">Find Trip</h1>
            <FaAngleDown
              className={`size-8  focus:rotate-180 ${
                focus ? "rotate-180" : null
              }`}
              onClick={() => setFocus((prev) => !prev)}
            />
          </div>
          <form action="" className="p-2 pb-0">
            <input
              type="text"
              className="p-2 focus:border-none w-full placeholder:text-black/55 placeholder:text-xl text-xl font-medium items-center mb-8 bg-gray-500 rounded-md h-12"
              // value={origin}
              placeholder="Enter pickup location "
              onFocus={() => {
                setFocus(false), setFocusOrigin(true);
              }}
              onChange={(e) => getLocations(e)}
            />

            <input
              type="text"
              onClick={() => setFocusOrigin(false)}
              // value={destination}
              className="p-2 h-12  rounded-md  text-xl placeholder:text-xl focus:border-none bg-gray-500 w-full placeholder:text-black/55 font-medium items-center"
              placeholder="choose destination "
              onChange={(e) => getLocations(e)}
            />
          </form>
        </div>
        {suggestions.map((suggestion) => (
          <div
            className={` p-2 rounded-b-md  ${focus ? "hidden" : "null"}`}
            onClick={() => {
              focusOrigin
                ? setOrigin(suggestion.description)
                : setDestination(suggestion.description);
              origin && destination ? setCab(true) : setCab(false);
            }}
          >
            {suggestion.description}
          </div>
        ))}
      </div>
      {fare && !chooseVehicle && cab && (
        <VehicalType
          fare={fare}
          setVehichleType={setVehichleType}
          setChooseVehicle={setChooseVehicle}
        />
      )}
      {chooseVehicle && !confirm && (
        <VehiclePanel
          createRide={createRide}
          setConfirm={setConfirm}
          cabDetails={{
            origin,
            destination,
            vehichleType,
            fare: fare[vehichleType],
          }}
        />
      )}
      {confirm && (
        <FindingRide
          cabDetails={{
            origin,
            destination,
            vehichleType,
            fare: fare[vehichleType],
          }}
        />
      )}
    </>
  );
};

export default Booking;
