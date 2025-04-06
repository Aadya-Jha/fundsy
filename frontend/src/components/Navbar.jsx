import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const [walletAddress, setWalletAddress] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to connect MetaMask wallet
  //   const connectWallet = async () => {
  //     if (window.ethereum) {
  //       try {
  //         const accounts = await window.ethereum.request({
  //           method: "eth_requestAccounts",
  //         });
  //         setWalletAddress(accounts[0]);
  //       } catch (error) {
  //         console.error("User rejected the request:", error);
  //       }
  //     } else {
  //       alert("MetaMask is not installed. Please install it to use this app.");
  //     }
  //   };

  // Function to toggle the mobile menu
  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };

  // Monitor account changes
  //   useEffect(() => {
  //     if (window.ethereum) {
  //       window.ethereum.on("accountsChanged", (accounts) => {
  //         if (accounts.length > 0) {
  //           setWalletAddress(accounts[0]);
  //         } else {
  //           setWalletAddress(null);
  //         }
  //       });

  //       window.ethereum.on("chainChanged", () => {
  //         window.location.reload();
  //       });
  //     }
  //   }, []);

  const navItems = [
    // { name: 'Home', link: '/' },
    { name: "Explore", link: "/explore" },
    { name: "About", link: "/about" },
    { name: "FAQs", link: "/faqs" },
  ];

  return (
    <nav className="w-full bg-beige-dark shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="../src/assets/logo.png"
              alt="Fundsy Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
          <a
            href="/"
            className="text-lg sm:text-2xl font-extrabold tracking-wide text-violet-950"
          >
            Fundsy
          </a>
        </div>

        {/* <div className="hamburger-menu">
        <button onClick={toggleMenu} className="hamburger-button">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div> */}

        <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-base">
          <a
            href="/"
            className="text-gray-700 hover:bg-purple font-semibold  hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md transition"
          >
            Home
          </a>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-700 font-semibold hover:bg-purple hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-olive px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-purple transition">
            Wallet Connected
          </button>
        </div>

        {/* Mobile toggle
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-2">
          <a href="/" className="text-gray-700 hover:text-purple">
            Home
          </a>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-700 hover:text-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-olive px-4 py-2 rounded-md text-sm font-medium hover:bg-purple transition">
            Wallet Connected
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
