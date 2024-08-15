import React from "react";
import { HeroSection as HeroSectionType } from "@/types";

const HeroSection: React.FC<HeroSectionType> = ({ imageURI }) => {
  if (!imageURI) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-error text-error-content p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Hero Section Error</h3>
          <p>HeroSection: imageURI is required</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="hero h-full rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageURI})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content p-8">
        <div className="max-w-md">
          <h1 className="mb-8 text-5xl font-bold">Hero Section</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
