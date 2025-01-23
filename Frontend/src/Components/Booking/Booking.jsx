import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaAngleDown } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import VehicalType from "./VehicleType";
import VehiclePanel from "./VehiclePanel";
import axios from "axios";
import getFarers from "../../Services/Fares.Services";
import FindingRide from "./FindingRide";
import { RideContext } from "../../Context/RideContex";
import { useSocket } from "../../Context/SocketContext";
import { UserDataContext } from "../../Context/UserContext";
import DriverCard from "./DriverCard";
import Maps from "../../Services/Maps.Services";

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
  const [drop, setDrop] = useState(false);
  const [started, setStarted] = useState(false);
  const [rideAccepted, setRideAccepted] = useState(false);
  const { setRideData, setDriver } = useContext(RideContext);
  const { userData } = useContext(UserDataContext);

  const getLocations = (e) => {
    setTimeout(() => {
      setSearching(e.target.value);
    }, 500);
  };

  const getSuggtions = useCallback(async () => {
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
    if (origin && destination && drop) {
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
  }, [getSuggtions, Fares, origin, destination]);

  //initializing sockets
  const socket = useSocket();
  useEffect(() => {
    socket.emit("join", { userType: "user", userId: userData._id });
    socket.on("ride-confirmed", (data) => {
      setDriver(data);
      setRideAccepted(true);
    });
    socket.on("ride-started", (data) => {
      setStarted(true);
      console.log(data);
    });
  }, [socket, userData]);

  return (
    <>
      <div className=" h-screen w-screen absolute top-0 overflow-hidden -z-50 ">
        <div className="h-full w-full -z-50">
          <Maps />
        </div>
      </div>
      <div
        className={` bg-gray-100 z-50 w-full  
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
              value={origin}
              className="p-2 focus:border-none w-full placeholder:text-black/55 placeholder:text-xl text-xl font-medium items-center mb-6 bg-gray-500 rounded-md h-12"
              placeholder="Enter pickup location "
              onFocus={() => {
                setFocus(false), setFocusOrigin(true);
              }}
              onChange={(e) => {
                getLocations(e);
                setOrigin(e.target.value);
              }}
            />

            <input
              type="text"
              value={destination}
              onBlur={(e) => setDrop(true)}
              onFocus={() => setDrop(false)}
              onClick={() => setFocusOrigin(false)}
              className="p-2 h-12  rounded-md  text-xl placeholder:text-xl focus:border-none bg-gray-500 w-full placeholder:text-black/55 font-medium items-center"
              placeholder="choose destination "
              onChange={(e) => {
                setDestination(e.target.value);
                getLocations(e);
              }}
            />
          </form>
        </div>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={` p-3  font-medium text-md rounded-b-md shadow-md flex gap-1 items-center active:bg-black/30 ${
              focus ? "hidden" : "null"
            }`}
            onClick={() => {
              focusOrigin
                ? setOrigin(suggestion.description)
                : setDestination(suggestion.description);
              origin && destination ? setCab(true) : setCab(false);
            }}
          >
            <ImLocation2 className="size-6 shrink-0 text-gray-700" />
            <div type="display" disabled className={"w-full"}>
              {suggestion.description}
            </div>
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
            rideAccepted,
          }}
        />
      )}
      {rideAccepted && <DriverCard started={started} />}
    </>
  );
};

export default Booking;
