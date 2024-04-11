# Semi-Fungible ERC-404 Token Marketplace

This project demonstrates a basic Hardhat use case in which we will be creating a Semi-Fungible ERC-404 Token Marketplace with the help of Hardhat, ReactJS and Solidity.

ERC-404 is not a standard Ethereum Improvement Proposal (EIP) or a known token standard within the Ethereum ecosystem. Generally, ERC stands for Ethereum Request for Comment, and it's a formal way of proposing improvements to the Ethereum network. ERC standards define rules and guidelines for various aspects of Ethereum, such as token creation, smart contracts, and interfaces.

Some well-known ERC standards include:

ERC-20: This is the most widely adopted standard for fungible tokens on Ethereum. It defines a set of rules that token contracts must follow to facilitate interoperability between different tokens and decentralized applications (DApps).

ERC-721: This standard defines a non-fungible token (NFT) interface, allowing unique digital assets to be represented on the Ethereum blockchain. Each token is unique and can represent ownership of a specific asset.

ERC-1155: This standard is a multi-token standard that supports both fungible and non-fungible tokens within the same contract. It provides greater flexibility for developers to create different types of tokens within a single contract.

If ERC-404 is mentioned in a context related to Ethereum, it could be a typographical error or a reference to a non-standard or custom token standard developed by a specific project. Without more information, it's difficult to determine the exact meaning of ERC-404. If you have additional context or details about ERC-404, feel free to provide them, and I can offer further assistance.

Run the following command to install the dependencies:

```shell
npm install dotenv --save --force
npm install --save-dev hardhat --force
npm install --force
```

Then create a ```.env``` file in which paste your PRIVATE_KEY inside it.

Try running some of the following tasks to test your project:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```