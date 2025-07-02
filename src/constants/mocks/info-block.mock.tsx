import { BoxIcon, MonitorSmartphoneIcon, PenToolIcon } from "lucide-react";

import type { ButtonProps } from "@/components/ui/button/button";
import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

type InfoBlockProps = {
  intro: {
    heading?: string;
    description?: string;
    button?: ButtonProps;
  };
  quote: {
    heading?: string;
    author?: string;
    description?: string;
  };
  cards: {
    __id: string;
    heading?: string;
    description?: string;
    image?: ImageProps;
    icon?: ReactNode;
  }[];
};

export const INFO_BLOCK_MOCK: InfoBlockProps = {
  intro: {
    heading: "Let's start a conversation.",
    description:
      "I am happy to chat about new opportunities, freelance work, or collaboration.",
    button: {
      title: "Reach out via email.",
      href: "mailto:hello@morgansegura.com",
      children: "hello@morgansegura.com",
      target: "_blank",
    },
  },
  quote: {
    heading:
      '"I am an optimist. It does not seem too much use being anything else."',
    author: "Winston Churchill",
    description:
      "Inspiration comes from many places and from the many great words, works, and masterpeices that I have had the privy to admire in my life-time. I never claim to be self-taught and strive to be humble, because all talents, learned or otherwise are a gift from above.",
  },
  cards: [
    {
      __id: "0",
      heading: "User Interface Design",
      description:
        "I design clean, accessible interfaces that bring clarity and confidence to users. My approach focuses on visual hierarchy, consistency, and purposeful simplicity across platforms.",
      icon: <PenToolIcon className="fill-purple-300" />,
    },
    {
      __id: "1",
      heading: "User Experience Design",
      description:
        "I build intuitive flows rooted in empathy, usability, and real-world context. From wireframes to interaction design, I aim to make digital experiences feel effortless and human.",
      icon: <BoxIcon className="fill-cyan-200" />,
    },
    {
      __id: "2",
      heading: "Full Stack Development",
      description:
        "With over a decade of experience across front-end and back-end systems, I develop scalable, maintainable applications thatbalance user needs with solid architecture and performance.",
      icon: <MonitorSmartphoneIcon className="fill-indigo-300" />,
    },
  ],
};
