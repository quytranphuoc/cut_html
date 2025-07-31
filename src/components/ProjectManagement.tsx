import type React from "react";
import { ContentSectionWwp } from "./ui/ContentSectionWWp";

interface ProjectManagementProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    isImageLeft?: boolean;
  };
}

export const ProjectManagement: React.FC<ProjectManagementProps> = ({
  content,
}) => {
  return (
    <div className="bg-[#fff] pt-[109px] pb-[36px]">
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
