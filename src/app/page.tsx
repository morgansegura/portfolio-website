import { Fragment } from "react";

import { When } from "@/components/helpers/when/when";
import { Section } from "@/components/layout/section/section";

import { HeroMain } from "@/components/features/hero-main/hero-main";
import { WorksSection } from "@/components/features/works-section/works-section";
import { InfoBlock } from "@/components/features/info-block/info-block";
import { ProjectsBlock } from "@/components/features/projects-block/projects-block";

import { LANDING_PAGE_MOCK } from "@/constants/mocks/landing.mock";

import type { LandingPageProps } from "@/constants/mocks/landing.mock";

export default function Home() {
  const data = LANDING_PAGE_MOCK;

  return (
    <>
      <span id="top" />
      {data.map((content: LandingPageProps, dataIndex: number) => (
        <Fragment key={dataIndex}>
          <>
            <Section
              className={content.sectionClassName}
              theme={content.sectionTheme}
              title={{ as: "h2", children: content.sectionTitle }}
              buffer={content?.buffer}
              spacer={content?.spacer}
              id={content?.__sectionId}
            >
              <When condition={content.__sectionId === "hero"}>
                <HeroMain />
              </When>
              <When condition={content.__sectionId === "works"}>
                <WorksSection item={0} />
              </When>
              <When condition={content.__sectionId === "contact"}>
                <InfoBlock />
              </When>
              <When condition={content.__sectionId === "works-1"}>
                <WorksSection item={1} />
              </When>
              <When condition={content.__sectionId === "projects"}>
                <ProjectsBlock />
              </When>
            </Section>
          </>
        </Fragment>
      ))}
    </>
  );
}
