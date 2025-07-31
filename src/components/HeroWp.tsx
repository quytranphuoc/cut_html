import type React from "react";
import { ContentSectionBlWp } from "./ui/ContentSectionBlWp";

interface HeroWpProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    isImageLeft?: boolean;
  };
}

export const HeroWp: React.FC<HeroWpProps> = ({ content }) => {
  return (
    <div className="bg-[#043873] pt-[191px]! pb-[107px]!">
      <ContentSectionBlWp
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
