"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#3EB8A4] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center relative">
        <div className="flex items-center gap-2 text-center">
          <span className="hidden sm:inline">✨</span>
          <span>
            <strong>Free Shipping</strong> on orders above $150 |{" "}
            <strong>Visit us</strong> at Chinatown, Singapore
          </span>
          <span className="hidden sm:inline">✨</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-[#3EB8A4] rounded transition-colors"
          aria-label="Close announcement"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
