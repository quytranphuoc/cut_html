import type React from "react";

interface TestimonialSectionProps {
  content: {
    quote: string;
    author: string;
    position: string;
    imageUrl: string;
    iconUrl: Array<{
      id: number;
      url: string;
    }>;
    meetAllText: string;
  };
}

export const Testimonials: React.FC<TestimonialSectionProps> = ({
  content,
}) => {
  return (
    <section className="bg-[#f5f7fa] w-full py-[33px]">
      <div className="container-custom flex flex-col md:flex-row mx-auto gap-[70px] items-center justify-start">
        <div className="max-w-[326px] flex justify-center md:justify-end">
          <img
            src={content.imageUrl}
            alt="Testimonial Author"
            className="rounded-md shadow-md md:min-w-[326px] min-w-[300px]"
          />
        </div>
        <div className="flex-1">
          <p className="text-[#1e1e1e] opacity-80 mb-4">{content.quote}</p>
          <div className="mb-[9px]">
            <span className="block font-bold text-[#4caf4f] text-lg">
              {content.author}
            </span>
            <p className="text-sm text-[#1e1e1e] opacity-70 mb-[29px]">
              {content.position}
            </p>
            <div className="flex items-center flex-wrap gap-[35px] mt-4">
              {content.iconUrl.map((icon) => (
                <div key={icon.id}>
                  <img
                    src={icon.url}
                    alt={`Customer ${icon.id}`}
                    className="rounded-full w-[66px] h-[60px] object-cover"
                  />
                </div>
              ))}
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-[#4caf4f] font-semibold text-lg">
                  {content.meetAllText}
                </span>
                <img src="https://placehold.co/17x10" alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
