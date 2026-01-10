"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProduct, ShopifyProduct } from "@/lib/shopify";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function ProductPage() {
  const params = useParams();
  const handle = params.handle as string;
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem, isLoading } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(handle);
        setProduct(data);
        if (data?.variants?.edges[0]) {
          setSelectedVariant(data.variants.edges[0].node.id);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [handle]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-stone-100 rounded-lg animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-stone-100 rounded animate-pulse w-3/4" />
            <div className="h-6 bg-stone-100 rounded animate-pulse w-1/4" />
            <div className="h-24 bg-stone-100 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const images = product.images.edges;
  const variants = product.variants?.edges || [];
  const currentVariant = variants.find((v) => v.node.id === selectedVariant)?.node;

  const handleAddToCart = async () => {
    if (selectedVariant) {
      await addItem(selectedVariant);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden">
            {images[selectedImage] && (
              <Image
                src={images[selectedImage].node.url}
                alt={images[selectedImage].node.altText || product.title}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-24 flex-shrink-0 rounded overflow-hidden border-2 ${
                    selectedImage === index ? "border-amber-800" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.node.url}
                    alt={image.node.altText || `${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {product.title}
          </h1>
          <p className="text-2xl font-semibold text-amber-800 mb-6">
            {currentVariant
              ? formatPrice(currentVariant.price.amount, currentVariant.price.currencyCode)
              : formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
          </p>

          {/* Variants */}
          {product.options && product.options.length > 0 && product.options[0].name !== "Title" && (
            <div className="mb-6">
              {product.options.map((option) => (
                <div key={option.name} className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {option.name}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => {
                      const variant = variants.find((v) =>
                        v.node.selectedOptions.some(
                          (opt) => opt.name === option.name && opt.value === value
                        )
                      );
                      const isSelected = variant?.node.id === selectedVariant;
                      const isAvailable = variant?.node.availableForSale;

                      return (
                        <button
                          key={value}
                          onClick={() => variant && setSelectedVariant(variant.node.id)}
                          disabled={!isAvailable}
                          className={`px-4 py-2 rounded border ${
                            isSelected
                              ? "border-amber-800 bg-amber-50 text-amber-800"
                              : isAvailable
                              ? "border-stone-300 hover:border-amber-800"
                              : "border-stone-200 text-stone-400 cursor-not-allowed"
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={isLoading || !currentVariant?.availableForSale}
            className="w-full py-4 bg-amber-800 text-white font-medium rounded-lg hover:bg-amber-900 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors mb-6"
          >
            {isLoading
              ? "Adding..."
              : currentVariant?.availableForSale
              ? "Add to Cart"
              : "Sold Out"}
          </button>

          {/* Description */}
          {product.descriptionHtml ? (
            <div
              className="prose prose-stone max-w-none"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          ) : (
            <p className="text-stone-600">{product.description}</p>
          )}

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-stone-200 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-medium text-stone-900">Alteration Services</p>
                <p className="text-sm text-stone-600">Perfect fit guaranteed with our in-house tailoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-medium text-stone-900">Visit Our Store</p>
                <p className="text-sm text-stone-600">Try before you buy at New Market Road</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
