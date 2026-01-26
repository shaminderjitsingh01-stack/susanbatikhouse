"use client";

import { useState, useMemo } from "react";
import { ShopifyProduct } from "@/lib/shopify";
import ProductCard from "./ProductCard";

interface CollectionFilterProps {
  products: ShopifyProduct[];
  collectionHandle: string;
}

// Define which collections are fabric/kerosang (no sizes)
const noSizeCollections = [
  "batik-fabric",
  "handstamp-batik-fabric",
  "hand-draw-batik-fabric",
  "kerosang",
];

// Define shoe collections
const shoeCollections = [
  "shoes",
  "standard-beaded-shoes",
  "premium-beaded-shoes",
];

// Clothing sizes
const clothingSizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

// Shoe sizes
const shoeSizes = ["4", "5", "6", "7", "8", "9", "10", "11", "12"];

export default function CollectionFilter({ products, collectionHandle }: CollectionFilterProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  // Determine collection type
  const isNoSizeCollection = noSizeCollections.some(c => collectionHandle.includes(c));
  const isShoeCollection = shoeCollections.some(c => collectionHandle.includes(c));

  // Get available sizes for this collection
  const availableSizesInCollection = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(product => {
      product.variants?.edges?.forEach(v => {
        const sizeOption = v.node.selectedOptions?.find(opt => opt.name === "Size");
        if (sizeOption?.value) {
          sizes.add(sizeOption.value);
        }
      });
    });
    return Array.from(sizes);
  }, [products]);

  // Get the size options to display based on collection type
  const sizeOptions = useMemo(() => {
    if (isNoSizeCollection) return [];
    const baseSizes = isShoeCollection ? shoeSizes : clothingSizes;
    // Only show sizes that exist in the collection
    return baseSizes.filter(size => availableSizesInCollection.includes(size));
  }, [isNoSizeCollection, isShoeCollection, availableSizesInCollection]);

  // Filter products by selected sizes
  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedSizes.length > 0) {
      result = products.filter(product => {
        const productSizes = product.variants?.edges
          ?.map(v => v.node.selectedOptions?.find(opt => opt.name === "Size")?.value)
          .filter(Boolean) || [];
        return selectedSizes.some(size => productSizes.includes(size));
      });
    }

    // Sort products
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) =>
        parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount)
      );
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) =>
        parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount)
      );
    }

    return result;
  }, [products, selectedSizes, sortBy]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedSizes([]);
  };

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-col gap-4 mb-10 pb-6 border-b border-stone-200">
        {/* Size Filters */}
        {sizeOptions.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-stone-700 mr-2">Filter by Size:</span>
            {sizeOptions.map(size => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  selectedSizes.includes(size)
                    ? "bg-[#EC4899] text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {size}
              </button>
            ))}
            {selectedSizes.length > 0 && (
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 text-sm font-medium text-[#EC4899] hover:underline ml-2"
              >
                Clear all
              </button>
            )}
          </div>
        )}

        {/* Sort and Count Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-stone-600">
            Showing <span className="font-semibold text-stone-900">{filteredProducts.length}</span>
            {selectedSizes.length > 0 && ` of ${products.length}`} products
          </p>
          <div className="flex items-center gap-4">
            <label className="text-sm text-stone-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-stone-300 rounded-full text-sm focus:outline-none focus:border-[#EC4899] transition-colors bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showSizes={!isNoSizeCollection}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-stone-500 mb-4">No products found with the selected size.</p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-[#EC4899] text-white rounded-full hover:bg-[#EC4899]/90 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
