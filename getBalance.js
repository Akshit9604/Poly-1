const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/monastery.sol/monastery.json");

const tokenAddress = "0xa8d947C4C9203C7d9Eb4efb91539E4fc0379B37D"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8f54c2A0c7ADC601800533b240E062F7cb2013F6"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
