export interface HeroMainProps {
  heading?: {
    firstName?: string;
    lastName?: string;
  };
  mediaLinks?: {
    href?: string;
    label?: string;
  }[];
  intro?: string;
  subheading?: {
    jobTitle1?: string;
    jobTitle2?: string;
    location?: string;
  };
  description?: string;
}

export interface LandingPageProps extends HeroMainProps {
  __sectionId: string;
  sectionClassName?: string;
  sectionTitle?: string;
}

export const LANDING_PAGE_MOCK: LandingPageProps[] = [
  {
    __sectionId: "hero",
    sectionClassName: "hero-section",
    sectionTitle: "",
    heading: {
      firstName: "Morgan",
      lastName: "Segura",
    },
    subheading: {
      jobTitle1: "UI/UX Developer",
      jobTitle2: "Software Engineer",
      location: "based in California",
    },
    intro: "Introduction",
    description:
      "Senior Software Engineer & UI/UX Developer crafting intuitive, reliable digital experiences. I specialize in building scalable front-end and full-stack applications with clean design,thoughtful architecture, and a strong focus on user experience. Whether I\'m designing a new interface or optimizing a backend system, I believe great software should be elegant, maintainable, and built with purpose.",

    mediaLinks: [
      {
        href: "/",
        label: "Instagram",
      },
      {
        href: "/",
        label: "Instagram",
      },
      {
        href: "/",
        label: "Instagram",
      },
    ],
  },
  {
    __sectionId: "",
  },
];
