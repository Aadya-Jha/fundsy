import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYouPageReq = () => {
  return (
    <div className="h-screen bg-beige-light flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-purple mb-4 animate-bounce">
        Thank You!
      </h1>

      <p className="text-gray-600 mb-6 max-w-md">
        Thanks for believing in their potential. You’re making education
        possible.
      </p>
      <Link
        to="/"
        className="bg-olive text-black px-8 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg transition duration-300 transform hover:bg-purple hover:text-white hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPageReq;
