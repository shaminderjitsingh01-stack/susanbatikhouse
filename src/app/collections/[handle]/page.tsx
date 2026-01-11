import Image from "next/image";
import Link from "next/link";
import { getCollection, getProducts, ShopifyProduct } from "@/lib/shopify";
import ProductGrid from "@/components/product/ProductGrid";

interface CollectionPageProps {
  params: Promise<{ handle: string }>;
}

const collectionImages: Record<string, string> = {
  kebaya: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&h=600&fit=crop",
  cheongsam: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&h=600&fit=crop",
  "batik-dress": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&h=600&fit=crop",
  sarong: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&h=600&fit=crop",
  all: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&h=600&fit=crop",
};

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;

  let collection = null;
  let products: ShopifyProduct[] = [];

  try {
    if (handle === "all") {
      products = await getProducts(50);
    } else {
      collection = await getCollection(handle);
      products = collection?.products?.edges.map((e) => e.node) || [];
    }
  } catch {
    // Store not connected
  }

  const title = handle === "all" ? "All Products" : collection?.title || formatTitle(handle);
  const description = collection?.description || getDefaultDescription(handle);
  const heroImage = collection?.image?.url || collectionImages[handle] || collectionImages.all;

  return (
    <>
      {/* Premium Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Decorative Gold Lines */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400" />
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <p className="text-amber-400 tracking-[0.3em] uppercase text-xs font-medium mb-3">
              Susan Batik House
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-stone-300 max-w-2xl mx-auto text-lg">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>

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
              Collections
            </Link>
            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#EC4899] font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
            <p className="text-stone-600">
              Showing <span className="font-semibold text-stone-900">{products.length}</span> products
            </p>
            <div className="flex items-center gap-4">
              <label className="text-sm text-stone-600">Sort by:</label>
              <select className="px-4 py-2 border border-stone-300 rounded-full text-sm focus:outline-none focus:border-[#EC4899] transition-colors bg-white">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products */}
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-12">
              <p className="text-stone-500">No products found in this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Collection CTA */}
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
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-stone-400 mb-8 text-lg">
            Visit our store for personalized assistance and access to our full collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/6565336330"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-stone-900 font-semibold rounded-full transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function formatTitle(handle: string): string {
  return handle
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getDefaultDescription(handle: string): string {
  const descriptions: Record<string, string> = {
    kebaya: "Elegant Nyonya and modern kebaya designs, perfect for special occasions and cultural celebrations.",
    cheongsam: "Traditional and contemporary cheongsam styles, crafted with attention to detail and quality fabrics.",
    "batik-dress": "Beautiful batik dresses featuring authentic patterns and comfortable modern cuts.",
    sarong: "Classic sarong wraps in traditional and contemporary batik prints.",
    all: "Explore our complete collection of traditional and modern heritage wear.",
  };
  return descriptions[handle] || "";
}
