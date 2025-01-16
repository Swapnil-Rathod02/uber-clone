import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userDetail = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/login`,
      userDetail
    );

    if (response.status == 201) {
      setUserData(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <div
      className="h-screen w-screen bg-cover bg-bottom flex justify-center items-center "
      style={{ backgroundImage: "url('/uber_home.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-80 space-y-2 ">
        <h2 className="text-xl font-bold mb-4 text-center">Welcome Back</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
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
              className="block text-gray-700 font-semibold mb-2"
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

        <button className="mt-5 w-full">
          <Link
            to="/captainlogin"
            className="w-full  bg-amber-200 text-xl text-white p-1 rounded-md text-center mt-2"
          >
            Log in as Captain User
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
