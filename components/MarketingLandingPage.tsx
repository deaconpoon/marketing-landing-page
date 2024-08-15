import React from "react";
import HeroSection from "./sections/HeroSection";
import ImageTextSection from "./sections/ImageTextSection";
import DataSection from "./sections/DataSection";
import { Section } from "@/types";

interface MarketingLandingPageProps {
  sections: Section[];
}

const MarketingLandingPage: React.FC<MarketingLandingPageProps> = ({
  sections,
}) => {
  return (
    <div>
      {sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={index} {...section} />;
          case "image-text":
            return <ImageTextSection key={index} {...section} />;
          case "data":
            return <DataSection key={index} {...section} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default MarketingLandingPage;
