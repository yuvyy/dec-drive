# Blockchain based eVault

### Steps to setup the Project

In Command Prompt

#### 1. Install project dependencies:

npm install

#### 2. Change the directory to the React app:

cd client

#### 3. Start the React development server:

npm start

#### 4. In another terminal, start the Ethereum test network:

npx hardhat node

#### 5. In yet another terminal, deploy the contracts to the local network:

npx hardhat run --network localhost scripts/deploy.js
