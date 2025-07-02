import { ButtonProps } from "@/components/ui/button/button";

type HeaderBlockMockProps = {
  navigation: ButtonProps[];
};

export const HEADER_MOCK: HeaderBlockMockProps = {
  navigation: [
    {
      href: "#works-1",
      children: "Work",
      title: "Work",
      variant: "unstyled",
    },
    {
      href: "#projects",
      children: "Projects",
      title: "Projects",
      variant: "unstyled",
    },
    {
      href: "#contact",
      children: "Contact",
      title: "Contact",
      variant: "unstyled",
    },
    // {
    //   href: "#blog",
    //   children: "Blog",
    //   title: "Blog",
    //   variant: "unstyled",
    // },
  ],
};
