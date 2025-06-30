import Link from "next/link";
import Image from "next/image";

import { When } from "@/components/helpers/when/when";

import { CarouselItemProps } from "./carousel.types";

export function CarouselSlide({
  description,
  href,
  image,
  kicker,
  title,
}: CarouselItemProps) {
  const cardContent = (
    <>
      <When condition={!!kicker}>{kicker}</When>
      <When condition={!!title}>{title}</When>
      <When condition={!!description}>{description}</When>
      <When condition={!!image}>
        <Image
          src={image?.src || ""}
          alt={image?.alt || ""}
          width={image?.width}
          height={image?.height}
        />
      </When>
    </>
  );

  return !!href ? (
    <Link href={href} className="carousel-slide">
      {cardContent}
    </Link>
  ) : (
    <>{cardContent}</>
  );
}
