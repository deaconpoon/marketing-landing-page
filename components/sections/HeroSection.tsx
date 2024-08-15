import React from "react";
import { HeroSection as HeroSectionType } from "@/types";

const HeroSection: React.FC<HeroSectionType> = ({ imageURI }) => {
  return (
    <div
      className="hero h-full"
      style={{ backgroundImage: `url(${imageURI})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hero Section</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
