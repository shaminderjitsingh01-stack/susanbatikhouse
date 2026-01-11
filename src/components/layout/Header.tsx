"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { getCollections, ShopifyCollection } from "@/lib/shopify";
import SearchModal from "@/components/search/SearchModal";
import MegaMenu from "@/components/layout/MegaMenu";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const { openCart, itemCount } = useCart();

  useEffect(() => {
    async function fetchCollections() {
      try {
        const data = await getCollections();
        setCollections(data.filter(c => c.title && c.handle));
      } catch {
        // Shopify not connected
      }
    }
    fetchCollections();
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F472B6] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative bg-white rounded-lg p-1">
                <Image
                  src="/logo.png"
                  alt="Susan Batik House"
                  width={120}
                  height={63}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onMouseEnter={() => setMegaMenuOpen(true)}
                className="flex items-center gap-1 text-white hover:text-pink-200 transition-colors font-medium"
              >
                Shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link href="/collections/all" className="text-white hover:text-pink-200 transition-colors font-medium">
                All Products
              </Link>
              <Link href="/about" className="text-white hover:text-pink-200 transition-colors font-medium">
                About
              </Link>
              <Link href="/alteration" className="text-white hover:text-pink-200 transition-colors font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-white hover:text-pink-200 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-white hover:text-pink-200 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button onClick={openCart} className="relative p-2 text-white hover:text-pink-200 transition-colors" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#EC4899] text-xs rounded-full flex items-center justify-center font-semibold">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-pink-200"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-pink-400/30 py-4 bg-gradient-to-b from-[#F472B6]/95 to-[#DB2777]">
              <nav className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-wider text-pink-200 px-2 font-semibold">Collections</p>
                {collections.length > 0 ? (
                  collections.map((collection) => (
                    <Link
                      key={collection.handle}
                      href={`/collections/${collection.handle}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1 text-white hover:text-pink-200"
                    >
                      {collection.title}
                    </Link>
                  ))
                ) : (
                  <span className="px-2 py-1 text-pink-200 text-sm">Loading...</span>
                )}
                <Link
                  href="/collections/all"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1 text-pink-200 font-semibold"
                >
                  Shop All
                </Link>
                <div className="border-t border-pink-400 my-2" />
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-white hover:text-pink-200">
                  About
                </Link>
                <Link href="/alteration" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-white hover:text-pink-200">
                  Services
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-white hover:text-pink-200">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>

        {/* Mega Menu */}
        <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

        {/* Search Modal */}
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>
    </>
  );
}
