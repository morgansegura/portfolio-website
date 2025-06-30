import { Container } from "@/components/layout/container/container";
import { Hero } from "@/components/layout/hero/hero";
import { CarouselItemProps } from "@/components/ui/carousel/carousel.types";
import { MiniCarousel } from "@/components/ui/carousel/mini-carousel/mini-carousel";

import { LANDING_PAGE_MOCK } from "@/constants/mocks/landing.mock";
import {
  AtomIcon,
  AtSignIcon,
  BoxIcon,
  InfoIcon,
  InstagramIcon,
  LinkedinIcon,
  MonitorSmartphoneIcon,
  PenIcon,
  PenToolIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { hero } = LANDING_PAGE_MOCK;

  const carouselItems = [
    {
      title: "Item 1",
      image: {
        src: "/images/works-bp1.png",
        alt: "Works Bible Project 1",
        width: "450",
        height: "250",
      },
    },
    {
      title: "Item 2",
      image: {
        src: "/images/works-bp2.png",
        alt: "Works Bible Project 1",
        width: "450",
        height: "250",
      },
    },
    {
      title: "Item 3",
      image: {
        src: "/images/works-bp3.png",
        alt: "Works Bible Project 1",
        width: "450",
        height: "250",
      },
    },
    {
      title: "Item 4",
      image: {
        src: "/images/works-rm1.png",
        alt: "Works Bible Project 1",
        width: "450",
        height: "250",
      },
    },
    {
      title: "Item 5",
      image: {
        src: "/images/works-rm2.png",
        alt: "Works Bible Project 1",
        width: "450",
        height: "250",
      },
    },
    {
      title: "Item 5",
      image: {
        src: "/images/works-rm3.png",
        alt: "Works Bible Project 1",
        width: "450",
        height: "250",
      },
    },
  ];

  return (
    <>
      <div className="relative bg-linear-to-br from-emerald-600 via-blue-900 to-blue-600 after:content-[''] ">
        <Container>
          <Hero className="relative">
            <Hero.Column>
              <h1 className="heading">
                <span className="mo">
                  <AtomIcon />
                  Morgan
                </span>
                <span className="segura">Segura</span>
              </h1>
              <div className="social-media">
                <Link href="/">
                  <InstagramIcon />
                </Link>
                <Link href="/">
                  <TwitterIcon />
                </Link>
                <Link href="/">
                  <LinkedinIcon />
                </Link>
              </div>
            </Hero.Column>
            <Hero.Column className="introduction">
              <div>
                <div className="introduction-title">{hero.intro}</div>
              </div>
              <h2 className="subheading">
                <span>UI/UX Developer</span> & <span>Software Engineer</span>,
                based in California
              </h2>
              <p className="description">
                Senior Software Engineer & UI/UX Developer crafting intuitive,
                reliable digital experiences. I specialize in building scalable
                front-end and full-stack applications with clean design,
                thoughtful architecture, and a strong focus on user experience.
                Whether I'm designing a new interface or optimizing a backend
                system, I believe great software should be elegant,
                maintainable, and built with purpose.
              </p>
            </Hero.Column>
          </Hero>
        </Container>
      </div>

      {/* Works */}
      <section className="section" data-section-theme="light">
        <Container className="section-container">
          <h2 className="section-title">
            <span>Projects</span>
          </h2>

          <div className="works-grid">
            <div className="works-grid-column row-span-2">
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
                <div className="works-grid-image absolute top-0 -translate-y-1/2">
                  <div className="works-grid-heading">
                    <p className="kicker">Bible Project</p>
                    <p className="heading-3">
                      Landing page and <br /> responsive first layout
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
                  <p className="kicker">Bible Project</p>
                  <p className="heading-3">Landing page and mobile layout</p>
                  <p className="description">Smaller Text.</p>
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
                  <p className="kicker">Bible Project</p>
                  <p className="heading-3">Bigger text</p>
                  <p className="description">Smaller Text.</p>
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
          <MiniCarousel items={carouselItems as CarouselItemProps[]} />
        </Container>
      </section>

      <div className="section" data-section-theme="neutral">
        <Container className="section-container">
          <h2 className="section-title">
            <span>About Me</span>
          </h2>
          <div className="grid gap-20 lg:grid-cols-2">
            <div className="flex flex-col max-w-md">
              <h2 className="text-4xl leading-none mt-2">
                Let's start a discussion.
              </h2>
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
              <h2 className="text-4xl leading-none mt-2 relative inline-flex justify-start items-start">
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
      </div>

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
