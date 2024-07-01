"use client";

import { useState } from "react";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Carousel({ photos }) {
  const [current, setCurrent] = useState(0);
  const length = photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <button
          className="absolute top-1/2 left-3 z-10 p-2 bg-transparent hover:bg-secondaryGreen border border-primaryLight hover:border-secondaryGreen transition-colors duration-200 ease-in text-primaryLight hover:bg-gray-200 text-4xl rounded-full h-fit w-fit transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <GoChevronLeft />
        </button>
        {photos.map((item, index) => (
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === current ? "translate-x-0" : "translate-x-full"
            }`}
            key={index}
          >
            {index === current && (
              <Image
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-full rounded-lg"
                placeholder="blur"
                layout="fill"
              />
            )}
          </div>
        ))}
        <button
          className="absolute top-1/2 right-3 z-10 p-2 bg-transparent hover:bg-secondaryGreen border border-primaryLight hover:border-secondaryGreen transition-colors duration-200 ease-in text-primaryLight hover:bg-gray-200 text-4xl rounded-full h-fit w-fit transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <GoChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-3 w-full">
        {photos.map((item, index) => (
          <button
            key={index}
            className={`relative w-full aspect-square rounded-md ${
              index === current
                ? "border-2 border-secondaryGreen"
                : "border border-transparent"
            }`}
            onClick={() => selectSlide(index)}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="object-cover w-full h-full rounded"
              placeholder="blur"
              layout="fill"
            />
          </button>
        ))}
      </div>
      <p className="text-xs mt-12">
        Disclaimer: The square footage is approximate and images provided are
        for illustrative purposes only and may not represent the exact layout,
        design, or features of the actual apartments. Please refer to the
        leasing office for specific details and availability.
      </p>
    </div>
  );
}
