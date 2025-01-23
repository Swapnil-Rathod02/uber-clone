import { createContext, useState } from "react";

export const RideContext = createContext(null);

const RideProvider = ({ children }) => {
  const [rideData, setRideData] = useState({});
  const [driver, setDriver] = useState({});

  return (
    <RideContext.Provider value={{ rideData, setRideData, driver, setDriver }}>
      {children}
    </RideContext.Provider>
  );
};

export default RideProvider;
