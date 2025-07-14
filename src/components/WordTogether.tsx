import type React from "react";
import { ContentSectionWwp } from "./ui/ContentSectionWWp";

interface WordTogetherProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    top?: string;
    isImageLeft?: boolean;
  };
}

export const WordTogether: React.FC<WordTogetherProps> = ({ content }) => {
  return (
    <div className="bg-[#fff] pt-[24px] pb-[100px]">
      <ContentSectionWwp
        title={content.title}
        description={content.description}
        buttonText={content.buttonText}
        imageUrl={content.imageUrl}
        imageAlt={content.imageAlt}
        isImageLeft={content.isImageLeft ?? true}
      />
    </div>
  );
};
