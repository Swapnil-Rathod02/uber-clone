import { createContext, useState } from "react";

export const RideContext = createContext(null);

const RideProvider = ({ children }) => {
  const [rideData, setRideData] = useState({});

  return (
    <RideContext.Provider value={{ rideData, setRideData }}>
      {children}
    </RideContext.Provider>
  );
};

export default RideProvider;
