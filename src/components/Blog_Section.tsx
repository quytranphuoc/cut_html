import type React from "react";

interface BlogArticle {
  id: number;
  title: string;
  readMoreText: string;
  imageUrl: string;
}

interface BlogSectionProps {
  content: {
    title: string;
    description: string;
    articles: BlogArticle[];
  };
}

export const BlogSection: React.FC<BlogSectionProps> = ({ content }) => {
  return (
    <section className="container-custom">
      <h2 className="text-[#1e1e1e] text-[40px] font-bold opacity-80 text-center mt-[46px]">
        {content.title}
      </h2>
      <p className="max-w-[635px] mx-auto text-[#1e1e1e] opacity-80 text-lg text-center mt-[10px]">
        {content.description}
      </p>
      <div className="flex flex-wrap mx-auto xl:justify-between justify-center relative mt-[15px] xl:gap-[17px] gap-[95px]">
        {content.articles.map((article) => (
          <div key={article.id} className="relative flex flex-col">
            <div className="rounded-md shadow-md">
              <img
                className="rounded-md"
                src={article.imageUrl}
                alt={article.title}
              />
            </div>
            <div className="absolute bg-[#f5f7fa] left-1/2 top-[96%] text-center max-w-[315px] w-full h-auto transform -translate-x-1/2 -translate-y-1/2 p-[20px] text-[15px] sm:text-[20px] font-semibold text-[#8f8f90] leading-[1.2] rounded-md shadow-md">
              <span>{article.title}</span>
              <div className="flex gap-2 text-lg text-[#4caf4f] justify-center mt-[26px]">
                <a
                  href="#"
                  title={article.readMoreText}
                  className="flex items-center gap-2"
                >
                  {article.readMoreText}
                  <img src="https://placehold.co/17x10" alt="Arrow" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
