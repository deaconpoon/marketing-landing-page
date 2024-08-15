import { useState } from "react";
import Editor from "@/components/Editor";
import MarketingLandingPage from "@/components/MarketingLandingPage";
import useJSONParser from "@/hooks/useJSONParser";

const defaultJSON = `[
  {
    "type": "hero",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
  },
  {
    "type": "image-text",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
    "text": "Sunset from the sky......",
    "title": "Airplane",
    "leftToRight": false
  },
  {
    "type": "data",
    "url": "https://cat-fact.herokuapp.com/facts"
  }
]`;

export default function HomePage() {
  const [jsonInput, setJsonInput] = useState(defaultJSON);
  const { parsedSections, error } = useJSONParser(jsonInput);

  const handleInputChange = (value: string) => {
    setJsonInput(value);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 flex flex-col">
        <div className="flex-grow">
          <Editor value={jsonInput} onChange={handleInputChange} />
        </div>
        {error && <div className="text-error mt-2">{error}</div>}
      </div>
      <div className="w-full lg:w-1/2 p-4 overflow-auto bg-base-200">
        <MarketingLandingPage sections={parsedSections} />
      </div>
    </div>
  );
}
