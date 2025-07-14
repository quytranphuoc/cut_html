import type React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "noline";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  image?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  image,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center xl:justify-self-start justify-self-center rounded font-medium transition-colors",
        variant === "primary" &&
          "bg-[#4f9cf9] text-white hover:bg-[#4caf4f]/90 flex gap-3",
        variant === "secondary" &&
          "bg-[#ffe492] text-[#043873] hover:bg-[#4caf4f]/90",
        variant === "outline" &&
          "border border-[#4caf4f] text-[#4caf4f] hover:bg-[#4caf4f]/90 flex gap-3",
        variant === "noline" &&
          "bg-white text-[#050000] hover:text-white border-1 border-[#ffe493] hover:bg-[#4f9cf9] flex gap-3",

        size === "sm" && "px-4 py-2 text-base",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        size === "xl" && "px-[10] py-6 text-lg",
        image && `bg-[url('${image}')] bg-contain bg-center bg-no-repeat`
      )}
    >
      {variant === "primary" || variant === "outline" ? (
        <>
          {children}
          <img
            src="https://placehold.co/17x10"
            alt=""
            className="w-[17px] h-[10px] object-contain"
          />
        </>
      ) : (
        children
      )}
    </button>
  );
};
