import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: string, currencyCode: string = "SGD") {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}
