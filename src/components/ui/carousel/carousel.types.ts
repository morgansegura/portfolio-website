export type CarouselItemProps = {
  description?: string;
  href?: string;
  image?: {
    src?: string;
    alt?: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
  };
  kicker?: string;
  title?: string;
};

export type CarouselProps = {
  items: CarouselItemProps[];
};
