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
  const sectionHeight =
    sections.length > 0 ? `${100 / sections.length}vh` : "auto";

  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case "hero":
        return <HeroSection key={index} {...section} />;
      case "image-text":
        return <ImageTextSection key={index} {...section} />;
      case "data":
        return <DataSection key={index} {...section} />;
      default:
        return (
          <div className="bg-error text-error-content p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Unknown Section Type</h3>
            <p>{`Unknown section type: ${(section as any).type}`}</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full p-8">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{ height: sectionHeight }}
          className="overflow-auto mb-8 last:mb-0"
        >
          {renderSection(section, index)}
        </div>
      ))}
    </div>
  );
};

export default MarketingLandingPage;
