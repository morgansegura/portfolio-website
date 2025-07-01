import { cn } from "@/lib/utils/cn";
import { ElementType, ReactNode } from "react";

export type HeadingProps = {
  as: ElementType;
  children?: ReactNode;
  className?: string;
};

export function Heading({ as = "h1", children, className }: HeadingProps) {
  const Component = as;
  return <Component className={cn("heading", className)}>{children}</Component>;
}
