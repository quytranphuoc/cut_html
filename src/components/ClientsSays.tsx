import React from "react";
import { TestimonialCard } from "./ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
interface Author {
  avatarUrl: string;
  name: string;
  position: string;
}

interface Quote {
  iconUrl: string;
  quote: string;
  author: string;
}

interface ClientQuote {
  id: number;
  quotes: Quote[];
  author: Author[];
}

interface ClientsSaysProps {
  content: {
    title: string;
    quotes: ClientQuote[];
  };
}

export const ClientsSays: React.FC<ClientsSaysProps> = ({ content }) => {
  return (
    <section className="bg-[#fff] py-[101px]">
      <div className="container-custom mx-auto px-4">
        <div className="text-center">
          <p className="relative text-[40px] font-bold text-center z-[10] px-[20px]">
            {content.title}
          </p>
        </div>

        <div className="container-custom flex items-stretch">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="items-stretch h-auto gap-[20px] justify-center mt-[10px] overflow-hidden"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {content.quotes.map((ClientQuote) => (
              <SwiperSlide key={ClientQuote.id}>
                <TestimonialCard
                  quote={ClientQuote.quotes[0].quote}
                  quoteIcon={ClientQuote.quotes[0].iconUrl}
                  authorName={ClientQuote.author[0].name}
                  authorPosition={ClientQuote.author[0].position}
                  authorAvatar={ClientQuote.author[0].avatarUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center mt-[80px]">
          {content.quotes.map((_, index) => (
            <div key={index} className="mx-[5px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#4f9cf9] hover:bg-[#1e1e1e] cursor-pointer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
