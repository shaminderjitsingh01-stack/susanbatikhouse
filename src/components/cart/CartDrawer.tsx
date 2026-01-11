"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, updateItem, removeItem, isLoading } = useCart();

  if (!isOpen) return null;

  const lines = cart?.lines.edges || [];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-500">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map(({ node: line }) => (
                <div key={line.id} className="flex gap-4 p-3 bg-stone-50 rounded-lg">
                  {/* Product Image */}
                  <div className="relative w-20 h-24 bg-stone-200 rounded overflow-hidden flex-shrink-0">
                    {line.merchandise.product.images.edges[0] && (
                      <Image
                        src={line.merchandise.product.images.edges[0].node.url}
                        alt={line.merchandise.product.images.edges[0].node.altText || line.merchandise.product.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{line.merchandise.product.title}</h3>
                    {line.merchandise.title !== "Default Title" && (
                      <p className="text-xs text-stone-500">{line.merchandise.title}</p>
                    )}
                    <p className="text-sm font-semibold text-[#3EB8A4] mt-1">
                      {formatPrice(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateItem(line.id, line.quantity - 1)}
                        disabled={isLoading}
                        className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center hover:bg-stone-100 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-sm w-8 text-center">{line.quantity}</span>
                      <button
                        onClick={() => updateItem(line.id, line.quantity + 1)}
                        disabled={isLoading}
                        className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center hover:bg-stone-100 disabled:opacity-50"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(line.id)}
                        disabled={isLoading}
                        className="ml-auto text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-[#3EB8A4]">
                {formatPrice(cart?.cost.totalAmount.amount || "0", cart?.cost.totalAmount.currencyCode)}
              </span>
            </div>
            <a
              href={cart?.checkoutUrl}
              className="block w-full py-3 bg-[#3EB8A4] text-white text-center font-medium rounded-lg hover:bg-[#b30c78] transition-colors"
            >
              Checkout
            </a>
            <p className="text-xs text-center text-stone-500">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
