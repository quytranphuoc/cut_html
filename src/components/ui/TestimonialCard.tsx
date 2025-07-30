import type React from "react";

interface TestimonialCardProps {
  quote: string;
  quoteIcon: string;
  authorName: string;
  authorPosition: string;
  authorAvatar: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  quoteIcon,
  authorName,
  authorPosition,
  authorAvatar,
}) => {
  return (
    <div className="bg-[#4f9cf9] hover:bg-white text-white hover:text-[#1e1e1e] flex flex-col justify-between rounded-[5px] border-solid border-[#4f9cf9] w-full h-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] mx-[10px] py-[45px] px-[24px] mt-[30px]">
      <div className="flex-1">
        <img
          src={quoteIcon}
          alt="Quote icon"
          className="w-auto h-auto mb-2 bg-[#4f9cf9]"
        />
        <p className="text-[15px] opacity-80 mt-[23px]">{quote}</p>
      </div>
      <hr />
      <div className=" max-h-[350px] flex items-center gap-[24px] mt-[40px]">
        <div>
          <img
            src={authorAvatar}
            alt={`${authorName}'s avatar`}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="space-y-[10px]">
          <p className="text-[20px] font-bold text-[#1e1e1e]">{authorName}</p>
          <p className="text-[15px]">{authorPosition}</p>
        </div>
      </div>
    </div>
  );
};
