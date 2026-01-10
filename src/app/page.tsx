import Link from "next/link";
import Image from "next/image";
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
      {/* Premium Video Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-stone-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=1080&fit=crop"
          >
            <source src="/batik.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        {/* Decorative Gold Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400" />
            <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <p className="text-amber-400 tracking-[0.4em] uppercase text-sm font-medium mb-4 animate-fade-in">
            Established 1989 • Singapore
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block">Where Tradition</span>
            <span className="block bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
              Meets Elegance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            For over 35 years, we&apos;ve been dressing generations in the finest handcrafted
            batik, kebaya, and Peranakan heritage wear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections/all"
              className="group px-10 py-4 bg-gradient-to-r from-[#dc0e94] to-[#ff1493] hover:from-[#ff1493] hover:to-[#dc0e94] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,14,148,0.5)]"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Collection
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-stone-900 font-semibold rounded-full transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-amber-400/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="bg-stone-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-amber-600/30" />
          <div className="flex items-center gap-3 text-amber-500/80">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" /></svg>
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Premium Heritage</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" /></svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-amber-600/30" />
        </div>
      </div>

      {/* Categories with Premium Styling */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#dc0e94]/10 text-[#dc0e94] text-xs tracking-widest uppercase rounded-full mb-4">
              Curated Collections
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Shop by Category
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dc0e94] to-amber-400 mx-auto mb-6" />
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Each piece tells a story of heritage, crafted with love and worn with pride
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Kebaya", handle: "kebaya", desc: "Timeless Nyonya elegance", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=800&fit=crop", badge: "Bestseller" },
              { title: "Cheongsam", handle: "cheongsam", desc: "Classic Chinese beauty", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop", badge: "Popular" },
              { title: "Batik Dress", handle: "batik-dress", desc: "Wearable art", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop", badge: "New" },
              { title: "Sarong", handle: "sarong", desc: "Versatile & beautiful", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop", badge: "Traditional" },
            ].map((category) => (
              <Link
                key={category.handle}
                href={`/collections/${category.handle}`}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-400 text-stone-900 text-xs font-bold uppercase tracking-wider rounded-full">
                    {category.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-1 group-hover:text-amber-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-stone-300 text-sm mb-4">{category.desc}</p>
                  <div className="flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with Premium Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="inline-block px-4 py-1 bg-amber-400/10 text-amber-600 text-xs tracking-widest uppercase rounded-full mb-4">
                Hand-Picked
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/collections/all"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 border-2 border-[#dc0e94] text-[#dc0e94] hover:bg-[#dc0e94] hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Embroidered Nyonya Kebaya", price: "S$489", originalPrice: "S$589", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=533&fit=crop", badge: "Sale" },
                { title: "Red Silk Cheongsam", price: "S$368", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=533&fit=crop", badge: "New" },
                { title: "Traditional Batik Dress", price: "S$258", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=533&fit=crop", badge: "Popular" },
                { title: "Hand-drawn Batik Sarong", price: "S$178", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=533&fit=crop" },
              ].map((product, index) => (
                <Link key={product.title} href="/collections/all" className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 mb-4 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                          product.badge === 'Sale' ? 'bg-red-500 text-white' :
                          product.badge === 'New' ? 'bg-amber-400 text-stone-900' :
                          'bg-[#dc0e94] text-white'
                        }`}>
                          {product.badge}
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
                    <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#dc0e94] hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-medium text-stone-900 group-hover:text-[#dc0e94] transition-colors text-lg">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#dc0e94] font-bold text-lg">{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-stone-400 line-through text-sm">{product.originalPrice}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12 sm:hidden">
            <Link
              href="/collections/all"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#dc0e94] text-white font-semibold rounded-full"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Heritage Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-amber-400/20 rounded-2xl" />
              <div className="absolute -inset-8 border border-amber-400/10 rounded-2xl" />

              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop"
                  alt="Susan Batik House heritage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-stone-900 px-6 py-4 rounded-xl shadow-2xl">
                <p className="text-4xl font-bold font-serif">35+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Years</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-amber-400" />
                <span className="text-amber-400 tracking-widest uppercase text-sm font-medium">Our Heritage</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Three Generations of{" "}
                <span className="text-amber-400">Passion</span>
              </h2>

              <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
                <p>
                  What started as a small stall in 1989 has blossomed into a beloved destination
                  for those who appreciate the beauty of traditional craftsmanship.
                </p>
                <p>
                  Every piece in our collection is personally selected. We know the artisans,
                  we understand the techniques, and we only offer garments we&apos;d proudly wear ourselves.
                </p>
              </div>

              <div className="flex items-center gap-8 mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-stone-900 font-bold rounded-full hover:bg-amber-300 transition-colors"
                >
                  Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Premium Icons */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#dc0e94]/10 text-[#dc0e94] text-xs tracking-widest uppercase rounded-full mb-4">
              Premium Services
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              We&apos;re Here to Help
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dc0e94] to-amber-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Alterations", desc: "Our in-house tailors ensure every piece fits you perfectly. Because the right fit makes all the difference.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { title: "Personal Styling", desc: "Not sure what suits you? Our experienced staff will guide you to pieces that complement your style and occasion.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Custom Orders", desc: "Have something specific in mind? We work with skilled artisans to create bespoke pieces just for you.", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
            ].map((service) => (
              <div key={service.title} className="group text-center p-10 bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-100 hover:border-[#dc0e94]/30 hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-[#dc0e94] to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Trust Badges */}
      <section className="py-16 bg-gradient-to-r from-[#dc0e94] via-pink-500 to-[#dc0e94]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "35+", label: "Years of Heritage", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "10K+", label: "Happy Customers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { number: "100%", label: "Authentic Batik", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { number: "4.9★", label: "Customer Rating", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl font-bold">{stat.number}</p>
                <p className="text-white/80 text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-amber-400/10 text-amber-600 text-xs tracking-widest uppercase rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Loved by Generations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-[#dc0e94] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Michelle Tan", text: "Susan helped me find the perfect kebaya for my wedding. The craftsmanship is exquisite and the fit was tailored to perfection. I received so many compliments!", occasion: "Wedding Kebaya", rating: 5 },
              { name: "Rachel Lim", text: "I've been buying batik from Susan Batik House for over 15 years. The quality is consistent and Susan always has the most beautiful pieces that you won't find anywhere else.", occasion: "Regular Customer", rating: 5 },
              { name: "Jennifer Wong", text: "The alteration service is incredible. They transformed my grandmother's vintage cheongsam to fit me perfectly while preserving its original beauty. Truly skilled artisans.", occasion: "Alteration Service", rating: 5 },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
                {/* Quote Mark */}
                <div className="absolute -top-4 left-8 w-10 h-10 bg-[#dc0e94] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dc0e94] to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">{testimonial.name}</p>
                    <p className="text-sm text-[#dc0e94]">{testimonial.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Visit CTA */}
      <section className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#dc0e94] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-amber-400" />
                <span className="text-amber-400 tracking-widest uppercase text-sm font-medium">Visit Us</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Experience Our Collection{" "}
                <span className="text-amber-400">In Person</span>
              </h2>

              <p className="text-stone-400 mb-8 text-lg leading-relaxed">
                There&apos;s nothing quite like seeing our collection in person.
                Feel the fabrics, try on the pieces, and let us help you find something special.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Blk 32 New Market Road, #02-1104/1106, Singapore" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Mon - Sat: 10am - 6pm" },
                  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "6533 6330", link: "tel:+6565336330" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    {item.link ? (
                      <a href={item.link} className="text-stone-300 hover:text-amber-400 transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-stone-300">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+6565336330"
                  className="px-8 py-4 bg-[#dc0e94] hover:bg-pink-500 text-white text-center font-bold rounded-full transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="https://wa.me/6565336330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white text-center font-bold rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map or Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-amber-400/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d103.84!3d1.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDguMCJOIDEwM8KwNTAnMjQuMCJF!5e0!3m2!1sen!2ssg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
