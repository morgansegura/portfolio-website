import { Hero } from "@/components/layout/hero/hero";

import "./hero-main.css";

import { When } from "@/components/helpers/when/when";
import { Fragment } from "react";
import { Heading } from "@/components/ui/heading/heading";
import { Button } from "@/components/ui/button/button";

import { HERO_BLOCK_MOCK } from "@/constants/mocks/hero-block.mock";
import { Typography } from "@/components/ui/typography/typography";

export function HeroMain() {
  const data = HERO_BLOCK_MOCK;

  return (
    <Hero className="hero-main">
      <Hero.Column>
        <When condition={!!data?.heading}>
          <Heading as="h1" variant="1">
            {Array.isArray(data.heading)
              ? data.heading?.map((text, index: number) => (
                  <span key={index}>{text}</span>
                ))
              : data.heading}
          </Heading>
        </When>
        <When condition={!!data.mediaLinks}>
          <div className="social-media">
            {data.mediaLinks?.map((link, index: number) => (
              <Button
                key={index}
                title={link?.title}
                href={link?.href ?? ""}
                target={link?.target}
                variant={link?.variant}
              >
                {link.children}
              </Button>
            ))}
          </div>
        </When>
      </Hero.Column>
      <Hero.Column className="introduction">
        <div>
          <div className="introduction-title">{data.intro}</div>
        </div>
        <When condition={!!data.subheading}>
          <Heading as="h2" className="subheading">
            {Array.isArray(data.subheading)
              ? data.subheading?.map((text, index: number) => (
                  <Fragment key={index}>
                    <span>{text}</span>
                    {index === 0 ? " & " : index === 1 ? ", " : ""}
                  </Fragment>
                ))
              : data.subheading}
          </Heading>
        </When>
        <When condition={!!data.description}>
          <Typography as="div" variant="description">
            {Array.isArray(data.description)
              ? data.description?.map((text, index: number) => (
                  <Fragment key={index}>
                    <Typography as="p">{text}</Typography>
                  </Fragment>
                ))
              : data.description}
          </Typography>
        </When>
      </Hero.Column>
    </Hero>
  );
}
