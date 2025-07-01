import { Hero } from "@/components/layout/hero/hero";

import "./hero-main.css";

import type { LandingPageProps } from "@/constants/mocks/landing.mock";
import { When } from "@/components/helpers/when/when";
import { Fragment } from "react";
import { Heading } from "@/components/ui/heading/heading";
import { Button } from "@/components/ui/button/button";

export function HeroMain({
  description,
  heading,
  intro,
  subheading,
  mediaLinks,
}: LandingPageProps) {
  return (
    <Hero>
      <Hero.Column>
        <When condition={!!heading}>
          <Heading as="h1">
            {Array.isArray(heading)
              ? heading?.map((text, index: number) => (
                  <span key={index}>{text}</span>
                ))
              : heading}
          </Heading>
        </When>
        <When condition={!!mediaLinks}>
          <div className="social-media">
            {mediaLinks?.map((link, index: number) => (
              <Button
                variant={link?.variant}
                invert={link?.invert}
                key={index}
                href={link.href ?? ""}
                target={link.target}
              >
                {link.children}
              </Button>
            ))}
          </div>
        </When>
      </Hero.Column>
      <Hero.Column className="introduction">
        <div>
          <div className="introduction-title">{intro}</div>
        </div>
        <When condition={!!subheading}>
          <Heading as="h2" className="subheading">
            {Array.isArray(subheading)
              ? subheading?.map((text, index: number) => (
                  <Fragment key={index}>
                    <span>{text}</span>
                    {index === 0 ? " & " : index === 1 ? ", " : ""}
                  </Fragment>
                ))
              : subheading}
          </Heading>
        </When>
        <When condition={!!description}>
          <div className="description">
            {Array.isArray(description)
              ? description?.map((text, index: number) => (
                  <Fragment key={index}>
                    <p>{text}</p>
                  </Fragment>
                ))
              : description}
          </div>
        </When>
      </Hero.Column>
    </Hero>
  );
}
