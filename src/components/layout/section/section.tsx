import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import { When } from "@/components/helpers/when/when";
import { Container } from "@/components/layout/container/container";

import "./section.css";

import type { HeadingProps } from "@/components/ui/heading/heading";
import { Typography } from "@/components/ui/typography/typography";

type SectionProps = {
  buffer?: { top?: boolean; bottom?: boolean };
  className?: string;
  children: ReactNode;
  container?: boolean;
  id?: string;
  title?: HeadingProps;
  spacer?: boolean;
  theme?: "default" | "light" | "dark" | string;
};

export function Section({
  buffer = { top: false, bottom: false },
  className,
  children,
  id,
  title,
  spacer = false,
  theme = "default",
}: SectionProps) {
  const bufferTop = buffer?.top ? "section-buffer-top" : "";
  const bufferBottom = buffer?.bottom ? "section-buffer-bottom" : "";

  return (
    <section
      id={id}
      className={cn("section", bufferTop, bufferBottom, className)}
      data-section-theme={theme}
    >
      <Container>
        <When condition={!!title?.children}>
          <Typography as="span" className="section-title">
            <span>{title?.children}</span>
          </Typography>
        </When>
        {children}
        <When condition={!!spacer}>
          <hr className="section-spacer" />
        </When>
      </Container>
    </section>
  );
}
