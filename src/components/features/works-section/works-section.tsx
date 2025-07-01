import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils/cn";

import { Heading } from "@/components/ui/heading/heading";
import { When } from "@/components/helpers/when/when";

import { WORK_SECTION_MOCK } from "@/constants/mocks/work-section.mock";

import "./works-section.css";
import { Button } from "@/components/ui/button/button";

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
            <div className="kicker">{workSection[item]?.kicker}</div>
          </When>
          <When condition={!!workSection[item]?.heading}>
            <Heading as="h3" className="heading-2">
              {Array.isArray(workSection[item]?.heading)
                ? workSection[item].heading?.map((text, index: number) => (
                    <span key={index}>{text}</span>
                  ))
                : workSection[item]?.heading}
            </Heading>
          </When>
          <When condition={!!workSection[item]?.description}>
            <div className="description">
              {Array.isArray(workSection[item]?.description)
                ? workSection[item]?.description?.map((text, index: number) => (
                    <p key={index}>{text}</p>
                  ))
                : workSection[item]?.description}
            </div>
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
                    <p className="kicker">{work?.kicker}</p>
                  </When>
                  <When condition={!!work?.heading}>
                    <p className="heading-3">{work?.heading}</p>
                  </When>
                  <When condition={!!work.description}>
                    <p className="description">{work?.description}</p>
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
