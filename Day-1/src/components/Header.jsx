import React from "react";

const Header = () => {
  return (
    <div className="flex items-start justify-between px-5 py-5 bg-emerald-950">
      <h1 className="text-2xl text-white font-bold">WanderList</h1>
      <div className="flex items-start justify-between gap-8 ">
        <h1 className="text-xl text-white font-bold">About</h1>
        <h1 className="text-xl text-white font-bold">Contact</h1>
        <h1 className="text-xl text-white font-bold">Services</h1>
        <h1 className="text-xl text-white font-bold">Account</h1>
      </div>
    </div>
  );
};

export default Header;
