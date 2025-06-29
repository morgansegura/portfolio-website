"use client";

import { ReactNode, useState } from "react";

import { PanelLeftOpenIcon, PanelRightOpenIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";

import "./page.css";
import { Drawer } from "../drawer/drawer";

export interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [active, setActive] = useState(false);

  function toggleDrawer() {
    setActive(!active);
  }

  return (
    <div className="page">
      <Header
        trigger={
          <button className="header-trigger" onClick={toggleDrawer}>
            {!active ? <PanelRightOpenIcon /> : <PanelLeftOpenIcon />}
          </button>
        }
      />
      <main className="page-main">{children}</main>
      <Footer />

      <Drawer open={active} setOpen={toggleDrawer}>
        Children
      </Drawer>
      <div
        className="page-backdrop"
        data-backdrop-active={active ? "active" : "inactive"}
      />
    </div>
  );
}
