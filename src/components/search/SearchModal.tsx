"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { searchProducts, ShopifyProduct } from "@/lib/shopify";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    const search = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const products = await searchProducts(query, 8);
        setResults(products);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(search, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative max-w-2xl mx-auto mt-20 mx-4">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center border-b border-stone-200">
            <svg className="w-5 h-5 text-stone-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-4 py-4 text-lg outline-none"
            />
            <button
              onClick={onClose}
              className="p-4 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {loading && (
              <div className="p-8 text-center text-stone-500">
                Searching...
              </div>
            )}

            {!loading && query.length >= 2 && results.length === 0 && (
              <div className="p-8 text-center text-stone-500">
                No products found for &quot;{query}&quot;
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="p-4">
                <p className="text-sm text-stone-500 mb-4">
                  {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
                </p>
                <div className="space-y-2">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.handle}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone-50 transition-colors"
                    >
                      <div className="relative w-16 h-20 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                        {product.images.edges[0] && (
                          <Image
                            src={product.images.edges[0].node.url}
                            alt={product.images.edges[0].node.altText || product.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-stone-900 truncate">
                          {product.title}
                        </h3>
                        <p className="text-[#3EB8A4] font-semibold">
                          {formatPrice(
                            product.priceRange.minVariantPrice.amount,
                            product.priceRange.minVariantPrice.currencyCode
                          )}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {!loading && query.length < 2 && (
              <div className="p-8 text-center">
                <p className="text-stone-500 mb-4">Popular Searches</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Kebaya", "Cheongsam", "Batik", "Sarong"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-full text-sm transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
