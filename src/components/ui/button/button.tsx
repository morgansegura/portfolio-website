import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils/cn";
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
  variant?: "primary" | "secondary" | "unstyled";
}

import "./button.css";
import { When } from "@/components/helpers/when/when";

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
      <When condition={!!iconLeft}>
        <span className="button-icon-left">{iconLeft}</span>
      </When>
      <When condition={!!children}>
        <span className="button-label">{children}</span>
      </When>
      <When condition={!!iconRight}>
        <span className="button-icon-right">{iconRight}</span>
      </When>
    </div>
  );
  return href ? (
    <Link
      data-title={title}
      className={cn("button", className)}
      target={target}
      href={href ?? ""}
      scroll={false}
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
