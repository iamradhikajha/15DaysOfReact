import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-start justify-between px-5 py-5 bg-emerald-950">
      <h1 className="text-2xl text-white font-bold">WanderList</h1>
      <div className="flex items-start justify-between gap-8 underline text-xl text-white font-bold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/account">Account</Link>
      </div>
    </div>
  );
};

export default Header;
