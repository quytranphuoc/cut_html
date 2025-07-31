import type React from "react";
import { Button } from "./Button_wp";
import { TitleOverlay } from "./TitleOverlay";

interface ContentSectionWwpProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt?: string;
  isImageLeft?: boolean;
}

export const ContentSectionWwp: React.FC<ContentSectionWwpProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  isImageLeft = false,
}) => {
  return (
    <div className="container-custom mx-auto px-4">
      <div
        className={`flex flex-col xl:flex-row gap-[30px] xl:gap-[96px] items-center ${
          isImageLeft ? "" : "xl:flex-row-reverse"
        }`}
      >
        <div className="max-w-[620px]">
          <img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
        </div>
        <div className="flex-1 text-center items-center content-center md:text-left">
          <div className="max-w-[449px] relative items-center top-[-40px]">
            <TitleOverlay title={title} variant="primary" size="lg" />
          </div>
          <p className="text-lg opacity-80 mb-8 mt-[70px]">{description}</p>
          <Button className="w-[153px] mx-auto md:mx-0">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
