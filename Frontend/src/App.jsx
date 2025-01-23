import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Components/User/UserLogin";
import UserSingUp from "./Components/User/UserSingUp";
import CaptainUserlogin from "./Components/Captain/CaptainUserLogin";
import CaptainRegistration from "./Components/Captain/CaptainRegistration";
import HomeCaptain from "./Components/Captain/Home.Captain";
import CaptainWrapper from "./Components/Captain/CaptainWrapper";
import UserWrappper from "./Components/User/UserWrappper";
import Booking from "./Components/Booking/Booking";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route
          path="/"
          element={
            <UserWrappper>
              <Booking />
            </UserWrappper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSingUp />} />

        <Route path="/registration" element={<CaptainRegistration />} />
        <Route path="/captainlogin" element={<CaptainUserlogin />} />
        <Route
          path="/captain-home"
          element={
            <CaptainWrapper>
              <HomeCaptain />
            </CaptainWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
