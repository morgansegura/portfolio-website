import { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { HEADER_MOCK } from "@/constants/mocks/header.mock";

import "./header.css";

import type { TNavigationItem } from "@/types/navigation.types";
import { useDeviceType } from "@/hooks/use-device-type";
import { When } from "@/components/helpers/when/when";

type HeaderProps = {
  trigger?: ReactNode;
};

export function Header({ trigger }: HeaderProps) {
  const { navigationMain: n1 } = HEADER_MOCK;

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
            {n1?.map(
              ({ href, icon, label }: TNavigationItem, index: number) => (
                <Link
                  key={index}
                  href={href}
                  className="header-navigation-item"
                >
                  {icon}
                  {label}
                </Link>
              ),
            )}
          </When>
          <When condition={mobile}>{trigger}</When>
        </nav>
      </Container>
    </header>
  );
}
