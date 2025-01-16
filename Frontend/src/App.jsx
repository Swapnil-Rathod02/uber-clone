import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Components/User/UserLogin";
import UserSingUp from "./Components/User/UserSingUp";
import CaptainUserlogin from "./Components/User/CaptainUserLogin";
import Hero from "./Components/Hero";
import Home from "./Components/Home/Home";
import CaptainRegistration from "./Components/User/CaptainRegistration";
import UserWrappper from "./Components/UserWrappper";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route
          path="/"
          element={
            <UserWrappper>
              <Home />
            </UserWrappper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSingUp />} />
        <Route path="/registration" element={<CaptainRegistration />} />
        <Route path="/captainlogin" element={<CaptainUserlogin />} />
      </Routes>
    </>
  );
}

export default App;
