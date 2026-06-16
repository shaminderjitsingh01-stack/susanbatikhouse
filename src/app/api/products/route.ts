import { NextRequest, NextResponse } from "next/server";
import { getProductsPage, getCollectionProductsPage } from "@/lib/shopify";

// Returns the next page of products (default 100) for a collection handle,
// or for the whole catalog when handle is "all". Used by the "Load more" button.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get("handle") || "all";
  const cursor = searchParams.get("cursor");
  const first = Math.min(Number(searchParams.get("first")) || 100, 250);

  try {
    const page =
      handle === "all"
        ? await getProductsPage(first, cursor)
        : await getCollectionProductsPage(handle, first, cursor);

    return NextResponse.json({
      products: page.products,
      pageInfo: page.pageInfo,
    });
  } catch (error) {
    console.error("/api/products error:", error);
    return NextResponse.json(
      { products: [], pageInfo: { hasNextPage: false, endCursor: null } },
      { status: 500 }
    );
  }
}
