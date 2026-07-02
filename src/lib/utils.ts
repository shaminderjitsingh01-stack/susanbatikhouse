import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ShopifyProduct } from "./shopify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Single source of truth for stock status across every product surface
// (cards, search, grids). A product is in stock if any variant is purchasable.
// Defaults to true when variant data isn't present so a query that omits
// `availableForSale` never renders a false "Sold Out".
export function isInStock(product: ShopifyProduct): boolean {
  const edges = product.variants?.edges;
  return edges ? edges.some((v) => v.node.availableForSale) : true;
}

export function formatPrice(amount: string, currencyCode: string = "SGD") {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}
