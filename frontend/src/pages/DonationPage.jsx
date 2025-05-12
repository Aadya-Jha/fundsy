import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const DonationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    donorName: "",
    donationAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const sender = accounts[0];

      const amountInEth = parseFloat(formData.donationAmount);
      if (isNaN(amountInEth) || amountInEth <= 0) {
        alert("Please enter a valid donation amount.");
        return;
      }

      const amountInWei = BigInt(Math.floor(amountInEth * 1e18)).toString(16); // ETH to Wei in hex

      const tx = {
        from: sender,
        to: "0x7961c69914498d0d8bfAEf7eC45D24B4e96DDd71", // <-- Replace this
        value: "0x" + amountInWei,
      };

      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [tx],
      });

      console.log("Transaction sent! Hash:", txHash);

      // Reset the form
      setFormData({
        donorName: "",
        donationAmount: "",
      });

      // Navigate to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + (error.message || "Unknown error"));
    }
  };

  return (
    <div className="bg-[#fefcf8] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-beige-dark rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          Donate Ethereum
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black mb-2" htmlFor="donorName">
              Your Name
            </label>
            <input
              type="text"
              id="donorName"
              name="donorName"
              required
              className="w-full p-3 bg-[#fefcf8] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple"
              value={formData.donorName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-black mb-2" htmlFor="donorAddress">
              Wallet Address
            </label>
            <input
              type="text"
              id="donorAddress"
              name="donorAddress"
              required
              className="w-full p-3 bg-[#fefcf8] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple"
              value={formData.donorAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-black mb-2" htmlFor="donationAmount">
              Donation Amount (ETH)
            </label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              required
              min="0.000001"
              step="0.000001"
              className="w-full p-3 bg-[#fefcf8] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple"
              value={formData.donationAmount}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-olive hover:bg-[#c6caa1] text-black py-3 rounded-lg text-lg font-bold transition-colors"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
