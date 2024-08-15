import React from "react";
import { ImageTextSection as ImageTextSectionType } from "@/types";

const ImageTextSection: React.FC<ImageTextSectionType> = ({
  imageURI,
  text,
  title,
  leftToRight = true,
}) => {
  if (!imageURI || !text) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-error text-error-content p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Image-Text Section Error</h3>
          <p>
            {!imageURI && "ImageTextSection: imageURI is required"}
            {!imageURI && !text && <br />}
            {!text && "ImageTextSection: text is required"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col ${
        leftToRight ? "md:flex-row" : "md:flex-row-reverse"
      } h-full rounded-lg overflow-hidden`}
    >
      <div className="w-full md:w-1/2 h-full">
        <img
          src={imageURI}
          alt={title || "Image"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center bg-base-200">
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageTextSection;
