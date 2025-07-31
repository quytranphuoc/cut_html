import type React from "react";
import { Button } from "./ui/Button_wp";

interface YourWorkProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const YourWork: React.FC<YourWorkProps> = ({ content }) => {
  return (
    <section className="bg-[#043873] pt-[130px] pb-[101px]">
      <div className="container-custom mx-auto px-4 ">
        <div className="relative w-full max-w-[718px] justify-items-center mt-[-38px] justify-self-center">
          <h2 className="absolute top-[0px] left-0 text-5xl font-bold z-[10] text-white justify-self-stretch">
            {content.title}
          </h2>
          <img
            src="https://placehold.co/230x36"
            alt=""
            className="absolute justify-self-end top-[20px]"
          />
        </div>
        <p className="relative w-full max-w-[750px] mx-auto items-self-end z-[1] pt-[80px] text-center text-white">
          {content.description}
        </p>
        <div className="flex justify-center mt-[50px]">
          <Button
            onClick={() => {
              window.open("https://whitepace.io", "_blank");
            }}
          >
            {content.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
