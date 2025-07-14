"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";

interface HeaderProps {
  content: {
    logo: string;
    logos: Array<{
      id: number;
      name: string;
      logoUrl: string;
    }>;
    navigation: Array<{
      id: number;
      label: string;
      href: string;
    }>;
    loginText: string;
    signupText: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
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
        className={` fixed left-0 right-0 top-0 m-auto w-full h-[71px] z-[100] bg-[#f5f7fa] md:block hidden transition-shadow duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container-custom flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex items-center gap-[10px]">
              <img
                src={content.logos[0]?.logoUrl}
                alt={content.logos[0]?.name || "Logo"}
                className="w-[45px] h-[50px] object-contain"
              />
              <span className="font-bold text-3xl">{content.logo}</span>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-[20px] lg:gap-[45px] font-medium opacity-80">
              {content.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    title={item.label}
                    className="hover:text-[#4caf4f] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:flex hidden items-center gap-[30px]">
            <a
              href="#"
              title={content.loginText}
              className="text-lg text-[#89c98c] hover:text-[#4caf4f] transition-colors"
            >
              {content.loginText}
            </a>
            <Button
              variant="primary"
              size="sm"
              className="w-[90px] bg-[#4caf4f] text-white hover:bg-[#4caf4f]/90 transition-colors"
            >
              {content.signupText}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white bg-[rgba(30,30,30,0.8)] w-[40px] h-[40px] flex items-center justify-center rounded"
          >
            ☰
          </button>
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
          <div className="text-white text-xl font-bold flex-1 text-center">
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
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
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
              <Button
                variant="outline"
                size="sm"
                className="text-[#89c98c] hover:text-[#4caf4f] hover:bg-[#4caf4f]/10 transition-colors"
              >
                {content.loginText}
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full bg-[#4caf4f] text-white hover:bg-[#4caf4f]/90 transition-colors"
              >
                {content.signupText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
