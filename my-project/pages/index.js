import Container from "../components/Container";

import ProjectCard from "../components/ProjectCard";

import { GiArtificialIntelligence } from "@react-icons/all-files/gi/GiArtificialIntelligence";
import { GiFarmer } from "@react-icons/all-files/gi/GiFarmer";
import { GiLightningHelix } from "@react-icons/all-files/gi/GiLightningHelix";

export default function Home() {
  return (
    <Container
      title="Jacob Albrecht - Web 3 Dev"
      description="Web-3 Developer and Advocate. Python and Solidity"
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi, I’m Jacob
        </h1>

        <h2 className="text-gray-600 dark:text-gray-400 mb-4 mt-4 font-light tracking-wide leading-loose">
          I’m a Backend Web 3 Developer and advocate focused on building
          decentralized applications. My experience ranges from building Yearn
          style vaults and strategies to creating generative NFT sets and
          Marketplaces. You'll find all my work here and on Github
        </h2>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="GPT-Loot"
          description="100% on-chain text based NFT generation using GPT-3 with Chainlink. Generate an NFT set from any theme, auto-deploy the contract and trade with others"
          href="https://gptloot.com/"
          icon={<GiArtificialIntelligence size="35" />}
          tags={[
            "Brownie",
            "Python",
            "JS",
            "React",
            "Ethers",
            "Chainlink",
            "NFT",
          ]}
          badge={true}
          color="blue-500"
          badgeText="Chainlink Sponser Prize Winner @ ETH-Global"
        />
        <ProjectCard
          title="Arbitrum Yield Farming Strategy"
          description="Yield Farming Strategy that Farms tokens on Curve's TriCrypto Pool deployed on Arbitrum using Badger Finance's Strategy Architecture"
          href="https://github.com/jalbrekt85/Tricrypto-Arbitrum-Strategy"
          icon={<GiFarmer size="35" />}
          tags={["Brownie", "Python", "Strategies", "Badger Finance", "Yearn"]}
          badge={true}
          color="yellow-500"
          badgeText="Winner of Badger Bounty @ Gitcoin"
        />

        <ProjectCard
          title="Curve + QuickSwap Flashloan Arbitrage"
          description="Performs arbitrage between Curve and QuickSwap using the Flashloan Mix deployed on Polygon"
          href="https://github.com/jalbrekt85/Flashloan-Strategy"
          icon={<GiLightningHelix size="35" />}
          tags={["Brownie", "Python", "Flashloan", "Aave"]}
        />
      </div>
    </Container>
  );
}
