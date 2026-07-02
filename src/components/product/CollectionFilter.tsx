"use client";

import { useState, useMemo } from "react";
import { ShopifyProduct, PageInfo } from "@/lib/shopify";
import ProductCard from "./ProductCard";

interface CollectionFilterProps {
  products: ShopifyProduct[];
  collectionHandle: string;
  initialPageInfo?: PageInfo;
}

const PAGE_SIZE = 100;

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

// Size ordering for sorting (includes common variations)
const clothingSizeOrder = [
  "XS", "S", "Small", "M", "Medium", "L", "Large",
  "XL", "Extra Large", "XXL", "2XL", "XXXL", "3XL",
  "XXXXL", "4XL", "5XL", "6XL"
];

// Values to never show as a size filter (they aren't real size choices)
const hiddenFilterSizes = ["one size", "os", "onesize"];

// Shoe size order (numeric)
const shoeSizeOrder = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

export default function CollectionFilter({
  products: initialProducts,
  collectionHandle,
  initialPageInfo,
}: CollectionFilterProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  // Products accumulate as the visitor clicks "Load more" (100 at a time, no cap).
  const [products, setProducts] = useState<ShopifyProduct[]>(initialProducts);
  const [cursor, setCursor] = useState<string | null>(initialPageInfo?.endCursor ?? null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(initialPageInfo?.hasNextPage ?? false);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = async () => {
    if (loadingMore || !hasNextPage) return;
    setLoadingMore(true);
    try {
      const params = new URLSearchParams({
        handle: collectionHandle,
        first: String(PAGE_SIZE),
      });
      if (cursor) params.set("cursor", cursor);

      const res = await fetch(`/api/products?${params.toString()}`);
      const data: { products: ShopifyProduct[]; pageInfo: PageInfo } = await res.json();

      setProducts((prev) => {
        const seen = new Set(prev.map((p) => p.id));
        const next = (data.products || []).filter((p) => !seen.has(p.id));
        return [...prev, ...next];
      });
      setCursor(data.pageInfo?.endCursor ?? null);
      setHasNextPage(Boolean(data.pageInfo?.hasNextPage));
    } catch (err) {
      console.error("Load more failed:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  // Determine collection type
  const isNoSizeCollection = noSizeCollections.some(c => collectionHandle.includes(c));
  const isShoeCollection = shoeCollections.some(c => collectionHandle.includes(c));

  // Get available sizes for this collection
  const availableSizesInCollection = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(product => {
      product.variants?.edges?.forEach(v => {
        const sizeOption = v.node.selectedOptions?.find(opt => opt.name === "Size");
        if (sizeOption?.value && !hiddenFilterSizes.includes(sizeOption.value.trim().toLowerCase())) {
          sizes.add(sizeOption.value);
        }
      });
    });
    return Array.from(sizes);
  }, [products]);

  // Get the size options to display based on collection type
  // Shows ALL available sizes from products, sorted in logical order
  const sizeOptions = useMemo(() => {
    if (isNoSizeCollection) return [];

    const orderList = isShoeCollection ? shoeSizeOrder : clothingSizeOrder;

    // Sort available sizes: known sizes first (in order), then unknown sizes alphabetically
    return [...availableSizesInCollection].sort((a, b) => {
      const indexA = orderList.findIndex(s => s.toLowerCase() === a.toLowerCase());
      const indexB = orderList.findIndex(s => s.toLowerCase() === b.toLowerCase());

      // Both in order list: sort by order
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      // Only a in order list: a comes first
      if (indexA !== -1) return -1;
      // Only b in order list: b comes first
      if (indexB !== -1) return 1;
      // Neither in order list: sort alphabetically
      return a.localeCompare(b);
    });
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
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showSizes={!isNoSizeCollection}
              />
            ))}
          </div>

          {/* Load More */}
          {hasNextPage && (
            <div className="flex flex-col items-center gap-3 mt-12">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="px-10 py-4 bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loadingMore ? "Loading…" : "Load More"}
              </button>
              <p className="text-sm text-stone-400">
                Showing {products.length} so far
              </p>
            </div>
          )}
        </>
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
