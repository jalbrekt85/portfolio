import React from "react";
import ProjectCard from "../components/ProjectCard";

import { GiArtificialIntelligence } from "@react-icons/all-files/gi/GiArtificialIntelligence";
import { GiFarmer } from "@react-icons/all-files/gi/GiFarmer";
import { GiLightningHelix } from "@react-icons/all-files/gi/GiLightningHelix";

const Projects = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Projects
      </h3>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#60A5FA" offset="0%" />
          <stop stopColor="#6366F1" offset="100%" />
        </linearGradient>
      </svg>

      <ProjectCard
        title="GPT-Loot"
        description="100% on-chain text based NFT generation using GPT-3 with Chainlink. Generate an NFT set from any theme, auto-deploy the contract and trade with others"
        href="https://gptloot.com"
        icon={
          <GiArtificialIntelligence
            size="35"
            style={{ fill: "url(#blue-gradient)" }}
          />
        }
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
        icon={<GiFarmer size="35" style={{ fill: "url(#blue-gradient)" }} />}
        tags={["Brownie", "Python", "Strategies", "Badger Finance", "Yearn"]}
        badge={true}
        color="yellow-500"
        badgeText="Winner of Badger Bounty @ Gitcoin"
      />

      <ProjectCard
        title="Curve + QuickSwap Flashloan Arbitrage"
        description="Performs arbitrage between Curve and QuickSwap using flashloans deployed on Polygon"
        href="https://github.com/jalbrekt85/Flashloan-Strategy"
        icon={
          <GiLightningHelix size="35" style={{ fill: "url(#blue-gradient)" }} />
        }
        tags={["Brownie", "Python", "Flashloan", "Aave"]}
      />
    </div>
  );
};

export default Projects;
