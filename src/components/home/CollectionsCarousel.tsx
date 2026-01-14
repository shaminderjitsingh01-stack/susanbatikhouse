"use client";

import Link from "next/link";

// Collections with subcategories matching megamenu
const menuCategories = [
  {
    name: "Batik",
    handle: "batik",
    items: [
      { title: "Batik Fabric", handle: "batik-fabric" },
      { title: "Handstamp Batik Fabric", handle: "handstamp-batik-fabric" },
      { title: "Hand Draw Batik Fabric", handle: "hand-draw-batik-fabric" },
      { title: "Ladies Batik Top", handle: "ladies-batik-top" },
      { title: "Mens Batik Top", handle: "mens-batik-top" },
      { title: "Ladies Batik Sarong", handle: "ladies-batik-sarong" },
      { title: "Batik Cheongsam", handle: "batik-cheongsam" },
      { title: "Ladies Batik Pants", handle: "ladies-batik-pants" },
    ],
  },
  {
    name: "Kebaya",
    handle: "kebaya",
    items: [
      { title: "Standard Peranakan Top", handle: "standard-peranakan-top" },
      { title: "Premium Peranakan Top", handle: "premium-peranakan-top" },
      { title: "Kids Peranakan Top", handle: "kids-peranakan-top" },
    ],
  },
  {
    name: "Shoes",
    handle: "shoes",
    items: [
      { title: "Standard Beaded Shoes", handle: "standard-beaded-shoes" },
      { title: "Premium Beaded Shoes", handle: "premium-beaded-shoes" },
    ],
  },
  {
    name: "Kerosang",
    handle: "kerosang",
    items: [
      { title: "All Kerosang", handle: "kerosang" },
    ],
  },
];

export default function CollectionsCarousel() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {menuCategories.map((category) => (
        <div key={category.handle} className="p-6 bg-stone-50 rounded-2xl hover:shadow-lg transition-shadow">
          <Link href={`/collections/${category.handle}`}>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4 hover:text-[#EC4899] transition-colors">
              {category.name}
            </h3>
          </Link>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li key={item.handle}>
                <Link
                  href={`/collections/${item.handle}`}
                  className="text-stone-600 hover:text-[#EC4899] transition-colors text-sm"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
