"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCollections, ShopifyCollection } from "@/lib/shopify";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CategoryGroup {
  name: string;
  collections: ShopifyCollection[];
}

const defaultImage = "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop";

// Define main categories and their matching keywords
const categoryKeywords: Record<string, string[]> = {
  "Kebaya": ["kebaya", "nyonya", "peranakan", "embroidery"],
  "Cheongsam": ["cheongsam", "qipao", "chinese"],
  "Batik": ["batik", "dress"],
  "Sarong": ["sarong", "wrap"],
  "Accessories": ["accessories", "slipper", "beaded", "shoe"],
  "Men": ["men", "male", "guy"],
};

function groupCollections(collections: ShopifyCollection[]): CategoryGroup[] {
  const groups: Record<string, ShopifyCollection[]> = {};
  const uncategorized: ShopifyCollection[] = [];

  collections.forEach((collection) => {
    const titleLower = collection.title.toLowerCase();
    const handleLower = collection.handle.toLowerCase();
    let matched = false;

    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(kw => titleLower.includes(kw) || handleLower.includes(kw))) {
        if (!groups[category]) groups[category] = [];
        groups[category].push(collection);
        matched = true;
        break;
      }
    }

    if (!matched) {
      uncategorized.push(collection);
    }
  });

  // Convert to array and sort
  const result: CategoryGroup[] = Object.entries(groups)
    .map(([name, colls]) => ({ name, collections: colls }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Add uncategorized at the end if any
  if (uncategorized.length > 0) {
    result.push({ name: "Other", collections: uncategorized });
  }

  return result;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [categoryGroups, setCategoryGroups] = useState<CategoryGroup[]>([]);
  const [activeCollection, setActiveCollection] = useState<ShopifyCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const data = await getCollections();
        const filtered = data.filter(c => c.title && c.handle);
        setCollections(filtered);
        setCategoryGroups(groupCollections(filtered));
        if (filtered.length > 0) {
          setActiveCollection(filtered[0]);
        }
      } catch {
        // Shopify not connected
      } finally {
        setLoading(false);
      }
    }
    fetchCollections();
  }, []);

  if (!isOpen) return null;

  const getButtonClass = (handle: string) => {
    const base = "w-full text-left px-3 py-2 rounded-lg transition-colors";
    if (activeCollection?.handle === handle) {
      return base + " bg-pink-50 text-[#EC4899]";
    }
    return base + " text-stone-700 hover:bg-stone-50";
  };

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-[#EC4899] border-t-transparent rounded-full" />
          </div>
        ) : collections.length > 0 ? (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 border-r border-stone-200 pr-8 max-h-[400px] overflow-y-auto">
              <nav className="space-y-4">
                {categoryGroups.map((group) => (
                  <div key={group.name}>
                    <p className="text-xs uppercase tracking-wider text-[#EC4899] font-semibold mb-2 px-3">
                      {group.name}
                    </p>
                    <div className="space-y-1">
                      {group.collections.map((collection) => (
                        <button
                          key={collection.handle}
                          onMouseEnter={() => setActiveCollection(collection)}
                          className={getButtonClass(collection.handle)}
                        >
                          <span className="font-medium text-sm">{collection.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-stone-200">
                  <Link
                    href="/collections/all"
                    onClick={onClose}
                    className="block w-full text-left px-3 py-2 text-[#EC4899] font-medium hover:underline"
                  >
                    Shop All Products →
                  </Link>
                </div>
              </nav>
            </div>

            <div className="col-span-8">
              {activeCollection && (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 mb-4">
                      {activeCollection.title}
                    </p>
                    {activeCollection.description && (
                      <p className="text-stone-600 mb-6 line-clamp-3">
                        {activeCollection.description}
                      </p>
                    )}
                    <Link
                      href={"/collections/" + activeCollection.handle}
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white font-medium rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                    >
                      Browse {activeCollection.title}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
                    <Image
                      src={activeCollection.image?.url || defaultImage}
                      alt={activeCollection.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl font-bold mb-1">{activeCollection.title}</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-stone-500">No collections available</p>
            <Link
              href="/collections/all"
              onClick={onClose}
              className="inline-block mt-4 text-[#EC4899] font-medium hover:underline"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
