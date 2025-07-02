"use client";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";
import { When } from "@/components/helpers/when/when";
import { Button } from "@/components/ui/button/button";

import { useDeviceType } from "@/hooks/use-device-type";

import { ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

import { HEADER_MOCK } from "@/constants/mocks/header.mock";

import "./header.css";
import { useScroll } from "@/hooks/use-scroll";

export function Header() {
  const { navigation } = HEADER_MOCK;

  const device = useDeviceType();
  const scrolled = useScroll(100);

  const laptop =
    device === "tablet" || device === "laptop" || device === "desktop";

  return (
    <>
      <header className="header">
        <Container className="header-container">
          <When condition={laptop}>
            <Logo className="header-logo" />{" "}
            <span className="text-base font-bold uppercase ml-2 text-neutral-600">
              Morgan Segura
            </span>
          </When>

          <nav className="header-navigation">
            {navigation?.map(({ href, children }, index: number) => (
              <Button
                key={index}
                href={href}
                variant="unstyled"
                className="header-navigation-item"
              >
                {children}
              </Button>
            ))}
          </nav>
        </Container>
      </header>
      <div
        className={cn(
          "fixed bottom-16 right-6 z-30 transition-opacity duration-300",
          scrolled ? "opacity-100 ease-in" : "opacity-0 ease-out",
        )}
      >
        <Button href="#top">
          <ArrowUpIcon className="my-1" />
        </Button>
      </div>
    </>
  );
}
