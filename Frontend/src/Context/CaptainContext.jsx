import { createContext, useState } from "react";

export const CaptainContex = createContext({});

const CaptainContexProvider = ({ children }) => {
  const [captain, setCaptain] = useState({});
  return (
    <CaptainContex.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainContex.Provider>
  );
};

export default CaptainContexProvider;
