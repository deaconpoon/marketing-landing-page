import { useState } from "react";
import Editor from "@/components/Editor";
import MarketingLandingPage from "@/components/MarketingLandingPage";
import useJSONParser from "@/hooks/useJSONParser";

export default function HomePage() {
  const [jsonInput, setJsonInput] = useState("");
  const { parsedSections, error } = useJSONParser(jsonInput);

  const handleInputChange = (value: string) => {
    setJsonInput(value);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
        <Editor value={jsonInput} onChange={handleInputChange} />
        {error && <div className="text-error mt-2">{error}</div>}
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-4">
        <MarketingLandingPage sections={parsedSections} />
      </div>
    </div>
  );
}
