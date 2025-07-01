import { ReactNode } from "react";
import Link from "next/link";

export type ButtonProps = {
  children?: ReactNode;
  href?: string;
  target?: string;
  invert?: boolean;
  variant?: "primary" | "secondary";
};

import "./button.css";

export function Button({
  href,
  invert = false,
  children,
  target,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      target={target}
      href={href ?? ""}
      data-button-invert={invert}
      data-button-variant={variant}
    >
      {children}
    </Link>
  );
}
