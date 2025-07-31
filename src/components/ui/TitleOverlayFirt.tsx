import type React from "react";
import { cn } from "../../lib/utils";

interface TitleOverlay_copyProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  top?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const TitleOverlay_copy: React.FC<TitleOverlay_copyProps> = ({
  title,
  top = "100px",
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const overlayHeight = {
    sm: "447px",
    md: "500px",
    lg: "559px",
  }[size];

  const overlayColor = {
    primary: "#c4defd",
    secondary: "#ffe493",
    ghost: "#fff",
  }[variant];

  const fontSize = {
    sm: "32px",
    md: "40px",
    lg: "50px",
  }[size];

  return (
    <div
      {...props}
      className={cn(
        "relative items-center justify-center",
        className,
        "w-full",
        "h-[" + overlayHeight + "]"
      )}
    >
      <h2
        className={`absolute top-0 left-0 text-[${fontSize}] font-bold z-[10] leading-[1]`}
      >
        {title}
      </h2>
      <img
        src={`https://placehold.co/220x26/${overlayColor}/000000`}
        alt=""
        className={`absolute top-[33px] right-[30%] z-[1]`}
      />
    </div>
  );
};
