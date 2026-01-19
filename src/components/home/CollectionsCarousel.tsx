"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Collection {
  title: string;
  handle: string;
  image: string;
}

interface CollectionsCarouselProps {
  collections: Collection[];
}

export default function CollectionsCarousel({ collections }: CollectionsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / collections.length;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, [collections.length]);

  const scrollNext = useCallback(() => {
    const newIndex = currentIndex < collections.length - 1 ? currentIndex + 1 : 0;
    scrollTo(newIndex);
  }, [currentIndex, scrollTo, collections.length]);

  const scrollPrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : collections.length - 1;
    scrollTo(newIndex);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  if (collections.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* Navigation Arrows - Desktop */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center text-stone-700 hover:text-[#EC4899] hover:shadow-xl transition-all"
        aria-label="Previous"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center text-stone-700 hover:text-[#EC4899] hover:shadow-xl transition-all"
        aria-label="Next"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {collections.map((collection) => (
          <Link
            key={collection.handle}
            href={`/collections/${collection.handle}`}
            className="group flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-18px)] snap-start relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold group-hover:text-pink-300 transition-colors">
                {collection.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
