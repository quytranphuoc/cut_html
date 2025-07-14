import React from "react";

interface ContentButtonProps {
  content: {
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
  };
}

export const ContentButton: React.FC<ContentButtonProps> = ({ content }) => {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="container-custom justify-items-center items-center mt-[172px]! py-[33px]!">
        <p className="max-w-[676px] mx-auto  md:text-[60px] sm:text-[40px] text-[30px] font-bold text-[#1e1e1e] opacity-90 text-center">
          {content.title}
        </p>
        <div className="flex justify-center items-center bg-[#4caf4f] w-[180px] h-[52px] border-solid border-[#4caf4f] text-white rounded-[5px] mt-[20px] justify-self-center">
          <a
            href="#"
            title="Get a Demo"
            className="flex items-center gap-2 text-md font-inter text-white font-semibold"
          >
            Get a Demo
            <img src="https://placehold.co/17x10" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};
