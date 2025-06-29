import { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";

import { HEADER_MOCK } from "@/constants/mocks/header.mock";

import "./header.css";

import type { TNavigationItem } from "@/types/navigation.types";

type HeaderProps = {
  trigger?: ReactNode;
};

export function Header({ trigger }: HeaderProps) {
  const { navigationMain: n1 } = HEADER_MOCK;

  return (
    <header className="header">
      <Container className="header-container">
        <Logo className="header-logo" />

        <nav className="header-navigation">
          {n1?.map(({ href, icon, label }: TNavigationItem, index: number) => (
            <Link key={index} href={href} className="header-navigation-item">
              {icon}
              {label}
            </Link>
          ))}
        </nav>
        {trigger}
      </Container>
    </header>
  );
}
