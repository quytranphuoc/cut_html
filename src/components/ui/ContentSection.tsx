import type React from "react";
import { Button } from "./Button";

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  isImageLeft?: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  isImageLeft = false,
}) => {
  return (
    <section className="bg-white w-full">
      <div
        className={`container-custom flex flex-col md:flex-row mx-auto py-[52px] md:gap-[96px] gap-[30px] justify-between ${
          isImageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="max-w-[322px] mx-auto">
          <img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
        </div>
        <div className="flex-1 w-full mx-auto md:mx-0 text-center md:text-left content-center">
          <h2 className="max-w-[634px] font-bold text-lg lg:text-[40px] text-[#1e1e1e] opacity-80 mb-4 leading-[1.2]">
            {title}
          </h2>
          <p className="text-lg text-[#1e1e1e] opacity-80 mb-4">
            {description}
          </p>
          <Button className="w-[153px] md:mx-0 mx-auto">{buttonText}</Button>
        </div>
      </div>
    </section>
  );
};
