const workImage = {
  width: 750,
  height: 900,
};

export const WORK_SECTION_MOCK = {
  workSection: [
    {
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
  ],
};
