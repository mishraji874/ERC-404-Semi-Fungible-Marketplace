# ERC-404 Semi-Fungible Marketplace
Welcome to the ERC-404 Semi-Fungible Marketplace repository! This project aims to provide a platform for trading semi-fungible tokens (SFTs) conforming to the ERC-404 standard on the Ethereum blockchain.

## What are Semi-Fungible Tokens (SFTs)?
Semi-fungible tokens combine the characteristics of both fungible and non-fungible tokens. While each SFT has a unique identity like NFTs, they can also be partially interchangeable, allowing for fractional ownership and divisible units within the same token type.

## ERC-404 Standard
The ERC-404 standard defines a set of rules and interfaces for semi-fungible tokens on Ethereum. It specifies methods for creating, transferring, and managing SFTs, enabling interoperability and compatibility across different platforms and applications.

### Features
Marketplace Functionality: Users can buy, sell, and trade semi-fungible tokens directly on the Ethereum blockchain.
Fractional Ownership: SFTs can represent fractional ownership of unique assets, allowing for shared ownership and investment opportunities.
Interoperability: Compliant with the ERC-404 standard, ensuring compatibility with other ERC-404 compliant contracts and platforms.
Decentralization: The marketplace operates on a decentralized network, providing transparency, security, and censorship resistance.
Customizable: Flexible architecture allows for customization and integration with various smart contract features and decentralized applications (DApps).

### Getting Started
To get started with the ERC-404 Semi-Fungible Marketplace:

1. Clone this repository to your local machine.
2. Install the necessary dependencies.
3. Deploy the smart contracts to the Ethereum blockchain.
4. Customize and configure the marketplace according to your requirements.
5. Launch the marketplace and start trading semi-fungible tokens!

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