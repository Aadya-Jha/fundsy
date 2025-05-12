import React from "react";

const Card = (props) => {
  return (
    <div
      className={`h-90 w-64 p-5 mx-8 my-4 rounded-lg flex flex-col items-center shadow-2xl hover:shadow-2xl 
        ${props.className}`}
    >
      <img
        className="h-48 w-full mb-5 flex flex-col items-center rounded-lg justify-center shadow-xl"
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

      {/* Buttons Row */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={props.onDonate}
          className="bg-olive text-black font-sans text-sm font-semibold px-4 py-2 rounded-full hover:bg-purple-dark transition duration-300"
        >
          Donate
        </button>
        <button
          onClick={props.onViewLedger}
          className="bg-pink text-white font-sans text-sm font-semibold px-4 py-2 rounded-full  transition duration-300"
        >
          View Ledger
        </button>
      </div>
    </div>
  );
};

export default Card;
