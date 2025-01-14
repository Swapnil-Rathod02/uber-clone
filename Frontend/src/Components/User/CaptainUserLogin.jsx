import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CaptainUserlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen bg-cover bg-bottom flex justify-center items-center  bg-black/80">
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-80 space-y-2 ">
        <h2 className="text-xl font-bold mb-4 text-center">Welcome Back</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
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
              className="block  text-white font-semibold mb-2"
            >
              Password
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
            Login
          </button>
        </form>
        <p className="text-white mb-2">
          new here??
          <Link to="/signup"> Create New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainUserlogin;
