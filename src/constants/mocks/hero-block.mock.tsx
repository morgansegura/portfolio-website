import { ButtonProps } from "@/components/ui/button/button";

type HeroBlockMockProps = {
  heading?: string[];
  subheading?: string[];
  intro?: string;
  description?: string[];
  mediaLinks: ButtonProps[];
};

export const HERO_BLOCK_MOCK: HeroBlockMockProps = {
  heading: ["Morgan", "Segura"],
  subheading: ["UI/UX Developer", "Software Engineer", "based in California"],
  intro: "Introduction",
  description: [
    "Senior Software Engineer & UI/UX Developer crafting intuitive, reliable digital experiences. I specialize in building scalable front-end and full-stack applications with clean design,thoughtful architecture, and a strong focus on user experience.",
    "Whether I\'m designing a new interface or optimizing a backend system, I believe great software should be elegant, maintainable, and built with purpose.",
  ],
  mediaLinks: [
    {
      variant: "secondary",
      target: "_blank",
      href: "https://www.linkedin.com/in/morgan-segura-4b08429/",
      children: "Linked In",
    },
    {
      variant: "secondary",
      target: "_blank",
      href: "https://github.com/morgansegura",
      children: "Github",
    },
  ],
};
