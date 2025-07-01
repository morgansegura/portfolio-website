import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

import "./heading.css";

export type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  className?: string;
  variant?: "1" | "2" | "3" | "4" | "5" | "6";
};

export function Heading({
  as = "h1",
  variant = "2",
  children,
  className,
}: HeadingProps) {
  const Component = as;
  return (
    <Component
      data-heading-variant={variant}
      className={cn("heading", className)}
    >
      {children}
    </Component>
  );
}
