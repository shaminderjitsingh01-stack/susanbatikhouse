import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-300">
      {/* Top Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-lg p-1.5">
                <Image
                  src="/logo.png"
                  alt="Susan Batik House"
                  width={100}
                  height={52}
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              For over 35 years, we&apos;ve been dressing generations in the finest
              handcrafted batik, kebaya, and Peranakan heritage wear.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-amber-400/40" />
              <span className="text-amber-400/60 text-xs tracking-widest uppercase">Follow Us</span>
              <div className="w-8 h-px bg-amber-400/40" />
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/SusanBatikHouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-[#EC4899] hover:text-white transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/susanbatikhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-teal-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/6597915323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif text-lg font-bold mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: "Kebaya", href: "/collections/kebaya" },
                { label: "Cheongsam", href: "/collections/cheongsam" },
                { label: "Batik Dress", href: "/collections/batik-dress" },
                { label: "Sarong", href: "/collections/sarong" },
                { label: "All Products", href: "/collections/all" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif text-lg font-bold mb-5">Help</h4>
            <ul className="space-y-3">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Size Guide", href: "/size-guide" },
                { label: "Care Instructions", href: "/care-instructions" },
                { label: "Shipping", href: "/shipping" },
                { label: "Returns", href: "/returns" },
                { label: "Alterations", href: "/alteration" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Column */}
          <div className="col-span-2 md:col-span-4">
            <h4 className="text-white font-serif text-lg font-bold mb-5">Visit Our Store</h4>
            <div className="bg-stone-800/50 rounded-xl p-5 border border-stone-700/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <address className="text-sm not-italic text-stone-400 leading-relaxed">
                  Blk 32 New Market Road<br />
                  #02-1104/1106<br />
                  Singapore 050032
                </address>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-stone-400">Mon - Sat: 10am - 6pm</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+6565336330" className="text-[#EC4899] hover:text-amber-400 transition-colors font-medium">
                  6533 6330
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-stone-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-white font-serif text-lg font-bold mb-2">Stay Connected</h4>
              <p className="text-stone-400 text-sm">Get updates on new arrivals and exclusive offers</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-stone-800 border border-stone-700 rounded-full text-white placeholder-stone-500 focus:outline-none focus:border-[#EC4899] transition-colors w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#F472B6] to-[#EC4899] hover:from-[#EC4899] hover:to-[#F472B6] text-white font-semibold rounded-full transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-stone-500">
              &copy; {new Date().getFullYear()} Susan Batik House. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-stone-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-stone-500 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-600">Secure payments with</span>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-stone-700 rounded flex items-center justify-center">
                    <span className="text-xs text-stone-400 font-bold">Visa</span>
                  </div>
                  <div className="w-8 h-5 bg-stone-700 rounded flex items-center justify-center">
                    <span className="text-xs text-stone-400 font-bold">MC</span>
                  </div>
                  <div className="w-8 h-5 bg-stone-700 rounded flex items-center justify-center">
                    <span className="text-xs text-stone-400 font-bold">PP</span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-stone-600">|</span>
              <a
                href="https://shaminder.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-500 hover:text-[#EC4899] transition-colors"
              >
                Made by shaminder.sg
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
