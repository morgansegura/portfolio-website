import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import { When } from "@/components/helpers/when/when";

import "./drawer.css";

import type { TNavigationItem } from "@/types/navigation.types";

type DrawerProps = {
  className?: string;
  children: ReactNode;
  open: boolean;
  setOpen: () => void;
  navItems?: TNavigationItem[];
};

export function Drawer({
  className,
  children,
  navItems,
  open,
  setOpen,
}: DrawerProps) {
  return (
    <div
      className={cn("drawer", className)}
      data-drawer-toggle={open ? "active" : "inactive"}
    >
      <When condition={!!navItems}>
        <nav className="drawer-navigation">
          {/* {navItems?.map(({ items }, index: number) => (
            <Link key={index}>Test</Link>
          ))} */}
        </nav>
      </When>
      {children}
    </div>
  );
}
