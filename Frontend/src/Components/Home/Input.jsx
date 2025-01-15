import React, { useContext } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { UserDataContext } from "../../Context/UserContext";

function Input() {
  const user = useContext(UserDataContext);
  console.log(user);
  return (
    <div
      id="input"
      className="flex w-full p-3 mt-4 bg-black/40 rounded-full justify-between items-center shrink-0"
    >
      <FaMagnifyingGlass className="size-7 ml-2 shrink-0" />
      <input
        className="border-none focus:outline-none bg-transparent text-black text-xl font-medium p-1 placeholder:text-black"
        type="text"
        placeholder="Enter pickup point"
      />
      <div className="flex justify-between rounded-full content-center  bg-transparent box-border p-1 w-32 ">
        <IoTime className="size-8" />
        <select
          name=""
          id=""
          className="bg-transparent mr-1 font-bold text-lg shrink-0"
        >
          <option value={Date.now}>Now</option>
          <option value="" typeof="date">
            Later
          </option>
        </select>
      </div>
    </div>
  );
}

export default Input;
