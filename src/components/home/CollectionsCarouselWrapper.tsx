import { getCollections } from "@/lib/shopify";
import CollectionsCarousel from "./CollectionsCarousel";

// Fallback images for collections without Shopify images
const fallbackImages: Record<string, string> = {
  "batik-fabric": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "handstamp-batik-fabric": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "hand-draw-batik-fabric": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "ladies-batik-top": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "mens-batik-top": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "ladies-batik-sarong": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "batik-cheongsam": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
  "ladies-batik-pants": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  batik: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  "standard-peranakan-top": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
  "premium-peranakan-top": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
  "kids-peranakan-top": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
  kebaya: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
  "standard-beaded-shoes": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
  "premium-beaded-shoes": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
  shoes: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
  kerosang: "https://images.unsplash.com/photo-1596783074918-c84cb1bd5d44?w=600&h=800&fit=crop",
};

// Order of collections to display
const collectionOrder = [
  "batik-fabric",
  "handstamp-batik-fabric",
  "hand-draw-batik-fabric",
  "ladies-batik-top",
  "mens-batik-top",
  "ladies-batik-sarong",
  "batik-cheongsam",
  "ladies-batik-pants",
  "standard-peranakan-top",
  "premium-peranakan-top",
  "kids-peranakan-top",
  "standard-beaded-shoes",
  "premium-beaded-shoes",
  "kerosang",
];

export default async function CollectionsCarouselWrapper() {
  let collectionsData: { title: string; handle: string; image: string }[] = [];

  try {
    const shopifyCollections = await getCollections();

    // Map Shopify collections to our format
    const collectionsMap = new Map(
      shopifyCollections.map((c) => [c.handle, c])
    );

    // Build collections in order, using Shopify images when available
    collectionsData = collectionOrder
      .map((handle) => {
        const shopifyCollection = collectionsMap.get(handle);
        const fallbackImage = fallbackImages[handle] || fallbackImages["batik-fabric"];

        return {
          title: shopifyCollection?.title || formatTitle(handle),
          handle,
          image: shopifyCollection?.image?.url || fallbackImage,
        };
      });
  } catch {
    // If Shopify fetch fails, use fallback data
    collectionsData = collectionOrder.map((handle) => ({
      title: formatTitle(handle),
      handle,
      image: fallbackImages[handle] || fallbackImages["batik-fabric"],
    }));
  }

  return <CollectionsCarousel collections={collectionsData} />;
}

function formatTitle(handle: string): string {
  return handle
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
