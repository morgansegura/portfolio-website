import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./drawer.css";
import { ButtonProps } from "@/components/ui/button/button";

type DrawerProps = {
  className?: string;
  children: ReactNode;
  open: boolean;
  setOpen: () => void;
  navItems?: ButtonProps[];
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
