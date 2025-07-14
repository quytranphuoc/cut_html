import type React from "react";
import { Button } from "./Button_wp";

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  isImageLeft?: boolean;
}

export const ContentSectionBlWp: React.FC<ContentSectionProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  isImageLeft = false,
}) => {
  return (
    <section className="w-full bg-[#c4def]">
      <div className="container-custom mx-auto">
        <div
          className={`flex flex-col xl:flex-row gap-[30px] xl:gap-[96px] items-center ${
            isImageLeft ? "" : "xl:flex-row-reverse"
          }`}
        >
          <div className="max-w-[620px]">
            <img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
          </div>
          <div className="flex-1 text-center items-center content-center md:text-left">
            <h2 className="max-w-[634px] font-bold text-2xl md:text-5xl text-white mb-6">
              {title}
            </h2>
            <p className="text-ms text-white opacity-80 mb-8 md:text-lg">
              {description}
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-[153px] mx-auto md:mx-0"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
