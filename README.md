# SpaceTime DAO

Data DAO to incentivize citizen coordination with storage deals 

Developed at [Filecoin Space Warp](https://ethglobal.com/showcase/spacetimedao-ukw1r)  

## About
SpacetimeDAO is a decentralized platform for data management and governance proposals for public spaces. It uses a combination of smart contracts deployed on the Filecoin hyperspace network and a UI built with Next.js.

The platform creates storage deals for each governance cycle where users can create proposals backed by evidence, like photos, videos, or documents, related to public places. The proposals are evaluated by both citizens and government representatives acting as moderators.

The governance contract set access controls for proposal creators and moderators, enabling them to request additional evidence to verify the current state and location of each proposal.

With SpacetimeDAO, users can track the progress of governance proposals, see how decisions are being made, and participate in the process. The platform provides a secure, transparent, and decentralized solution for data management and governance proposals, promoting collaboration and trust in the public sector.
  
## How it's made

SpacetimeDAO is a decentralized application built on the Filecoin Virtual Machine (FVM). The project utilizes actors deployed on the FVM to manage the storage deals for the digital content uploaded by citizens. The digital content, such as photos and videos, is stored on the Filecoin network using Interplanetary File System (IPFS) for retrieval.

The user interface of SpacetimeDAO is built using Next.js, a JavaScript framework for building server-rendered React applications. It uses Tailwind CSS, a utility-first CSS framework, for styling and layout. The application also utilizes GPS coordinates to track the location of public places and to ensure that the digital content is properly associated with the correct location.


## Contracts

[SpacetimeDAO actor on Hyperspace testnet](https://hyperspace.filfox.info/en/tx/0xd9fb48c809f81b9a0b45e4d915b50d94aa01e9302d1b1b7d513df1fe065fb127
)  

### Built with:

- Next.js  
- Filecoin Hyperspace Network  
- js IPFS




### Dev Environment

Working with contracts deployed on Filecoin Hyperspace testnet (further update to deploy your own contracts)

1. Make `.env` in next-app root folder

```shell
cd next-app
touch .env
```

*You can use the .env.example as alternative*

add environment variable

```text
NEXT_PUBLIC_GOOGLE_MAPS_KEY=
```


2. Install dependencies

```bash
npm install
```

3. Start developmment

```bash
cd next-app
npm run dev
```

4. 📱 Open http://localhost:3000 to see the app
