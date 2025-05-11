import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional for future toggle
import logo from "../assets/logo.png"; // correct path assumed

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("User rejected the request:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts.length > 0 ? accounts[0] : null);
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const navItems = [
    { name: "Explore", link: "/explore" },
    { name: "About", link: "/about" },
    { name: "FAQs", link: "/faq" },
  ];

  return (
    <nav className="w-full bg-beige-dark shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={logo}
              alt="Fundsy Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
          <Link
            to="/"
            className="text-lg sm:text-2xl font-extrabold tracking-wide text-violet-950"
          >
            Fundsy
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-base">
          <Link
            to="/"
            className="text-gray-700 hover:bg-purple font-semibold hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md transition"
          >
            Home
          </Link>
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
          <button
            onClick={connectWallet}
            className={`px-2 text-black sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition ${
              walletAddress
                ? "bg-olive "
                : "bg-pink hover:bg-purple hover:text-white"
            }`}
          >
            {walletAddress ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-2">
          <Link to="/" className="text-gray-700 hover:text-purple">
            Home
          </Link>
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
          <button
            onClick={connectWallet}
            className="bg-olive px-4 py-2 rounded-md text-sm font-medium hover:bg-purple transition"
          >
            {walletAddress ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
