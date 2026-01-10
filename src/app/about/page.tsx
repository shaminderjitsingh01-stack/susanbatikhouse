import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Susan Batik House",
  description: "Since 1989, Susan Batik House has been preserving the art of traditional batik, kebaya, and Peranakan heritage in Singapore.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-stone-900">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900/90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-fuchsia-400 tracking-[0.3em] uppercase text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">About Susan Batik House</h1>
          <p className="text-xl text-stone-300">
            Preserving tradition, celebrating heritage since 1989
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  <span className="text-sm">Store Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-fuchsia-600/10 rounded-lg -z-10" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                35 Years of Heritage
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Founded in 1989, Susan Batik House began as a small family business with a big dream:
                  to preserve and share the beautiful art of traditional batik and Peranakan fashion with
                  the people of Singapore.
                </p>
                <p>
                  Located in the heart of Chinatown at New Market Road, our shop has become a beloved
                  destination for those seeking authentic batik, elegant kebaya, and timeless cheongsam.
                  Over three decades, we have dressed countless customers for weddings, festivals, and
                  special celebrations.
                </p>
                <p>
                  What started as a passion project has grown into a cherished institution, known for
                  quality craftsmanship, personalized service, and deep respect for cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              What We Believe In
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our values guide everything we do, from selecting fabrics to serving customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Authenticity</h3>
              <p className="text-stone-600">
                Every piece we carry is genuine, reflecting true craftsmanship and traditional techniques
                passed down through generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Personal Service</h3>
              <p className="text-stone-600">
                We take time to understand your needs, offering personalized recommendations and
                expert fitting advice for every customer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Quality Assurance</h3>
              <p className="text-stone-600">
                We carefully select each garment, ensuring the highest standards of fabric quality,
                stitching, and finishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Collections
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From traditional ceremonial wear to everyday elegance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kebaya",
                desc: "Traditional Nyonya and modern designs for weddings and celebrations",
                handle: "kebaya",
              },
              {
                title: "Cheongsam",
                desc: "Classic Chinese dress in traditional and contemporary styles",
                handle: "cheongsam",
              },
              {
                title: "Batik Dress",
                desc: "Authentic batik patterns in comfortable modern silhouettes",
                handle: "batik-dress",
              },
              {
                title: "Sarong",
                desc: "Versatile wraps in beautiful hand-drawn and printed batik",
                handle: "sarong",
              },
            ].map((item) => (
              <Link
                key={item.handle}
                href={`/collections/${item.handle}`}
                className="group p-6 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
              >
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-fuchsia-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 lg:py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Experience our collection in person. Our friendly staff is ready to help you find
            the perfect piece for your special occasion.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-fuchsia-400 font-medium mb-2">Address</p>
              <p className="text-sm">
                Blk 32 New Market Road<br />
                #02-1104/1106<br />
                Singapore 050032
              </p>
            </div>
            <div>
              <p className="text-fuchsia-400 font-medium mb-2">Hours</p>
              <p className="text-sm">
                Monday - Saturday<br />
                10:00am - 6:00pm<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <p className="text-fuchsia-400 font-medium mb-2">Contact</p>
              <p className="text-sm">
                <a href="tel:+6565336330" className="hover:text-fuchsia-400 transition-colors">
                  6533 6330
                </a>
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-600 text-white font-medium rounded transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
