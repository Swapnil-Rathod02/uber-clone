import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function CaptainRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainUser = {
      userName,
      email,
      password,
      phoneNumber: Number(phoneNumber),
    };
    // await axios.post();

    setEmail("");
    setUserName("");
    setPhoneNumber(" ");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen bg-cover bg-bottom flex justify-center items-center  bg-black/80">
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-80 space-y-1">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          Captain User
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label
              htmlFor="userName"
              className="block text-white font-semibold mb-2 "
            >
              User Name
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-950"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-1 mt-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-950"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block  text-white font-semibold mb-1 mt-1"
            >
              Enter Contact Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Enter contact number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-lime-950"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block  text-white font-semibold mb-1 mt-1"
            >
              Create Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-lime-950"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-950 text-white py-2 px-4 rounded-md  transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white mb-2">
          Already have account??
          <Link to="/captainlogin"> Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default CaptainRegistration;
