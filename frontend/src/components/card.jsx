import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      className={` h-90 w-64  p-5 mx-8 my-4 rounded-lg flex flex-col items-center shadow-2xl hover:shadow-2xl 
         ${props.className}`}
    >
      <img
        className="h-48 w-full mb-5 flex flex-col items-center rounded-lg justify-center shadow-xl "
        src={props.source}
        alt=""
      />
      <h3 className="text-gray-800 font-sans text-lg font-bold text-center">
        {props.title}
      </h3>
      <p className="text-gray-800 font-sans text-md font-normal text-center">
        {props.amount}
      </p>
      <p className="text-red-400 font-sans text-lg font-light text-center">
        {props.time}
      </p>
      <Link to="/donate">
        <button className="bg-olive hover:cursor-pointer hover:scale-110 text-black font-sans text-lg font-semibold px-6 py-2 rounded-full mt-2 hover:bg-purple-dark transition duration-300">
          Donate
        </button>
      </Link>
    </div>
  );
};

export default Card;
