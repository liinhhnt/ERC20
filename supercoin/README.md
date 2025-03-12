# Sample Hardhat ERC20 Project

This project demonstrates a basic Hardhat use case. It comes with a sample ERC20 contract name **NtlCoin**, a test for that contract, and a Hardhat Ignition module that deploys that contract.

TokenID: `0xD5f26cb62262245AADA9449ea4d37c6B789ddf13`

You can search this token on https://sepolia.etherscan.io/

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx npx hardhat ignition deploy ./ignition/modules/NtlCoin.js --network sepolia
```

In addition, you need install dotenv library
```shell
npm install --save dotenv
```