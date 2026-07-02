import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ShopifyProduct } from "./shopify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// At or below this many units, show an urgent "Only N left" instead of a count.
export const LOW_STOCK_THRESHOLD = 5;

export interface StockInfo {
  inStock: boolean;
  // Total units across variants. null when inventory isn't tracked OR the
  // Storefront token lacks the `unauthenticated_read_product_inventory` scope
  // (quantityAvailable comes back null) — callers fall back to a plain label.
  quantity: number | null;
  low: boolean; // quantity known and at/below LOW_STOCK_THRESHOLD
}

// Single source of truth for stock status across every product surface
// (cards, search, grids). In stock if any variant is purchasable; defaults to
// in-stock when variant data is absent so a query without `availableForSale`
// never renders a false "Sold Out".
export function getStockInfo(product: ShopifyProduct): StockInfo {
  const edges = product.variants?.edges;
  if (!edges) return { inStock: true, quantity: null, low: false };

  const inStock = edges.some((v) => v.node.availableForSale);
  const known = edges
    .map((v) => v.node.quantityAvailable)
    .filter((q): q is number => typeof q === "number");
  const quantity = known.length > 0 ? known.reduce((a, b) => a + b, 0) : null;
  const low = quantity !== null && quantity > 0 && quantity <= LOW_STOCK_THRESHOLD;

  return { inStock, quantity, low };
}

// Back-compat boolean helper.
export function isInStock(product: ShopifyProduct): boolean {
  return getStockInfo(product).inStock;
}

// The label + tone to render for a product's stock status, consistent
// everywhere. Tone maps to color: green = plenty, amber = low, grey = none.
export function stockLabel(product: ShopifyProduct): {
  text: string;
  tone: "in" | "low" | "out";
} {
  const { inStock, quantity } = getStockInfo(product);
  if (!inStock || quantity === 0) return { text: "Sold Out", tone: "out" };
  if (quantity === null) return { text: "In Stock", tone: "in" }; // scope off / untracked
  return { text: `${quantity} in stock`, tone: "in" };
}

export function formatPrice(amount: string, currencyCode: string = "SGD") {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}
