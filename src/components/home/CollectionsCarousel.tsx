"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCollections, ShopifyCollection } from "@/lib/shopify";

const defaultImages = [
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
];

export default function CollectionsCarousel() {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const data = await getCollections();
        setCollections(data.filter(c => c.title && c.handle));
      } catch {
        // Shopify not connected
      } finally {
        setLoading(false);
      }
    }
    fetchCollections();
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (carouselRef.current && collections.length > 0) {
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
  }, [currentIndex, collections.length, scrollTo]);

  const scrollPrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : collections.length - 1;
    scrollTo(newIndex);
  };

  // Auto-scroll
  useEffect(() => {
    if (collections.length === 0) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [collections.length, scrollNext]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-[3/4] bg-stone-200 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (collections.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-stone-500">No collections available</p>
      </div>
    );
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
        {collections.map((collection, index) => (
          <Link
            key={collection.handle}
            href={"/collections/" + collection.handle}
            className="group flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-18px)] snap-start relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={collection.image?.url || defaultImages[index % defaultImages.length]}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-1 group-hover:text-pink-300 transition-colors">
                {collection.title}
              </h3>
              {collection.description && (
                <p className="text-stone-300 text-xs md:text-sm mb-2 line-clamp-2 hidden sm:block">
                  {collection.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-pink-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-2">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {collections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={"w-2 h-2 rounded-full transition-all " + (index === currentIndex ? "bg-[#EC4899] w-6" : "bg-stone-300 hover:bg-stone-400")}
            aria-label={"Go to slide " + (index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
