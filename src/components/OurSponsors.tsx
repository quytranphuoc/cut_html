import type React from "react";

interface OurSponsorsProps {
  content: {
    icons: {
      id: number;
      iconUrl: string;
    }[];
    title: string;
  };
}

export const OurSponsors: React.FC<OurSponsorsProps> = ({ content }) => {
  return (
    <section>
      <div className="container-custom mx-auto!  pt-[50px]! pb-[100px]!">
        <div className="relative flex flex-col items-center justify-center mx-auto max-w-[332px]">
          <h2 className="text-[3.125rem] font-bold text-[#1e1e1e] z-[100] text-center">
            {content.title}
          </h2>
          <div className="z-[10] mt-2 ml-[-251px]">
            <img
              src="https://placehold.co/266x26/ffe493/000000"
              alt=""
              className="absolute top-[36px] right-[14px]"
            />
          </div>
        </div>
        <div className="flex lg:justify-between justify-center gap-[20px] flex-wrap mt-[40px]">
          {content.icons.map((icon) => (
            <img src={icon.iconUrl} alt={icon.iconUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};
