import type React from "react";
import { Card, CardContent } from "./ui/Cart";

interface CommunityCard {
  id: number;
  title: string;
  description: string;
  iconUrl?: string;
}

interface CommunitySectionProps {
  content: {
    title: string;
    description: string;
    cards: CommunityCard[];
    about: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  content,
}) => {
  return (
    <section className="container-custom bg-white">
      <h2 className="max-w-[704px] mx-auto font-bold text-3xl lg:text-[45px] text-[#1e1e1e] opacity-80 text-center mt-[60px] px-[20px]">
        {content.title}
      </h2>
      <p className="text-lg font-regular text-[#1e1e1e] opacity-80 text-center mt-[20px] px-[20px]">
        {content.description}
      </p>

      <div className="flex items-center xl:justify-between justify-center gap-[125px] mt-[50px] max-w-[1192px] mx-auto xl:flex-nowrap flex-wrap md:flex-row flex-col">
        {content.cards.map((card) => (
          <Card key={card.id} className="max-w-[302px] w-full">
            <CardContent className="text-center p-[26px]">
              <div className="w-[66px] h-[60px] mx-auto mb-[18px]">
                <img
                  className="w-full h-full"
                  src={card.iconUrl}
                  alt={card.title}
                />
              </div>
              <h3 className="font-bold text-lg lg:text-[30px] text-[#1e1e1e] opacity-80 text-center mb-[10px]">
                {card.title}
              </h3>
              <p className="text-[15px] font-regular text-[#1e1e1e] opacity-80">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
