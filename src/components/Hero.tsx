import type React from "react";
import { SlideSection } from "./ui/SlideSection";

interface HeroSectionProp {
  content: {
    slides: {
      title: string;
      highlight: string;
      description: string;
      buttonText: string;
      imageUrl: string;
      imageAlt: string;
    }[];
  };
}

export const Hero: React.FC<HeroSectionProp> = ({ content }) => {
  return <SlideSection slides={content.slides} className="" isImageLeft={false} />;
};
