require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

module.exports = {
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]  // Add '0x' to the private key if it's not already included
    }
  },
  solidity: "0.8.20"
};
