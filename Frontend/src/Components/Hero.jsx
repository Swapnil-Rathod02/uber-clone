import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

function Hero() {
  return (
    <div
      className="bg-cover bg-bottom h-screen w-screen  !box-border text-white"
      style={{ backgroundImage: "url('./uber_home.jpg')" }}
    >
      <Link
        to="/home"
        className="flex gap-3 w-full h-20 bg-slate-600 rounded-t-md absolute bottom-0 items-center justify-center"
      >
        <h3 className="text-3xl font-bold ">Getting started!</h3>
        <FaArrowCircleRight className="size-10 " />
      </Link>
    </div>
  );
}

export default Hero;
