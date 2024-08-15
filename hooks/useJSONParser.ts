import { useState, useEffect } from 'react';
import { Section } from '@/types';

const useJSONParser = (jsonInput: string) => {
  const [parsedSections, setParsedSections] = useState<Section[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!jsonInput.trim()) {
      setParsedSections([]);
      setError(null);
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      if (Array.isArray(parsed)) {
        setParsedSections(parsed);
        setError(null);
      } else {
        throw new Error('Input must be an array of sections');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
      setParsedSections([]);
    }
  }, [jsonInput]);

  return { parsedSections, error };
};

export default useJSONParser;