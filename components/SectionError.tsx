import React from "react";

interface SectionErrorProps {
  message: string;
}

const SectionError: React.FC<SectionErrorProps> = ({ message }) => {
  return (
    <div className="bg-error text-error-content p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Section Error</h3>
      <p>{message}</p>
    </div>
  );
};

export default SectionError;
