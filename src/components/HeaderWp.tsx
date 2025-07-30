"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button_wp";
import { Link } from "react-router-dom";

interface NavigationItem {
  id: number;
  label: string;
  href: string;
  imageUrl?: string;
  subItems?: NavigationItem[];
}

interface HeaderProps {
  content: {
    logo: string;
    logoUrl: string;
    navigation: NavigationItem[];
    loginText: string;
    tryFreeText: string;
    href: string;
  };
}

export const HeaderWp: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={` fixed left-0 right-0 top-0 m-auto w-full h-[71px] z-[100] bg-[#043873] md:block hidden transition-shadow duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container-custom flex items-center justify-between h-full">
          <div className="flex items-center lg:w-[288px] w-auto">
            <div className="flex items-center gap-4">
              <img
                src={content.logoUrl}
                alt="Whitepace Logo"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-bold text-2xl text-white">
                {content.logo}
              </span>
            </div>
          </div>

          <nav className="justify-center">
            <ul className="flex items-center gap-6">
              {content.navigation.map((item) => (
                <li key={item.id} className="group relative">
                  <a
                    href={item.href}
                    title={item.label}
                    className="flex items-center gap-2 hover:text-[#4caf4f] transition-colors text-white "
                  >
                    {item.label}
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={`${item.label} icon`}
                        className="w-[14px] h-[14px] object-contain group-hover:scale-110 transition-transform"
                      />
                    )}
                    {/* {item.subItems && item.subItems.length > 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    )} */}
                  </a>
                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.id}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          <a
                            href={subItem.href}
                            className="flex items-center gap-2 text-gray-700 hover:text-[#4caf4f]"
                          >
                            {subItem.label}
                            {subItem.imageUrl && (
                              <img
                                src={subItem.imageUrl}
                                alt={`${subItem.label} icon`}
                                className="w-[14px] h-[14px] object-contain"
                              />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:flex hidden items-center gap-[30px]">
            <div className="flex items-center gap-4">
              <Button variant="secondary" size="md">
                {content.loginText}
              </Button>

              <Link to="https://placehold.co/17x10">
                <Button
                  variant="primary"
                  size="md"
                  className="flex items-center gap-[10px]"
                >
                  {content.tryFreeText}
                </Button>
              </Link>
            </div>
          </div>

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-[94px] lg:hidden text-white bg-[rgba(30,30,30,0.8)] w-[40px] h-[40px] flex items-center justify-center rounded"
            children={undefined}
            variant="outline"
            size="lg"
          ></Button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed w-full top-0 bg-[#1e1e1e] z-50 md:hidden">
        <div className="flex items-center justify-between px-4 h-[71px]">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white text-2xl"
          >
            ☰
          </button>
          <div className="text-white text-lg font-bold flex-1 text-center">
            {content.logo}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-white hover:text-[#4caf4f] hover:bg-[#4caf4f]/10 transition-colors"
          >
            {content.loginText}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[500]">
          <div className="fixed right-0 top-0 w-[80%] h-full bg-white p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 size-9 flex items-center justify-center"
              >
                <span className="text-xl">X</span>
              </button>
            </div>
            <nav className="space-y-4">
              {content.navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-gray-700 hover:text-[#4caf4f] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href="#"
                className="text-[#043873] hover:text-[#4caf4f] transition-colors"
              >
                {content.loginText}
              </a>
              <Button
                variant="primary"
                size="sm"
                className="w-full bg-[#4caf4f] text-white hover:bg-[#4caf4f]/90 transition-colors"
              >
                {content.tryFreeText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
