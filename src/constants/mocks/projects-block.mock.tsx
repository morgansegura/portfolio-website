import { ButtonProps } from "@/components/ui/button/button";
import { ImageProps } from "next/image";

const imageSizes = {
  width: 650,
  height: 300,
};

type ProjectBlockMovckProps = {
  heading?: string;
  description?: string[];
  cards: {
    __id?: string;
    heading?: string;
    description?: string;
    tag?: string;
    image?: ImageProps;
    link?: ButtonProps;
  }[];
};

export const PROJECTS_BLOCK_MOCK: ProjectBlockMovckProps = {
  heading: "Project & Pro Bono Work",
  description: [
    "In addition to professional work, I regularly take on pro bono projects to support my community and causes I believe in.",
    "I built a Single Page Application for author LeSean Johnson’s Nations of Stone trilogy, redesigned the official website for local soccer club Chula Vista FC (currently in progress), and continue to lead web development and marketing for a nonprofit my wife and I started, Grassroots Foundation, which empowers youth through access to elite-level training and opportunity.",
  ],
  cards: [
    {
      __id: "0",
      heading: "Project: Nations of Stone Trilogy",
      description:
        "Created a Single Page Application (SPA) for my good friend author LeSean Johonson, author of the incredible Nations of Stone Trilogy. He wanted a Wordpress website built from scratch and needed it in a hurry. I was able to create the SPA in a couple of days, and get it up in time for Book One's release.",
      image: {
        src: "/images/projects-alj.jpg",
        alt: "Author LeSean Johnson",
        width: imageSizes.width,
        height: imageSizes.height,
      },
      link: {
        title: "Project: Nations of Stone Trilogy",
        href: "https://www.authorlj.com/",
        children: "Official Website",
        target: "_blank",
      },
    },
    {
      __id: "1",
      heading: "Project: Chula Vista Fúbol Club",
      description:
        "Pro bono web reconstruction. New S.E.O, and marketing campaign, website refresh and architecture overhaul. This is currently a Wordpress website, however I am nearly finished creating a custom CMS built with Nest.js and Next.js to replace it.",
      tag: "Coming Soon",
      image: {
        src: "/images/projects-cvfc.jpg",
        alt: "Chula Vist FC",
        width: imageSizes.width,
        height: imageSizes.height,
      },
      link: {
        title: "Project: Chula Vista Fúbol Club",
        variant: "primary",
        invert: false,
        href: "https://www.chulavistafc.com",
        children: "Old Website",
        target: "_blank",
      },
    },
    {
      __id: "2",
      heading: "Project: Grass Roots Foundation",
      description:
        'A work in progress. Grass Roots Foundation is a nonprofit business that my wife and I started to help youth soccer players in underserved communities get access to fields, equipment and elite soccer training. At the moment there is simply a landing page, however I will be building a website with all of the "bells and whistles."',
      tag: "Work in Progress",
      image: {
        src: "/images/projects-grf.jpg",
        alt: "Grassroots Foundation",
        width: imageSizes.width,
        height: imageSizes.height,
      },
      link: {
        title: "Project: Grass Roots Foundation",
        href: "https://www.grassrootsfdn.org",
        children: "Current Landing Page",
        target: "_blank",
      },
    },
  ],
};
