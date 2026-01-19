import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect Shopify cart URLs to homepage
      {
        source: "/cart/:path*",
        destination: "/",
        permanent: false,
      },
      // Redirect any Shopify checkout callbacks to homepage
      {
        source: "/checkouts/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
