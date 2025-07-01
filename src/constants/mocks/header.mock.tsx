import { ButtonProps } from "@/components/ui/button/button";

type HeaderBlockMockProps = {
  navigation: ButtonProps[];
};

export const HEADER_MOCK: HeaderBlockMockProps = {
  navigation: [
    {
      href: "#works",
      children: "Work",
      title: "Work",
    },
    {
      href: "#projects",
      children: "Projects",
      title: "Projects",
    },
    {
      href: "#contact",
      children: "Contact",
      title: "Contact",
    },
    {
      href: "#blog",
      children: "Blog",
      title: "Blog",
    },
  ],
};
