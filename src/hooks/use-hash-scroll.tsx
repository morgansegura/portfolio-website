"use client";

import { useEffect } from "react";

export const useHashScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;

    if (!hash || !hash.startsWith("#")) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, []);
};
