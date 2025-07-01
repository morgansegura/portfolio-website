import { ReactNode } from "react";
import Link from "next/link";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  invert?: boolean;
  variant?: "primary" | "secondary";
};

import "./button.css";
import { cn } from "@/lib/utils/cn";

export function Button({
  href,
  invert = false,
  children,
  className,
  target,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      className={cn("button", className)}
      target={target}
      href={href ?? ""}
      data-button-invert={invert}
      data-button-variant={variant}
    >
      {children}
    </Link>
  );
}
