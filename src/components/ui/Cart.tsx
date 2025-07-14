import type React from "react"
import { cn } from "../../lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn("bg-white rounded-md shadow-lg", className)}>{children}</div>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={cn("p-6", className)}>{children}</div>
}
