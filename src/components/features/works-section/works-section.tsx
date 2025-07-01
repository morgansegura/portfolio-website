import Image from "next/image";

import { cn } from "@/lib/utils/cn";

import { Heading } from "@/components/ui/heading/heading";
import { When } from "@/components/helpers/when/when";

import { WORK_SECTION_MOCK } from "@/constants/mocks/work-section.mock";

import "./works-section.css";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";

type WorksSectionProps = {
  item: `${number}`;
};

export function WorksSection({ item }: WorksSectionProps) {
  const { workSection } = WORK_SECTION_MOCK;

  return (
    <>
      <div className="works-grid">
        <div className="works-intro">
          <When condition={!!workSection[item]?.kicker}>
            <Typography as="span" variant="kicker">
              {workSection[item]?.kicker}
            </Typography>
          </When>
          <When condition={!!workSection[item]?.heading}>
            <Heading as="h2" variant="2">
              {Array.isArray(workSection[item]?.heading)
                ? workSection[item].heading?.map((text, index: number) => (
                    <span key={index}>{text}</span>
                  ))
                : workSection[item]?.heading}
            </Heading>
          </When>
          <When condition={!!workSection[item]?.description}>
            <Typography as="div" variant="description">
              {Array.isArray(workSection[item]?.description)
                ? workSection[item]?.description?.map((text, index: number) => (
                    <Typography as="p" key={index}>
                      {text}
                    </Typography>
                  ))
                : workSection[item]?.description}
            </Typography>
          </When>
          <When condition={!!workSection[item]?.link}>
            <div className="mt-4">
              <Button
                className="button"
                invert={workSection[item]?.link?.invert}
                variant={workSection[item]?.link?.variant}
                target={workSection[item]?.link?.target}
                href={workSection[item]?.link?.href ?? ""}
              >
                {workSection[item]?.link?.children}
              </Button>
            </div>
          </When>
        </div>

        <When condition={!!workSection[item]?.works}>
          {workSection[item]?.works?.map((work, index: number) => (
            <div key={work?.__id}>
              <div
                className={cn(
                  "works-grid-image",
                  index === 1 && "works-image-offset",
                )}
              >
                <div className="works-grid-heading">
                  <When condition={!!work?.kicker}>
                    <Typography as="span" variant="kicker">
                      {work?.kicker}
                    </Typography>
                  </When>
                  <When condition={!!work?.heading}>
                    <Heading as="h3" variant="5">
                      {work?.heading}
                    </Heading>
                  </When>
                  <When condition={!!work.description}>
                    <Typography as="p" variant="description">
                      {work?.description}
                    </Typography>
                  </When>
                </div>
                <When condition={!!work?.image?.src}>
                  <Image
                    src={work?.image?.src || ""}
                    alt={work?.image?.alt || ""}
                    width={work?.image?.width}
                    height={work?.image?.height}
                  />
                </When>
              </div>
            </div>
          ))}
        </When>
      </div>
    </>
  );
}
