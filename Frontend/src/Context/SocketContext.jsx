import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const socketContext = createContext();

export const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

const SocketProvider = ({ children }) => {
  const socket = io(`${import.meta.env.VITE_BASE_URL}`);
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};

export default SocketProvider;
