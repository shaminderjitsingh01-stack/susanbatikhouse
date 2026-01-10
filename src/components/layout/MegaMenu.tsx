"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Kebaya",
    handle: "kebaya",
    description: "Traditional Nyonya & Modern styles",
    image: "/images/products/kebaya/kebaya-1.webp",
    subcategories: ["Nyonya Kebaya", "Modern Kebaya", "Wedding Kebaya", "Casual Kebaya"],
  },
  {
    title: "Cheongsam",
    handle: "cheongsam",
    description: "Classic Chinese elegance",
    image: "/images/products/cheongsam/cheongsam-1.webp",
    subcategories: ["Traditional", "Modern", "Wedding", "Casual"],
  },
  {
    title: "Batik Dress",
    handle: "batik-dress",
    description: "Authentic batik patterns",
    image: "/images/products/batik-dress/batik-1.webp",
    subcategories: ["Formal Dresses", "Casual Dresses", "Batik Tops", "Batik Skirts"],
  },
  {
    title: "Sarong",
    handle: "sarong",
    description: "Versatile traditional wraps",
    image: "/images/products/sarong/sarong-1.webp",
    subcategories: ["Hand-drawn Batik", "Printed Batik", "Peranakan Motifs", "Modern Prints"],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Category List */}
          <div className="col-span-3 border-r border-stone-200 pr-8">
            <p className="text-xs uppercase tracking-wider text-stone-500 mb-4">Categories</p>
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.handle}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeCategory.handle === category.handle
                      ? "bg-pink-50 text-[#dc0e94]"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
              <Link
                href="/collections/all"
                onClick={onClose}
                className="block w-full text-left px-3 py-2 text-[#dc0e94] font-medium hover:underline mt-4"
              >
                Shop All →
              </Link>
            </nav>
          </div>

          {/* Subcategories */}
          <div className="col-span-4">
            <p className="text-xs uppercase tracking-wider text-stone-500 mb-4">
              {activeCategory.title}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {activeCategory.subcategories.map((sub) => (
                <Link
                  key={sub}
                  href={`/collections/${activeCategory.handle}`}
                  onClick={onClose}
                  className="px-3 py-2 text-stone-600 hover:text-[#dc0e94] hover:bg-stone-50 rounded transition-colors"
                >
                  {sub}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-stone-200">
              <Link
                href={`/collections/${activeCategory.handle}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 text-[#dc0e94] font-medium hover:underline"
              >
                View all {activeCategory.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Featured Image */}
          <div className="col-span-5">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
              <Image
                src={activeCategory.image}
                alt={activeCategory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-1">{activeCategory.title}</h3>
                <p className="text-stone-200 text-sm">{activeCategory.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
