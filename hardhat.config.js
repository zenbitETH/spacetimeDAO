require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("./tasks")
require("dotenv").config()
// require('@nomiclabs/hardhat-waffle')

// module.exports = {
//   networks: {
//     hardhat: {
//       blockGasLimit: 8000000,
//     },
//     filecoin: {
//       url: "http://127.0.0.1:1234",
//       type: "filecoin"
//     }
//   },
//   solc: {
//     version: "0.8.0",
//     optimizer: {
//       enabled: true,
//       runs: 200
//     }
//   }
// };


const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hyperspace",
    networks: {
        hyperspace: {
            chainId: 3141,
            url: "https://api.hyperspace.node.glif.io/rpc/v1",
            accounts: [PRIVATE_KEY],
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
}
