import { getCollections } from "@/lib/shopify";
import CollectionsCarousel from "./CollectionsCarousel";

// Fallback placeholder image
const defaultImage = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop";

export default async function CollectionsCarouselWrapper() {
  let collectionsData: { title: string; handle: string; image: string }[] = [];

  try {
    const shopifyCollections = await getCollections();

    // Use all Shopify collections that have images
    collectionsData = shopifyCollections
      .filter((c) => c.image?.url) // Only include collections with images
      .map((c) => ({
        title: c.title,
        handle: c.handle,
        image: c.image?.url || defaultImage,
      }));

    // If no collections with images, show all collections with fallback image
    if (collectionsData.length === 0) {
      collectionsData = shopifyCollections.map((c) => ({
        title: c.title,
        handle: c.handle,
        image: defaultImage,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    // If Shopify fetch fails completely, show nothing
    collectionsData = [];
  }

  return <CollectionsCarousel collections={collectionsData} />;
}
