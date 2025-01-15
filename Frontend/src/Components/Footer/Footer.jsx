import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BiGridHorizontal } from "react-icons/bi";
import { BsBookmarkDashFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="shadow-md flex p-3 justify-between  w-full items-baseline absolute bottom-0">
      <div className="">
        <MdHomeFilled className="size-9 ml-2" />
        <h2 className="text-xl font-bold">Home</h2>
      </div>
      <div className="">
        <BiGridHorizontal className="size-9 ml-2" />
        <h2 className="text-xl font-bold">Services</h2>
      </div>
      <div className="">
        <BsBookmarkDashFill className="size-8 ml-4" />
        <h2 className="text-xl font-bold">Activity</h2>
      </div>
      <div className="">
        <IoPersonSharp className="size-9 ml-4" />
        <h2 className="text-xl font-bold">Account</h2>
      </div>
    </footer>
  );
}

export default Footer;
