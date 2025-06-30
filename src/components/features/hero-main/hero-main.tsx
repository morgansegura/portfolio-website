import { Link } from "lucide-react";

import { Hero } from "@/components/layout/hero/hero";

import "./hero-main.css";

import type { HeroMainProps } from "@/constants/mocks/landing.mock";

export function HeroMain({
  description,
  heading,
  intro,
  subheading,
  mediaLinks,
}: HeroMainProps) {
  return (
    <Hero>
      <Hero.Column>
        <h1 className="heading">
          <span className="mo">{heading?.firstName}</span>
          <span className="segura">{heading?.firstName}</span>
        </h1>
        <div className="social-media">
          {mediaLinks?.map((link) => (
            <Link href={link.href}>{link.label}</Link>
          ))}
        </div>
      </Hero.Column>
      <Hero.Column className="introduction">
        <div>
          <div className="introduction-title">{intro}</div>
        </div>
        <h2 className="subheading">
          <span>{subheading?.jobTitle1}</span> &
          <span>{subheading?.jobTitle2}</span>, {subheading?.location}
        </h2>
        <p className="description">{description}</p>
      </Hero.Column>
    </Hero>
  );
}
