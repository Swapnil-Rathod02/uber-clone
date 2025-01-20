import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContex from "./Context/UserContext.jsx";
import CaptainContexProvider from "./Context/CaptainContext.jsx";

import RideProvider from "./Context/RideContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContexProvider>
      <RideProvider>
        <UserContex>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContex>
      </RideProvider>
    </CaptainContexProvider>
  </StrictMode>
);
