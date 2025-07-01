import { ReactNode } from "react";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";
import { When } from "@/components/helpers/when/when";
import { Button } from "@/components/ui/button/button";

import { useDeviceType } from "@/hooks/use-device-type";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { HEADER_MOCK } from "@/constants/mocks/header.mock";

import "./header.css";

type HeaderProps = {
  trigger?: ReactNode;
};

export function Header({ trigger }: HeaderProps) {
  const { navigation } = HEADER_MOCK;

  useSmoothScroll(80, true);
  const device = useDeviceType();

  const mobile = device === "mobile";
  const laptop =
    device === "tablet" || device === "laptop" || device === "desktop";

  return (
    <header className="header">
      <Container className="header-container">
        <Logo className="header-logo" />

        <nav className="header-navigation">
          <When condition={laptop}>
            {navigation?.map(({ href, children }, index: number) => (
              <Button
                key={index}
                href={href}
                className="header-navigation-item"
              >
                {children}
              </Button>
            ))}
          </When>
          <When condition={mobile}>{trigger}</When>
        </nav>
      </Container>
    </header>
  );
}
