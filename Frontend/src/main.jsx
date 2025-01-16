import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContex from "./Context/UserContext.jsx";
import CaptainContexProvider from "./Context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContexProvider>
      <UserContex>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContex>
    </CaptainContexProvider>
  </StrictMode>
);
