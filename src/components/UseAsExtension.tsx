import type React from "react";
import { ContentSectionWwp } from "./ui/ContentSectionWWp";

interface UseAsExtensionProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    isImageLeft?: boolean;
  };
}

export const UseAsExtension: React.FC<UseAsExtensionProps> = ({ content }) => {
  return (
    <div className="bg-[#043873] py-[101px] text-white!">
      <ContentSectionWwp
        title={content.title}
        description={content.description}
        buttonText={content.buttonText}
        imageUrl={content.imageUrl}
        imageAlt={content.imageAlt}
        isImageLeft={content.isImageLeft ?? false}
      />
    </div>
  );
};
