import React from "react";
import HeroSection from "./sections/HeroSection";
import ImageTextSection from "./sections/ImageTextSection";
import DataSection from "./sections/DataSection";
import SectionError from "./SectionError";
import { Section } from "@/types";

interface MarketingLandingPageProps {
  sections: Section[];
}

const MarketingLandingPage: React.FC<MarketingLandingPageProps> = ({
  sections,
}) => {
  const sectionHeight =
    sections.length > 0 ? `${100 / sections.length}vh` : "auto";

  const renderSection = (section: Section, index: number) => {
    try {
      switch (section.type) {
        case "hero":
          return <HeroSection key={index} {...section} />;
        case "image-text":
          return <ImageTextSection key={index} {...section} />;
        case "data":
          return <DataSection key={index} {...section} />;
        default:
          throw new Error(`Unknown section type: ${(section as any).type}`);
      }
    } catch (error) {
      return (
        <SectionError
          message={
            error instanceof Error ? error.message : "An unknown error occurred"
          }
        />
      );
    }
  };

  return (
    <div className="flex flex-col h-full">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{ height: sectionHeight }}
          className="overflow-auto"
        >
          {renderSection(section, index)}
        </div>
      ))}
    </div>
  );
};

export default MarketingLandingPage;
