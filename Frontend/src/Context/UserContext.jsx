import { createContext, useState } from "react";

export const UserDataContext = createContext({});

const UserContex = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContex;
