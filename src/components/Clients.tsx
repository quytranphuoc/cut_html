import type React from "react";

interface ClientLogo {
  id: number;
  name: string;
  logoUrl: string;
}

interface ClientsProps {
  content: {
    title: string;
    description: string;
    logos: ClientLogo[];
  };
}

export const Clients: React.FC<ClientsProps> = ({ content }) => {
  return (
    <section className="container-custom bg-white">
      <div className="justify-items-center mt-[50px] text-center">
        <h2 className="font-bold text-3xl lg:text-[45px] text-[#1e1e1e] opacity-80">
          {content.title}
        </h2>
        <p className="text-lg font-regular text-[#1e1e1e] opacity-80 mt-[20px]">
          {content.description}
        </p>
      </div>
      <div className="lg:justify-between justify-center xl:gap-[80px] lg:gap-[30px] gap-[20px] mx-auto mt-[50px] flex-wrap flex">
        {content.logos.map((logo) => (
          <div key={logo.id} className="p-[20px]">
            <img
              src={logo.logoUrl}
              alt={logo.name}
              className="w-[45px] h-[50px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
