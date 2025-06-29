import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./hero.css";

type HeroProps = {
  children: ReactNode;
  className?: string;
};
export function Hero({ children, className }: HeroProps) {
  return <div className={cn("hero", className)}>{children}</div>;
}

type HeroColumnProps = {
  children: ReactNode;
  className?: string;
};

export function HeroColumn({ children, className }: HeroColumnProps) {
  return <div className={cn("column", className)}>{children}</div>;
}

Hero.Column = HeroColumn;
