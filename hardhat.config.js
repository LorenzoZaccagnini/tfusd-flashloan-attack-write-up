require("@nomiclabs/hardhat-waffle");
require('hardhat-ethernal');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/ZLEN1lDZkjLOggtOsp8PC2JmoOHVbror",
        blockNumber: 12517300
      }
    },
  },
  mocha: {
    timeout: 1200000,
  }
};



