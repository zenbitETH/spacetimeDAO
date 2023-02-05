const StorageDeal = artifacts.require("StorageDeal");

module.exports = async function(deployer) {
  await deployer.deploy(StorageDeal);
};
