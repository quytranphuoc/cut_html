import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "./Button";

interface SlideContent {
  title: string;
  highlight?: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}

interface SlideSectionProps {
  slides: SlideContent[];
  className?: string;
  isImageLeft?: boolean;
}

export const SlideSection: React.FC<SlideSectionProps> = ({
  slides,
  className = "",
  isImageLeft = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`bg-[#f5f7fa] ${className}`}>
      <div className="pt-[155px]! pb-[20px]! container-custom">
        <div
          className={`flex items-center justify-between mx-auto md:flex-row ${
            isImageLeft ? "flex-row" : "flex-col-reverse"
          } gap-[40px]`}
        >
          <div className="flex-1 h-auto opacity-80">
            <h2 className="font-bold text-[32px] xl:text-[66px] md:text-[40px]">
              {slides[currentSlide].title}
              {slides[currentSlide].highlight && (
                <>
                  <br />
                  <span className="text-[#4caf4f]">
                    {slides[currentSlide].highlight}
                  </span>
                </>
              )}
            </h2>
            <p className="text-lg font-regular text-[#1e1e1e] opacity-80 mb-[25px]">
              {slides[currentSlide].description}
            </p>
            <Button className="w-[128px]">
              {slides[currentSlide].buttonText}
            </Button>
          </div>
          <div className="max-w-[415px]">
            <img
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].imageAlt}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-[5px] mt-[58px]">
          {slides.map((_, id) => (
            <button
              key={id}
              onClick={() => goToSlide(id)}
              title={`Go to slide ${id + 1}`}
              className={`w-[11px] h-[11px] rounded-full transition-colors ${
                id === currentSlide ? "bg-[#4caf4f]" : "bg-[#c3e1c7]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
