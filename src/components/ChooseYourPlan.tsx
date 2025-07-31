import type React from "react";
import { TitleOverlay } from "./ui/TitleOverlay";
import { Button } from "./ui/Button_wp";
import type { ReactNode } from "react";

interface BlogDescription {
  id?: number;
  iconUrl?: string;
  text: string;
  title?: string;
}

interface BlogArticle {
  title: ReactNode;
  id: number;
  label: string;
  cost: string;
  description: BlogDescription[];
  readMoreText: string;
}

interface ChooseYourPlanProps {
  content: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    articles: BlogArticle[];
  };
}

export const ChooseYourPlan: React.FC<ChooseYourPlanProps> = ({ content }) => {
  return (
    <section className="bg-[#fff] py-[101px]">
      <div className="container-custom mx-auto px-4">
        <div className="relative w-full max-w-[410px] mx-auto justify-items-center mt-[-38px]">
          <h2 className="absolute top-[0px] left-0 text-[3.125rem] font-bold z-[10]">
            {content.title}
          </h2>
          <img
            src="https://placehold.co/230x36"
            alt=""
            className="absolute justify-self-end top-[20px]"
          />
        </div>
        <p className="relative w-full max-w-[750px] mx-auto items-self-end z-[1] pt-[80px] text-center">
          {content.description}
        </p>
        <div className=" flex mx-auto items-center pt-[37px] justify-between lg:flex-row flex-col lg:gap-[20px] gap-[40px]">
          {content.articles.map((article) => (
            <div key={article.id}>
              <div className=" w-full md:w-[350px] hover:bg-[#043873] text-[#1e1e1e] hover:text-white scale-100 hover:scale-105 transition-all duration-300 cursor-pointer rounded-md border-[#ffe493] hover:border-[#043873] border-2 border-solid overflow-visible p-0 hover:px-[30px] hover:py-[30px]">
                <div className="p-[30px] rounded-md space-y-[19px]">
                  <p className="text-[15px] font-bold ">{article.label}</p>
                  <h3 className="text-[2.3rem] font-bold ">{article.cost}</h3>
                  <p>{article.title}</p>
                  {article.description.map((desc: BlogDescription) => (
                    <div key={desc.id} className="flex items-center gap-[10px]">
                      <img
                        src={desc.iconUrl}
                        alt={desc.iconUrl}
                        className="w-[17px] h-[17px]"
                      />

                      <p className="text-[15px] font-normal ">{desc.text}</p>
                    </div>
                  ))}

                  <div className="flex items-center gap-[10px]">
                    <Button variant="noline" size="md" className="w-full">
                      {article.readMoreText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
