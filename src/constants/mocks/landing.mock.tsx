import { ButtonProps } from "@/components/ui/button/button";
import type {
  ImageType,
  LinkType,
  SpacingType,
  StringOrArrayOfStringsType,
} from "@/types/content.types";

export interface LandingPageProps {
  __id: string;
  __sectionId: string;
  sectionClassName?: string;
  sectionTitle?: string;
  quote?: string;
  sectionTheme?: string;
  buffer?: SpacingType;
  subheading?: StringOrArrayOfStringsType;
  heading?: StringOrArrayOfStringsType;
  kicker?: string;
  description?: StringOrArrayOfStringsType;
  link?: ButtonProps;
  works?: {
    __id: string;
    kicker?: string;
    description?: StringOrArrayOfStringsType;
    heading?: string;
    image?: ImageType;
    link?: ButtonProps;
  }[];
  projects?: {
    __id: string;
    kicker?: string;
    description?: StringOrArrayOfStringsType;
    heading?: string;
    cards?: {
      __id: string;
      description?: StringOrArrayOfStringsType;
      heading?: string;
      image?: ImageType;
      link?: ButtonProps;
    }[];
  }[];
  spacer?: boolean;
  mediaLinks?: ButtonProps[];
  intro?: string;
}

const workImage = {
  width: 750,
  height: 900,
};

export const LANDING_PAGE_MOCK: LandingPageProps[] = [
  {
    __id: "hero",
    __sectionId: "hero",
    sectionTheme: "none",
    sectionClassName: "hero-section",
    sectionTitle: "",
  },
  {
    __id: "works",
    __sectionId: "works",
    sectionTheme: "dark",
    sectionClassName: "works-section",
    sectionTitle: "",
    buffer: { top: true, bottom: true },
  },
  {
    __id: "contact",
    __sectionId: "contact",
    sectionTitle: "Contact",
    sectionTheme: "neutral",
    sectionClassName: "contact-section",
    buffer: { top: true, bottom: true },
  },
  {
    __id: "works-1",
    __sectionId: "works-1",
    sectionTheme: "light",
    sectionClassName: "works-section",
    sectionTitle: "Work",
    buffer: { top: true, bottom: true },
  },

  {
    __id: "works-1",
    __sectionId: "projects",
    sectionTheme: "neutral",
    sectionClassName: "projects-section",
    sectionTitle: "Projects",
    buffer: { top: true, bottom: true },
    heading: "Project & Pro Bono Work",
    description: [
      "In addition to professional work, I regularly take on pro bono projects to support my community and causes I believe in.",
      "I built a Single Page Application for author LeSean Johnson’s Nations of Stone trilogy, redesigned the official website for local soccer club Chula Vista FC (currently in progress), and continue to lead web development and marketing for a nonprofit my wife and I started, Grassroots Foundation, which empowers youth through access to elite-level training and opportunity.",
    ],
    projects: [
      {
        __id: "0",
        heading: "",
        description: "",
        cards: [
          {
            __id: "0",
            heading: "Project: Nations of Stone Trilog",
            description:
              " Created a Single Page Application (SPA) for my good friend author LeSean Johonson, author of the incredible Nations of Stone Trilogy. He wanted a Wordpress website built from scratch and needed it in a hurry. I was able to create the SPA in a couple of days, and get it up in time for Book One's release.",
            image: {
              src: "/images/projects-alj.jpg",
              alt: "Author LeSean Johnson",
              width: 650,
              height: 300,
            },
            link: {
              href: "https://authorlj.com/",
              children: "Official Website",
              target: "_blank",
            },
          },
        ],
      },
      {
        __id: "1",
        heading: "",
        description: "",
        cards: [
          {
            __id: "0",
            heading: "Project: Nations of Stone Trilog",
            description:
              " Created a Single Page Application (SPA) for my good friend author LeSean Johonson, author of the incredible Nations of Stone Trilogy. He wanted a Wordpress website built from scratch and needed it in a hurry. I was able to create the SPA in a couple of days, and get it up in time for Book One's release.",
            image: {
              src: "/images/projects-alj.jpg",
              alt: "Author LeSean Johnson",
              width: 650,
              height: 300,
            },
            link: {
              href: "https://authorlj.com/",
              children: "Official Website",
              target: "_blank",
            },
          },
        ],
      },
    ],
  },
];
