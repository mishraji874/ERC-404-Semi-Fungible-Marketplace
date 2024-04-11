require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */

const dotenv = require("dotenv");
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    hardhat: {
      initialDate: "1970-01-01T00:00:00Z",
      accounts: {
        accountsBalance: "1000000000000000000000000000000",
      },
      hardfork: "berlin",
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: privateKey(),
    }
  },
  solidity: "0.8.20",
  etherscan: {
    apiKey: "UMQ7GFP4KZACUUZW2UQGGZ4EJ8JAMCBTTU",
  },
};
