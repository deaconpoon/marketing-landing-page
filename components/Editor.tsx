import React from "react";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      className="textarea textarea-bordered w-full h-full min-h-[300px]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter JSON here..."
    />
  );
};

export default Editor;
