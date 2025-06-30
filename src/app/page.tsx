import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { BoxIcon, MonitorSmartphoneIcon, PenToolIcon } from "lucide-react";

import { HeroMain } from "@/components/features/hero-main/hero-main";
import { When } from "@/components/helpers/when/when";
import { Container } from "@/components/layout/container/container";

import { LANDING_PAGE_MOCK } from "@/constants/mocks/landing.mock";

import type { LandingPageProps } from "@/constants/mocks/landing.mock";

export default function Home() {
  const data = LANDING_PAGE_MOCK;

  return (
    <>
      {data.map((content: LandingPageProps) => (
        <Fragment key={content.__sectionId}>
          <>
            <section className={content.sectionClassName}>
              <Container>
                <When condition={content.__sectionId === "hero"}>
                  <HeroMain {...content} />
                </When>
                <When condition={content.__sectionId === "hero"}>
                  Anotha One
                </When>
              </Container>
            </section>
          </>
        </Fragment>
      ))}
      <section className="hero-section"></section>

      {/* Works */}
      <section className="section" data-section-theme="light">
        <Container className="section-container">
          <h2 className="section-title">
            <span>Projects</span>
          </h2>

          <div className="works-grid">
            <div className="works-grid-column">
              <div>
                <div className="kicker">Bible Project</div>
                <h3 className="heading-2">Frontend Software Engineer</h3>
                <div className="description">
                  <p>
                    A nonprofit animation studio that produces beautifully
                    crafted videos, podcasts, and study resources to help people
                    experience the Bible as a unified story that leads to Jesus.
                  </p>
                  <p>
                    Through engaging visuals and deep biblical scholarship, they
                    make complex theological themes accessible to audiences
                    around the world, empowering viewers to explore Scripture
                    with clarity, context, and purpose.
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
                      Blessed to work on a team of world class <br /> designers
                      and animators.
                    </p>
                  </div>
                  <Image
                    src="/images/works-bp1.png"
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
                    Working at BibleProject I had the opportunity <br /> to work
                    on many amazing projects.
                  </p>
                </div>
                <Image
                  src="/images/works-bp2.png"
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
                  src="/images/works-bp3.png"
                  alt=""
                  width="750"
                  height="900"
                />
              </div>
            </div>
          </div>

          <hr className="border-neutral-200" />

          <div className="works-grid">
            <div className="works-grid-column">
              <div>
                <div className="kicker">Bible Project</div>
                <h3 className="heading-2">Frontend Software Engineer</h3>
                <div className="description">
                  <p>
                    A nonprofit animation studio that produces beautifully
                    crafted videos, podcasts, and study resources to help people
                    experience the Bible as a unified story that leads to Jesus.
                  </p>
                  <p>
                    Through engaging visuals and deep biblical scholarship, they
                    make complex theological themes accessible to audiences
                    around the world, empowering viewers to explore Scripture
                    with clarity, context, and purpose.
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
                      Blessed to work on a team of world class <br /> designers
                      and animators.
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
                    Working at BibleProject I had the opportunity <br /> to work
                    on many amazing projects.
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
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="section" data-section-theme="neutral">
        <Container className="section-container">
          <h2 className="section-title">
            <span>About Me</span>
          </h2>
          <div className="grid gap-20 lg:grid-cols-2">
            <div className="flex flex-col max-w-md">
              <h2 className="heading-2">Let's start a discussion.</h2>
              <p className="mt-3 text-lg">
                I am happy to chat about new opportunities, upcoming events,
                collaboration, or anything else there is time for.
              </p>
              <div>
                <Link
                  href="mailto:morgansegura@gmail.com"
                  className="inline-flex mt-4 items-center gap-1 text-xl font-semibold text-white bg-neutral-900 rounded-md border-2 border-neutral-900 px-2 py-1 hover:bg-white transition-colors duration-300 ease-out"
                >
                  @morgansegura@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col max-w-2xl">
              <h2 className="heading-3 relative">
                "I am an optimist. It does not seem too much use being anything
                else."{" "}
                <span className="absolute bg-neutral-100/50 right-12 rounded-md px-1.5 -top-7 inline text-base">
                  Winston Churchill
                </span>
              </h2>
              <p className="mt-4 text-lg">
                Inspiration comes from many places and from the many great
                words, works, and masterpeices that I have had the privy to
                admire in my life-time. I never claim to be self-taught and
                strive to be humble, because all talents, learned or otherwise
                are a gift from above.{" "}
                <span className="text-sm">~ Not Winston Churchill</span>
              </p>
            </div>
          </div>
          <div className="skill-block">
            <div className="card">
              <div className="card-body">
                <p>
                  I design clean, accessible interfaces that bring clarity and
                  confidence to users. My approach focuses on visual hierarchy,
                  consistency, and purposeful simplicity across platforms.
                </p>
                <br />
              </div>
              <div className="card-title">
                <PenToolIcon className="fill-purple-300" />
                <p>User Interface Designer</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p>
                  I build intuitive flows rooted in empathy, usability, and
                  real-world context. From wireframes to interaction design, I
                  aim to make digital experiences feel effortless and human.
                </p>
                <br />
              </div>
              <div className="card-title">
                <BoxIcon className="fill-cyan-200" />
                <p>User Experience Designer</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p>
                  With over a decade of experience across front-end and back-end
                  systems, I develop scalable, maintainable applications that
                  balance user needs with solid architecture and performance.
                </p>
              </div>
              <div className="card-title">
                <MonitorSmartphoneIcon className="fill-indigo-300" />
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section bg-neutral-200 section-transition">
        <Container className="flex flex-col gap-14">
          <h2>About Me</h2>
        </Container>
      </div>

      <div className="section bg-neutral-200 section-transition">
        <Container className="flex flex-col gap-14">
          <h2>Blog</h2>
        </Container>
      </div>
    </>
  );
}
