"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categoryImages?: Record<string, string>;
}

interface MenuItem {
  title: string;
  handle: string;
}

interface MenuCategory {
  name: string;
  handle: string;
  items: MenuItem[];
}

const defaultImage = "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop";

const menuCategories: MenuCategory[] = [
  {
    name: "Batik",
    handle: "batik",
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
    items: [
      { title: "Standard Peranakan Top", handle: "standard-peranakan-top" },
      { title: "Premium Peranakan Top", handle: "premium-peranakan-top" },
      { title: "Kids Peranakan Top", handle: "kids-peranakan-top" },
    ],
  },
  {
    name: "Shoes",
    handle: "shoes",
    items: [
      { title: "Standard Beaded Shoes", handle: "standard-beaded-shoes" },
      { title: "Premium Beaded Shoes", handle: "premium-beaded-shoes" },
    ],
  },
  {
    name: "Kerosang",
    handle: "kerosang",
    items: [
      { title: "All Kerosang", handle: "kerosang" },
    ],
  },
];

export default function MegaMenu({ isOpen, onClose, categoryImages = {} }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].name);

  if (!isOpen) return null;

  const activeCategoryData = menuCategories.find(c => c.name === activeCategory);
  const activeItems = activeCategoryData?.items || [];
  const activeHandle = activeCategoryData?.handle || "";
  const activeImage = categoryImages[activeHandle] || defaultImage;

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 border-r border-stone-200 pr-6">
            <nav className="space-y-1">
              {menuCategories.map((category) => (
                <button
                  key={category.name}
                  onMouseEnter={() => setActiveCategory(category.name)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                    activeCategory === category.name
                      ? "bg-pink-50 text-[#EC4899]"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
            <div className="pt-4 mt-4 border-t border-stone-200">
              <Link
                href="/collections/all"
                onClick={onClose}
                className="block w-full text-left px-4 py-2 text-[#EC4899] font-medium hover:underline"
              >
                Shop All Products
              </Link>
            </div>
          </div>

          <div className="col-span-5">
            <p className="text-xs uppercase tracking-wider text-[#EC4899] font-semibold mb-4 px-2">
              {activeCategory}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {activeItems.map((item) => (
                <Link
                  key={item.handle}
                  href={`/collections/${item.handle}`}
                  onClick={onClose}
                  className="px-3 py-2 text-stone-700 hover:bg-stone-50 hover:text-[#EC4899] rounded-lg transition-colors text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
              <Image
                src={activeImage}
                alt={activeCategory}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">{activeCategory}</h3>
                <Link
                  href={`/collections/${activeHandle}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm text-pink-200 hover:text-white transition-colors"
                >
                  Browse Collection
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
