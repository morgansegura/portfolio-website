"use client";

import { CarouselSlide } from "../carousel-slide";
import { CarouselProps } from "../carousel.types";

import "./mini-carousel.css";

export function MiniCarousel({ items }: CarouselProps) {
  return (
    <div className="mini-carousel">
      <div className="mini-carousel-track">
        {items.map((item, index: number) => (
          <div className="mini-carousel-slide" key={index}>
            <CarouselSlide {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
