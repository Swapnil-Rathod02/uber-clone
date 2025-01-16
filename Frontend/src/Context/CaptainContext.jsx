import { createContext, useState } from "react";

const CaptainContex = createContext({});

const CaptainContexProvider = ({ children }) => {
  const [captain, setCaptain] = useState({});
  return (
    <CaptainContex.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainContex.Provider>
  );
};

export default CaptainContexProvider;
