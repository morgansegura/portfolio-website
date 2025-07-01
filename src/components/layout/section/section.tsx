import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import { Heading } from "@/components/ui/heading/heading";
import { When } from "@/components/helpers/when/when";
import { Container } from "@/components/layout/container/container";

import "./section.css";

import type { HeadingProps } from "@/components/ui/heading/heading";

type SectionProps = {
  className?: string;
  children: ReactNode;
  container?: boolean;
  title?: HeadingProps;
  spacer?: boolean;
  buffer?: { top?: boolean; bottom?: boolean };
  theme?: "default" | "light" | "dark" | string;
};

export function Section({
  className,
  children,
  buffer = { top: false, bottom: false },
  title,
  spacer = false,
  theme = "default",
}: SectionProps) {
  const bufferTop = buffer?.top ? "section-buffer-top" : "";
  const bufferBottom = buffer?.bottom ? "section-buffer-bottom" : "";

  return (
    <section
      className={cn("section", bufferTop, bufferBottom, className)}
      data-section-theme={theme}
    >
      <Container>
        <When condition={!!title?.children}>
          <Heading as={title?.as || "h2"} className="section-title">
            <span>{title?.children}</span>
          </Heading>
        </When>
        {children}
        <When condition={!!spacer}>
          <hr className="section-spacer" />
        </When>
      </Container>
    </section>
  );
}
