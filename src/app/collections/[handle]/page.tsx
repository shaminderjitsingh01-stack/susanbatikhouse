import { getCollection, getProducts, ShopifyProduct } from "@/lib/shopify";
import ProductGrid from "@/components/product/ProductGrid";

interface CollectionPageProps {
  params: Promise<{ handle: string }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;

  let collection = null;
  let products: ShopifyProduct[] = [];

  try {
    if (handle === "all") {
      products = await getProducts(50);
    } else {
      collection = await getCollection(handle);
      products = collection?.products?.edges.map((e) => e.node) || [];
    }
  } catch {
    // Store not connected
  }

  const title = handle === "all" ? "All Products" : collection?.title || formatTitle(handle);
  const description = collection?.description || getDefaultDescription(handle);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-stone-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Products */}
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-[3/4] bg-stone-100 rounded-lg animate-pulse" />
                <div className="h-4 bg-stone-100 rounded animate-pulse" />
                <div className="h-4 bg-stone-100 rounded w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
          <p className="mt-8 text-stone-500">
            Connect your Shopify store to display products.
          </p>
        </div>
      )}
    </div>
  );
}

function formatTitle(handle: string): string {
  return handle
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getDefaultDescription(handle: string): string {
  const descriptions: Record<string, string> = {
    kebaya: "Elegant Nyonya and modern kebaya designs, perfect for special occasions and cultural celebrations.",
    cheongsam: "Traditional and contemporary cheongsam styles, crafted with attention to detail and quality fabrics.",
    "batik-dress": "Beautiful batik dresses featuring authentic patterns and comfortable modern cuts.",
    sarong: "Classic sarong wraps in traditional and contemporary batik prints.",
    all: "Explore our complete collection of traditional and modern wear.",
  };
  return descriptions[handle] || "";
}
