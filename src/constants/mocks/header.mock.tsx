import { ButtonProps } from "@/components/ui/button/button";

type HeaderBlockMockProps = {
  navigation: ButtonProps[];
};

export const HEADER_MOCK: HeaderBlockMockProps = {
  navigation: [
    {
      href: "#works-1",
      children: "Work",
      title: "Work related to my career.",
      variant: "unstyled",
    },
    {
      href: "#projects",
      children: "Projects",
      title: "Projects that I am working on or have completed.",
      variant: "unstyled",
    },
    {
      href: "#contact",
      children: "Reach out to me by email to collaborate on a project.",
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
