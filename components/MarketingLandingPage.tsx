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

  return (
    <div className="flex flex-col h-full">
      {sections.map((section, index) => {
        const SectionComponent = (() => {
          switch (section.type) {
            case "hero":
              return HeroSection;
            case "image-text":
              return ImageTextSection;
            case "data":
              return DataSection;
            default:
              return null;
          }
        })();

        return SectionComponent ? (
          <div
            key={index}
            style={{ height: sectionHeight }}
            className="overflow-auto"
          >
            <SectionComponent {...section} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MarketingLandingPage;
