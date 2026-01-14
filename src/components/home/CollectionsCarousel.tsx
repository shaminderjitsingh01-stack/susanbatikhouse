"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Collections with subcategories matching megamenu
const menuCategories = [
  {
    name: "Batik",
    handle: "batik",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    items: [
      { title: "Batik Fabric", handle: "batik-fabric" },
      { title: "Handstamp Batik Fabric", handle: "handstamp-batik-fabric" },
      { title: "Hand Draw Batik Fabric", handle: "hand-draw-batik-fabric" },
      { title: "Ladies Batik Top", handle: "ladies-batik-top" },
      { title: "Mens Batik Top", handle: "mens-batik-top" },
      { title: "Ladies Batik Sarong", handle: "ladies-batik-sarong" },
      { title: "Batik Cheongsam", handle: "batik-cheongsam" },
      { title: "Ladies Batik Pants", handle: "ladies-batik-pants" },
    ],
  },
  {
    name: "Kebaya",
    handle: "kebaya",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    items: [
      { title: "Standard Peranakan Top", handle: "standard-peranakan-top" },
      { title: "Premium Peranakan Top", handle: "premium-peranakan-top" },
      { title: "Kids Peranakan Top", handle: "kids-peranakan-top" },
    ],
  },
  {
    name: "Shoes",
    handle: "shoes",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
    items: [
      { title: "Standard Beaded Shoes", handle: "standard-beaded-shoes" },
      { title: "Premium Beaded Shoes", handle: "premium-beaded-shoes" },
    ],
  },
  {
    name: "Kerosang",
    handle: "kerosang",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb1bd5d44?w=600&h=800&fit=crop",
    items: [
      { title: "All Kerosang", handle: "kerosang" },
    ],
  },
];

export default function CollectionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / menuCategories.length;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, []);

  const scrollNext = useCallback(() => {
    const newIndex = currentIndex < menuCategories.length - 1 ? currentIndex + 1 : 0;
    scrollTo(newIndex);
  }, [currentIndex, scrollTo]);

  const scrollPrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : menuCategories.length - 1;
    scrollTo(newIndex);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollNext]);

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
        {menuCategories.map((category) => (
          <div
            key={category.handle}
            className="group flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-18px)] snap-start relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <Link href={`/collections/${category.handle}`}>
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-3 group-hover:text-pink-300 transition-colors">
                  {category.name}
                </h3>
              </Link>
              <ul className="space-y-1">
                {category.items.slice(0, 4).map((item) => (
                  <li key={item.handle}>
                    <Link
                      href={`/collections/${item.handle}`}
                      className="text-white/80 hover:text-pink-300 transition-colors text-xs md:text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                {category.items.length > 4 && (
                  <li>
                    <Link
                      href={`/collections/${category.handle}`}
                      className="text-pink-300 hover:text-pink-200 transition-colors text-xs md:text-sm font-medium"
                    >
                      + {category.items.length - 4} more
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {menuCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-[#EC4899] w-6" : "bg-stone-300 hover:bg-stone-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
