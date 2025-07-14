import type React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "font-gilroy font-semibold rounded-[5px] border transition-colors duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-[#4caf4f] border-[#4caf4f] text-white hover:bg-[#45a049]",
    secondary:
      "bg-transparent border-[#4caf4f] text-[#4caf4f] hover:bg-[#4caf4f] hover:text-white",
    outline: "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-[36px]",
    md: "px-6 py-3 text-sm h-[52px]",
    lg: "px-8 py-4 text-lg h-[57px]",
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
