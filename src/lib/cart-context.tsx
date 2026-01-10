"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createCart, addToCart, getCart, updateCartLine, removeFromCart, ShopifyCart } from "./shopify";

interface CartContextType {
  cart: ShopifyCart | null;
  isLoading: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initCart = async () => {
      const cartId = localStorage.getItem("cartId");
      if (cartId) {
        try {
          const existingCart = await getCart(cartId);
          if (existingCart) {
            setCart(existingCart);
            return;
          }
        } catch {
          localStorage.removeItem("cartId");
        }
      }
      const newCart = await createCart();
      localStorage.setItem("cartId", newCart.id);
      setCart({ ...newCart, lines: { edges: [] }, cost: { totalAmount: { amount: "0", currencyCode: "SGD" } } });
    };
    initCart();
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = async (variantId: string, quantity: number = 1) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updatedCart = await addToCart(cart.id, variantId, quantity);
      setCart(updatedCart);
      openCart();
    } finally {
      setIsLoading(false);
    }
  };

  const updateItem = async (lineId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      if (quantity === 0) {
        await removeItem(lineId);
        return;
      }
      const updatedCart = await updateCartLine(cart.id, lineId, quantity);
      setCart(updatedCart);
    } finally {
      setIsLoading(false);
    }
  };

  const removeItem = async (lineId: string) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updatedCart = await removeFromCart(cart.id, [lineId]);
      setCart(updatedCart);
    } finally {
      setIsLoading(false);
    }
  };

  const itemCount = cart?.lines.edges.reduce((count, edge) => count + edge.node.quantity, 0) || 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        isOpen,
        openCart,
        closeCart,
        addItem,
        updateItem,
        removeItem,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
