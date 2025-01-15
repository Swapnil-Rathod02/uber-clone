import React from "react";

function Header() {
  return (
    <div className="w-full p-3 shadow-md">
      <div className="flex gap-2">
        <img src="/hatchback.png" alt="" className="size-10 " />
        <h1 className="text-3xl font-bold">Uber</h1>
      </div>
    </div>
  );
}

export default Header;
