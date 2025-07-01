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
    heading: ["Morgan ", "Segura"],
    subheading: ["UI/UX Developer", "Software Engineer", "based in California"],
    intro: "Introduction",
    description: [
      "Senior Software Engineer & UI/UX Developer crafting intuitive, reliable digital experiences. I specialize in building scalable front-end and full-stack applications with clean design,thoughtful architecture, and a strong focus on user experience.",
      "Whether I\'m designing a new interface or optimizing a backend system, I believe great software should be elegant, maintainable, and built with purpose.",
    ],

    mediaLinks: [
      {
        target: "_blank",
        href: "https://www.linkedin.com/in/morgan-segura-4b08429/",
        children: "Linked In",
      },
      {
        target: "_blank",
        href: "https://github.com/morgansegura",
        children: "Github",
      },
      // {
      //   target: "_blank",
      //   href: "mailto:hello@morgansegura.com",
      //   label: "Resume",
      // },
    ],
  },
  {
    __id: "works",
    __sectionId: "works",
    sectionTheme: "dark",
    sectionClassName: "works-section",
    sectionTitle: "",
    buffer: { top: true, bottom: true },
    kicker: "Bible Project",
    heading: "Frontend Software Engineer",
    description: [
      "A nonprofit animation studio that produces beautifully crafted videos, podcasts, and study resources to help people experience the Bible as a unified story that leads to Jesus.",
      "Through engaging visuals and deep biblical scholarship, they make complex theological themes accessible to audiences around context, and purpose.",
    ],
    link: {
      href: "https://bibleproject.com",
      children: "Bible Project",
      target: "_blank",
      invert: false,
      variant: "primary",
    },
    works: [
      {
        __id: "0",
        kicker: "Bible Project",
        heading: "Landing page and responsive-first layout",
        description:
          "Blessed to work on a team of world class <br /> designers and animators.",
        image: {
          src: "/images/works-bp1.png",
          alt: "",
          width: workImage.width,
          height: workImage.height,
        },
      },
      {
        __id: "1",
        kicker: "Classroom",
        heading: "Landing page and responsive-first layout",
        description: "Free online course software & content from the library",
        image: {
          src: "/images/works-bp2.png",
          alt: "",
          width: workImage.width,
          height: workImage.height,
        },
      },
      {
        __id: "2",
        kicker: "Media & Content",
        heading: "Video, Podcasts and throngs of media content.",
        description:
          "Worked with some of the best content and media in the world.",
        image: {
          src: "/images/works-bp3.png",
          alt: "",
          width: workImage.width,
          height: workImage.height,
        },
      },
    ],
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
    __sectionId: "works",
    sectionTheme: "light",
    sectionClassName: "works-section",
    sectionTitle: "Work",
    kicker: "RipeMetrics",
    heading: "Senior Frontend & UI/UX Developer",
    buffer: { top: true, bottom: true },
    description: [
      "At RipeMetrics, I led front-end development and user experience design for a business intelligence platform focused on actionable customer insights.",
      "Helped architect and implement responsive, component-based interfaces using Laravel, Vue, TailwindCSS, and modern design systems. Working closely with product and backend teams, I translated complex data into intuitive dashboards and tools that empowered business owners to make confident, data-driven decisions.",
    ],
    works: [
      {
        __id: "0",
        kicker: "Bible Project",
        heading: "Landing page and responsive-first layout",
        description:
          "Blessed to work on a team of world class <br /> designers and animators.",
        image: {
          src: "/images/works-rm1.png",
          alt: "",
          width: workImage.width,
          height: workImage.height,
        },
      },
      {
        __id: "1",
        kicker: "Classroom",
        heading: "Landing page and responsive-first layout",
        description: "Free online course software & content from the library",
        image: {
          src: "/images/works-rm2.png",
          alt: "",
          width: workImage.width,
          height: workImage.height,
        },
      },
      {
        __id: "2",
        kicker: "Media & Content",
        heading: "Video, Podcasts and throngs of media content.",
        description:
          "Worked with some of the best content and media in the world.",
        image: {
          src: "/images/works-rm3.png",
          alt: "",
          width: workImage.width,
          height: workImage.height,
        },
      },
    ],
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
