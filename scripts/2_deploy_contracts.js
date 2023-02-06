const hre = require("hardhat");

async function main() {

const SpaceTimeDAO = await hre.ethers.getContractFactory("SpaceTimeDAO");
const spaceTimeDAO = await SpaceTimeDAO.deploy();

await spaceTimeDAO.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
