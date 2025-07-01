import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

import "./typography.css";

export type TypographyProps = {
  as?: "p" | "strong" | "div" | "blockquote" | "span";
  children?: ReactNode;
  className?: string;
  variant?: "xs" | "sm" | "base" | "lg" | "xl" | "kicker" | "description";
};

export function Typography({
  as = "div",
  variant = "base",
  children,
  className,
}: TypographyProps) {
  const Component = as;

  return (
    <Component
      data-typography-variant={variant}
      className={cn("typography", className)}
    >
      {children}
    </Component>
  );
}
