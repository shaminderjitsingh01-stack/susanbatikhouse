export interface DummyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  price: string;
  originalPrice?: string;
  currency: string;
  images: string[];
  category: string;
  badge?: "Sale" | "New" | "Popular" | "Bestseller";
  variants: {
    id: string;
    title: string;
    price: string;
    available: boolean;
    options: { name: string; value: string }[];
  }[];
  options: { name: string; values: string[] }[];
}

export const dummyProducts: DummyProduct[] = [
  // KEBAYA
  {
    id: "kebaya-1",
    title: "Embroidered Nyonya Kebaya - Peach Blossom",
    handle: "embroidered-nyonya-kebaya-peach",
    description: "Exquisite hand-embroidered Nyonya kebaya featuring delicate peach blossom motifs. This traditional Peranakan piece showcases intricate needlework passed down through generations. Perfect for weddings, cultural celebrations, and special occasions.",
    descriptionHtml: "<p>Exquisite hand-embroidered Nyonya kebaya featuring delicate peach blossom motifs. This traditional Peranakan piece showcases intricate needlework passed down through generations.</p><ul><li>Hand-embroidered floral details</li><li>Premium voile fabric</li><li>Traditional Peranakan design</li><li>Fits true to size</li></ul><p><strong>Care:</strong> Dry clean recommended</p>",
    price: "489.00",
    originalPrice: "589.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=1067&fit=crop&sat=-100",
    ],
    category: "kebaya",
    badge: "Sale",
    variants: [
      { id: "kebaya-1-xs", title: "XS", price: "489.00", available: true, options: [{ name: "Size", value: "XS" }] },
      { id: "kebaya-1-s", title: "S", price: "489.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "kebaya-1-m", title: "M", price: "489.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "kebaya-1-l", title: "L", price: "489.00", available: true, options: [{ name: "Size", value: "L" }] },
      { id: "kebaya-1-xl", title: "XL", price: "489.00", available: false, options: [{ name: "Size", value: "XL" }] },
    ],
    options: [{ name: "Size", values: ["XS", "S", "M", "L", "XL"] }],
  },
  {
    id: "kebaya-2",
    title: "Modern Lace Kebaya - Ivory White",
    handle: "modern-lace-kebaya-ivory",
    description: "Contemporary take on the classic kebaya with French lace overlay. This elegant piece blends traditional silhouette with modern sophistication, ideal for formal events and celebrations.",
    descriptionHtml: "<p>Contemporary take on the classic kebaya with French lace overlay. This elegant piece blends traditional silhouette with modern sophistication.</p><ul><li>Premium French lace</li><li>Silk lining</li><li>Modern cut with traditional elements</li><li>Available in multiple sizes</li></ul>",
    price: "568.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1583391733981-8b530c3c8951?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-8b530c3c8951?w=800&h=1067&fit=crop&sat=-100",
    ],
    category: "kebaya",
    badge: "Bestseller",
    variants: [
      { id: "kebaya-2-s", title: "S", price: "568.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "kebaya-2-m", title: "M", price: "568.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "kebaya-2-l", title: "L", price: "568.00", available: true, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L"] }],
  },
  {
    id: "kebaya-3",
    title: "Classic Nyonya Kebaya - Jade Green",
    handle: "classic-nyonya-kebaya-jade",
    description: "Traditional Nyonya kebaya in stunning jade green, featuring classic kasut manek-inspired embroidery. A timeless piece that celebrates Peranakan heritage.",
    descriptionHtml: "<p>Traditional Nyonya kebaya in stunning jade green, featuring classic kasut manek-inspired embroidery. A timeless piece that celebrates Peranakan heritage.</p>",
    price: "425.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1590735213408-9d8bf1df0bcc?w=800&h=1067&fit=crop",
    ],
    category: "kebaya",
    badge: "Popular",
    variants: [
      { id: "kebaya-3-s", title: "S", price: "425.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "kebaya-3-m", title: "M", price: "425.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "kebaya-3-l", title: "L", price: "425.00", available: false, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L"] }],
  },

  // CHEONGSAM
  {
    id: "cheongsam-1",
    title: "Red Silk Cheongsam - Double Happiness",
    handle: "red-silk-cheongsam-double-happiness",
    description: "Auspicious red silk cheongsam with gold Double Happiness embroidery. The perfect choice for weddings, Chinese New Year, and joyous celebrations. Features traditional mandarin collar and side slits.",
    descriptionHtml: "<p>Auspicious red silk cheongsam with gold Double Happiness embroidery. The perfect choice for weddings, Chinese New Year, and joyous celebrations.</p><ul><li>100% Mulberry silk</li><li>Gold thread embroidery</li><li>Traditional mandarin collar</li><li>Side slits for elegant movement</li><li>Fully lined</li></ul>",
    price: "688.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1602575327028-f4389abe0a60?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1602575327028-f4389abe0a60?w=800&h=1067&fit=crop&sat=-100",
    ],
    category: "cheongsam",
    badge: "Bestseller",
    variants: [
      { id: "cheongsam-1-xs", title: "XS", price: "688.00", available: true, options: [{ name: "Size", value: "XS" }] },
      { id: "cheongsam-1-s", title: "S", price: "688.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "cheongsam-1-m", title: "M", price: "688.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "cheongsam-1-l", title: "L", price: "688.00", available: true, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["XS", "S", "M", "L"] }],
  },
  {
    id: "cheongsam-2",
    title: "Modern Mini Cheongsam - Blush Pink",
    handle: "modern-mini-cheongsam-blush",
    description: "Contemporary mini cheongsam in soft blush pink. This modern interpretation features a shorter hemline while maintaining the elegant mandarin collar and traditional closures.",
    descriptionHtml: "<p>Contemporary mini cheongsam in soft blush pink. This modern interpretation features a shorter hemline while maintaining the elegant mandarin collar and traditional closures.</p>",
    price: "328.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1600093848813-ac2e6d1db688?w=800&h=1067&fit=crop",
    ],
    category: "cheongsam",
    badge: "New",
    variants: [
      { id: "cheongsam-2-s", title: "S", price: "328.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "cheongsam-2-m", title: "M", price: "328.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "cheongsam-2-l", title: "L", price: "328.00", available: true, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L"] }],
  },
  {
    id: "cheongsam-3",
    title: "Floral Brocade Cheongsam - Navy",
    handle: "floral-brocade-cheongsam-navy",
    description: "Elegant navy cheongsam crafted from luxurious floral brocade fabric. The intricate woven pattern adds dimension and sophistication to this timeless design.",
    descriptionHtml: "<p>Elegant navy cheongsam crafted from luxurious floral brocade fabric. The intricate woven pattern adds dimension and sophistication to this timeless design.</p>",
    price: "458.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1601121141418-c1cc64c107a1?w=800&h=1067&fit=crop",
    ],
    category: "cheongsam",
    variants: [
      { id: "cheongsam-3-s", title: "S", price: "458.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "cheongsam-3-m", title: "M", price: "458.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "cheongsam-3-l", title: "L", price: "458.00", available: false, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L"] }],
  },

  // BATIK DRESS
  {
    id: "batik-1",
    title: "Hand-drawn Batik Tulis Dress - Ocean Blue",
    handle: "batik-tulis-dress-ocean-blue",
    description: "Stunning hand-drawn batik tulis dress featuring traditional parang motifs in ocean blue. Each piece is unique, crafted by skilled artisans using the traditional wax-resist dyeing technique.",
    descriptionHtml: "<p>Stunning hand-drawn batik tulis dress featuring traditional parang motifs in ocean blue. Each piece is unique, crafted by skilled artisans using the traditional wax-resist dyeing technique.</p><ul><li>100% Cotton</li><li>Hand-drawn batik tulis</li><li>Traditional parang pattern</li><li>A-line silhouette</li><li>Machine washable (cold water)</li></ul>",
    price: "358.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=1067&fit=crop&sat=-50",
    ],
    category: "batik-dress",
    badge: "Popular",
    variants: [
      { id: "batik-1-s", title: "S", price: "358.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "batik-1-m", title: "M", price: "358.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "batik-1-l", title: "L", price: "358.00", available: true, options: [{ name: "Size", value: "L" }] },
      { id: "batik-1-xl", title: "XL", price: "358.00", available: true, options: [{ name: "Size", value: "XL" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L", "XL"] }],
  },
  {
    id: "batik-2",
    title: "Modern Batik Wrap Dress - Terracotta",
    handle: "modern-batik-wrap-dress-terracotta",
    description: "Contemporary wrap dress in warm terracotta batik print. The flattering wrap silhouette suits all body types while the bold geometric batik pattern makes a statement.",
    descriptionHtml: "<p>Contemporary wrap dress in warm terracotta batik print. The flattering wrap silhouette suits all body types while the bold geometric batik pattern makes a statement.</p>",
    price: "278.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=800&h=1067&fit=crop",
    ],
    category: "batik-dress",
    badge: "New",
    variants: [
      { id: "batik-2-s", title: "S", price: "278.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "batik-2-m", title: "M", price: "278.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "batik-2-l", title: "L", price: "278.00", available: true, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L"] }],
  },
  {
    id: "batik-3",
    title: "Batik Maxi Dress - Forest Green",
    handle: "batik-maxi-dress-forest-green",
    description: "Flowing maxi dress in rich forest green batik with leaf motifs. Perfect for both casual outings and semi-formal events. Features a comfortable elastic waist and flowy skirt.",
    descriptionHtml: "<p>Flowing maxi dress in rich forest green batik with leaf motifs. Perfect for both casual outings and semi-formal events.</p>",
    price: "298.00",
    originalPrice: "348.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&h=1067&fit=crop",
    ],
    category: "batik-dress",
    badge: "Sale",
    variants: [
      { id: "batik-3-s", title: "S", price: "298.00", available: true, options: [{ name: "Size", value: "S" }] },
      { id: "batik-3-m", title: "M", price: "298.00", available: true, options: [{ name: "Size", value: "M" }] },
      { id: "batik-3-l", title: "L", price: "298.00", available: true, options: [{ name: "Size", value: "L" }] },
    ],
    options: [{ name: "Size", values: ["S", "M", "L"] }],
  },

  // SARONG
  {
    id: "sarong-1",
    title: "Traditional Batik Sarong - Sogan Brown",
    handle: "traditional-batik-sarong-sogan",
    description: "Classic Javanese sarong in traditional sogan brown colorway. Features timeless kawung pattern, perfect for cultural ceremonies and traditional occasions.",
    descriptionHtml: "<p>Classic Javanese sarong in traditional sogan brown colorway. Features timeless kawung pattern, perfect for cultural ceremonies and traditional occasions.</p><ul><li>100% Cotton</li><li>Traditional kawung pattern</li><li>Hand-stamped batik cap</li><li>2.5 meters length</li></ul>",
    price: "178.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=800&h=1067&fit=crop",
    ],
    category: "sarong",
    badge: "Bestseller",
    variants: [
      { id: "sarong-1-one", title: "One Size", price: "178.00", available: true, options: [{ name: "Size", value: "One Size" }] },
    ],
    options: [{ name: "Size", values: ["One Size"] }],
  },
  {
    id: "sarong-2",
    title: "Coastal Batik Sarong - Turquoise",
    handle: "coastal-batik-sarong-turquoise",
    description: "Vibrant turquoise sarong with coastal-inspired batik patterns. Versatile piece that can be worn as a sarong, beach cover-up, or styled as a dress.",
    descriptionHtml: "<p>Vibrant turquoise sarong with coastal-inspired batik patterns. Versatile piece that can be worn as a sarong, beach cover-up, or styled as a dress.</p>",
    price: "148.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1067&fit=crop",
    ],
    category: "sarong",
    badge: "New",
    variants: [
      { id: "sarong-2-one", title: "One Size", price: "148.00", available: true, options: [{ name: "Size", value: "One Size" }] },
    ],
    options: [{ name: "Size", values: ["One Size"] }],
  },
  {
    id: "sarong-3",
    title: "Silk Blend Batik Sarong - Burgundy",
    handle: "silk-blend-batik-sarong-burgundy",
    description: "Luxurious silk-blend sarong in deep burgundy with gold accents. The premium fabric drapes beautifully, making it ideal for formal occasions and evening events.",
    descriptionHtml: "<p>Luxurious silk-blend sarong in deep burgundy with gold accents. The premium fabric drapes beautifully, making it ideal for formal occasions and evening events.</p>",
    price: "228.00",
    currency: "SGD",
    images: [
      "https://images.unsplash.com/photo-1583391733975-4fd8e4b4c9ad?w=800&h=1067&fit=crop",
    ],
    category: "sarong",
    badge: "Popular",
    variants: [
      { id: "sarong-3-one", title: "One Size", price: "228.00", available: true, options: [{ name: "Size", value: "One Size" }] },
    ],
    options: [{ name: "Size", values: ["One Size"] }],
  },
];

// Get all products
export function getDummyProducts(): DummyProduct[] {
  return dummyProducts;
}

// Get products by category
export function getDummyProductsByCategory(category: string): DummyProduct[] {
  if (category === "all") return dummyProducts;
  return dummyProducts.filter((p) => p.category === category);
}

// Get single product by handle
export function getDummyProduct(handle: string): DummyProduct | undefined {
  return dummyProducts.find((p) => p.handle === handle);
}

// Format as Shopify-like structure
export function formatAsShopifyProduct(product: DummyProduct) {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    priceRange: {
      minVariantPrice: {
        amount: product.price,
        currencyCode: product.currency,
      },
    },
    images: {
      edges: product.images.map((url, i) => ({
        node: {
          url,
          altText: `${product.title} - Image ${i + 1}`,
        },
      })),
    },
    variants: {
      edges: product.variants.map((v) => ({
        node: {
          id: v.id,
          title: v.title,
          availableForSale: v.available,
          price: {
            amount: v.price,
            currencyCode: product.currency,
          },
          selectedOptions: v.options,
        },
      })),
    },
    options: product.options,
  };
}
