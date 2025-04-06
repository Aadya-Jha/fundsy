import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen bg-beige-light flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-purple mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for doesn't exist or has been moved. Let’s help
        you get back on track.
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

export default NotFound;
