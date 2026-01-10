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
      {/* Video Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-stone-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=1080&fit=crop"
          >
            <source
              src="/batik.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/90" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
            Established 1989 • Chinatown, Singapore
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Tradition<br />Meets Elegance
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            For over 35 years, we&apos;ve been dressing generations in the finest handcrafted
            batik, kebaya, and Peranakan heritage wear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections/all"
              className="px-8 py-4 bg-[#dc0e94] hover:bg-[#e51ea4] text-white font-medium rounded transition-all hover:scale-105"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 font-medium rounded transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Categories with Images */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#dc0e94] tracking-widest uppercase text-sm mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each piece tells a story of heritage, crafted with love and worn with pride
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Kebaya",
                handle: "kebaya",
                desc: "Timeless Nyonya elegance",
                image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=800&fit=crop"
              },
              {
                title: "Cheongsam",
                handle: "cheongsam",
                desc: "Classic Chinese beauty",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop"
              },
              {
                title: "Batik Dress",
                handle: "batik-dress",
                desc: "Wearable art",
                image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop"
              },
              {
                title: "Sarong",
                handle: "sarong",
                desc: "Versatile & beautiful",
                image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop"
              },
            ].map((category) => (
              <Link
                key={category.handle}
                href={`/collections/${category.handle}`}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-pink-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-stone-300 mt-1">{category.desc}</p>
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
              <p className="text-[#dc0e94] tracking-widest uppercase text-sm mb-2">Hand-Picked</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/collections/all"
              className="hidden sm:inline-flex items-center gap-2 text-[#dc0e94] hover:text-[#b30c78] font-medium"
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
              {[
                {
                  title: "Embroidered Nyonya Kebaya",
                  price: "S$489",
                  image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=533&fit=crop",
                },
                {
                  title: "Red Silk Cheongsam",
                  price: "S$368",
                  image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=533&fit=crop",
                },
                {
                  title: "Traditional Batik Dress",
                  price: "S$258",
                  image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=533&fit=crop",
                },
                {
                  title: "Hand-drawn Batik Sarong",
                  price: "S$178",
                  image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=533&fit=crop",
                },
              ].map((product) => (
                <Link key={product.title} href="/collections/all" className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-stone-100 mb-3">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <h3 className="font-medium text-stone-900 group-hover:text-[#dc0e94] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#dc0e94] font-semibold mt-1">{product.price}</p>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/collections/all"
              className="inline-flex items-center gap-2 text-[#dc0e94] font-medium"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 lg:py-24 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop"
                  alt="Susan Batik House store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#dc0e94]/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#dc0e94]/10 rounded-lg -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#dc0e94] tracking-widest uppercase text-sm mb-4">Our Heritage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Three Generations of Passion
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  What started as a small stall in 1989 has blossomed into a beloved destination
                  for those who appreciate the beauty of traditional craftsmanship.
                </p>
                <p>
                  Every piece in our collection is personally selected. We know the artisans,
                  we understand the techniques, and we only offer garments we&apos;d proudly wear ourselves.
                </p>
                <p>
                  Whether you&apos;re preparing for a wedding, a festival, or simply want to add
                  something special to your wardrobe, we&apos;re here to help you find that perfect piece.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#dc0e94] hover:text-[#b30c78] font-medium mt-6"
              >
                Read Our Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#dc0e94] tracking-widest uppercase text-sm mb-3">Beyond Shopping</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              We&apos;re Here to Help
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Alterations",
                desc: "Our in-house tailors ensure every piece fits you perfectly. Because the right fit makes all the difference.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "Personal Styling",
                desc: "Not sure what suits you? Our experienced staff will guide you to pieces that complement your style and occasion.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Custom Orders",
                desc: "Have something specific in mind? We work with skilled artisans to create bespoke pieces just for you.",
                icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
              },
            ].map((service) => (
              <div key={service.title} className="text-center p-8 bg-stone-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#dc0e94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/alteration"
              className="inline-flex items-center gap-2 text-[#dc0e94] hover:text-[#b30c78] font-medium"
            >
              Learn More About Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "35+", label: "Years of Heritage" },
              { number: "10,000+", label: "Happy Customers" },
              { number: "100%", label: "Authentic Batik" },
              { number: "★ 4.9", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-[#dc0e94]">{stat.number}</p>
                <p className="text-stone-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#dc0e94] tracking-widest uppercase text-sm mb-3">What Customers Say</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Loved by Generations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michelle Tan",
                text: "Susan helped me find the perfect kebaya for my wedding. The craftsmanship is exquisite and the fit was tailored to perfection. I received so many compliments!",
                occasion: "Wedding Kebaya",
              },
              {
                name: "Rachel Lim",
                text: "I've been buying batik from Susan Batik House for over 15 years. The quality is consistent and Susan always has the most beautiful pieces that you won't find anywhere else.",
                occasion: "Regular Customer",
              },
              {
                name: "Jennifer Wong",
                text: "The alteration service is incredible. They transformed my grandmother's vintage cheongsam to fit me perfectly while preserving its original beauty. Truly skilled artisans.",
                occasion: "Alteration Service",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#dc0e94]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-[#dc0e94]">{testimonial.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 lg:py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-pink-400 tracking-widest uppercase text-sm mb-4">Come Say Hello</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Visit Our Store
              </h2>
              <p className="text-stone-300 mb-6 leading-relaxed">
                There&apos;s nothing quite like seeing our collection in person.
                Feel the fabrics, try on the pieces, and let us help you find something special.
              </p>
              <div className="space-y-3 text-stone-300">
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Blk 32 New Market Road, #02-1104/1106, Singapore
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon - Sat: 10am - 6pm
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+6565336330" className="hover:text-pink-400 transition-colors">6533 6330</a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+6565336330"
                className="flex-1 py-4 bg-[#dc0e94] hover:bg-[#e51ea4] text-white text-center font-medium rounded transition-colors"
              >
                Call Us
              </a>
              <a
                href="https://wa.me/6565336330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 border border-white text-white hover:bg-white hover:text-stone-900 text-center font-medium rounded transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
