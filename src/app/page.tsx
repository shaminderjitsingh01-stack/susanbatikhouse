import Link from "next/link";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import ProductGrid from "@/components/product/ProductGrid";

export default async function HomePage() {
  let products: ShopifyProduct[] = [];

  try {
    products = await getProducts(8);
  } catch {
    // Store not connected yet
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 to-stone-900/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">Since 1989</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Susan Batik House
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto">
            Preserving the art of traditional batik, kebaya, and Peranakan heritage in Singapore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections/all"
              className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 font-medium rounded transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Collections
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover our handcrafted pieces, each telling a story of tradition and artistry
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Kebaya", handle: "kebaya", desc: "Nyonya & Modern" },
              { title: "Cheongsam", handle: "cheongsam", desc: "Traditional & Contemporary" },
              { title: "Batik Dress", handle: "batik-dress", desc: "Elegant Designs" },
              { title: "Sarong", handle: "sarong", desc: "Classic Wraps" },
            ].map((category) => (
              <Link
                key={category.handle}
                href={`/collections/${category.handle}`}
                className="group relative aspect-[3/4] bg-stone-200 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-amber-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-stone-300">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                Featured Pieces
              </h2>
              <p className="text-stone-600">Handpicked selections from our collection</p>
            </div>
            <Link
              href="/collections/all"
              className="hidden sm:inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="aspect-[3/4] bg-stone-100 rounded-lg animate-pulse" />
                  <div className="h-4 bg-stone-100 rounded animate-pulse" />
                  <div className="h-4 bg-stone-100 rounded w-1/2 animate-pulse" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 lg:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-700 tracking-widest uppercase text-sm mb-4">Our Heritage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                35 Years of Preserving Tradition
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Since 1989, Susan Batik House has been a cherished destination for those seeking authentic
                batik and traditional wear. Located in the heart of Singapore&apos;s Chinatown, we take pride
                in preserving the rich heritage of Peranakan and Southeast Asian textile artistry.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Each piece in our collection is carefully curated or crafted, ensuring you receive
                garments that honor centuries-old traditions while embracing contemporary elegance.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-200 rounded-lg" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-700/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-700/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Services
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Beyond our collection, we offer personalized services to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Tailoring",
                desc: "Made-to-measure garments crafted to your exact specifications and preferences.",
              },
              {
                title: "Alterations",
                desc: "Expert alteration services to ensure the perfect fit for your garments.",
              },
              {
                title: "Wholesale",
                desc: "Special pricing for bulk orders and business partnerships.",
              },
            ].map((service) => (
              <div key={service.title} className="text-center p-8 bg-stone-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 lg:py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Visit Our Store
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto mb-8">
            Experience our collection in person at our Chinatown location.
            Our friendly staff is ready to help you find the perfect piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center sm:text-left">
              <p className="font-medium">Blk 32 New Market Road, #02-1104/1106</p>
              <p className="text-stone-400">Singapore 050032</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-stone-700" />
            <div className="text-center sm:text-left">
              <p className="font-medium">Mon - Sat: 10am - 6pm</p>
              <p className="text-stone-400">Closed on Sundays</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-stone-700" />
            <a
              href="tel:+6565336330"
              className="px-6 py-3 bg-amber-700 hover:bg-amber-800 rounded font-medium transition-colors"
            >
              Call: 6533 6330
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
