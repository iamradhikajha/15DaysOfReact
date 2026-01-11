import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Card = ({ name, profileImg, city, age, profession }) => {
  const handleClick = () => {
    alert(
      `Name: ${name}\nAge: ${age}\nCity: ${city}\nProfession: ${profession}`
    );
  };
  return (
    <div className="h-100 w-80 bg-white shadow-2xl  rounded-2xl p-6">
      <div>
        <img
          src={profileImg}
          alt={name}
          className=" ml-9 h-50 w-50 rounded-full"
        />
        <h1 className="mt-1 text-2xl text-red-700">{name}</h1>
        <p>
          {age}, {city}
        </p>
        <p className="text-xl text-blue-600">{profession}</p>
        <button
          onClick={handleClick}
          className="bg-emerald-700 h-10 w-full py-1 px-1 mt-3 text-white text-xl rounded-3xl"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
