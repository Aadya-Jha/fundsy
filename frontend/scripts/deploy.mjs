import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const DonationLedger = await ethers.getContractFactory("DonationLedger");
  const donationLedger = await DonationLedger.deploy();
  console.log("DonationLedger contract deployed to:", donationLedger.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
