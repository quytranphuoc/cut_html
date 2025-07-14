import type React from "react";

interface Metric {
  id: number;
  value: string;
  label: string;
  iconUrl: string;
}

interface StatsSectionProps {
  content: {
    title: string;
    highlight: string;
    description: string;
    metrics: Metric[];
  };
}

export const StatsSection: React.FC<StatsSectionProps> = ({ content }) => {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="container-custom flex flex-col lg:flex-row py-[60px]! mx-auto justify-between gap-[30px]">
        <div>
          <h2 className="text-[#1e1e1e] text-[45px] font-bold opacity-80">
            {content.title} <br />
            <span className="text-[#4caf4f]">{content.highlight}</span>
          </h2>
          <p className="text-[#1e1e1e] opacity-80 text-lg">
            {content.description}
          </p>
        </div>
        <div className="flex items-center max-w-[498px] flex-wrap gap-[20px] justify-between">
          {content.metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex items-center gap-[10px] w-[212px]"
            >
              <div className="w-[45px] h-[45px]">
                <img src={metric.iconUrl} alt={metric.label} />
              </div>
              <div>
                <p className="text-[#1e1e1e] opacity-80 text-[32px] font-bold">
                  {metric.value}
                </p>
                <p className="text-[#1e1e1e] opacity-80 text-lg">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
