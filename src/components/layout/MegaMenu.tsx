"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCollections, ShopifyCollection } from "@/lib/shopify";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultImage = "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop";

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [activeCollection, setActiveCollection] = useState<ShopifyCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const data = await getCollections();
        const filtered = data.filter(c => c.title && c.handle);
        setCollections(filtered);
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
            <div className="col-span-4 border-r border-stone-200 pr-8">
              <p className="text-xs uppercase tracking-wider text-stone-500 mb-4">Collections</p>
              <nav className="space-y-1">
                {collections.map((collection) => (
                  <button
                    key={collection.handle}
                    onMouseEnter={() => setActiveCollection(collection)}
                    className={getButtonClass(collection.handle)}
                  >
                    <span className="font-medium">{collection.title}</span>
                  </button>
                ))}
                <Link
                  href="/collections/all"
                  onClick={onClose}
                  className="block w-full text-left px-3 py-2 text-[#EC4899] font-medium hover:underline mt-4"
                >
                  Shop All Products
                </Link>
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
