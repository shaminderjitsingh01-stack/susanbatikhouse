"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem, isLoading } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(handle);
        if (data) {
          setProduct(data);
          if (data?.variants?.edges[0]) {
            setSelectedVariant(data.variants.edges[0].node.id);
          }
        }
      } catch {
        // Shopify not connected or product not found
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
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl animate-pulse" />
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-24 bg-stone-100 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-8 bg-stone-100 rounded-full animate-pulse w-3/4" />
            <div className="h-6 bg-stone-100 rounded-full animate-pulse w-1/4" />
            <div className="h-32 bg-stone-100 rounded-xl animate-pulse" />
            <div className="h-14 bg-stone-100 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-900 mb-4">Product Not Found</h1>
        <p className="text-stone-600 mb-8">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link
          href="/collections/all"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#EC4899] text-white font-semibold rounded-full hover:bg-[#F472B6] transition-colors"
        >
          Browse All Products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    );
  }

  const images = product.images.edges;
  const variants = product.variants?.edges || [];
  const currentVariant = variants.find((v) => v.node.id === selectedVariant)?.node;
  const options = product.options || [];

  const handleAddToCart = async () => {
    if (selectedVariant) {
      for (let i = 0; i < quantity; i++) {
        await addItem(selectedVariant);
      }
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-stone-500 hover:text-[#EC4899] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/collections/all" className="text-stone-500 hover:text-[#EC4899] transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#EC4899] font-medium truncate">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden shadow-lg group">
              {images[selectedImage] && (
                <Image
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              )}
              {/* Zoom Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-24 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-2 ring-[#EC4899] ring-offset-2 shadow-lg"
                        : "opacity-70 hover:opacity-100"
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
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <p className="text-3xl font-bold text-[#EC4899]">
                  {currentVariant
                    ? formatPrice(currentVariant.price.amount, currentVariant.price.currencyCode)
                    : formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                </p>
                {/* Stock Status */}
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  currentVariant?.availableForSale !== false
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {currentVariant?.availableForSale !== false ? "In Stock" : "Sold Out"}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 mb-6" />

            {/* Variants */}
            {options.length > 0 && options[0].name !== "Title" && (
              <div className="mb-6">
                {options.map((option) => (
                  <div key={option.name} className="mb-5">
                    <label className="block text-sm font-semibold text-stone-900 mb-3">
                      {option.name}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => {
                        const variant = variants.find((v) =>
                          v.node.selectedOptions?.some(
                            (opt) => opt.name === option.name && opt.value === value
                          )
                        );
                        const isSelected = variant?.node.id === selectedVariant;

                        return (
                          <button
                            key={value}
                            onClick={() => variant && setSelectedVariant(variant.node.id)}
                            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                              isSelected
                                ? "bg-[#EC4899] text-white shadow-lg shadow-pink-500/30"
                                : "border-2 border-stone-300 text-stone-700 hover:border-[#EC4899] hover:text-[#EC4899]"
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

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-900 mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border-2 border-stone-300 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-stone-600 hover:text-[#EC4899] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-12 text-center font-semibold text-stone-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-stone-600 hover:text-[#EC4899] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isLoading || currentVariant?.availableForSale === false}
                className={`flex-1 py-4 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                  currentVariant?.availableForSale === false
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white hover:shadow-lg hover:shadow-pink-500/30"
                } disabled:cursor-not-allowed`}
              >
                {currentVariant?.availableForSale === false ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    Sold Out
                  </>
                ) : addedToCart ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Cart!
                  </>
                ) : isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Adding...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to Cart - {quantity > 1 ? `${quantity} items` : "1 item"}
                  </>
                )}
              </button>

              {/* Wishlist Button */}
              <button className="w-14 h-14 border-2 border-stone-300 rounded-full flex items-center justify-center text-stone-600 hover:border-[#EC4899] hover:text-[#EC4899] hover:bg-pink-50 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-3 text-lg">Description</h3>
              {product.descriptionHtml ? (
                <div
                  className="prose prose-stone max-w-none text-stone-600"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              ) : (
                <p className="text-stone-600 leading-relaxed">{product.description || "No description available."}</p>
              )}
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                </svg>
                Why Shop With Us
              </h3>
              {[
                { icon: "M5 13l4 4L19 7", title: "Expert Alterations", desc: "Perfect fit guaranteed with our in-house tailoring" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "100% Authentic", desc: "Genuine handcrafted batik from trusted artisans" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "Visit Our Store", desc: "Try before you buy at New Market Road" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EC4899]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#EC4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{item.title}</p>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-amber-400/40" />
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
            </svg>
            <div className="w-12 h-px bg-amber-400/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help With This Product?
          </h2>
          <p className="text-stone-400 mb-8 text-lg">
            Our team is here to answer your questions about sizing, alterations, or styling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6597915323"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+6565336330"
              className="px-8 py-4 border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-stone-900 font-semibold rounded-full transition-all duration-300"
            >
              Call: 6533 6330
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
