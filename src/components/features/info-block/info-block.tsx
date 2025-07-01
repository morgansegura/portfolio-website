import { Heading } from "@/components/ui/heading/heading";
import { Button } from "@/components/ui/button/button";
import { When } from "@/components/helpers/when/when";

import "./info-block.css";

import { INFO_BLOCK_MOCK } from "@/constants/mocks/info-block.mock";
import { Typography } from "@/components/ui/typography/typography";

export function InfoBlock() {
  const { intro, quote, cards } = INFO_BLOCK_MOCK;

  return (
    <>
      <div className="info-discussion-block">
        <div className="info-email-block">
          <Heading as="h2" variant="2">
            {intro?.heading}
          </Heading>
          <Typography variant="description">
            <Typography as="p">{intro?.description}</Typography>
          </Typography>
          <div>
            <Button className="info-button" href={intro?.button?.href ?? ""}>
              {intro?.button?.children}
            </Button>
          </div>
        </div>

        <When condition={!!quote}>
          <div className="info-quote">
            <Heading as="h4" variant="3">
              {quote.heading}
              <span className="info-quote-author">{quote.author}</span>
            </Heading>
            <Typography as="div" variant="description">
              <Typography className="info-quote-description">
                {quote.description}
              </Typography>
            </Typography>
          </div>
        </When>
      </div>
      <When condition={!!cards}>
        <div className="skill-block">
          {cards.map((card) => (
            <div key={card.__id} className="card">
              <div className="card-body" key={card.__id}>
                <Typography as="p">{card.description}</Typography>
              </div>
              <div className="card-title">
                {card.icon}
                <Typography as="p" variant="xl">
                  {card.heading}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </When>
    </>
  );
}
