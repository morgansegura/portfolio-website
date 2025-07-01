import Image from "next/image";

import { Heading } from "@/components/ui/heading/heading";
import { When } from "@/components/helpers/when/when";

import "./works-section.css";

import type { LandingPageProps } from "@/constants/mocks/landing.mock";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export function WorksSection({
  kicker,
  heading,
  description,
  works,
  link,
}: LandingPageProps) {
  return (
    <>
      <div className="works-grid">
        <div className="works-intro">
          <When condition={!!kicker}>
            <div className="kicker">{kicker}</div>
          </When>
          <When condition={!!heading}>
            <Heading as="h3" className="heading-2">
              {Array.isArray(heading)
                ? heading?.map((text, index: number) => (
                    <span key={index}>{text}</span>
                  ))
                : heading}
            </Heading>
          </When>
          <When condition={!!description}>
            <div className="description">
              {Array.isArray(description)
                ? description?.map((text, index: number) => (
                    <p key={index}>{text}</p>
                  ))
                : description}
            </div>
          </When>
          {/* <When condition={!!link}> */}
          <div className="mt-4">
            <Link
              className="button"
              target={link?.target}
              href={link?.href ?? ""}
            >
              {link?.children}
            </Link>
          </div>
          {/* </When> */}
        </div>

        <When condition={!!works}>
          {works?.map((work, index: number) => (
            <div key={work.__id}>
              <div
                className={cn(
                  "works-grid-image",
                  index === 1 && "works-image-offset",
                )}
              >
                <div className="works-grid-heading">
                  <When condition={!!work.kicker}>
                    <p className="kicker">{work?.kicker}</p>
                  </When>
                  <When condition={!!work.heading}>
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

      {/* <div className="works-grid">
        <div className="works-grid-column">
          <div>
            <div className="kicker">Bible Project</div>
            <h3 className="heading-2">Frontend Software Engineer</h3>
            <div className="description">
              <p>
                A nonprofit animation studio that produces beautifully crafted
                videos, podcasts, and study resources to help people experience
                the Bible as a unified story that leads to Jesus.
              </p>
              <p>
                Through engaging visuals and deep biblical scholarship, they
                make complex theological themes accessible to audiences around
                the world, empowering viewers to explore Scripture with clarity,
                context, and purpose.
              </p>
            </div>
          </div>

          <div>
            <div className="works-grid-image">
              <div className="works-grid-heading">
                <p className="kicker">Bible Project</p>
                <p className="heading-3">
                  Landing page and <br /> responsive-first layout
                </p>
                <p className="description">
                  Blessed to work on a team of world class <br /> designers and
                  animators.
                </p>
              </div>
              <Image
                src="/images/works-rm1.png"
                alt=""
                width="750"
                height="900"
              />
            </div>
          </div>
        </div>

        <div className="works-grid-column">
          <div className="works-grid-image">
            <div className="works-grid-heading">
              <p className="kicker">Classroom</p>
              <p className="heading-3">
                Free online course software <br />& content from the library
              </p>
              <p className="description">
                Working at BibleProject I had the opportunity <br /> to work on
                many amazing projects.
              </p>
            </div>
            <Image
              src="/images/works-rm2.png"
              alt=""
              width="750"
              height="900"
            />
          </div>
        </div>
        <div className="works-grid-column">
          <div className="works-grid-image">
            <div className="works-grid-heading">
              <p className="kicker">Video Library</p>
              <p className="heading-3">
                Video, Podcasts and throngs <br />
                of media content.
              </p>
              <p className="description">
                Worked with some of the best <br /> content and media in the
                world.
              </p>
            </div>
            <Image
              src="/images/works-rm3.png"
              alt=""
              width="750"
              height="900"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
