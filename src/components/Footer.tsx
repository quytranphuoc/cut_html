import type React from "react";

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
    copyright: string;
    sections: FooterSection[];
    newsletter: {
      title: string;
      placeholder: string;
    };
    icons: {
      id: number;
      icon: string;
      href: string;
    }[];
    logoUrl: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-[#263238]">
      <div className="container-custom flex xl:flex-nowrap flex-wrap mx-auto items-start justify-between text-white py-[60px]! gap-[30px] xl:gap-0">
        <div className="w-[241px] h-auto mr-[250px] pr-[20px]">
          <h2 className="flex items-center gap-2 mb-[39px]">
            <img src={content.logoUrl} alt="Logo" />
            <span className="text-white text-[30px] font-bold">
              {content.logo}
            </span>
          </h2>
          <p className="text-white text-sm mb-[39px] opacity-80">
            {content.copyright}
          </p>
          <div className="flex items-center gap-[20px]">
            {content.icons.map((icons) => (
              <div key={icons.id}>
                <img
                  src={icons.icon}
                  alt={`Social ${icons.id}`}
                  className="w-[35px] h-[35px] object-contain"
                />
              </div>
            ))}
          </div>
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

        <div className="w-[280px] h-auto">
          <h3 className="text-[20px] mb-[22px] font-bold">
            {content.newsletter.title}
          </h3>
          <div className="relative max-w-[255px]">
            <input
              type="text"
              placeholder={content.newsletter.placeholder}
              title={content.newsletter.placeholder}
              className="w-[255px] p-[8px] rounded-[5px] bg-[#515b60] text-[15px] text-white placeholder-gray-300"
            />
            <a
              href="#"
              title="Subscribe"
              className="absolute right-[13px] top-1/2 -translate-y-1/2"
            >
              <img src="https://placehold.co/17x10" alt="subscribe" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
