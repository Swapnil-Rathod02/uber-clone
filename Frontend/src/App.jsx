import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Components/User/UserLogin";
import UserSingUp from "./Components/User/UserSingUp";
import CaptainUserlogin from "./Components/User/CaptainUserLogin";
import Hero from "./Components/Hero";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSingUp />} />
        <Route path="/captain_login" element={<CaptainUserlogin />} />
      </Routes>
    </>
  );
}

export default App;
