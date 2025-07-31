import type React from "react";
import { ContentSection } from "./ui/ContentSection";

interface ContactSectionProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    isImageLeft: boolean;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  return (
    <div className="py-[91px]">
      <ContentSection
        title={content.title}
        description={content.description}
        buttonText={content.buttonText}
        imageUrl={content.imageUrl}
        imageAlt={content.imageAlt}
        isImageLeft={content.isImageLeft}
      />
    </div>
  );
};
