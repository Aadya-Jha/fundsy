import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-beige-light min-h-[90vh] flex items-center justify-center px-6">
        <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl p-10 text-center max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink mb-6 animate-fade-in">
            Empower Education, One Block at a Time.
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-8">
            <span className="font-semibold">
              Fund a scholar, shape the future.
            </span>
          </p>
          <a
            href="/about"
            className="inline-block bg-olive hover:bg-purple text-gray-900 hover:text-white px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
