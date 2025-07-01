import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

export type TypographyProps = {
  as: "p" | "strong" | "div" | "blockquote";
  children?: ReactNode;
  className?: string;
  variant?: "xs" | "sm" | "base" | "lg" | "xl" | "kicker";
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
      data-heading-variant={variant}
      className={cn("typography", className)}
    >
      {children}
    </Component>
  );
}
