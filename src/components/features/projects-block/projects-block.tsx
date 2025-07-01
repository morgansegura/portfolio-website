import Image from "next/image";
import Link from "next/link";

import "./projects-block.css";
import { Button } from "@/components/ui/button/button";
import { PROJECTS_BLOCK_MOCK } from "@/constants/mocks/projects-block.mock";

export function ProjectsBlock() {
  const { heading, description, cards } = PROJECTS_BLOCK_MOCK;

  return (
    <div className="projects-block">
      {/* Chula Vista FC */}

      <div className="grid lg:grid-cols-2 gap-x-24">
        <div>
          <h3 className="heading-3">{heading}</h3>
          <div className="description mt-4">
            {description.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        {cards
          .filter((index) => index.__id === "0")
          .map((card) => (
            <div key={card.__id} className="project-card mt-6">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
              />
              <div className="p-4">
                <p className="heading-sm">{card.heading}</p>
                <p className="description">{card.description}</p>
                <div className="mt-4">
                  <Button target={card.link.target} href={card.link.href}>
                    {card.link.children}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="grid gap-y-6 gap-x-24 lg:grid-cols-2">
        {cards
          .filter((index) => index.__id !== "0")
          .map((card) => (
            <div
              key={card.__id}
              className="project-card relative lg:-translate-y-1/2"
            >
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
              />
              <div className="p-4">
                <p className="heading-sm">{card.heading}</p>
                <p className="description">{card.description}</p>
                <div className="mt-4">
                  <Button target={card.link.target} href={card.link.href}>
                    {card.link.children}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
