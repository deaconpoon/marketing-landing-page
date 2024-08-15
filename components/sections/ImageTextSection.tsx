import React from "react";
import { ImageTextSection as ImageTextSectionType } from "@/types";

const ImageTextSection: React.FC<ImageTextSectionType> = ({
  imageURI,
  text,
  title,
  leftToRight = true,
}) => {
  return (
    <div
      className={`flex flex-col ${
        leftToRight ? "md:flex-row" : "md:flex-row-reverse"
      } h-full`}
    >
      <div className="w-full md:w-1/2 h-full">
        <img
          src={imageURI}
          alt={title || "Image"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageTextSection;
