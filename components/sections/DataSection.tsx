import React, { useState, useEffect } from "react";
import { DataSection as DataSectionType } from "@/types";

const DataSection: React.FC<DataSectionType> = ({ url }) => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setError("DataSection: url is required");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(JSON.stringify(result, null, 2));
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="loading loading-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="bg-error text-error-content p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">Data Section Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">Data Section</h2>
      <pre className="bg-base-200 p-4 rounded-lg overflow-auto flex-grow">
        <code>{data}</code>
      </pre>
      <button
        className="btn btn-primary mt-4"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
};

export default DataSection;
