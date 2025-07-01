import { Heading } from "@/components/ui/heading/heading";
import { Button } from "@/components/ui/button/button";
import { When } from "@/components/helpers/when/when";

import "./info-block.css";

import { INFO_BLOCK_MOCK } from "@/constants/mocks/info-block.mock";

export function InfoBlock() {
  const { intro, quote, cards } = INFO_BLOCK_MOCK;

  return (
    <>
      <div className="info-discussion-block">
        <div className="info-email-block">
          <Heading as="h2" className="heading-2">
            {intro?.heading}
          </Heading>
          <p className="mt-3 text-lg">{intro?.description}</p>
          <div>
            <Button href={intro?.button?.href ?? ""}>
              {intro?.button?.children}
            </Button>
          </div>
        </div>

        <When condition={!!quote}>
          <div className="flex flex-col max-w-2xl">
            <h2 className="heading-3 relative">
              {quote.heading}
              <span className="info-quote-author">{quote.author}</span>
            </h2>
            <p className="info-quote-description">{quote.description}</p>
          </div>
        </When>
      </div>
      <When condition={!!cards}>
        <div className="skill-block">
          {cards.map((card) => (
            <div key={card.__id} className="card">
              <div className="card-body" key={card.__id}>
                <p>{card.description}</p>
                <br />
              </div>
              <div className="card-title">
                {card.icon}
                <p>{card.heading}</p>
              </div>
            </div>
          ))}
        </div>
      </When>
    </>
  );
}
