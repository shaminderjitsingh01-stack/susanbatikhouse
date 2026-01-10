"use client";

import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/shopify";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: ShopifyProduct;
  badge?: "Sale" | "New" | "Popular" | "Bestseller";
}

export default function ProductCard({ product, badge }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;

  return (
    <Link href={`/products/${product.handle}`} className="group">
      <div className="relative aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-500">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 bg-gradient-to-br from-stone-100 to-stone-200">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
              badge === "Sale" ? "bg-red-500 text-white" :
              badge === "New" ? "bg-amber-400 text-stone-900" :
              badge === "Bestseller" ? "bg-amber-400 text-stone-900" :
              "bg-[#dc0e94] text-white"
            }`}>
              {badge}
            </span>
          </div>
        )}

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-6 py-3 bg-white text-stone-900 font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            // Wishlist functionality can be added later
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#dc0e94] hover:text-white shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <h3 className="font-medium text-stone-900 group-hover:text-[#dc0e94] transition-colors text-lg leading-snug">
        {product.title}
      </h3>
      <p className="text-[#dc0e94] font-bold text-lg mt-1">
        {formatPrice(price.amount, price.currencyCode)}
      </p>
    </Link>
  );
}
