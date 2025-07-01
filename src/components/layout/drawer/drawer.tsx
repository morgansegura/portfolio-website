import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import { When } from "@/components/helpers/when/when";

import "./drawer.css";

import type { TNavigationItem } from "@/types/navigation.types";
import Link from "next/link";

type DrawerProps = {
  className?: string;
  children: ReactNode;
  open: boolean;
  setOpen: () => void;
  navItems?: TNavigationItem[];
};

export function Drawer({ className, children, open }: DrawerProps) {
  return (
    <div
      className={cn("drawer", className)}
      data-drawer-toggle={open ? "active" : "inactive"}
    >
      {children}
    </div>
  );
}
