import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/shopify";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: ShopifyProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;

  return (
    <Link href={`/products/${product.handle}`} className="group">
      <div className="relative aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden mb-3">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-stone-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <h3 className="font-medium text-stone-900 group-hover:text-[#dc0e94] transition-colors">
        {product.title}
      </h3>
      <p className="text-[#dc0e94] font-semibold mt-1">
        {formatPrice(price.amount, price.currencyCode)}
      </p>
    </Link>
  );
}
