"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import SearchModal from "@/components/search/SearchModal";
import MegaMenu from "@/components/layout/MegaMenu";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Susan Batik House"
                width={50}
                height={40}
                className="object-contain"
              />
              <span className="hidden sm:block text-xl lg:text-2xl font-bold text-amber-800">Susan Batik House</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <button
                onMouseEnter={() => setMegaMenuOpen(true)}
                className="flex items-center gap-1 text-stone-700 hover:text-amber-800 transition-colors font-medium"
              >
                Shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link href="/collections/all" className="text-stone-700 hover:text-amber-800 transition-colors">
                All Products
              </Link>
              <Link href="/about" className="text-stone-700 hover:text-amber-800 transition-colors">
                About
              </Link>
              <Link href="/alteration" className="text-stone-700 hover:text-amber-800 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-stone-700 hover:text-amber-800 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-stone-700 hover:text-amber-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button onClick={openCart} className="relative p-2 text-stone-700 hover:text-amber-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-800 text-white text-xs rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700"
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
            <div className="lg:hidden border-t border-stone-200 py-4">
              <nav className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-wider text-stone-500 px-2">Shop</p>
                <Link href="/collections/kebaya" className="px-2 py-1 text-stone-700 hover:text-amber-800">
                  Kebaya
                </Link>
                <Link href="/collections/cheongsam" className="px-2 py-1 text-stone-700 hover:text-amber-800">
                  Cheongsam
                </Link>
                <Link href="/collections/batik-dress" className="px-2 py-1 text-stone-700 hover:text-amber-800">
                  Batik Dress
                </Link>
                <Link href="/collections/sarong" className="px-2 py-1 text-stone-700 hover:text-amber-800">
                  Sarong
                </Link>
                <Link href="/collections/all" className="px-2 py-1 text-amber-800 font-medium">
                  Shop All
                </Link>
                <div className="border-t border-stone-200 my-2" />
                <Link href="/about" className="px-2 py-1 text-stone-700 hover:text-amber-800">
                  About
                </Link>
                <Link href="/alteration" className="px-2 py-1 text-stone-700 hover:text-amber-800">
                  Services
                </Link>
                <Link href="/contact" className="px-2 py-1 text-stone-700 hover:text-amber-800">
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
