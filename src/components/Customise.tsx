import type React from "react";
import { ContentSectionWwp } from "./ui/ContentSectionWWp";

interface CustomiseProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt?: string;
  };
  isImageLeft?: boolean;
}

export const Customise: React.FC<CustomiseProps> = ({
  content,
  isImageLeft,
}) => {
  return (
    <div className="bg-[#fff] py-[101px]">
      <ContentSectionWwp
        title={content.title}
        description={content.description}
        buttonText={content.buttonText}
        imageUrl={content.imageUrl}
        imageAlt={content.imageAlt}
        isImageLeft={isImageLeft ?? false}
      />
    </div>
  );
};
