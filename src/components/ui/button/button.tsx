import { ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  invert?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  title?: string;
  target?: string;
  variant?: "primary" | "secondary";
}

import "./button.css";
import { cn } from "@/lib/utils/cn";

export function Button({
  href,
  invert = false,
  className,
  children,
  iconLeft,
  iconRight,
  onClick,
  target,
  title,
  variant = "primary",
}: ButtonProps) {
  const innerContent = (
    <div>
      <span className="button-icon-left">{iconLeft}</span>
      <span className="button-label">{children}</span>
      <span className="button-icon-right">{iconRight}</span>
    </div>
  );
  return href ? (
    <Link
      data-title={title}
      className={cn("button", className)}
      target={target}
      href={href ?? ""}
      data-button-invert={invert}
      data-button-variant={variant}
    >
      {innerContent}
    </Link>
  ) : (
    <button
      data-title={title}
      onClick={onClick}
      className={cn("button", className)}
      data-button-invert={invert}
      data-button-variant={variant}
    >
      {innerContent}
    </button>
  );
}
