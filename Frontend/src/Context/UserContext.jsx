import { createContext } from "react";

export const UserDataContext = createContext({});

const UserContex = ({ children }) => {
  const user = "shivam";
  return (
    <UserDataContext.Provider value={user}>{children}</UserDataContext.Provider>
  );
};

export default UserContex;
