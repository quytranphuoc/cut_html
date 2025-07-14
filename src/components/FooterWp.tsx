import type React from "react";
import { Button } from "./ui/Button_wp";

interface FooterLink {
  id: number;
  label: string;
  href: string;
}

interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  content: {
    logo: string;
    logoUrl: string;
    sections: FooterSection[];
    newsletter: {
      title: string;
      description: string;
      buttonText: string;
    };
    bottom: {
      links: {
        id: number;
        label: string;
        href: string;
        iconUrl1?: string;
        iconUrl2?: string;
      }[];
      icons: {
        id: number;
        iconUrl?: string;
      }[];
    };
    label: string;
    description: string;
    description2: string;
    buttonText: string;
    description3: string;
    icons: {
      id: number;
      iconUrl?: string;
    }[];
  };
}

export const FooterWp: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-[#043873] font-gilroy">
      <div className="container-custom mx-auto justify-items-center items-center py-[100px]!">
        <h2 className="text-white text-[3.3rem] font-bold max-w-[475px] text-center">
          {content.label}
        </h2>
        <p className="text-white text-lg font-regular">{content.description}</p>
        <p className="text-white text-lg font-regular">
          {content.description2}
        </p>
        <div className="flex justify-center my-[30px]">
          <Button variant="primary" size="sm" className="mx-auto md:mx-0 ">
            {content.buttonText}
          </Button>
        </div>
        <p className="text-white text-lg font-regular">
          {content.description3}
        </p>
        <div className="flex justify-center mt-[20px] gap-[30px] flex-wrap">
          {content.icons.map((icon) => (
            <img
              key={icon.id}
              src={icon.iconUrl}
              alt={`Icon ${icon.id}`}
              className="w-auto h-auto"
            />
          ))}
        </div>
      </div>
      <div className="container-custom flex  xl:flex-nowrap flex-wrap mx-auto items-start justify-between text-white py-[60px]! gap-[30px] xl:gap-0">
        <div className="w-[241px] h-auto  pr-[20px]">
          <h2 className="flex items-center gap-2 mb-[39px]">
            <img src={content.logoUrl} alt="Logo" />
            <span className="text-white text-[30px] font-bold">
              {content.logo}
            </span>
          </h2>
          <p className="text-white text-sm mb-[39px] opacity-80">
            {content.newsletter.description}
          </p>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap gap-[30px]">
          {content.sections.map((section) => (
            <div key={section.id} className="w-[134px] h-auto mr-[24px]">
              <h3 className="text-[20px] mb-[22px] font-bold">
                {section.title}
              </h3>
              <ul className="w-[134px] text-[13px] font-bold opacity-50 space-y-3 text-[#fff]">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      title={link.label}
                      className="hover:text-[#4caf4f] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-[207px] h-auto">
          <h3 className="text-[20px] mb-[22px] font-bold">
            {content.newsletter.title}
          </h3>
          <p className="text-white text-sm mb-[22px] opacity-80">
            {content.newsletter.description}
          </p>
          <button className="bg-[#4f9cf9] hover:bg-[#1e1e1e] text-white px-[20px] py-[10px] rounded-[5px]">
            {content.newsletter.buttonText}
          </button>
        </div>
      </div>
      <hr className="border-[#515b60] max-w-[1200px] mx-auto px-[20px]" />
      <div className="container-custom mx-auto flex mt-[60px] items-center xl:flex-nowrap flex-wrap lg:justify-between justify-center pt-[60px] gap-4">
        <div className="flex flex-wrap justify-center gap-[40px] text-[15px] text-white">
          {content.bottom.links.map((link) => (
            <div key={link.id} className="flex items-center gap-2">
              {link.iconUrl1 && (
                <img
                  src={link.iconUrl1}
                  alt={`Icon ${link.id} 1`}
                  className="w-[20px] h-[20px]"
                />
              )}
              <a
                href={link.href}
                className="hover:text-[#4f9cf9] transition-colors"
              >
                {link.label}
              </a>
              {link.iconUrl2 && (
                <img
                  src={link.iconUrl2}
                  alt={`Icon ${link.id} 2`}
                  className="w-[20px] h-[20px]"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[20px] py-[18px]">
          {content.bottom.icons.map((icon) => (
            <div key={icon.id}>
              {icon.iconUrl && (
                <img
                  src={icon.iconUrl}
                  alt={`Icon ${icon.id} 1`}
                  className="w-[20px] h-[20px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
