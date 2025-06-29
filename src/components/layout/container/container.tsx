import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./container.css";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("container", className)}>{children}</div>;
}
