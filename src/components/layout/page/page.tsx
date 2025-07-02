"use client";

import { ReactNode } from "react";

import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";

import "./page.css";

export interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page">
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  );
}
