import type { ButtonProps } from "@/components/ui/button/button";
import { ImageProps } from "next/image";

const workImage = {
  width: 750,
  height: 900,
};

type WorkSectionProps = {
  workSection: {
    __id?: string;
    kicker?: string;
    heading?: string;
    description?: string[];
    link?: ButtonProps;
    works: {
      __id?: string;
      kicker?: string;
      heading?: string;
      description?: string;
      link?: ButtonProps;
      image?: ImageProps;
    }[];
  }[];
};

export const WORK_SECTION_MOCK: WorkSectionProps = {
  workSection: [
    {
      __id: "0",
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
        variant: "secondary",
      },
      works: [
        {
          __id: "0",
          kicker: "Landing Page",
          heading: "Responsive, mobile-first React/Remix website",
          description: "Clean website refresh and architecture overhaul.",
          image: {
            priority: true,
            src: "/images/works-bp1.png",
            alt: "",
            width: workImage.width,
            height: workImage.height,
          },
        },
        {
          __id: "1",
          kicker: "Classroom",
          heading: "Online learning platform for BP members.",
          description:
            "Free online course software & content from a vast library of videos, podcasts, etc",
          image: {
            priority: false,
            src: "/images/works-bp2.png",
            alt: "",
            width: workImage.width,
            height: workImage.height,
          },
        },
        {
          __id: "2",
          kicker: "Media & More",
          heading: "Media for thousands of users to preview",
          description:
            "Video, Podcasts, Posters and countless other multi-media content.",
          image: {
            priority: false,
            src: "/images/works-bp3.png",
            alt: "",
            width: workImage.width,
            height: workImage.height,
          },
        },
      ],
    },
    {
      __id: "1",
      kicker: "RipeMetrics",
      heading: "Senior Frontend & UI/UX Developer",
      description: [
        "At RipeMetrics, I led front-end development and user experience design for a business intelligence platform focused on actionable customer insights.",
        "Helped architect and implement responsive, component-based interfaces using Laravel, Vue, TailwindCSS, and modern design systems. Working closely with product and backend teams, I translated complex data into intuitive dashboards and tools that empowered business owners to make confident, data-driven decisions.",
      ],
      works: [
        {
          __id: "0",
          kicker: "Data Platform",
          heading: "Laravel and Vue.js infrastructure",
          description:
            "Client dashboard for customer priviews, tracking and comunication channels.",
          image: {
            priority: false,
            src: "/images/works-rm1.png",
            alt: "",
            width: workImage.width,
            height: workImage.height,
          },
        },
        {
          __id: "1",
          kicker: "Frontend Website",
          heading: "Marketing Website",
          description:
            "Front-facing website to inform potential clients of our services, pricing, etc.",
          image: {
            priority: false,
            src: "/images/works-rm2.png",
            alt: "",
            width: workImage.width,
            height: workImage.height,
          },
        },
        {
          __id: "2",
          kicker: "Data & Metrics",
          heading: "Data modeling and representation.",
          description:
            "The Ripe Metrics app consumes and visual represents personal secure data at scale.",
          image: {
            priority: false,
            src: "/images/works-rm3.png",
            alt: "",
            width: workImage.width,
            height: workImage.height,
          },
        },
      ],
    },
  ],
};
