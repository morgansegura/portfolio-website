import Image from "next/image";
import { Button } from "@/components/ui/button/button";
import { When } from "@/components/helpers/when/when";

import { PROJECTS_BLOCK_MOCK } from "@/constants/mocks/projects-block.mock";

import "./projects-block.css";
import { Heading } from "@/components/ui/heading/heading";

export function ProjectsBlock() {
  const { heading, description, cards } = PROJECTS_BLOCK_MOCK;

  return (
    <div className="projects-block">
      <div className="project-card-grid">
        <div>
          <Heading as="h3" className="heading-2">
            {heading}
          </Heading>
          <div className="description mt-4">
            {description.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        {cards.map((card) => (
          <div key={card.__id} className="project-card mt-6">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              width={card.image.width}
              height={card.image.height}
            />
            <When condition={!!card?.tag}>
              <div className="tag">{card.tag}</div>
            </When>
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
